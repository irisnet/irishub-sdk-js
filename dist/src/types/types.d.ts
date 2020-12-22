/**
 * Base Msg
 * @hidden
 */
export declare class Msg {
    type: string;
    value: any;
    constructor(type: string);
    static getModelClass(): any;
    getModel(): any;
    pack(): any;
    /**
     * unpack protobuf tx message
     * @type {[type]}
     * returns protobuf message instance
     */
    unpack(msgValue: string): any;
}
export declare enum TxType {
    MsgSend = "cosmos.bank.v1beta1.MsgSend",
    MsgMultiSend = "cosmos.bank.v1beta1.MsgMultiSend",
    MsgDelegate = "cosmos.staking.v1beta1.MsgDelegate",
    MsgUndelegate = "cosmos.staking.v1beta1.MsgUndelegate",
    MsgBeginRedelegate = "cosmos.staking.v1beta1.MsgBeginRedelegate",
    MsgWithdrawDelegatorReward = "cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
    MsgSetWithdrawAddress = "cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
    MsgWithdrawValidatorCommission = "cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
    MsgFundCommunityPool = "cosmos.distribution.v1beta1.MsgFundCommunityPool",
    MsgAddLiquidity = "irismod.coinswap.MsgAddLiquidity",
    MsgRemoveLiquidity = "irismod.coinswap.MsgRemoveLiquidity",
    MsgSwapOrder = "irismod.coinswap.MsgSwapOrder",
    MsgIssueDenom = "irismod.nft.MsgIssueDenom",
    MsgTransferNFT = "irismod.nft.MsgTransferNFT",
    MsgEditNFT = "irismod.nft.MsgEditNFT",
    MsgMintNFT = "irismod.nft.MsgMintNFT",
    MsgBurnNFT = "irismod.nft.MsgBurnNFT",
    MsgIssueToken = "irismod.token.MsgIssueToken",
    MsgEditToken = "irismod.token.MsgEditToken",
    MsgMintToken = "irismod.token.MsgMintToken",
    MsgTransferTokenOwner = "irismod.token.MsgTransferTokenOwner"
}
/**
 * Base Tx
 * @hidden
 */
export interface Tx<T extends TxValue> {
    type: string;
    value: T;
}
/** Abstract Tx Value */
export interface TxValue {
}
/**
 * Base Coin
 * @hidden
 */
export interface Coin {
    denom: string;
    amount: string;
}
/**
 * Base JSONRPCResponse
 * @hidden
 */
export interface JSONRPCResponse<T> {
    jsonrpc: string;
    id: string;
    error: JsonRpcError;
    result: T;
}
/**
 * JsonRpc Error
 */
export interface JsonRpcError {
    code: number;
    message: string;
    data: string;
}
/**
 * Base Pubkey
 * @hidden
 */
export interface Pubkey {
    type: string;
    value: string;
}
/** Tag struct */
export interface Tag {
    key: string;
    value: string;
}
