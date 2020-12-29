"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultKeyDAOImpl = exports.DefaultClientConfig = exports.Client = void 0;
const consts = require("./types/constants");
const modules = require("./modules");
const rpc_client_1 = require("./nets/rpc-client");
const event_listener_1 = require("./nets/event-listener");
const types = require("./types");
const errors_1 = require("./errors");
const AES = require("crypto-js/aes");
const ENC = require("crypto-js/enc-utf8");
/** IRISHub Client */
class Client {
    /** IRISHub SDK Constructor */
    constructor(config) {
        this.config = config;
        if (!this.config.rpcConfig)
            this.config.rpcConfig = {};
        this.config.bech32Prefix =
            config.network === consts.Network.Mainnet
                ? {
                    AccAddr: 'iaa',
                    AccPub: 'iap',
                    ValAddr: 'iva',
                    ValPub: 'ivp',
                    ConsAddr: 'ica',
                    ConsPub: 'icp',
                }
                : {
                    AccAddr: 'faa',
                    AccPub: 'fap',
                    ValAddr: 'fva',
                    ValPub: 'fvp',
                    ConsAddr: 'fca',
                    ConsPub: 'fcp',
                };
        // Support ibc-alpha
        // {
        //   AccAddr: 'cosmos',
        //   AccPub: 'cosmospub',
        //   ValAddr: 'cosmosvaloper',
        //   ValPub: 'cosmosvaloperpub',
        //   ConsAddr: 'cosmosvalcons',
        //   ConsPub: 'cosmosvalconspub',
        // };
        this.config.rpcConfig.baseURL = this.config.node;
        this.rpcClient = new rpc_client_1.RpcClient(this.config.rpcConfig);
        this.eventListener = new event_listener_1.EventListener(this);
        // Modules
        this.token = new modules.Token(this);
        this.utils = new modules.Utils(this);
        this.bank = new modules.Bank(this);
        this.keys = new modules.Keys(this);
        this.tx = new modules.Tx(this);
        this.protobuf = new modules.Protobuf(this);
        this.staking = new modules.Staking(this);
        this.gov = new modules.Gov(this);
        this.slashing = new modules.Slashing(this);
        this.distribution = new modules.Distribution(this);
        this.service = new modules.Service(this);
        this.oracle = new modules.Oracle(this);
        this.random = new modules.Random(this);
        this.auth = new modules.Auth(this);
        this.tendermint = new modules.Tendermint(this);
        this.coinswap = new modules.Coinswap(this);
        this.contract = new modules.Contract(this);
        this.nft = new modules.Nft(this);
        // Set default encrypt/decrypt methods
        if (!this.config.keyDAO.encrypt || !this.config.keyDAO.decrypt) {
            const defaultKeyDAO = new DefaultKeyDAOImpl();
            this.config.keyDAO.encrypt = defaultKeyDAO.encrypt;
            this.config.keyDAO.decrypt = defaultKeyDAO.decrypt;
        }
    }
    /**
     * Set Key DAO Implemention
     *
     * @param keyDAO Key DAO Implemention
     * @returns The SDK itself
     */
    withKeyDAO(keyDAO) {
        // Set default encrypt/decrypt methods
        if (!keyDAO.encrypt || !keyDAO.decrypt) {
            const defaultKeyDAO = new DefaultKeyDAOImpl();
            keyDAO.encrypt = defaultKeyDAO.encrypt;
            keyDAO.decrypt = defaultKeyDAO.decrypt;
        }
        this.config.keyDAO = keyDAO;
        return this;
    }
    /**
     * Set IRISHub network type
     *
     * @param network IRISHub network type, mainnet / testnet
     * @returns The SDK itself
     */
    withNetwork(network) {
        this.config.network = network;
        return this;
    }
    /**
     * Set IRISHub chain-id
     *
     * @param chainId IRISHub chain-id
     * @returns The SDK itself
     */
    withChainId(chainId) {
        this.config.chainId = chainId;
        return this;
    }
    /**
     * Set default gas limit
     *
     * @param gas Default gas limit
     * @returns The SDK itself
     */
    withGas(gas) {
        this.config.gas = gas;
        return this;
    }
    /**
     * Set default fees
     *
     * @param fee Default fee amount
     * @returns The SDK itself
     */
    withFee(fee) {
        this.config.fee = fee;
        return this;
    }
    /**
     * Set Axios config for tendermint rpc requests, refer to: https://github.com/axios/axios#request-config.
     *
     * Note the `baseURL` is set by `SdkConfig.node` and cannot be overwritten by this config
     *
     * @param rpcConfig Axios config for tendermint rpc requests
     * @returns The SDK itself
     */
    withRpcConfig(rpcConfig) {
        rpcConfig.baseURL = this.config.node;
        this.config.rpcConfig = rpcConfig;
        this.rpcClient = new rpc_client_1.RpcClient(this.config.rpcConfig);
        return this;
    }
}
exports.Client = Client;
/** Default IRISHub Client Config */
class DefaultClientConfig {
    constructor() {
        this.node = '';
        this.network = types.Network.Mainnet;
        this.chainId = 'irishub';
        this.gas = '100000';
        this.fee = { amount: '0.6', denom: 'iris' };
        this.keyDAO = new DefaultKeyDAOImpl();
        this.bech32Prefix = {};
        this.rpcConfig = { timeout: 2000 };
    }
}
exports.DefaultClientConfig = DefaultClientConfig;
class DefaultKeyDAOImpl {
    write(name, key) {
        throw new errors_1.SdkError('Method not implemented. Please implement KeyDAO first.');
    }
    read(name) {
        throw new errors_1.SdkError('Method not implemented. Please implement KeyDAO first.');
    }
    delete(name) {
        throw new errors_1.SdkError('Method not implemented. Please implement KeyDAO first.');
    }
    encrypt(privKey, password) {
        const encrypted = AES.encrypt(privKey, password).toString();
        if (!encrypted) {
            throw new errors_1.SdkError('Private key encrypt failed');
        }
        return encrypted;
    }
    decrypt(encrptedPrivKey, password) {
        const decrypted = AES.decrypt(encrptedPrivKey, password).toString(ENC);
        if (!decrypted) {
            throw new errors_1.SdkError('Wrong password');
        }
        return decrypted;
    }
}
exports.DefaultKeyDAOImpl = DefaultKeyDAOImpl;
//# sourceMappingURL=client.js.map