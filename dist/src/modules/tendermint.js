"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tendermint = void 0;
const types_1 = require("../types");
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
                    decodedTxs.push(this.client.protobuf.deserializeTx(msg));
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
            res.tx = this.client.protobuf.deserializeTx(res.tx);
            return res;
        });
    }
    /**
     * Query validator set at a certain height or the latest height
     * @param height The block height
     * @returns
     * @since v0.17
     */
    queryValidators(height, page, size) {
        const params = {};
        if (height) {
            params.height = String(height);
        }
        if (page) {
            params.page = String(page);
        }
        if (size) {
            params.per_page = String(size);
        }
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
                    const bech32Pubkey = utils_1.Crypto.encodeAddress(utils_1.Crypto.aminoMarshalPubKey(v.pub_key, false), this.client.config.bech32Prefix.ConsPub);
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
                    tx.tx = this.client.protobuf.deserializeTx(tx.tx);
                    txs.push(tx);
                });
                res.txs = txs;
            }
            return res;
        });
    }
    /**
     * query Net Info
     *
     * @returns
     * @since v0.17
     */
    queryNetInfo() {
        return this.client.rpcClient.request(types_1.RpcMethods.NetInfo, {});
    }
}
exports.Tendermint = Tendermint;
//# sourceMappingURL=tendermint.js.map