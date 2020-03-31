"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../src/utils");
test('Crypto', () => __awaiter(void 0, void 0, void 0, function* () {
    // Generates mnemonic
    const mnemonic = utils_1.Crypto.generateMnemonic();
    expect(mnemonic.split(' ').length).toBe(24);
    // Gets a private key from mnemonic words.
    const privKey = utils_1.Crypto.getPrivateKeyFromMnemonic(mnemonic);
    // Calculates the public key from a given private key.
    const pubKey = utils_1.Crypto.getPublicKeyFromPrivateKey(privKey);
    // Gets an address from a public key hex.
    const address = utils_1.Crypto.getAddressFromPublicKey(pubKey, 'iaa');
    expect(address.substring(0, 3)).toBe('iaa');
    // Generate keystore
    const keystore = utils_1.Crypto.generateKeyStore(privKey, 'password', 'iaa');
    expect(JSON.parse(JSON.stringify(keystore)).address).toBe(address);
    // Get private key from keystore
    const privKey1 = utils_1.Crypto.getPrivateKeyFromKeyStore(keystore, 'password');
    expect(privKey1).toBe(privKey);
    console.log(utils_1.Crypto.encodeAddress('2F36E18CF00DA1568F72AAFD98D94C8D472022C7', 'fca'));
    console.log(Buffer.from('bXbzqbOidvLADyfR/cLVm2o6L9vcpPh+PF6O8m2sOQ4=', 'hex'));
    // TODO
}));
//# sourceMappingURL=crypto.test.js.map