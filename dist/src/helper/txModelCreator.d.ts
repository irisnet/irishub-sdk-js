import * as types from '../types';
export declare class TxModelCreator {
    static createBodyModel(msgs: types.Msg[], memo: string, timeoutHeight: number): any;
    static createAuthInfoModel(fee: types.StdFee, sequence?: string, publicKey?: string): any;
    static createSignerInfoModel(sequence: string, publicKey: string): any;
    static createPublicKeyModel(publicKey: string): any;
    static createFeeModel(amounts: types.Coin[], gasLimit: string): any;
    static createCoinModel(denom: string, amount: string): any;
    static createAnyModel(typeUrl: string, value: Uint8Array): any;
}
