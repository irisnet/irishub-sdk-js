import * as csprng from 'secure-random';
import * as bech32 from 'bech32';
import * as cryp from 'crypto-browserify';
import * as uuid from 'uuid';
import * as is from 'is_js';
import * as bip32 from 'bip32';
import * as bip39 from 'bip39';
import { ec as EC, eddsa as EdDSA } from 'elliptic';
import * as ecc from 'tiny-secp256k1';
import { Utils } from './utils';
import * as types from '../types';
import { SdkError } from '../errors';

const Sha256 = require('sha256');
const Secp256k1 = require('secp256k1');
const SM2 = require('sm-crypto').sm2;

/**
 * Crypto Utils
 * @hidden
 */
export class Crypto {
  // secp256k1 privkey is 32 bytes
  static PRIVKEY_LEN = 32;
  static MNEMONIC_LEN = 256;
  static DECODED_ADDRESS_LEN = 20;

  //hdpath
  static HDPATH = "44'/118'/0'/0/";

  /**
   * Decodes an address in bech32 format.
   * @param address The bech32 address to decode
   * @returns The decoded address buffer
   */
  static decodeAddress(address: string): Buffer {
    const decodeAddress = bech32.decode(address);
    return Buffer.from(bech32.fromWords(decodeAddress.words));
  }

  /**
   * Checks whether an address is valid.
   * @param address The bech32 address to decode
   * @param hrp The prefix to check for the bech32 address
   * @returns true if the address is valid
   */
  static checkAddress(address: string, hrp: string) {
    try {
      if (!address.startsWith(hrp)) {
        return false;
      }

      const decodedAddress = bech32.decode(address);
      const decodedAddressLength = Crypto.decodeAddress(address).length;
      if (
        decodedAddressLength === Crypto.DECODED_ADDRESS_LEN &&
        decodedAddress.prefix === hrp
      ) {
        return true;
      }

      return false;
    } catch (err) {
      return false;
    }
  }

  /**
   * Encodes an address from input data bytes.
   * @param pubkeyHash The public key to encode
   * @param hrp The address prefix
   * @param type The output type (default: hex)
   * @returns Bech32 address
   */
  static encodeAddress(pubkeyHash: string, hrp = 'iaa', type = 'hex') {
    const words = bech32.toWords(Buffer.from(pubkeyHash, type));
    return bech32.encode(hrp, words);
  }

  /**
   * ConvertAndEncode converts from a base64 encoded byte array to bach32 encoded byte string and then to bech32
   * @param hrp The address prefix
   * @param data Base64 encoded byte array
   * @returns Bech32 address
   */
  static convertAndEncode(hrp: string, data: Uint8Array) {
    const converted = Crypto.convertBits(data, 8, 5, true);
    return bech32.encode(hrp, converted);
  }

  /**
   * DecodeAndConvert decodes a bech32 encoded string and converts to base64 encoded bytes
   * @param address Bech32 address
   * @returns Base64 encoded bytes
   */
  static decodeAndConvert(address: string): number[] {
    const decodeAddress = bech32.decode(address);
    return Crypto.convertBits(decodeAddress.words, 5, 8, false);
  }

  /**
   * Generates 32 bytes of random entropy
   * @param len The output length (default: 32 bytes)
   * @returns An entropy bytes hexstring
   */
  static generatePrivateKey(len: number = Crypto.PRIVKEY_LEN): string {
    return Utils.ab2hexstring(csprng(len));
  }

  /**
   * Generates an arrayBuffer filled with random bits.
   * @param length The length of buffer.
   * @returns A random array buffer
   */
  static generateRandomArray(length: number): ArrayBuffer {
    return csprng(length);
  }

  /**
   * Calculates the full public key from a given private key.
   * @param privateKeyHex The private key hexstring
   * @param type Pubkey Type
   * @returns Public key {type:type, value:hexstring}
   */
  static getFullPublicKeyFromPrivateKey(
    privateKeyHex: string, 
    type:types.PubkeyType = types.PubkeyType.secp256k1
    ): types.Pubkey {
    if (!privateKeyHex || privateKeyHex.length !== Crypto.PRIVKEY_LEN * 2) {
      throw new SdkError('invalid privateKey');
    }
    let pubKey:string = '';
    switch(type){
      case types.PubkeyType.ed25519:
      throw new Error("not implement");
      case types.PubkeyType.sm2:
      pubKey = SM2.getPublicKeyFromPrivateKey(privateKeyHex);
      break;
      case types.PubkeyType.secp256k1:
      default:
      const secp256k1pubkey = new EC('secp256k1').keyFromPrivate(privateKeyHex, 'hex').getPublic();
      pubKey = secp256k1pubkey.encode('hex');
      break;
    }
    return { type:type, value:pubKey };
  }

