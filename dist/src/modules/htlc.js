import { Crypto } from '../utils/crypto';
import * as types from '../types';
import { SdkError } from '../errors';
/**
 * This module implements HTLC related functions
 *
 *
 * @category Modules
 * @since v0.17
 */
export class Htlc {
    /** @hidden */
    constructor(client) {
        this.client = client;
    }
    /**
     * create an HTLC
     * @param {Object} param {
     *  sender
     *  to
     *  receiver_on_other_chain
     *  sender_on_other_chain
     *  amount
     *  hash_lock
     *  timestamp
     *  time_lock
     *  transfer
     *  }
     *  @param baseTx { types.BaseTx }
     */
    createHTLC(param, baseTx) {
        if (!Crypto.checkAddress(param.to, this.client.config.bech32Prefix.AccAddr)) {
            throw new SdkError('Invalid bech32 address');
        }
        const from = this.client.keys.show(baseTx.from);
        const msgs = [
            {
                type: types.TxType.MsgCreateHTLC,
                value: Object.assign({}, param)
            }
        ];
        return this.client.tx.buildAndSend(msgs, baseTx);
    }
    /**
     * claim an HTLC
     * @param sender
     * @param id
     * @param secret
     * @param baseTx
     */
    claimHTLC(sender, id, secret, baseTx) {
        const msgs = [
            {
                type: types.TxType.MsgClaimHTLC,
                value: {
                    sender,
                    id,
                    secret
                }
            }
        ];
        return this.client.tx.buildAndSend(msgs, baseTx);
    }
    /**
     * HTLC queries the HTLC by the specified hash lock
     * @type id
     */
    queryHTLC(id) {
        if (!id) {
            throw new SdkError("id can ont be empty");
        }
        const request = new types.htlc_query_pb.QueryHTLCRequest();
        request.setId(id);
        return this.client.rpcClient.protoQuery('/irismod.htlc.Query/HTLC', request, types.htlc_query_pb.QueryHTLCResponse);
    }
    /**
     * AssetSupply queries the supply of an asset
     * @type denom
     */
    queryAssetSupply(denom) {
        if (!denom) {
            throw new SdkError("denom can ont be empty");
        }
        const request = new types.htlc_query_pb.QueryAssetSupplyRequest();
        request.setDenom(denom);
        return this.client.rpcClient.protoQuery('/irismod.htlc.Query/AssetSupply', request, types.htlc_query_pb.QueryAssetSupplyResponse);
    }
    /**
     * AssetSupplies queries the supplies of all assets
     */
    queryAssetSupplies() {
        const request = new types.htlc_query_pb.QueryAssetSuppliesRequest();
        return this.client.rpcClient.protoQuery('/irismod.htlc.Query/AssetSupplies', request, types.htlc_query_pb.QueryAssetSuppliesResponse);
    }
    /**
     * Params queries the htlc parameters
     */
    queryParams() {
        const request = new types.htlc_query_pb.QueryParamsRequest();
        return this.client.rpcClient.protoQuery('/irismod.htlc.Query/Params', request, types.htlc_query_pb.QueryParamsResponse);
    }
}
//# sourceMappingURL=htlc.js.map