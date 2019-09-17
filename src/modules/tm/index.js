/** @module tendermint */
import {AbstractModule} from "../module"
import {Method} from "../../constants"

export class Tm extends AbstractModule {
    /**
     *
     * @param provider {WsProvider|HttpProvider} - agent of network
     * @param opt {object} - other configurable parameters
     * @return {Tm}
     */
    constructor(provider, opt) {
        super(provider, opt);
    }

    /**
     * Information about the connected node
     *
     * @return {Promise}
     */
    getNodeInfo() {
        return super.__getNodeInfo();
    }

    /**
     * Get if the node is currently syning with other nodes
     *
     * @return {Promise}
     */
    getSyncing() {
        return super.__get(Method.GetSyncing);
    }

    /**
     * Get a  block
     *
     * @param height {number} - block's height,optional,if null,will return the latest block
     * @return {Promise}
     */
    getBlock(height) {
        return super.__get(Method.GetBlock, height);
    }

    /**
     * Get a block result
     *
     * @param height {number} - block's height,optional,if null,will return the latest block's result
     * @return {Promise}
     */
    getBlockResult(height) {
        return super.__get(Method.GetBlockResult, height);
    }

    /**
     * Get the validator set
     * @param height {number} - block's height,optional,if null,will return the latest validator set
     * @return {Promise}
     */
    getValidatorSet(height) {
        return super.__get(Method.GetValidatorSet, height);
    }

    /**
     * Get a Tx by hash
     *
     * @param hash {string} - transaction's hash
     * @return {Promise}
     */
    getTx(hash) {
        return super.__get(Method.GetTx, hash);
    }
}
