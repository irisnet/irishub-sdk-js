"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultKeyDAOImpl = exports.DefaultClientConfig = exports.Client = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var consts = _interopRequireWildcard(require("./types/constants"));

var modules = _interopRequireWildcard(require("./modules"));

var _rpcClient = require("./nets/rpc-client");

var _eventListener = require("./nets/event-listener");

var types = _interopRequireWildcard(require("./types"));

var _errors = require("./errors");

var AES = _interopRequireWildcard(require("crypto-js/aes"));

var ENC = _interopRequireWildcard(require("crypto-js/enc-utf8"));

/** IRISHub Client */
var Client = /*#__PURE__*/function () {
  /** IRISHub Client Config */

  /** Axios client for tendermint rpc requests */

  /** WebSocket event listener */

  /** Auth module */

  /** Token module */

  /** Bank module */

  /** Key management module */

  /** Protobuf module */

  /** Staking module */

  /** Tx module */

  /** Gov module */

  /** Slashing module */

  /** Distribution module */

  /** Service module */

  /** Oracle module */

  /** Random module */

  /** Utils module */

  /** Tendermint module */

  /** Coinswap module */

  /** NFT module */

  /** IRISHub SDK Constructor */
  function Client(config) {
    (0, _classCallCheck2["default"])(this, Client);
    (0, _defineProperty2["default"])(this, "config", void 0);
    (0, _defineProperty2["default"])(this, "rpcClient", void 0);
    (0, _defineProperty2["default"])(this, "eventListener", void 0);
    (0, _defineProperty2["default"])(this, "auth", void 0);
    (0, _defineProperty2["default"])(this, "token", void 0);
    (0, _defineProperty2["default"])(this, "bank", void 0);
    (0, _defineProperty2["default"])(this, "keys", void 0);
    (0, _defineProperty2["default"])(this, "protobuf", void 0);
    (0, _defineProperty2["default"])(this, "staking", void 0);
    (0, _defineProperty2["default"])(this, "tx", void 0);
    (0, _defineProperty2["default"])(this, "gov", void 0);
    (0, _defineProperty2["default"])(this, "slashing", void 0);
    (0, _defineProperty2["default"])(this, "distribution", void 0);
    (0, _defineProperty2["default"])(this, "service", void 0);
    (0, _defineProperty2["default"])(this, "oracle", void 0);
    (0, _defineProperty2["default"])(this, "random", void 0);
    (0, _defineProperty2["default"])(this, "utils", void 0);
    (0, _defineProperty2["default"])(this, "tendermint", void 0);
    (0, _defineProperty2["default"])(this, "coinswap", void 0);
    (0, _defineProperty2["default"])(this, "nft", void 0);
    this.config = config;
    if (!this.config.rpcConfig) this.config.rpcConfig = {};
    this.config.bech32Prefix = config.network === consts.Network.Mainnet ? {
      AccAddr: 'iaa',
      AccPub: 'iap',
      ValAddr: 'iva',
      ValPub: 'ivp',
      ConsAddr: 'ica',
      ConsPub: 'icp'
    } : {
      AccAddr: 'faa',
      AccPub: 'fap',
      ValAddr: 'fva',
      ValPub: 'fvp',
      ConsAddr: 'fca',
      ConsPub: 'fcp'
    }; // Support ibc-alpha
    // {
    //   AccAddr: 'cosmos',
    //   AccPub: 'cosmospub',
    //   ValAddr: 'cosmosvaloper',
    //   ValPub: 'cosmosvaloperpub',
    //   ConsAddr: 'cosmosvalcons',
    //   ConsPub: 'cosmosvalconspub',
    // };

    this.config.rpcConfig.baseURL = this.config.node;
    this.rpcClient = new _rpcClient.RpcClient(this.config.rpcConfig);
    this.eventListener = new _eventListener.EventListener(this); // Modules

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
    this.nft = new modules.Nft(this); // Set default encrypt/decrypt methods

    if (!this.config.keyDAO.encrypt || !this.config.keyDAO.decrypt) {
      var defaultKeyDAO = new DefaultKeyDAOImpl();
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


  (0, _createClass2["default"])(Client, [{
    key: "withKeyDAO",
    value: function withKeyDAO(keyDAO) {
      // Set default encrypt/decrypt methods
      if (!keyDAO.encrypt || !keyDAO.decrypt) {
        var defaultKeyDAO = new DefaultKeyDAOImpl();
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

  }, {
    key: "withNetwork",
    value: function withNetwork(network) {
      this.config.network = network;
      return this;
    }
    /**
     * Set IRISHub chain-id
     *
     * @param chainId IRISHub chain-id
     * @returns The SDK itself
     */

  }, {
    key: "withChainId",
    value: function withChainId(chainId) {
      this.config.chainId = chainId;
      return this;
    }
    /**
     * Set default gas limit
     *
     * @param gas Default gas limit
     * @returns The SDK itself
     */

  }, {
    key: "withGas",
    value: function withGas(gas) {
      this.config.gas = gas;
      return this;
    }
    /**
     * Set default fees
     *
     * @param fee Default fee amount
     * @returns The SDK itself
     */

  }, {
    key: "withFee",
    value: function withFee(fee) {
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

  }, {
    key: "withRpcConfig",
    value: function withRpcConfig(rpcConfig) {
      rpcConfig.baseURL = this.config.node;
      this.config.rpcConfig = rpcConfig;
      this.rpcClient = new _rpcClient.RpcClient(this.config.rpcConfig);
      return this;
    }
  }]);
  return Client;
}();
/** IRISHub SDK Config */


exports.Client = Client;

/** Default IRISHub Client Config */
var DefaultClientConfig = function DefaultClientConfig() {
  (0, _classCallCheck2["default"])(this, DefaultClientConfig);
  (0, _defineProperty2["default"])(this, "node", void 0);
  (0, _defineProperty2["default"])(this, "network", void 0);
  (0, _defineProperty2["default"])(this, "chainId", void 0);
  (0, _defineProperty2["default"])(this, "gas", void 0);
  (0, _defineProperty2["default"])(this, "fee", void 0);
  (0, _defineProperty2["default"])(this, "keyDAO", void 0);
  (0, _defineProperty2["default"])(this, "bech32Prefix", void 0);
  (0, _defineProperty2["default"])(this, "rpcConfig", void 0);
  this.node = '';
  this.network = types.Network.Mainnet;
  this.chainId = 'irishub';
  this.gas = '100000';
  this.fee = {
    amount: '0.6',
    denom: 'iris'
  };
  this.keyDAO = new DefaultKeyDAOImpl();
  this.bech32Prefix = {};
  this.rpcConfig = {
    timeout: 2000
  };
};
/**
 * Key DAO Interface, to be implemented by apps if they need the key management.
 */


exports.DefaultClientConfig = DefaultClientConfig;

var DefaultKeyDAOImpl = /*#__PURE__*/function () {
  function DefaultKeyDAOImpl() {
    (0, _classCallCheck2["default"])(this, DefaultKeyDAOImpl);
  }

  (0, _createClass2["default"])(DefaultKeyDAOImpl, [{
    key: "write",
    value: function write(name, key) {
      throw new _errors.SdkError('Method not implemented. Please implement KeyDAO first.');
    }
  }, {
    key: "read",
    value: function read(name) {
      throw new _errors.SdkError('Method not implemented. Please implement KeyDAO first.');
    }
  }, {
    key: "delete",
    value: function _delete(name) {
      throw new _errors.SdkError('Method not implemented. Please implement KeyDAO first.');
    }
  }, {
    key: "encrypt",
    value: function encrypt(privKey, password) {
      var encrypted = AES.encrypt(privKey, password).toString();

      if (!encrypted) {
        throw new _errors.SdkError('Private key encrypt failed');
      }

      return encrypted;
    }
  }, {
    key: "decrypt",
    value: function decrypt(encrptedPrivKey, password) {
      var decrypted = AES.decrypt(encrptedPrivKey, password).toString(ENC);

      if (!decrypted) {
        throw new _errors.SdkError('Wrong password');
      }

      return decrypted;
    }
  }]);
  return DefaultKeyDAOImpl;
}();

exports.DefaultKeyDAOImpl = DefaultKeyDAOImpl;