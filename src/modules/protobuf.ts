import { Client } from '../client';
import * as types from '../types';
import { SdkError } from '../errors';
import * as pbs from '../types/proto-types';

const Tx_pb = require('../types/proto-types/cosmos/tx/v1beta1/tx_pb');
const slashing_pb = require('../types/proto-types/cosmos/slashing/v1beta1/slashing_pb');

const secp256k1_keys_pb = require('../types/proto-types/cosmos/crypto/secp256k1/keys_pb');
const ed25519_keys_pb = require('../types/proto-types/cosmos/crypto/ed25519/keys_pb');
const multisig_keys_pb = require('../types/proto-types/cosmos/crypto/multisig/keys_pb');


/**
 * ProtobufModel module allows you to deserialize protobuf serialize string
 *
 * @category Modules
 * @since v0.17
 */
export class Protobuf {
  /** @hidden */
  private client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * deserialize Tx
   * @param  {[type]} Tx:string  base64 string
   * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
   * @return {[type]} Tx object                        
   */
  deserializeTx(tx:string, returnProtobufModel?:boolean):types.ValidatorSigningInfo|object{
    if (!tx) {
      throw new SdkError('tx can not be empty');
    }
    if (returnProtobufModel) {
      return Tx_pb.Tx.deserializeBinary(tx);
    }else{
      let txObj = Tx_pb.Tx.deserializeBinary(tx).toObject();
      if (txObj.body && txObj.body.messagesList) {
        txObj.body.messagesList = txObj.body.messagesList.map((msg:{typeUrl:string,value:string})=>{
          return this.unpackMsg(msg);
        });
      }
      return txObj;
    }
  }

