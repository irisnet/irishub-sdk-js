// support cosmos-sdk v0.44.x、 irismod 1.5.2、ibc 1.1.0
import * as iris from '../src';
import { Client } from '../src/client';
import { Crypto } from '../src';

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
      node: 'http://34.80.202.172:26657',
      chainNetwork: iris.types.ChainNetwork.Iris,
      chainId: 'nyancat-9',
      gas: '200000',
      fee: { denom: 'unyan', amount: '400000' },
    };

    // let privateKey = '1E120611404C4B1B98FC899A8026A6A9823C35985DA3C5ED3FF57C170C822F60'

    // let config = {
    //     node: 'http://34.80.22.255:26657',
    //     chainId: 'bifrost-1',
    //     gas: '200000',
    //     fee: { denom: 'udev', amount: '5000' },
    // };
    // let privateKey = '06deecd6aeafa4a140470ff3c2a1258263162fb281c09871a337b7198c21d34a'

    const client = iris
      .newClient(config)
      .withKeyDAO(new TestKeyDAO())
      .withRpcConfig({ timeout: Consts.timeout });

    client.keys.recover(
      Consts.keyName,
      Consts.keyPassword,
      'fatigue panther innocent dress person fluid animal raven material embark target spread kiss smile cycle begin rocket pull couple story mass analyst guilt network'
    );

    // let a =  client.keys.importPrivateKey(
    //   Consts.keyName,
    //   Consts.keyPassword,
    //   privateKey,
    //   iris.types.PubkeyType.secp256k1
    // );
    // console.log('aaaaa:', a);
    return client;
  }
}