const ProviderFactory = require("./net");
const ModuleManager = require("./modules");
const camel = require("camelcase");
const crypto = require("iris-crypto");
const utils = require("./utils");

const defaultOpts = {
    network:"mainnet",
    chain_id: "irishub",
    chain: "iris",
    timeout:2000,
    fee:{denom: "iris-atto", amount: 600000000000000000},
    gas:30000,
    mode:"sync",
    simulate:false
};

const defaultServer = "https://rpc.irisnet.org/";

class IrisClient {

    /**
     * javascript client for irishub,wrap all functions that under modules package
     *
     * @param server {string|Provider} - lcd's uri
     * @param option {object} - other configurable parameters
     * @returns {IrisClient}
     */
    constructor(server = defaultServer ,option = defaultOpts){
        this.__init(option);
        this.provider = ProviderFactory.create(server,option);
        return this.__createProxy(this.provider,option)
    }

    __init(option){
        this.option = {
            chain : option.chain ? option.chain : defaultOpts.chain,
            network : option.network ? option.network : defaultOpts.network,
            fee : option.fee ? option.fee : defaultOpts.fee,
            gas :  option.gas ? option.gas :defaultOpts.gas,
            timeout : option.timeout ? option.timeout :defaultOpts.timeout,
        }
    }

    /**
     *
     * @param provider
     * @param option
     * @return {IrisClient}
     * @private
     */
    __createProxy(provider,option){
        //overwrite property
        this.provider = provider;
        this.option = option;
        return new Proxy(this, {
            get: (target, name) => {
                if(target[name]) {
                    return target[name];
                }
                let factory = new ModuleManager(provider,option);
                let fn = function (...args) {
                    let o = factory.createMethod(name);
                    return Reflect.apply(o[name],o,args);
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
    clone(uri,option){
        let provider = this.provider;
        if (!utils.isEmpty(uri)){
            provider = ProviderFactory.create(uri);
        }

        if (utils.isEmpty(option)){
            option = this.option;
        }

        return this.__createProxy(provider,option)
    }

    /**
     *
     * if provider is WsProvider, close the websocket's connection
     */
    close(){
        this.provider.close()
    }

    /**
     * Integrate iris-crypto's ability to create accounts
     *
     * @return {Crypto}
     */
    getCrypto(){
        return crypto.getCrypto(this.option.chain,this.option.network)
    }

    /**
     * Integrate iris-crypto's ability to build transaction
     *
     * @return {Crypto}
     */
    getBuilder(){
        return crypto.getBuilder(this.option.chain,this.option.network)
    }

    /**
     * send a signed tx to blockchain
     *
     * @param tx {Tx}
     * @param opts {Object}
     */
    sendRawTransaction(tx,opts){
        return this.provider.post("tx/broadcast",tx, {
            timeout: opts.timeout
        }); //TODO should support cosmos
    }
}

let rpcMethods = [
    "subscribe",
    "unsubscribe",
    "unsubscribe_all",

    "status",
    "net_info",
    "blockchain",
    "genesis",
    "health",
    "block",
    "block_results",
    "validators",
    "consensus_state",
    "dump_consensus_state",
    "broadcast_tx_commit",
    "broadcast_tx_sync",
    "broadcast_tx_async",
    "unconfirmed_txs",
    "num_unconfirmed_txs",
    "commit",
    "tx",
    "tx_search",

    "abci_query",
    "abci_info"
];
// add methods to IrisClient class
for (let name of rpcMethods) {
    IrisClient.prototype[camel(name)] = function (args, listener) {
        return this.provider.call(name, args, listener)
            .then((res) => {
                return res
            })
    }
}
IrisClient.prototype.event = ProviderFactory.getEvent();
module.exports = IrisClient;