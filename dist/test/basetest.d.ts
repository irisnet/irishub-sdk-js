import * as iris from '../src';
import * as types from '../src/types';
import { Client } from '../src/client';
export declare class Consts {
    static timeout: number;
    static keyName: string;
    static keyPassword: string;
}
/** Test KeyDAO */
export declare class TestKeyDAO implements iris.KeyDAO {
    keyMap: {
        [key: string]: types.Key;
    };
    write(name: string, key: types.Key): void;
    read(name: string): types.Key;
    delete(name: string): void;
}
export declare class BaseTest {
    static baseTx: types.BaseTx;
    static getClient(): Client;
}
