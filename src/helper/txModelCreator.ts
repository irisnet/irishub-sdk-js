
import * as types from '../types';
import { TxHelper } from './txHelper';
import { SdkError, CODES } from '../errors';

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
        sequence?:number, 
        publicKey?:string|types.Pubkey):any
    {
        let authInfo = new types.tx_tx_pb.AuthInfo();

        let feeModel = TxModelCreator.createFeeModel(fee.amount, fee.gasLimit);
        authInfo.setFee(feeModel);

        if (publicKey && typeof sequence != 'undefined') {
            let signerInfo = TxModelCreator.createSignerInfoModel(sequence, publicKey);
            authInfo.addSignerInfos(signerInfo);
        }
        return authInfo;
    }

    static createSignerInfoModel(sequence:number, publicKey:string|types.Pubkey):any{
        let single = new types.tx_tx_pb.ModeInfo.Single();
        single.setMode(types.signing_signing_pb.SignMode.SIGN_MODE_DIRECT);

        let mode_info = new types.tx_tx_pb.ModeInfo();
        mode_info.setSingle(single);

        let signerInfo = new types.tx_tx_pb.SignerInfo();
        signerInfo.setModeInfo(mode_info);
        signerInfo.setSequence(sequence);
        
        if (publicKey) {
            let pk = TxModelCreator.createPublicKeyModel(publicKey);
            signerInfo.setPublicKey(TxModelCreator.createAnyModel(pk.type, pk.value.serializeBinary()));
        }
        return signerInfo;
    }

    static createPublicKeyModel(publicKey:string|types.Pubkey):{type:string, value:any}{
        if (typeof publicKey == 'string') {
            publicKey = {type:types.PubkeyType.secp256k1, value:publicKey};
        }
        let pk_hex = TxHelper.getHexPubkey(publicKey.value);
        let pubByteArray = Array.from(Buffer.from(pk_hex, 'hex'));
        if (pubByteArray.length > 33) {
            //去掉amino编码前缀
            pubByteArray = pubByteArray.slice(5)
        }
        let pk:any;
        let type = '';
        switch(publicKey.type){
            case types.PubkeyType.secp256k1:
            type = 'cosmos.crypto.secp256k1.PubKey';
            pk = new types.crypto_secp256k1_keys_pb.PubKey();
            break;
            case types.PubkeyType.ed25519:
            type = 'cosmos.crypto.ed25519.PubKey';
            pk = new types.crypto_ed25519_keys_pb.PubKey();
            break;
            case types.PubkeyType.sm2:
            type = 'cosmos.crypto.sm2.PubKey';
            pk = new types.crypto_sm2_keys_pb.PubKey();
            break;
        }
        if (!pk) {
            throw new SdkError("Unsupported public Key types",CODES.InvalidPubkey);
        }
        pk.setKey(Buffer.from(pubByteArray));
        return { type:type, value:pk };
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
