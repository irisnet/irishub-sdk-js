import { Client } from '../client';
import * as types from '../types';
import { SdkError } from '../errors';

const slashing_pb = require('../types/proto-types/cosmos/slashing/v1beta1/slashing_pb');

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
      return types.tx_tx_pb.Tx.deserializeBinary(tx);
    }else{
      let txObj = types.tx_tx_pb.Tx.deserializeBinary(tx).toObject();
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
        //distribution
        case types.TxType.MsgWithdrawDelegatorReward: {
            messageModelClass = types.MsgWithdrawDelegatorReward.getModelClass();
            break;
        }
        case types.TxType.MsgSetWithdrawAddress: {
            messageModelClass = types.MsgSetWithdrawAddress.getModelClass();
            break;
        }
        case types.TxType.MsgWithdrawValidatorCommission: {
            messageModelClass = types.MsgWithdrawValidatorCommission.getModelClass();
            break;
        }
        case types.TxType.MsgFundCommunityPool: {
            messageModelClass = types.MsgFundCommunityPool.getModelClass();
            break;
        }
        //token
        case types.TxType.MsgIssueToken: {
            messageModelClass = types.MsgIssueToken.getModelClass();
            break;
        }
        case types.TxType.MsgEditToken: {
            messageModelClass = types.MsgEditToken.getModelClass();
            break;
        }
        case types.TxType.MsgMintToken: {
            messageModelClass = types.MsgMintToken.getModelClass();
            break;
        }
        case types.TxType.MsgTransferTokenOwner: {
            messageModelClass = types.MsgTransferTokenOwner.getModelClass();
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
        //contract
        case types.TxType.MsgStoreCode: {
            messageModelClass = types.MsgStoreCode.getModelClass();
            break;
        }
        case types.TxType.MsgInstantiateContract: {
            messageModelClass = types.MsgInstantiateContract.getModelClass();
            break;
        }
        case types.TxType.MsgExecuteContract: {
            messageModelClass = types.MsgExecuteContract.getModelClass();
            break;
        }
        case types.TxType.MsgMigrateContract: {
            messageModelClass = types.MsgMigrateContract.getModelClass();
            break;
        }
        case types.TxType.MsgUpdateAdmin: {
            messageModelClass = types.MsgUpdateAdmin.getModelClass();
            break;
        }
        case types.TxType.MsgClearAdmin: {
            messageModelClass = types.MsgClearAdmin.getModelClass();
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
      return types.tx_tx_pb.SignDoc.deserializeBinary(signDoc);
    }else{
      return types.tx_tx_pb.SignDoc.deserializeBinary(signDoc).toObject();
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
      return types.tx_tx_pb.TxRaw.deserializeBinary(txRaw);
    }else{
      return types.tx_tx_pb.TxRaw.deserializeBinary(txRaw).toObject();
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
   * deserialize Pubkey
   * @param  {[type]} pubKey:{typeUrl:string, value:string}
   * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
   * @return {[type]} pubKey object                        
   */
  deserializePubkey(pubKey:{typeUrl:string, value:string}, returnProtobufModel?:boolean):types.ValidatorSigningInfo|object{
    if (!pubKey) {
      throw new SdkError('pubKey can not be empty');
    }
    let result:{typeUrl:string, value:any} = {...pubKey};
    switch(pubKey.typeUrl){
      case '/cosmos.crypto.ed25519.PubKey':
      result.value = types.crypto_ed25519_keys_pb.PubKey.deserializeBinary(pubKey.value);
      break;
      case '/cosmos.crypto.secp256k1.PubKey':
      result.value = types.crypto_secp256k1_keys_pb.PubKey.deserializeBinary(pubKey.value);
      break;
    }
    if (!returnProtobufModel && result.value && result.value.toObject) {
      result.value = result.value.toObject();
    }
    return result;
  }
}
