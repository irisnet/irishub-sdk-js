import * as Bech32 from 'bech32';

const Tx_pb = require('../types/proto-types/cosmos/tx/v1beta1/tx_pb');
const Signing_pb = require('../types/proto-types/cosmos/tx/signing/v1beta1/signing_pb');
const Crypto_pb = require('../types/proto-types/cosmos/base/crypto/v1beta1/crypto_pb');
const Coin_pb = require('../types/proto-types/cosmos/base/v1beta1/coin_pb');
const Any_pb = require('../types/proto-types/google/protobuf/any_pb');


export class TxHelper {
    static getHexPubkey(pubkey:string):string{
        try {
            let pk = Bech32.decode(pubkey);
            pubkey = Buffer.from(Bech32.fromWords(pk.words)).toString('hex').toUpperCase();
        }catch (e) {}
        return pubkey;
    }

    // static ValidateBasic(tx) {
    //     if (!tx.chain_id) {
    //         throw new Error("chain_id is empty");
    //     }
    //     if (tx.account_number < 0) {
    //         throw new Error("account_number is empty");
    //     }
    //     if (tx.sequence < 0) {
    //         throw new Error("sequence is empty");
    //     }
    //     tx.msgs.forEach(function(msg) {
    //         msg.ValidateBasic();
    //     });
    // }

    static isSignDoc(signDoc:any):boolean{
        return signDoc instanceof Tx_pb.SignDoc;
    }

    static isAny(value:any):boolean{
        return value instanceof Any_pb.Any;
    }

    static ecodeModelAddress(address:string):Buffer{
        if (!address) {
            throw new Error("address is empty");
        }
        let words = Bech32.decode(address,'utf-8').words;
        return Buffer.from(Bech32.fromWords(words));
    }
}