  /**
   * Calculates the public key from a given private key.
   * @param privateKeyHex The private key hexstring
   * @param type Pubkey Type
   * @returns Public key {type:type, value:hexstring}
   */
  static getPublicKeyFromPrivateKey(
    privateKeyHex: string, 
    type:types.PubkeyType = types.PubkeyType.secp256k1
    ): types.Pubkey {
    if (!privateKeyHex || privateKeyHex.length !== Crypto.PRIVKEY_LEN * 2) {
      throw new SdkError('invalid privateKey');
    }
    let pubKey:string = '';
    switch(type){
      case types.PubkeyType.ed25519:
      throw new Error("not implement");
      case types.PubkeyType.sm2:
      pubKey =  SM2.getPublicKeyFromPrivateKey(privateKeyHex, 'compress');
      break;
      case types.PubkeyType.secp256k1:
      default:
      const secp256k1pubkey = new EC('secp256k1').keyFromPrivate(privateKeyHex, 'hex').getPublic();
      pubKey = Buffer.from(secp256k1pubkey.encodeCompressed()).toString('hex');
      break;
    }
    return { type:type, value:pubKey }
  }

  /**
   * [marshalPubKey description]
   * @param  {[type]} pubKey:{type: types.PubkeyType, value:base64String} Tendermint public key
   * @param  {[type]} lengthPrefixed:boolean length prefixed
   * @return {[type]} pubKey hexString public key with amino prefix
   */
  static aminoMarshalPubKey(
    pubKey:types.Pubkey, 
    lengthPrefixed?:boolean):string{
    const { type, value } = pubKey;
    let pubKeyType = '';
    switch (type){
      case types.PubkeyType.secp256k1:
      pubKeyType = 'tendermint/PubKeySecp256k1';
      break;
      case types.PubkeyType.ed25519:
      pubKeyType = 'tendermint/PubKeyEd25519';
      break;
      case types.PubkeyType.sm2:
      pubKeyType = 'tendermint/PubKeySm2';
      break;
      default:
      pubKeyType = type;
      break;
    }
    let pk:any = Utils.getAminoPrefix(pubKeyType);
    pk = pk.concat(Buffer.from(value,'base64').length);
    pk = pk.concat(Array.from(Buffer.from(value,'base64')));
    if (lengthPrefixed) {
      pk = [pk.length,...pk];
    }
    return Buffer.from(pk).toString('hex');
  }

  /**
   * Gets an address from a public key hex.
   * @param publicKeyHex The public key hexstring
   * @param prefix The address prefix
   *
   * @returns The address
   */
  static getAddressFromPublicKey(publicKey: string|types.Pubkey, prefix: string): string {
    if (typeof publicKey == 'string') {
      publicKey = {type:types.PubkeyType.secp256k1, value:publicKey};
    }
    let hash:string = ''; 
    switch(publicKey.type){
      case types.PubkeyType.ed25519:
      throw new Error("not implement");
      case types.PubkeyType.sm2:
      hash = Utils.sha256(publicKey.value).substr(0,40);
      break;
      case types.PubkeyType.secp256k1:
      default:
      hash = Utils.sha256ripemd160(publicKey.value);
      break;
    }
    return Crypto.encodeAddress(hash, prefix);;
  }

  /**
   * Gets an address from a private key.
   * @param privateKeyHex The private key hexstring
   * @param prefix Bech32 prefix
   * @param type Pubkey Type
   * @returns The address
   */
  static getAddressFromPrivateKey(
    privateKeyHex: string,
    prefix: string,
    type:types.PubkeyType = types.PubkeyType.secp256k1
  ): string {
    return Crypto.getAddressFromPublicKey(
      Crypto.getPublicKeyFromPrivateKey(privateKeyHex, type),
      prefix,
    );
  }

