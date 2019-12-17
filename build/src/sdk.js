"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts = require("./constants");
// IRISHub SDK
class Sdk {
    constructor(node) {
        this.node = node;
        this.network = consts.Consts.defaultNetwork;
        this.chainId = consts.Consts.defaultChainId;
        this.gas = consts.Consts.defaultGas;
        this.fee = consts.Consts.defaultFees;
        this.keyDAO = new DefaultKeyDAOImpl();
    }
    withKeyDAO(keyDAO) {
        this.keyDAO = keyDAO;
        return this;
    }
    withNetwork(network) {
        this.network = network;
        return this;
    }
    withChainId(chainId) {
        this.chainId = chainId;
        return this;
    }
    withGas(gas) {
        this.gas = gas;
        return this;
    }
    withFee(fee) {
        this.fee = fee;
        return this;
    }
}
exports.Sdk = Sdk;
class DefaultKeyDAOImpl {
    save() {
        throw new Error('Method not implemented.');
    }
    read() {
        throw new Error('Method not implemented.');
    }
}
//# sourceMappingURL=sdk.js.map