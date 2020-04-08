"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iris = require("../src");
const types = require("../src/types");
class Consts {
}
exports.Consts = Consts;
Consts.timeout = 10000;
Consts.keyName = 'name';
Consts.keyPassword = 'password';
/** Test KeyDAO */
class TestKeyDAO {
    constructor() {
        this.keyMap = {};
    }
    write(name, key) {
        this.keyMap[name] = key;
    }
    read(name) {
        return this.keyMap[name];
    }
    delete(name) {
        delete this.keyMap[name];
    }
}
exports.TestKeyDAO = TestKeyDAO;
class BaseTest {
    static getClient() {
        const client = iris
            .newClient({
            node: 'http://localhost:26657',
            network: iris.Network.Testnet,
            chainId: 'test',
            gas: '200000',
            fee: { denom: 'stake', amount: '1' },
        })
            .withKeyDAO(new TestKeyDAO())
            .withRpcConfig({ timeout: Consts.timeout });
        client.keys.recover(Consts.keyName, Consts.keyPassword, 'song nothing pole rough coffee marble sure october faculty kiss ahead act design dawn erase trick safe replace company version review dune width adult');
        return client;
    }
}
exports.BaseTest = BaseTest;
BaseTest.baseTx = {
    from: Consts.keyName,
    password: Consts.keyPassword,
    mode: types.BroadcastMode.Commit,
};
//# sourceMappingURL=basetest.js.map