  /**
   * Verifies a signature (64 byte <r,s>) given the sign bytes and public key.
   * @param sigHex The signature hexstring.
   * @param signBytesHex Unsigned transaction sign bytes hexstring.
   * @param publicKeyHex The public key.
   * @returns Signature. Does not include tx.
   */
  // static verifySignature(
  //   sigHex: string,
  //   signBytesHex: string,
  //   publicKeyHex: string
  // ): string {
  //   const publicKey = Buffer.from(publicKeyHex, 'hex');
  //   if (!ecc.isPoint(publicKey)) {
  //     throw new SdkError('Invalid public key provided');
  //   }
  //   const msgHash = Utils.sha256(signBytesHex);
  //   const msgHashHex = Buffer.from(msgHash, 'hex');
  //   return ecc.verify(msgHashHex, publicKey, Buffer.from(sigHex, 'hex'));
  // }

  /**
   * Generates a signature (base64 string) for a signDocSerialize based on given private key.
   * @param signDocSerialize from protobuf and tx.
   * @param privateKey The private key.
   * @param type Pubkey Type.
   * @returns Signature. Does not include tx.
   */
 static generateSignature(
  signDocSerialize:Uint8Array, 
  private_key:string, 
  type:types.PubkeyType = types.PubkeyType.secp256k1
  ):string {
      let signature:string = '';
      switch(type){
        case types.PubkeyType.ed25519:
        throw new Error("not implement");
        case types.PubkeyType.sm2:
        const sm2Sig = SM2.doSignature(
          Buffer.from(signDocSerialize),
          private_key, 
          {hash:true}
        );
        signature = Buffer.from(sm2Sig, 'hex').toString('base64');
        break;
        case types.PubkeyType.secp256k1:
        default:
        const msghash:Buffer = Buffer.from(Sha256(signDocSerialize,{ asBytes: true }));
        let prikeyArr:Buffer = Buffer.from(private_key,'hex');
        let Secp256k1Sig = Secp256k1.sign(msghash, prikeyArr);
        signature = Secp256k1Sig.signature.toString('base64');
        break;
      }
      if (!signature) { throw Error(' generate Signature error ') }
      return signature;
  }

  /**
   * Generates a keystore object (web3 secret storage format) given a private key to store and a password.
   * @param privateKeyHex The private key hexstring.
   * @param password The password.
   * @param prefix Bech32 prefix
   * @param iterations Number of iterations. Defaults to 262144
   * @returns The keystore object.
   */
  static generateKeyStore(
    privateKeyHex: string,
    password: string,
    prefix: string,
    iterations: number = 262144
  ): types.Keystore {
    const salt = cryp.randomBytes(32);
    const iv = cryp.randomBytes(16);
    const cipherAlg = 'aes-128-ctr';

    const kdf = 'pbkdf2';
    const kdfparams = {
      dklen: 32,
      salt: salt.toString('hex'),
      c: iterations,
      prf: 'hmac-sha256',
    };

    const derivedKey = cryp.pbkdf2Sync(
      Buffer.from(password),
      salt,
      kdfparams.c,
      kdfparams.dklen,
      'sha256'
    );
    const cipher = cryp.createCipheriv(cipherAlg, derivedKey.slice(0, 16), iv);
    if (!cipher) {
      throw new SdkError('Unsupported cipher');
    }

    const ciphertext = Buffer.concat([
      cipher.update(Buffer.from(privateKeyHex, 'hex')),
      cipher.final(),
    ]);
    const bufferValue = Buffer.concat([derivedKey.slice(16, 32), ciphertext]);

    return {
      version: 1,
      id: uuid.v4({
        random: cryp.randomBytes(16),
      }),
      address: Crypto.getAddressFromPrivateKey(privateKeyHex, prefix),
      crypto: {
        ciphertext: ciphertext.toString('hex'),
        cipherparams: {
          iv: iv.toString('hex'),
        },
        cipher: cipherAlg,
        kdf,
        kdfparams,
        // mac must use sha3 according to web3 secret storage spec
        mac: Utils.sha3(bufferValue.toString('hex')),
      },
    };
  }

