import { Coin, Msg, TxValue, PubkeyType } from './types';

/** Standard Tx */
export interface StdTx extends TxValue {
  msg: Msg[];
  fee: StdFee;
  signatures: StdSignature[];
  memo: string;
}

/** Standard Fee */
export interface StdFee {
  amount: Coin[];
  gasLimit: string;
}

/** Standard Signature */
export interface StdSignature {
  pub_key?: string;
  signature?: string;

  // To support ibc-alpha
  // account_number: string;
  // sequence: string;
}


/** Base params for the transaction */
export interface BaseTx {
  /** Name of the key */
  from: string;
  /** Password of the key */
  password: string;
  gas?: string | undefined;
  fee?: Coin | undefined;
  memo?: string | undefined;
  /** Account_number required for offline signatures */
  account_number?: number | undefined;
  /** Sequence required for offline signatures */
  sequence?: number | undefined;
  /** chainId required for offline signatures */
  chainId?:string, 
  pubkeyType?: PubkeyType; /** default secp256k1 */
  mode?: BroadcastMode | undefined;
}

/**
 * Broadcast Mode
 * - Sync: Broadcast transactions synchronously and wait for the recipient node to validate the txs
 * - Async: Broadcast transactions asynchronously and returns immediately
 * - Commit: Broadcast transactions and wait until the transactions are included by a block
 */
export enum BroadcastMode {
  Sync = 0,
  Async,
  Commit,
}

/** Standard Msg to sign */
export interface StdSignMsg {
  // To support ibc-alpha
  account_number: string;
  sequence: string;
  chain_id: string;
  fee: StdFee;
  memo: string;
  msgs: object[];
}