/**
 * @module IrisClient
 */
const ProviderFactory = require("./net").ProviderFactory;
const MethodFactory = require("./modules");
const camel = require("camelcase");

class IrisClient {
    /**
     *
     * @param uri
     * @returns {IrisClient}
     */
    constructor(uri = "http://irisnet-lcd.rainbow.one/"){
        this.provider = ProviderFactory.create(uri);
        return new Proxy(this, {
            get: (target, name) => {
                if(target[name]) {
                    return target[name];
                }
                let factory = new MethodFactory(this.provider);
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
     * @param uri
     */
    setUri(uri){
        this.provider = ProviderFactory.create(uri);
    }

    /**
     *
     * if provider is WsProvider, close the websocket's connection
     */
    close(){
        this.provider.close()
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
const Event = require("./net").Event;
module.exports = {IrisClient,Event};