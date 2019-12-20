import csprng from 'secure-random';
import * as bech32 from 'bech32';
import cryp from 'crypto-browserify';
import uuid from 'uuid';
import is from 'is_js';
import * as bip32 from 'bip32';
import * as bip39 from 'bip39';
import { ec as EC } from 'elliptic';
import ecc from 'tiny-secp256k1';
import { Utils } from '../utils';

// secp256k1 privkey is 32 bytes
const PRIVKEY_LEN = 32;
const MNEMONIC_LEN = 256;
const DECODED_ADDRESS_LEN = 20;
const CURVE = 'secp256k1';

//hdpath
const HDPATH = "44'/118'/0'/0/0";

const ec = new EC(CURVE);

export class Crypto {
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
        decodedAddressLength === DECODED_ADDRESS_LEN &&
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
   * @param pubkey The public key to encode
   * @param prefix The address prefix
   * @param type The output type (default: hex)
   */
  static encodeAddress(pubkey: string, prefix = 'iaa', type = 'hex') {
    const words = bech32.toWords(Buffer.from(pubkey, type));
    return bech32.encode(prefix, words);
  }

  /**
   * Generates 32 bytes of random entropy
   * @param len The output length (default: 32 bytes)
   * @returns An entropy bytes hexstring
   */
  static generatePrivateKey(len: number = PRIVKEY_LEN): string {
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
   * Gets the pubkey hexstring
   * @param publicKey Encoded public key
   * @returns Public key hexstring
   */
  static getPublicKey(publicKey: string): string {
    const keyPair = ec.keyFromPublic(publicKey, 'hex');
    return keyPair.getPublic();
  }

  /**
   * Calculates the public key from a given private key.
   * @param privateKeyHex The private key hexstring
   * @returns Public key hexstring
   */
  static getPublicKeyFromPrivateKey(privateKeyHex: string): string {
    if (!privateKeyHex || privateKeyHex.length !== PRIVKEY_LEN * 2) {
      throw new Error('invalid privateKey');
    }
    const curve = new EC(CURVE);
    const keypair = curve.keyFromPrivate(privateKeyHex, 'hex');
    const unencodedPubKey = keypair.getPublic().encode('hex');
    return unencodedPubKey;
  }

  /**
   * PubKey performs the point-scalar multiplication from the privKey on the
   * generator point to get the pubkey.
   * @param privateKey
   * @returns Public key hexstring
   */
  static generatePubKey(privateKey: Buffer): string {
    const curve = new EC(CURVE);
    const keypair = curve.keyFromPrivate(privateKey);
    return keypair.getPublic();
  }

  /**
   * Gets an address from a public key hex.
   * @param publicKeyHex The public key hexstring
   * @param prefix The address prefix
   *
   * @returns The address
   */
  static getAddressFromPublicKey(publicKeyHex: string, prefix: string): string {
    const pubKey = ec.keyFromPublic(publicKeyHex, 'hex');
    const pubPoint = pubKey.getPublic();
    const compressed = pubPoint.encodeCompressed();
    const hexed = Utils.ab2hexstring(compressed);
    const hash = Utils.sha256ripemd160(hexed); // https://git.io/fAn8N
    const address = Crypto.encodeAddress(hash, prefix);
    return address;
  }

  /**
   * Gets an address from a private key.
   * @param privateKeyHex The private key hexstring
   * @returns The address
   */
  static getAddressFromPrivateKey(
    privateKeyHex: string,
    prefix: string
  ): string {
    return Crypto.getAddressFromPublicKey(
      Crypto.getPublicKeyFromPrivateKey(privateKeyHex),
      prefix
    );
  }

  /**
   * Generates a signature (64 byte <r,s>) for a transaction based on given private key.
   * @param signBytesHex Unsigned transaction sign bytes hexstring.
   * @param privateKey The private key.
   * @returns Signature. Does not include tx.
   */
  static generateSignature(
    signBytesHex: string,
    privateKey: string | Buffer
  ): string {
    const msgHash = Utils.sha256(signBytesHex);
    const msgHashHex = Buffer.from(msgHash, 'hex');
    const signature = ecc.sign(
      msgHashHex,
      Buffer.from(privateKey.toString(), 'hex')
    ); // enc ignored if buffer
    return signature;
  }

  /**
   * Verifies a signature (64 byte <r,s>) given the sign bytes and public key.
   * @param sigHex The signature hexstring.
   * @param signBytesHex Unsigned transaction sign bytes hexstring.
   * @param publicKeyHex The public key.
   * @returns Signature. Does not include tx.
   */
  static verifySignature(
    sigHex: string,
    signBytesHex: string,
    publicKeyHex: string
  ): string {
    const publicKey = Buffer.from(publicKeyHex, 'hex');
    if (!ecc.isPoint(publicKey)) throw new Error('Invalid public key provided');
    const msgHash = Utils.sha256(signBytesHex);
    const msgHashHex = Buffer.from(msgHash, 'hex');
    return ecc.verify(msgHashHex, publicKey, Buffer.from(sigHex, 'hex'));
  }

  /**
   * Generates a keystore object (web3 secret storage format) given a private key to store and a password.
   * @param privateKeyHex The private key hexstring.
   * @param password The password.
   * @returns The keystore object.
   */
  static generateKeyStore(privateKeyHex: string, password: string): object {
    const salt = cryp.randomBytes(32);
    const iv = cryp.randomBytes(16);
    const cipherAlg = 'aes-256-ctr';

    const kdf = 'pbkdf2';
    const kdfparams = {
      dklen: 32,
      salt: salt.toString('hex'),
      c: 262144,
      prf: 'hmac-sha256',
    };

    const derivedKey = cryp.pbkdf2Sync(
      Buffer.from(password),
      salt,
      kdfparams.c,
      kdfparams.dklen,
      'sha256'
    );
    const cipher = cryp.createCipheriv(cipherAlg, derivedKey.slice(0, 32), iv);
    if (!cipher) {
      throw new Error('Unsupported cipher');
    }

    const ciphertext = Buffer.concat([
      cipher.update(Buffer.from(privateKeyHex, 'hex')),
      cipher.final(),
    ]);
    const bufferValue = Buffer.concat([
      derivedKey.slice(16, 32),
      Buffer.from(ciphertext.toString(), 'hex'),
    ]);

    return {
      version: 1,
      id: uuid.v4({
        random: cryp.randomBytes(16),
      }),
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
  static getPrivateKeyFromKeyStore(keystore: string | object, password: string): string {
    if (!is.string(password)) {
      throw new Error('No password given.');
    }

    const json = is.object(keystore) ? keystore : JSON.parse(keystore.toString());
    const kdfparams = json.crypto.kdfparams;

    if (kdfparams.prf !== 'hmac-sha256') {
      throw new Error('Unsupported parameters to PBKDF2');
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
        throw new Error(
          'Keystore mac check failed (sha3 & sha256) wrong password?'
        );
      }
    }

    const decipher = cryp.createDecipheriv(
      json.crypto.cipher,
      derivedKey.slice(0, 32),
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
    return bip39.generateMnemonic(MNEMONIC_LEN);
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
    derive = true,
    index = 0,
    password = ''
  ): string {
    if (!bip39.validateMnemonic(mnemonic)) {
      throw new Error('wrong mnemonic format');
    }
    const seed = bip39.mnemonicToSeedSync(mnemonic, password);
    if (derive) {
      const master = bip32.fromSeed(seed);
      const child = master.derivePath(HDPATH + index);
      if (
        typeof child === 'undefined' ||
        typeof child.privateKey === 'undefined'
      ) {
        throw new Error('error getting private key from mnemonic');
      }
      return child.privateKey.toString('hex');
    }
    return seed.toString('hex');
  }
}
