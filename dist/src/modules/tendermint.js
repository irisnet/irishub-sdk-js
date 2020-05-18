"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const amino_js_1 = require("@irisnet/amino-js");
const belt_1 = require("@tendermint/belt");
const utils_1 = require("../utils");
const hexEncoding = require("crypto-js/enc-hex");
const base64Encoding = require("crypto-js/enc-base64");
/**
 * Tendermint module provides tendermint rpc queriers implementation
 *
 * @category Modules
 * @since v0.17
 */
class Tendermint {
    /** @hidden */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a block info at a certain height or the latest height
     * @param height The block height
     * @returns
     * @since v0.17
     */
    queryBlock(height) {
        const params = height ? { height: String(height) } : {};
        return this.client.rpcClient
            .request(types_1.RpcMethods.Block, params)
            .then(res => {
            // Decode txs
            if (res.block && res.block.data && res.block.data.txs) {
                const txs = res.block.data.txs;
                const decodedTxs = new Array();
                txs.forEach(msg => {
                    decodedTxs.push(amino_js_1.unmarshalTx(belt_1.base64ToBytes(msg)));
                });
                res.block.data.txs = decodedTxs;
            }
            return res;
        });
    }
    /**
     * Get a block result at a certain height or the latest height
     * @param height The block height
     * @returns
     * @since v0.17
     */
    queryBlockResult(height) {
        const params = height ? { height: String(height) } : {};
        return this.client.rpcClient
            .request(types_1.RpcMethods.BlockResults, params)
            .then(res => {
            // Decode tags
            if (res.results) {
                const deliverTxs = res.results.DeliverTx;
                if (deliverTxs) {
                    deliverTxs.forEach((deliverTx, index) => {
                        res.results.DeliverTx[index].tags = utils_1.Utils.decodeTags(deliverTx.tags);
                    });
                }
                const endBlock = res.results.EndBlock;
                if (endBlock) {
                    res.results.EndBlock.tags = utils_1.Utils.decodeTags(endBlock.tags);
                }
                const beginBlock = res.results.BeginBlock;
                if (beginBlock) {
                    res.results.BeginBlock.tags = utils_1.Utils.decodeTags(beginBlock.tags);
                }
            }
            return res;
        });
    }
    /**
     * Query tx info by hash
     * @param hash The tx hash
     * @returns
     * @since v0.17
     */
    queryTx(hash) {
        return this.client.rpcClient
            .request(types_1.RpcMethods.Tx, {
            hash: base64Encoding.stringify(hexEncoding.parse(hash)),
        })
            .then(res => {
            // Decode tags and tx
            res.tx_result.tags = utils_1.Utils.decodeTags(res.tx_result.tags);
            res.tx = amino_js_1.unmarshalTx(belt_1.base64ToBytes(res.tx));
            return res;
        });
    }
    /**
     * Query validator set at a certain height or the latest height
     * @param height The block height
     * @returns
     * @since v0.17
     */
    queryValidators(height) {
        const params = height ? { height: String(height) } : {};
        return this.client.rpcClient
            .request(types_1.RpcMethods.Validators, params)
            .then(res => {
            const result = {
                block_height: res.block_height,
                validators: [],
            };
            if (res.validators) {
                res.validators.forEach((v) => {
                    const bech32Address = utils_1.Crypto.encodeAddress(v.address, this.client.config.bech32Prefix.ConsAddr);
                    const bech32Pubkey = utils_1.Crypto.encodeAddress(utils_1.Utils.ab2hexstring(amino_js_1.marshalPubKey(v.pub_key, false)), this.client.config.bech32Prefix.ConsPub);
                    result.validators.push({
                        bech32_address: bech32Address,
                        bech32_pubkey: bech32Pubkey,
                        address: v.address,
                        pub_key: v.pub_key,
                        voting_power: v.voting_power,
                        proposer_priority: v.proposer_priority,
                    });
                });
            }
            return result;
        });
    }
    /**
     * Search txs
     *
     * **Note:** Known issues on pagination
     *
     * @returns
     * @since v0.17
     */
    searchTxs(conditions, page, size) {
        return this.client.rpcClient
            .request(types_1.RpcMethods.TxSearch, {
            query: conditions.build(),
            page,
            per_page: size,
        })
            .then(res => {
            if (res.txs) {
                const txs = [];
                // Decode tags and txs
                res.txs.forEach((tx) => {
                    tx.tx_result.tags = utils_1.Utils.decodeTags(tx.tx_result.tags);
                    tx.tx = amino_js_1.unmarshalTx(belt_1.base64ToBytes(tx.tx));
                    txs.push(tx);
                });
                res.txs = txs;
            }
            return res;
        });
    }
}
exports.Tendermint = Tendermint;
//# sourceMappingURL=tendermint.js.map