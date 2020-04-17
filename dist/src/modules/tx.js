"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const is = require("is_js");
const types = require("../types");
const errors_1 = require("../errors");
const utils_1 = require("../utils");
const amino_js_1 = require("@irisnet/amino-js");
const belt_1 = require("@tendermint/belt");
/**
 * Tx module allows you to sign or broadcast transactions
 *
 * @category Modules
 * @since v0.17
 */
class Tx {
    /** @hidden */
    constructor(client) {
        this.client = client;
    }
    /**
     * Build, sign and broadcast the msgs
     * @param msgs Msgs to be sent
     * @param baseTx
     * @returns
     * @since v0.17
     */
    buildAndSend(msgs, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            // Build Unsigned Tx
            const unsignedTx = this.client.auth.newStdTx(msgs, baseTx);
            // Not supported in ibc-alpha
            // const fee = await this.client.utils.toMinCoins(unsignedTx.value.fee.amount);
            // unsignedTx.value.fee.amount = fee;
            // Sign Tx
            const signedTx = yield this.sign(unsignedTx, baseTx.from, baseTx.password);
            // Broadcast Tx
            return this.broadcast(signedTx, baseTx.mode);
        });
    }
    /**
     * Broadcast a tx
     * @param signedTx The tx object with signatures
     * @param mode Broadcast mode
     * @returns
     * @since v0.17
     */
    broadcast(signedTx, mode) {
        signedTx = this.marshal(signedTx);
        const txBytes = amino_js_1.marshalTx(signedTx, false);
        switch (mode) {
            case types.BroadcastMode.Commit:
                return this.broadcastTxCommit(txBytes);
            case types.BroadcastMode.Sync:
                return this.broadcastTxSync(txBytes).then(response => {
                    return this.newTxResult(response.hash);
                });
            default:
                return this.broadcastTxAsync(txBytes).then(response => {
                    return this.newTxResult(response.hash);
                });
        }
    }
    /**
     * Single sign a transaction
     *
     * @param stdTx StdTx with no signatures
     * @param name Name of the key to sign the tx
     * @param password Password of the key
     * @param offline Offline signing, default `false`
     * @returns The signed tx
     * @since v0.17
     */
    sign(stdTx, name, password, offline = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (is.empty(name)) {
                throw new errors_1.SdkError(`Name of the key can not be empty`);
            }
            if (is.empty(password)) {
                throw new errors_1.SdkError(`Password of the key can not be empty`);
            }
            if (!this.client.config.keyDAO.decrypt) {
                throw new errors_1.SdkError(`Decrypt method of KeyDAO not implemented`);
            }
            if (is.undefined(stdTx) ||
                is.undefined(stdTx.value) ||
                is.undefined(stdTx.value.msg)) {
                throw new errors_1.SdkError(`Msgs can not be empty`);
            }
            const keyObj = this.client.config.keyDAO.read(name);
            if (!keyObj) {
                throw new errors_1.SdkError(`Key with name '${name}' not found`);
            }
            const msgs = [];
            stdTx.value.msg.forEach(msg => {
                if (msg.getSignBytes) {
                    msgs.push(msg.getSignBytes());
                }
            });
            if (!offline) {
                // Query account info from block chain
                const addr = keyObj.address;
                const account = yield this.client.bank.queryAccount(addr);
                const sigs = [
                    {
                        pub_key: account.public_key,
                        // To support ibc-alpha
                        // account_number: String(account.account_number),
                        // sequence: String(account.sequence),
                        signature: '',
                    },
                ];
                stdTx.value.signatures = sigs;
            }
            // Build msg to sign
            const sig = stdTx.value.signatures[0];
            const signMsg = {
                // To support ibc-alpha
                // account_number: sig.account_number,
                // sequence: sig.sequence,
                chain_id: this.client.config.chainId,
                fee: stdTx.value.fee,
                memo: stdTx.value.memo,
                msgs,
            };
            // Signing
            const privKey = this.client.config.keyDAO.decrypt(keyObj.privKey, password);
            const signature = utils_1.Crypto.generateSignature(utils_1.Utils.str2hexstring(JSON.stringify(utils_1.Utils.sortObject(signMsg))), privKey);
            sig.signature = signature.toString('base64');
            sig.pub_key = utils_1.Crypto.getPublicKeySecp256k1FromPrivateKey(privKey);
            stdTx.value.signatures[0] = sig;
            return stdTx;
        });
    }
    /**
     * Broadcast tx async
     * @param txBytes The tx bytes with signatures
     * @returns
     */
    broadcastTxAsync(txBytes) {
        return this.broadcastTx(txBytes, types.RpcMethods.BroadcastTxAsync);
    }
    /**
     * Broadcast tx sync
     * @param txBytes The tx bytes with signatures
     * @returns The result object of broadcasting
     */
    broadcastTxSync(txBytes) {
        return this.broadcastTx(txBytes, types.RpcMethods.BroadcastTxSync);
    }
    /**
     * Broadcast tx and wait for it to be included in a block.
     * @param txBytes The tx bytes with signatures
     * @returns The result object of broadcasting
     */
    broadcastTxCommit(txBytes) {
        console.error(belt_1.bytesToBase64(txBytes));
        return this.client.rpcClient
            .request(types.RpcMethods.BroadcastTxCommit, {
            tx: belt_1.bytesToBase64(txBytes),
        })
            .then(response => {
            var _a, _b, _c, _d;
            // Check tx error
            if (response.check_tx && response.check_tx.code > 0) {
                console.error(response.check_tx);
                throw new errors_1.SdkError(response.check_tx.log, response.check_tx.code);
            }
            // Deliver tx error
            if (response.deliver_tx && response.deliver_tx.code > 0) {
                console.error(response.deliver_tx);
                throw new errors_1.SdkError(response.deliver_tx.log, response.deliver_tx.code);
            }
            if (response.deliver_tx && response.deliver_tx.tags) {
                response.deliver_tx.tags = utils_1.Utils.decodeTags(response.deliver_tx.tags);
            }
            return {
                hash: response.hash,
                height: response.height,
                gas_wanted: (_a = response.deliver_tx) === null || _a === void 0 ? void 0 : _a.gas_wanted,
                gas_used: (_b = response.deliver_tx) === null || _b === void 0 ? void 0 : _b.gas_used,
                info: (_c = response.deliver_tx) === null || _c === void 0 ? void 0 : _c.info,
                tags: (_d = response.deliver_tx) === null || _d === void 0 ? void 0 : _d.tags,
            };
        });
    }
    /**
     * Broadcast tx sync or async
     * @private
     * @param signedTx The tx object with signatures
     * @returns The result object of broadcasting
     */
    broadcastTx(txBytes, method) {
        // Only accepts 'broadcast_tx_sync' and 'broadcast_tx_async'
        if (is.not.inArray(method, [
            types.RpcMethods.BroadcastTxSync,
            types.RpcMethods.BroadcastTxAsync,
        ])) {
            throw new errors_1.SdkError(`Unsupported broadcast method: ${method}`);
        }
        return this.client.rpcClient
            .request(method, {
            tx: belt_1.bytesToBase64(txBytes),
        })
            .then(response => {
            if (response.code && response.code > 0) {
                throw new errors_1.SdkError(response.log, response.code);
            }
            return response;
        });
    }
    marshal(stdTx) {
        const copyStdTx = stdTx;
        Object.assign(copyStdTx, stdTx);
        stdTx.value.msg.forEach((msg, idx) => {
            if (msg.marshal) {
                copyStdTx.value.msg[idx] = msg.marshal();
            }
        });
        return copyStdTx;
    }
    newTxResult(hash, height, deliverTx) {
        return {
            hash,
            height,
            gas_wanted: deliverTx === null || deliverTx === void 0 ? void 0 : deliverTx.gas_wanted,
            gas_used: deliverTx === null || deliverTx === void 0 ? void 0 : deliverTx.gas_used,
            info: deliverTx === null || deliverTx === void 0 ? void 0 : deliverTx.info,
            tags: deliverTx === null || deliverTx === void 0 ? void 0 : deliverTx.tags,
        };
    }
}
exports.Tx = Tx;
//# sourceMappingURL=tx.js.map