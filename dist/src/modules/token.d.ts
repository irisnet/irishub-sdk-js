import { Client } from '../client';
import * as types from '../types';
/**
 * IRISHub allows individuals and companies to create and issue their own tokens.
 *
 * [More Details](https://www.irisnet.org/docs/features/asset.html)
 *
 * @category Modules
 * @since v0.17
 */
export declare class Token {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * issue a new token
     * @param IssueTokenTxParam
     * @returns
     */
    issueToken(token: {
        symbol: string;
        name: string;
        min_unit: string;
        scale?: number;
        initial_supply?: number;
        max_supply?: number;
        mintable?: boolean;
    }, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * edit a token existed
     * @param EditTokenTxParam
     * @returns
     */
    editToken(token: {
        symbol: string;
        name?: string;
        max_supply?: number;
        mintable?: string;
    }, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * mint some amount of token
     * @param MintTokenTxParam
     * @returns
     */
    mintToken(token: {
        coin: types.Coin;
        owner?: string;
        to?: string;
    }, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * burn some amount of token
     * @param BurnTokenTxParam
     * @returns
     */
    burnToken(coin: types.Coin, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * transfer owner of token
     * @param TransferTokenOwnerTxParam
     * @returns
     */
    transferTokenOwner(token: {
        symbol: string;
        dst_owner: string;
    }, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Swap Fee Token
     * @param SwapFeeTokenTxParam
     * @returns
     */
    swapFeeToken(msg: {
        fee_paid: types.Coin;
        recipient?: string;
    }, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * @wapping some native token to its ERC20
     * @param receiver
     * @param baseTx
     * @returns
     */
    SwapToERC20(msg: {
        amount: types.Coin;
        receiver: string;
    }, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Swapping some ERC20 token to its native
     * @param receiver
     * @param baseTx
     * @returns
     */
    SwapFromERC20(msg: {
        wanted_amount: types.Coin;
        receiver: string;
    }, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Query all tokens
     * @param owner The optional token owner address
     * @returns Token[]
     */
    queryTokens(owner?: string): Promise<types.Token[]>;
    /**
     * Query details of a group of tokens
     * @param denom symbol of token
     * @returns
     * @since
     */
    queryToken(denom: string): Promise<types.Token | null>;
    /**
     * Query the token related fees
     * @param symbol The token symbol
     * @returns
     * @since
     */
    queryFees(symbol: string): Promise<types.TokenFees | null>;
    /**
     * Query parameters of token tx
     * @param null
     * @returns
     * @since
     */
    queryParameters(): Promise<object>;
    /**
     * TotalBurn queries all the burnt coins
     * @param null
     * @returns
     * @since v3.4.0
     */
    queryTotalBurn(): Promise<{
        burned_coins: types.Coin[];
    }>;
    /**
     * Balances queries the balance of the specified token (including erc20 balance)
     * @param denom
     * @param address
     * @returns
     * @since v3.4.0
     */
    queryBalances(denom: string, address: string): Promise<{
        balances: types.Coin[];
    }>;
}
