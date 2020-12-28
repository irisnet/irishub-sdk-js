"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxHelper = void 0;
const Bech32 = require("bech32");
const types = require("../types");
class TxHelper {
    static getHexPubkey(pubkey) {
        try {
            let pk = Bech32.decode(pubkey);
            pubkey = Buffer.from(Bech32.fromWords(pk.words)).toString('hex').toUpperCase();
        }
        catch (e) { }
        return pubkey;
    }
    static isSignDoc(signDoc) {
        return signDoc instanceof types.tx_tx_pb.SignDoc;
    }
    static isAny(value) {
        return value instanceof types.any_pb.Any;
    }
    static ecodeModelAddress(address) {
        if (!address) {
            throw new Error("address is empty");
        }
        let words = Bech32.decode(address, 'utf-8').words;
        return Buffer.from(Bech32.fromWords(words));
    }
}
exports.TxHelper = TxHelper;
//# sourceMappingURL=txHelper.js.map