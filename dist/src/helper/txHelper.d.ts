/// <reference types="node" />
export declare class TxHelper {
    static getHexPubkey(pubkey: string): string;
    static isSignDoc(signDoc: any): boolean;
    static isAny(value: any): boolean;
    static ecodeModelAddress(address: string): Buffer;
}