  /**
   * Gets a private key from a keystore given its password.
   * @param keystore The keystore in json format
   * @param password The password.
   * @returns The private key
   */
  static getPrivateKeyFromKeyStore(
    keystore: string | object,
    password: string
  ): string {
    if (!is.string(password)) {
      throw new SdkError('No password given.');
    }

    const json = is.object(keystore)
      ? keystore
      : JSON.parse(keystore.toString());
    const kdfparams = json.crypto.kdfparams;

    if (kdfparams.prf !== 'hmac-sha256') {
      throw new SdkError('Unsupported parameters to PBKDF2');
    }

    const derivedKey = cryp.pbkdf2Sync(
      Buffer.from(password),
      Buffer.from(kdfparams.salt, 'hex'),
      kdfparams.c,
      kdfparams.dklen,
      'sha256'
    );
    const ciphertext = Buffer.from(json.crypto.ciphertext, 'hex');
    const bufferValue = Buffer.concat([derivedKey.slice(16, 32), ciphertext]);

    // try sha3 (new / ethereum keystore) mac first
    const mac = Utils.sha3(bufferValue.toString('hex'));
    if (mac !== json.crypto.mac) {
      // the legacy (sha256) mac is next to be checked. pre-testnet keystores used a sha256 digest for the mac.
      // the sha256 mac was not compatible with ethereum keystores, so it was changed to sha3 for mainnet.
      const macLegacy = Utils.sha256(bufferValue.toString('hex'));
      if (macLegacy !== json.crypto.mac) {
        throw new SdkError(
          'Keystore mac check failed (sha3 & sha256) wrong password?'
        );
      }
    }

    const decipher = cryp.createDecipheriv(
      json.crypto.cipher,
      derivedKey.slice(0, 16),
      Buffer.from(json.crypto.cipherparams.iv, 'hex')
    );
    const privateKey = Buffer.concat([
      decipher.update(ciphertext),
      decipher.final(),
    ]).toString('hex');

    return privateKey;
  }

  /**
   * Generates mnemonic phrase words using random entropy.
   *
   * @returns Mnemonic
   */
  static generateMnemonic(): string {
    return bip39.generateMnemonic(Crypto.MNEMONIC_LEN);
  }

  /**
   * Validates mnemonic phrase words.
   * @param mnemonic The mnemonic phrase words
   * @returns Validation result
   */
  static validateMnemonic = bip39.validateMnemonic;

  /**
   * Gets a private key from mnemonic words.
   * @param mnemonic The mnemonic phrase words
   * @param derive Derive a private key using the default HD path (default: true)
   * @param index The bip44 address index (default: 0)
   * @param password A passphrase for generating the salt, according to bip39
   * @returns hexstring
   */
  static getPrivateKeyFromMnemonic(
    mnemonic: string,
    index = 0,
    derive = true,
    password = ''
  ): string {
    if (!bip39.validateMnemonic(mnemonic)) {
      throw new SdkError('wrong mnemonic format');
    }
    const seed = bip39.mnemonicToSeedSync(mnemonic, password);
    if (derive) {
      const master = bip32.fromSeed(seed);
      const child = master.derivePath(Crypto.HDPATH + index);
      if (
        typeof child === 'undefined' ||
        typeof child.privateKey === 'undefined'
      ) {
        throw new SdkError('error getting private key from mnemonic');
      }
      return child.privateKey.toString('hex');
    }
    return seed.toString('hex');
  }

  /**
   * Generate Tx hash from stdTx
   * @param  protobuf tx :base64 string
   * @throws tx hash
   */
  static generateTxHash(tx: string): string {
    if (!tx || typeof tx != 'string') {
      throw new SdkError('invalid tx');
    }
    const tx_pb = types.tx_tx_pb.Tx.deserializeBinary(tx);
    if (!tx_pb) {
      throw new SdkError('deserialize tx err');
    }
    const txRaw = new types.tx_tx_pb.TxRaw();
    txRaw.setBodyBytes(tx_pb.getBody().serializeBinary());
    txRaw.setAuthInfoBytes(tx_pb.getAuthInfo().serializeBinary());
    tx_pb.getSignaturesList().forEach((signature:Uint8Array)=>{
        txRaw.addSignatures(signature);
    })
    return (Sha256(txRaw.serializeBinary()) || '').toUpperCase();
  }

  /**
   * Copy from https://github.com/sipa/bech32/blob/master/ref/javascript/segwit_addr.js
   */
  private static convertBits(
    data: Uint8Array,
    frombits: number,
    tobits: number,
    pad: boolean
  ): number[] {
    let acc = 0;
    let bits = 0;
    let ret = [];
    let maxv = (1 << tobits) - 1;
    for (let p = 0; p < data.length; ++p) {
      let value = data[p];
      if (value < 0 || value >> frombits !== 0) {
        return [];
      }
      acc = (acc << frombits) | value;
      bits += frombits;
      while (bits >= tobits) {
        bits -= tobits;
        ret.push((acc >> bits) & maxv);
      }
    }
    if (pad) {
      if (bits > 0) {
        ret.push((acc << (tobits - bits)) & maxv);
      }
    } else if (bits >= frombits || (acc << (tobits - bits)) & maxv) {
      return [];
    }
    return ret;
  }
}
