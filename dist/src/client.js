import * as consts from './types/constants';
import * as modules from './modules';
import { RpcClient } from './nets/rpc-client';
import * as types from './types';
import { SdkError, CODES } from './errors';
import * as AES from 'crypto-js/aes';
import * as ENC from 'crypto-js/enc-utf8';
/** IRISHub Client */
export class Client {
    /** IRISHub SDK Constructor */
    constructor(config) {
        this.config = config;
        if (!this.config.rpcConfig)
            this.config.rpcConfig = {};
        if (!this.config.bech32Prefix || !this.config.bech32Prefix.AccAddr) {
            switch (this.config.chainNetwork) {
                case consts.ChainNetwork.Cosmos:
                    this.config.bech32Prefix = types.Bech32Prefix_Cosmos;
                    break;
                case consts.ChainNetwork.Akash:
                    this.config.bech32Prefix = types.Bech32Prefix_Akash;
                    break;
                case consts.ChainNetwork.Iris:
                default:
                    this.config.bech32Prefix = types.Bech32Prefix_Iris;
                    break;
            }
        }
        this.config.rpcConfig.baseURL = this.config.node;
        // Set default encrypt/decrypt methods
        if (!this.config.keyDAO.encrypt || !this.config.keyDAO.decrypt) {
            const defaultKeyDAO = new DefaultKeyDAOImpl();
            this.config.keyDAO.encrypt = defaultKeyDAO.encrypt;
            this.config.keyDAO.decrypt = defaultKeyDAO.decrypt;
        }
    }
    get rpcClient() {
        if (!this._rpcClient) {
            this._rpcClient = new RpcClient(this.config.rpcConfig);
        }
        return this._rpcClient;
    }
    get auth() {
        if (!this._auth) {
            this._auth = new modules.Auth(this);
        }
        return this._auth;
    }
    get token() {
        if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
            throw new SdkError('This module is not supported on the current chain network.', CODES.Panic);
        }
        if (!this._token) {
            this._token = new modules.Token(this);
        }
        return this._token;
    }
    get bank() {
        if (!this._bank) {
            this._bank = new modules.Bank(this);
        }
        return this._bank;
    }
    get keys() {
        if (!this._keys) {
            this._keys = new modules.Keys(this);
        }
        return this._keys;
    }
    get protobuf() {
        if (!this._protobuf) {
            this._protobuf = new modules.Protobuf(this);
        }
        return this._protobuf;
    }
    get staking() {
        if (!this._staking) {
            this._staking = new modules.Staking(this);
        }
        return this._staking;
    }
    get tx() {
        if (!this._tx) {
            this._tx = new modules.Tx(this);
        }
        return this._tx;
    }
    get gov() {
        if (!this._gov) {
            this._gov = new modules.Gov(this);
        }
        return this._gov;
    }
    get slashing() {
        if (!this._slashing) {
            this._slashing = new modules.Slashing(this);
        }
        return this._slashing;
    }
    get distribution() {
        if (!this._distribution) {
            this._distribution = new modules.Distribution(this);
        }
        return this._distribution;
    }
    get utils() {
        if (!this._utils) {
            this._utils = new modules.Utils(this);
        }
        return this._utils;
    }
    get tendermint() {
        if (!this._tendermint) {
            this._tendermint = new modules.Tendermint(this);
        }
        return this._tendermint;
    }
    get coinswap() {
        if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
            throw new SdkError('This module is not supported on the current chain network.', CODES.Panic);
        }
        if (!this._coinswap) {
            this._coinswap = new modules.Coinswap(this);
        }
        return this._coinswap;
    }
    get farm() {
        if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
            throw new SdkError('This module is not supported on the current chain network.', CODES.Panic);
        }
        if (!this._farm) {
            this._farm = new modules.Farm(this);
        }
        return this._farm;
    }
    get nft() {
        if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
            throw new SdkError('This module is not supported on the current chain network.', CODES.Panic);
        }
        if (!this._nft) {
            this._nft = new modules.Nft(this);
        }
        return this._nft;
    }
    get htlc() {
        if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
            throw new SdkError('This module is not supported on the current chain network.', CODES.Panic);
        }
        if (!this._htlc) {
            this._htlc = new modules.Htlc(this);
        }
        return this._htlc;
    }
    get ibc() {
        if (!this._ibc) {
            this._ibc = new modules.Ibc(this);
        }
        return this._ibc;
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
     * Set IRISHub network type
     *
     * @param network IRISHub network type, mainnet / testnet
     * @returns The SDK itself
     */
    withChainNetwork(chainNetwork) {
        this.config.chainNetwork = chainNetwork;
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
        this._rpcClient = new RpcClient(this.config.rpcConfig);
        return this;
    }
}
/** Default IRISHub Client Config */
export class DefaultClientConfig {
    constructor() {
        this.node = '';
        this.network = types.Network.Mainnet;
        this.chainNetwork = types.ChainNetwork.Iris;
        this.chainId = '';
        this.gas = '100000';
        this.fee = { amount: '', denom: '' };
        this.keyDAO = new DefaultKeyDAOImpl();
        this.bech32Prefix = {};
        this.rpcConfig = { timeout: 2000 };
    }
}
export class DefaultKeyDAOImpl {
    write(name, key) {
        throw new SdkError('Method not implemented. Please implement KeyDAO first.', CODES.Panic);
    }
    read(name) {
        throw new SdkError('Method not implemented. Please implement KeyDAO first.', CODES.Panic);
    }
    delete(name) {
        throw new SdkError('Method not implemented. Please implement KeyDAO first.', CODES.Panic);
    }
    encrypt(privKey, password) {
        const encrypted = AES.encrypt(privKey, password).toString();
        if (!encrypted) {
            throw new SdkError('Private key encrypt failed', CODES.Internal);
        }
        return encrypted;
    }
    decrypt(encrptedPrivKey, password) {
        let decrypted;
        try {
            decrypted = AES.decrypt(encrptedPrivKey, password).toString(ENC);
            if (!decrypted) {
                throw new SdkError('Wrong password', CODES.InvalidPassword);
            }
        }
        catch (e) {
            throw new SdkError('Wrong password', CODES.InvalidPassword);
        }
        return decrypted;
    }
}
//# sourceMappingURL=client.js.map