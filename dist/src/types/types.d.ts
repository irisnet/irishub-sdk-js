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
    MsgTokenizeShares = "cosmos.staking.v1beta1.MsgTokenizeShares",
    MsgRedeemTokensForShares = "cosmos.staking.v1beta1.MsgRedeemTokensForShares",
    MsgTransferTokenizeShareRecord = "cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
    MsgDisableTokenizeShares = "cosmos.staking.v1beta1.MsgDisableTokenizeShares",
    MsgEnableTokenizeShares = "cosmos.staking.v1beta1.MsgEnableTokenizeShares",
    MsgValidatorBond = "cosmos.staking.v1beta1.MsgValidatorBond",
    MsgUnbondValidator = "cosmos.staking.v1beta1.MsgUnbondValidator",
    MsgWithdrawDelegatorReward = "cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
    MsgSetWithdrawAddress = "cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
    MsgWithdrawValidatorCommission = "cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
    MsgFundCommunityPool = "cosmos.distribution.v1beta1.MsgFundCommunityPool",
    MsgWithdrawTokenizeShareRecordReward = "cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward",
    MsgWithdrawAllTokenizeShareRecordReward = "cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
    MsgAddLiquidity = "irismod.coinswap.MsgAddLiquidity",
    MsgRemoveLiquidity = "irismod.coinswap.MsgRemoveLiquidity",
    MsgSwapOrder = "irismod.coinswap.MsgSwapOrder",
    MsgStake = "irismod.farm.MsgStake",
    MsgUnstake = "irismod.farm.MsgUnstake",
    MsgHarvest = "irismod.farm.MsgHarvest",
    MsgIssueDenom = "irismod.nft.MsgIssueDenom",
    MsgTransferNFT = "irismod.nft.MsgTransferNFT",
    MsgEditNFT = "irismod.nft.MsgEditNFT",
    MsgMintNFT = "irismod.nft.MsgMintNFT",
    MsgBurnNFT = "irismod.nft.MsgBurnNFT",
    MsgIssueToken = "irismod.token.v1.MsgIssueToken",
    MsgEditToken = "irismod.token.v1.MsgEditToken",
    MsgMintToken = "irismod.token.v1.MsgMintToken",
    MsgBurnToken = "irismod.token.v1.MsgBurnToken",
    MsgTransferTokenOwner = "irismod.token.v1.MsgTransferTokenOwner",
    MsgSwapFeeToken = "irismod.token.v1.MsgSwapFeeToken",
    MsgSwapToERC20 = "irismod.token.v1.MsgSwapToERC20",
    MsgSwapFromERC20 = "irismod.token.v1.MsgSwapFromERC20",
    MsgSubmitProposal = "cosmos.gov.v1beta1.MsgSubmitProposal",
    MsgVote = "cosmos.gov.v1beta1.MsgVote",
    MsgVoteWeighted = "cosmos.gov.v1beta1.MsgVoteWeighted",
    MsgDeposit = "cosmos.gov.v1beta1.MsgDeposit",
    MsgCreateHTLC = "irismod.htlc.MsgCreateHTLC",
    MsgClaimHTLC = "irismod.htlc.MsgClaimHTLC",
    MsgTransfer = "ibc.applications.transfer.v1.MsgTransfer",
    MsgIbcNftTransfer = "ibc.applications.nft_transfer.v1.MsgTransfer",
    MsgUnjail = "cosmos.slashing.v1beta1.MsgUnjail"
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
    codespace?: string;
}
/**
 * JsonRpc Error
 */
export interface JsonRpcError {
    code: number;
    message: string;
    data: string;
    codespace?: string;
}
/**
 * Base Pubkey
 * @hidden
 */
export interface Pubkey {
    type: PubkeyType;
    value: string;
}
/**
 * Base Pubkey Type
 * @hidden
 */
export declare enum PubkeyType {
    secp256k1 = "secp256k1",
    ed25519 = "ed25519",//not implement
    sm2 = "sm2"
}
/** Tag struct */
export interface Tag {
    key: string;
    value: string;
}
/**
 * Bech32 Prefix
 */
export interface Bech32Prefix {
    AccAddr: string;
    AccPub: string;
    ValAddr: string;
    ValPub: string;
    ConsAddr: string;
    ConsPub: string;
}
export interface Pagination {
    page_number?: number;
    page_size?: number;
    count_total?: boolean;
    reverse?: boolean;
    key?: string;
}
