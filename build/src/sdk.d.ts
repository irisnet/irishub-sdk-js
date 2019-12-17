import * as consts from './constants';
export declare class Sdk {
    node: string;
    network: consts.Network;
    chainId: string;
    gas: number;
    fee: string;
    keyDAO: KeyDAO;
    constructor(node: string);
    withKeyDAO(keyDAO: KeyDAO): this;
    withNetwork(network: consts.Network): this;
    withChainId(chainId: string): this;
    withGas(gas: number): this;
    withFee(fee: string): this;
}
export interface KeyDAO {
    save(): boolean;
    read(): string;
}
