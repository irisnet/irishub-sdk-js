const WsProvider = require("./ws-provider");
const HttpProvider = require("./http-provider");
const Url = require("url");
const wsProto = ["ws:", "wss:"];
const httpProto = ["http:", "https:"];

const queryForEvent = (type,...param) =>{
    let args = new Array();
    args.push(buildEvt(type));
    args = [...args,...param];
    return buildQuery(args.join(" AND "))
};
const buildEvt = (type) =>{
    return `tm.event='${type}'`
};
const buildQuery = (param) =>{
    return {query:param}
};

class Event {
    /**
     *
     * @param hash
     * @returns {{query: *}}
     */
    static queryTxForEvent(hash){
        return queryForEvent("Tx",`tx.hash=${hash}`)
    };

    /**
     *
     * @param type
     * @param param
     * @returns {{query: *}}
     */
    static queryForEvent(type,param){
        if (typeof param === "undefined") {
            return queryForEvent(type)
        }
        return queryForEvent(type,param)
    }
}

Event.NewBlock = queryForEvent("NewBlock");
Event.NewBlockHeader = queryForEvent("NewBlockHeader");
Event.Tx = queryForEvent("Tx");
Event.ValidatorSetUpdates = queryForEvent("ValidatorSetUpdates");
Event.CompleteProposal = queryForEvent("CompleteProposal");
Event.Lock = queryForEvent("Lock");
Event.NewRound = queryForEvent("NewRound");
Event.NewRoundStep = queryForEvent("NewRoundStep");
Event.Polka = queryForEvent("Polka");
Event.Relock = queryForEvent("Relock");
Event.TimeoutPropose = queryForEvent("TimeoutPropose");
Event.TimeoutWait = queryForEvent("TimeoutWait");
Event.Unlock = queryForEvent("Unlock");
Event.ValidBlock = queryForEvent("ValidBlock");
Event.Vote = queryForEvent("Vote");

class ProviderFactory{

    /**
     *
     * @param uri
     * @returns {HttpProvider|Error|WsProvider}
     */
    static create(uri){
        let { protocol, hostname, port } = Url.parse(uri);
        uri = !port ? `${protocol}//${hostname}` : `${protocol}//${hostname}:${port}`;

        if (wsProto.includes(protocol)) {
            return new WsProvider(uri)
        } else if (httpProto.includes(protocol)) {
            return new HttpProvider(uri)
        } else {
            return Error("invalid protocol")
        }
    }
}

module.exports = {ProviderFactory,Event};