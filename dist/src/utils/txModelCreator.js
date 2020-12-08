"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxModelCreator = void 0;
const txHelper_1 = require("./txHelper");
let Tx_pb = require('../types/proto-types/cosmos/tx/v1beta1/tx_pb');
let Signing_pb = require('../types/proto-types/cosmos/tx/signing/v1beta1/signing_pb');
let secp256k1_key_pb = require('../types/proto-types/cosmos/crypto/secp256k1/keys_pb.js');
let Coin_pb = require('../types/proto-types/cosmos/base/v1beta1/coin_pb');
let Any_pb = require('../types/proto-types/google/protobuf/any_pb');
class TxModelCreator {
    static createBodyModel(msgs, memo, timeoutHeight) {
        let body = new Tx_pb.TxBody();
        msgs.forEach((msg) => {
            body.addMessages(msg.pack());
        });
        body.setMemo(memo);
        body.setTimeoutHeight(timeoutHeight);
        return body;
    }
    static createAuthInfoModel(fee, sequence, publicKey) {
        let authInfo = new Tx_pb.AuthInfo();
        let feeModel = TxModelCreator.createFeeModel(fee.amount, fee.gasLimit);
        authInfo.setFee(feeModel);
        if (publicKey && publicKey.length && typeof sequence != 'undefined') {
            let signerInfo = TxModelCreator.createSignerInfoModel(sequence, publicKey);
            authInfo.addSignerInfos(signerInfo);
        }
        return authInfo;
    }
    static createSignerInfoModel(sequence, publicKey) {
        let single = new Tx_pb.ModeInfo.Single();
        single.setMode(Signing_pb.SignMode.SIGN_MODE_DIRECT);
        let mode_info = new Tx_pb.ModeInfo();
        mode_info.setSingle(single);
        let signerInfo = new Tx_pb.SignerInfo();
        signerInfo.setModeInfo(mode_info);
        signerInfo.setSequence(String(sequence));
        if (publicKey) {
            let pk = TxModelCreator.createPublicKeyModel(publicKey);
            signerInfo.setPublicKey(TxModelCreator.createAnyModel('cosmos.crypto.secp256k1.PubKey', pk.serializeBinary()));
        }
        return signerInfo;
    }
    static createPublicKeyModel(publicKey) {
        let pk_hex = txHelper_1.TxHelper.getHexPubkey(publicKey);
        let pubByteArray = Array.from(Buffer.from(pk_hex, 'hex'));
        if (pubByteArray.length > 33) {
            //去掉amino编码前缀
            pubByteArray = pubByteArray.slice(5);
        }
        let pk = new secp256k1_key_pb.PubKey();
        pk.setKey(Buffer.from(pubByteArray));
        return pk;
    }
    static createFeeModel(amounts, gasLimit) {
        let fee = new Tx_pb.Fee();
        amounts.forEach((amount) => {
            let coin = TxModelCreator.createCoinModel(amount.denom, amount.amount);
            fee.addAmount(coin);
        });
        fee.setGasLimit(String(gasLimit));
        return fee;
    }
    static createCoinModel(denom, amount) {
        let coin = new Coin_pb.Coin();
        coin.setDenom(denom);
        coin.setAmount(String(amount));
        return coin;
    }
    static createAnyModel(typeUrl, value) {
        let msg_any = new Any_pb.Any();
        msg_any.setTypeUrl(`/${typeUrl}`);
        msg_any.setValue(value);
        return msg_any;
    }
}
exports.TxModelCreator = TxModelCreator;
//# sourceMappingURL=txModelCreator.js.map