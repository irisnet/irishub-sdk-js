import * as types from '../types';
export declare class TxModelCreator {
    static createBodyModel(msgs: types.Msg[], memo: string, timeoutHeight: number): any;
    static createAuthInfoModel(fee: types.StdFee, sequence?: number, publicKey?: string | types.Pubkey): any;
    static createSignerInfoModel(sequence: number, publicKey: string | types.Pubkey): any;
    static createPublicKeyModel(publicKey: string | types.Pubkey): {
        type: string;
        value: any;
    };
    static createFeeModel(amounts: types.Coin[], gasLimit: string): any;
    static createCoinModel(denom: string, amount: string): any;
    static createAnyModel(typeUrl: string, value: Uint8Array): any;
}
