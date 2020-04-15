import { Client } from '../client';
import * as types from '../types';
import {Crypto} from "../utils/crypto";
import {SdkError} from "../errors";
import {MsgClaimHTLC, MsgCreateHTLC, MsgRefundHTLC} from "../types/htlc";
import {Utils} from "../utils";
const is = require("is_js");

class Consts {
  static readonly SecretLength                    = 32    // the length for the secret
  static readonly HashLockLength                  = 32    // the length for the hash lock
  static readonly MaxLengthForAddressOnOtherChain = 128   // maximal length for the address on other chains
  static readonly MinTimeLock                     = 50    // minimal time span for HTLC
  static readonly MaxTimeLock                     = 25480 // maximal time span for HTLC
}

export class Htlc {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Query details of an Htlc
   * @param hashLock hash lock
   * @returns { promise<types.queryHTCLResult>}
   */
  queryHTLC(hashLock: string): Promise<types.queryHTLCResult> {
    return this.client.rpcClient.abciQuery<types.queryHTLCResult>(
        'custom/htlc/htlc',
        {
          HashLock: Buffer.from(hashLock, 'hex').toString('base64')
        }
    ).then(res => {
      res.secret = Buffer.from(res.secret, 'base64').toString('hex')
      return res
    })
  }

  /**
   * Claim an opened Htlc
   */
  async claim(
      baseTx: types.BaseTx,
      hashLock: string,
      secret: string
  ): Promise<types.ResultBroadcastTx> {
    secret = Buffer.from(secret, 'hex').toString('base64')
    hashLock = Buffer.from(hashLock, 'hex').toString('base64')
    const msgs: types.Msg[] = [
        new MsgClaimHTLC(this.client.keys.show(baseTx.from), secret, hashLock)
    ]
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Create an Htlc
   * @param
   * @returns { Promise<types.ResultBroadcastTx> }
   */
  async create(
      baseTx: types.BaseTx,
      to: string,
      receiverOnOtherChain: string,
      amount: types.Coin[],
      secret: string,
      lockTime: string,
      hashLock: string,
      timestamp?: string,
  ): Promise<types.CreateHTLCResult> {
    if (!Crypto.checkAddress(to, this.client.config.bech32Prefix.AccAddr)) {
      throw new SdkError('Invalid bech32 address, prefix of address should be: ' + this.client.config.bech32Prefix.AccAddr);
    }
    if (!is.empty(secret) && secret.length != Consts.SecretLength * 2) {
      throw new SdkError(`the secret must be ${Consts.SecretLength} bytes long`)
    }
    let ts: number = parseInt(timestamp + '')
    if (isNaN(ts)) timestamp = '0'
    if (is.empty(hashLock)) {
      if(is.empty(secret)) {
        secret = Buffer.of(...Array.from({length: Consts.SecretLength}, () => Math.round(Math.random() * 255))).toString('hex');
      }
      if (!isNaN(ts) && ts > 0) {
        let hex: string = ts.toString(16);
        secret += Array(16 - hex.length + 1).join('0') + hex
      }
      hashLock = Buffer.from(Utils.sha256(secret), 'hex').toString('base64')
    } else {
      hashLock = Buffer.from(hashLock, 'hex').toString('base64')
    }
    const from = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgCreateHTLC(from, to, receiverOnOtherChain, amount, lockTime, hashLock, timestamp + '')
    ];
    return this.client.tx.buildAndSend(msgs, baseTx).then(res => {
      let result: types.CreateHTLCResult = res
      result.secret = secret
      result.hashLock = Buffer.from(hashLock, 'base64').toString('hex')
      return result
    });
  }

  /**
   * Refund from an expired Htlc
   */
  async refund(
      baseTx: types.BaseTx,
      hashLock: string
  ): Promise<types.ResultBroadcastTx> {
    hashLock = Buffer.from(hashLock, 'hex').toString('base64')
    const msgs: types.Msg[] = [
        new MsgRefundHTLC(this.client.keys.show(baseTx.from), hashLock)
    ]
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

}