  /**
   * Unpack protobuffer tx msg
   * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
   * @return {[type]} message object 
   */
  unpackMsg(msg:{typeUrl:string,value:string}, returnProtobufModel?:boolean):types.ValidatorSigningInfo|object|null{
    if (!msg) {
      throw new SdkError('message can not be empty');
    }
    let messageModelClass:any;
    let typeUrl = msg.typeUrl.replace(/^\//,'');
    switch (typeUrl) {
        //bank
        case types.TxType.MsgSend: {
            messageModelClass = types.MsgSend.getModelClass();
            break;
        }
        case types.TxType.MsgMultiSend: {
            messageModelClass = types.MsgMultiSend.getModelClass();
            break;
        }
        //staking
        case types.TxType.MsgDelegate: {
            messageModelClass = types.MsgDelegate.getModelClass();
            break;
        }
        case types.TxType.MsgUndelegate: {
            messageModelClass = types.MsgUndelegate.getModelClass();
            break;
        }
        case types.TxType.MsgBeginRedelegate: {
            messageModelClass = types.MsgRedelegate.getModelClass();
            break;
        }
        case types.TxType.MsgWithdrawDelegatorReward: {
            messageModelClass = types.MsgWithdrawDelegatorReward.getModelClass();
            break;
        }
        case types.TxType.MsgSetWithdrawAddress: {
            messageModelClass = types.MsgSetWithdrawAddress.getModelClass();
            break;
        }
        //coinswap
        case types.TxType.MsgAddLiquidity: {
            
            break;
        } 
        case types.TxType.MsgRemoveLiquidity: {
            
            break;
        } 
        case types.TxType.MsgSwapOrder: {
            
            break;
        }
        //nft
        case types.TxType.MsgIssueDenom: {
            messageModelClass = types.MsgIssueDenom.getModelClass();
            break;
        }
        case types.TxType.MsgMintNFT: {
            messageModelClass = types.MsgMintNFT.getModelClass();
            break;
        }
        case types.TxType.MsgEditNFT: {
            messageModelClass = types.MsgEditNFT.getModelClass();
            break;
        }
        case types.TxType.MsgTransferNFT: {
            messageModelClass = types.MsgTransferNFT.getModelClass();
            break;
        }
        case types.TxType.MsgBurnNFT: {
            messageModelClass = types.MsgBurnNFT.getModelClass();
            break;
        }
        default: {
            throw new Error("not exist tx type");
        }
    }
    if (messageModelClass && messageModelClass.deserializeBinary) {
        let messageObj = messageModelClass.deserializeBinary(msg.value);
        if (!returnProtobufModel) {
          messageObj = messageObj.toObject();
          messageObj.type = typeUrl;
        }
        return messageObj;
    }else{
      return null;
    }
  }

  /**
   * deserialize SignDoc
   * @param  {[type]} signDoc:string  base64 string
   * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
   * @return {[type]} signDoc object                        
   */
  deserializeSignDoc(signDoc:string, returnProtobufModel?:boolean):types.ValidatorSigningInfo|object{
    if (!signDoc) {
      throw new SdkError('signDoc can not be empty');
    }
    if (returnProtobufModel) {
      return Tx_pb.SignDoc.deserializeBinary(signDoc);
    }else{
      return Tx_pb.SignDoc.deserializeBinary(signDoc).toObject();
    }
  }

  /**
   * deserialize txRaw
   * @param  {[type]} txRaw:string  base64 string
   * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
   * @return {[type]} txRaw object                        
   */
  deserializeTxRaw(txRaw:string, returnProtobufModel?:boolean):types.ValidatorSigningInfo|object{
    if (!txRaw) {
      throw new SdkError('txRaw can not be empty');
    }
    if (returnProtobufModel) {
      return Tx_pb.TxRaw.deserializeBinary(txRaw);
    }else{
      return Tx_pb.TxRaw.deserializeBinary(txRaw).toObject();
    }
  }

  /**
   * deserialize Signing Info
   * @param  {[type]} signingInfo:string  base64 string
   * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
   * @return {[type]} Signing Info object                        
   */
  deserializeSigningInfo(signingInfo:string, returnProtobufModel?:boolean):types.ValidatorSigningInfo|object{
    if (!signingInfo) {
      throw new SdkError('signing info can not be empty');
    }
    if (returnProtobufModel) {
      return slashing_pb.ValidatorSigningInfo.deserializeBinary(signingInfo);
    }else{
      return slashing_pb.ValidatorSigningInfo.deserializeBinary(signingInfo).toObject();
    }
  }

  /**
   * deserialize publick Key
   * @param  {[type]} publick Key:string  base64 string
   * @param  {[type]} type:string  "tendermint/PubKeySecp256k1" | tendermint/PubKeyEd25519 | tendermint/PubKeyMultisig
   * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
   * @return {[type]} publick key object                        
   */
  // deserializePublickKey(publickKey:string, type:string ,returnProtobufModel?:boolean):types.ValidatorSigningInfo|object{
  //   if (!publickKey) {
  //     throw new SdkError('publickKey can not be empty');
  //   }
  //   let publickKey_pb:any;
  //   switch (type){
  //     case 'tendermint/PubKeySecp256k1':
  //     console.log('vvvvvvvv:',secp256k1_keys_pb.PubKey);
  //     console.log('publickKey:',publickKey);
  //     publickKey_pb = secp256k1_keys_pb.PubKey.deserializeBinary(Buffer.from(publickKey));
  //     break;
  //     case 'tendermint/PubKeyEd25519':
  //     publickKey_pb = ed25519_keys_pb.PubKey.deserializeBinary(publickKey);
  //     break;
  //     case 'tendermint/PubKeyMultisig':
  //     publickKey_pb = multisig_keys_pb.LegacyAminoPubKey.deserializeBinary(publickKey);
  //     break;
  //     default:
  //     publickKey_pb = secp256k1_keys_pb.PubKey.deserializeBinary(publickKey);
  //     break;
  //   } 
  //   if (returnProtobufModel) {
  //     return publickKey_pb;
  //   }else{
  //     return publickKey_pb.toObject();
  //   }
  // }
}
