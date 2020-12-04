"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxHelper = void 0;
const Bech32 = require("bech32");
const Tx_pb = require('../types/proto-types/cosmos/tx/v1beta1/tx_pb');
const Any_pb = require('../types/proto-types/google/protobuf/any_pb');
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
        return signDoc instanceof Tx_pb.SignDoc;
    }
    static isAny(value) {
        return value instanceof Any_pb.Any;
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