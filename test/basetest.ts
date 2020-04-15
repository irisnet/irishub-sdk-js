import * as iris from '../src';
import * as types from '../src/types';
import { Client } from '../src/client';

export class Consts {
  static timeout = 10000;
  static keyName = 'name';
  static keyPassword = 'password';
}

/** Test KeyDAO */
export class TestKeyDAO implements iris.KeyDAO {
  keyMap: { [key: string]: types.Key } = {};
  write(name: string, key: types.Key) {
    this.keyMap[name] = key;
  }
  read(name: string): types.Key {
    return this.keyMap[name];
  }
  delete(name: string) {
    delete this.keyMap[name];
  }
}

export class BaseTest {
  static baseTx: types.BaseTx = {
    from: Consts.keyName,
    password: Consts.keyPassword,
    mode: types.BroadcastMode.Commit,
    fee: { amount: '1', denom: 'iris' }
  };
  static testTx: types.BaseTx = {
    from: "node0",
    password: "12345678",
    mode: types.BroadcastMode.Commit
  }
  static getClient(): Client {
    const client = iris
      .newClient({
        node: 'http://localhost:26657',
        network: iris.Network.Testnet,
        chainId: 'test',
        gas: '100000',
      })
      .withKeyDAO(new TestKeyDAO())
      .withRpcConfig({ timeout: Consts.timeout });

    client.keys.recover(
      Consts.keyName,
      Consts.keyPassword,
      'balcony reopen dumb battle smile crisp snake truth expose bird thank peasant best opera faint scorpion debate skill ethics fossil dinner village news logic'
    );
    return client;
  }
  static getDevClient(): Client{
    const client = iris.newClient({
      node: 'http://irisnet-rpc.dev.rainbow.one',
      network: iris.Network.Testnet,
      chainId: 'rainbow-dev',
      gas: '100000'
    }).withKeyDAO(new TestKeyDAO())
    .withRpcConfig({timeout: Consts.timeout});
    client.keys.recover(this.testTx.from, this.testTx.password,
        'razor educate ostrich pave permit comic collect square believe decade scan day frozen language make winter lyrics spice dawn deliver jaguar arrest decline success');
    return client;
  }
  static getQaClient(): Client{
    const client = iris.newClient({
      node: 'http://irisnet-rpc.qa.rainbow.one',
      network: iris.Network.Testnet,
      chainId: 'rainbow-qa',
      gas: '100000'
    }).withKeyDAO(new TestKeyDAO())
        .withRpcConfig({timeout: Consts.timeout});
    client.keys.recover(this.testTx.from, this.testTx.password,
        'arrow ignore inquiry lottery high ship crash leopard liar example never oval final fancy resist nuclear trip novel poem fine odor soccer bus lumber');
    return client;
  }
}
