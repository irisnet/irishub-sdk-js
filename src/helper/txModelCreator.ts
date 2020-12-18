
import * as types from '../types';
import { TxHelper } from './txHelper';

export class TxModelCreator {
    static createBodyModel(msgs:types.Msg[], memo:string, timeoutHeight:number):any{
        let body = new types.tx_tx_pb.TxBody();
        msgs.forEach((msg)=>{
            body.addMessages(msg.pack());
        });
        body.setMemo(memo);
        body.setTimeoutHeight(timeoutHeight);
        return body;
    }

    static createAuthInfoModel(
        fee:types.StdFee, 
        sequence?:string, 
        publicKey?:string):any
    {
        let authInfo = new types.tx_tx_pb.AuthInfo();

        let feeModel = TxModelCreator.createFeeModel(fee.amount, fee.gasLimit);
        authInfo.setFee(feeModel);

        if (publicKey && publicKey.length && typeof sequence != 'undefined') {
            let signerInfo = TxModelCreator.createSignerInfoModel(sequence, publicKey);
            authInfo.addSignerInfos(signerInfo);
        }
        return authInfo;
    }

    static createSignerInfoModel(sequence:string, publicKey:string):any{
        let single = new types.tx_tx_pb.ModeInfo.Single();
        single.setMode(types.signing_signing_pb.SignMode.SIGN_MODE_DIRECT);

        let mode_info = new types.tx_tx_pb.ModeInfo();
        mode_info.setSingle(single);

        let signerInfo = new types.tx_tx_pb.SignerInfo();
        signerInfo.setModeInfo(mode_info);
        signerInfo.setSequence(String(sequence));
        
        if (publicKey) {
            let pk = TxModelCreator.createPublicKeyModel(publicKey);
            signerInfo.setPublicKey(TxModelCreator.createAnyModel('cosmos.crypto.secp256k1.PubKey',pk.serializeBinary()));
        }
        return signerInfo;
    }

    static createPublicKeyModel(publicKey:string):any{
        let pk_hex = TxHelper.getHexPubkey(publicKey);
        let pubByteArray = Array.from(Buffer.from(pk_hex, 'hex'));
        if (pubByteArray.length > 33) {
            //去掉amino编码前缀
            pubByteArray = pubByteArray.slice(5)
        }
        
        let pk = new types.crypto_secp256k1_keys_pb.PubKey();
        pk.setKey(Buffer.from(pubByteArray));
        return pk;
    }

    static createFeeModel(amounts:types.Coin[], gasLimit:string):any{
        let fee = new types.tx_tx_pb.Fee();
        amounts.forEach((amount)=>{
            let coin = TxModelCreator.createCoinModel(amount.denom, amount.amount);
            fee.addAmount(coin);
        });
        fee.setGasLimit(String(gasLimit));
        return fee;
    }

    static createCoinModel(denom:string, amount:string):any{
        let coin = new types.base_coin_pb.Coin();
        coin.setDenom(denom);
        coin.setAmount(String(amount));
        return coin;
    }

    static createAnyModel(typeUrl:string, value:Uint8Array):any{
        let msg_any = new types.any_pb.Any();
        msg_any.setTypeUrl(`/${typeUrl}`);
        msg_any.setValue(value);
        return msg_any;
    }
}
