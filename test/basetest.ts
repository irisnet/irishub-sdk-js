// support cosmos-sdk v0.44.x、 irismod 1.5.2、ibc 1.1.0
import * as iris from '../src';
import { Client } from '../src/client';

export class Consts {
  static timeout = 10000;
  static keyName = 'name';
  static keyPassword = 'password';
}

/** Test KeyDAO */
export class TestKeyDAO implements iris.KeyDAO {
  keyMap: { [key: string]: iris.types.Wallet } = {};
  write(name: string, key: iris.types.Wallet) {
    this.keyMap[name] = key;
  }
  read(name: string): iris.types.Wallet {
    return this.keyMap[name];
  }
  delete(name: string) {
    delete this.keyMap[name];
  }
}

export class BaseTest {
  static baseTx: iris.types.BaseTx = {
    from: Consts.keyName,
    password: Consts.keyPassword,
    mode: iris.types.BroadcastMode.Commit,
    // pubkeyType: iris.types.PubkeyType.sm2
  };

  static getClient(): Client {
    let config = {
      node: '{NODE RPC}',
      chainNetwork: iris.types.ChainNetwork.Iris,
      chainId: '{Chain ID}',
      gas: '20000000',
      fee: { denom: '{Denom}', amount: '200' },
    };

    const client = iris
      .newClient(config)
      .withKeyDAO(new TestKeyDAO())
      .withRpcConfig({ timeout: Consts.timeout });

    const mnemonic = '{Your Mnemonic}';
    client.keys.recover(
      Consts.keyName,
      Consts.keyPassword,
      mnemonic
    );

    // const privateKey = '{privateKey}'
    // client.keys.importPrivateKey(
    //   Consts.keyName,
    //   Consts.keyPassword,
    //   privateKey,
    //   types.PubkeyType.sm2
    // );
    return client;
  }
}