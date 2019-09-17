import ModuleManager from "./modules"
import ProviderFactory from "./net"
import {isEmpty, optional} from "./utils"
import ApiRouter from "./modules/router"
import {defaultOpts, defaultServer,Method, rpcMethods} from "./constants"
import * as crypto from "iris-crypto"

const camel = require("camelcase");

export class IrisClient {

    /**
     * javascript client for irishub,wrap all functions that under modules package
     *
     * @param server {string|Provider} - lcd's uri
     * @param option {object} - other configurable parameters
     * @returns {IrisClient}
     */
    constructor(server = defaultServer, option = defaultOpts) {
        this.__init(option);
        this.provider = ProviderFactory.create(server, option);
        return this.__createProxy(this.provider, option)
    }

    __init(option) {
        this.option = {
            chain: optional(option.chain, defaultOpts.chain),
            network: optional(option.network, defaultOpts.network),
            fee: optional(option.fee, defaultOpts.fee),
            gas: optional(option.gas, defaultOpts.gas),
            timeout: optional(option.timeout, defaultOpts.timeout),
        }
    }

    /**
     *
     * @param provider
     * @param option
     * @return {IrisClient}
     * @private
     */
    __createProxy(provider, option) {
        //overwrite property
        this.provider = provider;
        this.option = option;
        return new Proxy(this, {
            get: (target, name) => {
                if (target[name]) {
                    return target[name];
                }
                let factory = new ModuleManager(provider, option);
                let fn = function (...args) {
                    let o = factory.createMethod(name);
                    return Reflect.apply(o[name], o, args);
                };
                return fn;
            }
        });
    }

    /**
     *  change provider by uri
     *
     * @param uri {string} - lcd's uri
     */
    clone(uri, option) {
        let provider = this.provider;
        if (!isEmpty(uri)) {
            provider = ProviderFactory.create(uri);
        }

        if (isEmpty(option)) {
            option = this.option;
        }

        return this.__createProxy(provider, option)
    }

    /**
     *
     * if provider is WsProvider, close the websocket's connection
     */
    close() {
        this.provider.close()
    }

    /**
     * Integrate iris-crypto's ability to create accounts
     *
     * @return {Crypto}
     */
    getCrypto() {
        return crypto.getCrypto(this.option.chain, this.option.network)
    }

    /**
     * Integrate iris-crypto's ability to build transaction
     *
     * @return {Crypto}
     */
    getBuilder() {
        return crypto.getBuilder(this.option.chain, this.option.network)
    }

    /**
     * send a signed tx to blockchain
     *
     * @param tx {Tx}
     * @param opts {Object}
     */
    sendRawTransaction(tx, opts) {
        let chain = optional(opts.chain,this.option.chain);
        let urlHandler = ApiRouter.getSubRouter(chain).get(Method.Broadcast);
        if(!urlHandler){
            throw new Error(`no handler found broadcast`);
        }
        return this.provider.post(urlHandler(opts), tx, {
            timeout: opts.timeout
        });
    }
}

// add methods to IrisClient class
for (let name of rpcMethods) {
    IrisClient.prototype[camel(name)] = function (args, listener) {
        return this.provider.call(name, args, listener)
            .then((res) => {
                return res
            })
    }
}
