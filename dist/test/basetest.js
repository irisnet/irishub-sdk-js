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
            gas: '100000',
        })
            .withKeyDAO(new TestKeyDAO())
            .withRpcConfig({ timeout: Consts.timeout });
        client.keys.recover(Consts.keyName, Consts.keyPassword, 'balcony reopen dumb battle smile crisp snake truth expose bird thank peasant best opera faint scorpion debate skill ethics fossil dinner village news logic');
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