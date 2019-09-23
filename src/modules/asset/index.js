/** @module asset */
import AbstractModule from "../module"
import {Method} from "../../constants"
import {isEmpty} from "../../utils"

export default class Asset extends AbstractModule {
    /**
     *
     * @param provider {WsProvider|HttpProvider} - agent of network
     * @param opt {object} - other configurable parameters
     * @return {Slashing}
     */
    constructor(provider, opt) {
        super(provider, opt);
    }

    /**
     * Query token by unique id
     *
     * @param id {string} - token's id
     * @return {Promise}
     */
    getToken(id) {
        if (isEmpty(id)) {
            throw new Error("token id is empty");
        }
        return super.__get(Method.GetToken, id);
    }

    /**
     * Query tokens by condition
     *
     * @param source {string} - the source of the destination token, options: native, external, gateway
     * @param gateway {string} - the owner address of the destination token, optional when source is native, ignored when source is not native
     * @param owner {string} - the gateway moniker of the destination token, optional when source is gateway
     * @return {Promise}
     */
    getTokens(source,gateway,owner) {
        return super.__get(Method.GetTokens, source,gateway,owner);
    }

    /**
     * Query the gateway with the specified moniker
     *
     * @param moniker {string} - the unique name of the destination gateway
     * @return {Promise}
     */
    getGateway(moniker) {
        if (isEmpty(moniker)) {
            throw new Error("moniker is empty");
        }
        return super.__get(Method.GetGateway, moniker);
    }

    /**
     * Query all the gateways with an optional owner
     *
     * @param owner {string} - the owner address to be queried
     * @return {Promise}
     */
    getGateways(owner) {
        return super.__get(Method.GetGateways, owner);
    }

    /**
     * Query the fee for the creation of the gateway with the given moniker
     *
     * @param moniker {string} - he unique name of a gateway
     * @return {Promise}
     */
    getGatewayFee(moniker) {
        if (isEmpty(moniker)) {
            throw new Error("moniker is empty");
        }
        return super.__get(Method.GetGatewayFee, moniker);
    }

    /**
     * Query the fees for the issuance and minting of the token with the given id
     *
     * @param id {string} - he unique name of a gateway
     * @return {Promise}
     */
    getTokenFee(id) {
        if (isEmpty(id)) {
            throw new Error("token id is empty");
        }
        return super.__get(Method.GetTokenFee, id);
    }
}
