import { Client } from '../client';
import * as types from '../types';
/**
 * This module allows you to manage your local tendermint keystore (wallets) for iris.
 *
 * **NOTE:** You need to implement the [[KeyDAO]] Interface first.
 *
 * @category Modules
 * @since v0.17
 */
export declare class Keys {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * Create a new key
     *
     * @param name Name of the key
     * @param password Password for encrypting the keystore
     * @returns Bech32 address and mnemonic
     * @since v0.17
     */
    add(name: string, password: string): {
        address: string;
        mnemonic: string;
    };
    /**
     * Recover a key
     *
     * @param name Name of the key
     * @param password Password for encrypting the keystore
     * @param mnemonic Mnemonic of the key
     * @param derive Derive a private key using the default HD path (default: true)
     * @param index The bip44 address index (default: 0)
     * @param saltPassword A passphrase for generating the salt, according to bip39
     * @returns Bech32 address
     * @since v0.17
     */
    recover(name: string, password: string, mnemonic: string, derive?: boolean, index?: number, saltPassword?: string): string;
    /**
     * Import a key from keystore
     *
     * @param name Name of the key
     * @param password Password of the keystore
     * @param keystore Keystore json or object
     * @returns Bech32 address
     * @since v0.17
     */
    import(name: string, password: string, keystore: string | types.Keystore): string;
    /**
     * Import a PrivateKey
     *
     * @param name Name of the key
     * @param password Password of the keystore
     * @param privateKey privateKey hex
     * @returns Bech32 address
     * @since v0.17
     */
    importPrivateKey(name: string, password: string, privateKey: string): string;
    /**
     * Export keystore of a key
     *
     * @param name Name of the key
     * @param keyPassword Password of the key
     * @param keystorePassword Password for encrypting the keystore
     * @returns Keystore json
     * @since v0.17
     */
    export(name: string, keyPassword: string, keystorePassword: string): string;
    /**
     * Delete a key
     *
     * @param name Name of the key
     * @param password Password of the key
     * @since v0.17
     */
    delete(name: string, password: string): void;
    /**
     * Gets address of a key
     *
     * @param name Name of the key
     * @returns Bech32 address
     * @since v0.17
     */
    show(name: string): string;
}
