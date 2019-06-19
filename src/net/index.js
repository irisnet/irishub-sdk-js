const WsProvider = require("./ws-provider");
const HttpProvider = require("./http-provider");
const Url = require("url");
const wsProto = ["ws:", "wss:"];
const httpProto = ["http:", "https:"];
const allProto = wsProto.concat(httpProto);


class ProviderFactory{
    /**
     * @return {ProviderFactory}
     */
    constructor(){}

    /**
     * create a agent of network by uri
     *
     * @param {string} - lcd's url
     * @returns {HttpProvider|Error|WsProvider}
     */
    static create(server,option = {}){
        if(typeof server !== "string"){
           return server
        }
        let { protocol, hostname, port } = Url.parse(server);
        // default to http
        if (!allProto.includes(protocol)) {
            let p = Url.parse(`http://${server}`);
            protocol = p.protocol;
            hostname = p.hostname;
            port = p.port
        }
        server = !port ? `${protocol}//${hostname}` : `${protocol}//${hostname}:${port}`;

        if (wsProto.includes(protocol)) {
            return new WsProvider(server,option)
        } else if (httpProto.includes(protocol)) {
            return new HttpProvider(server,option)
        } else {
            return Error("invalid protocol")
        }
    }

    static getEvent(){
        return Event
    }
}

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
     * @return {Event}
     */
    constructor(){}

    /**
     *
     * @param {string} - transaction's hash
     * @returns {{query: *}}
     */
    static queryTxForEvent(hash){
        return queryForEvent("Tx",`tx.hash=${hash}`)
    };

    /**
     *
     * @param type {string} - event's type,valid value : NewBlock|NewBlockHeader|Tx|ValidatorSetUpdates|CompleteProposal|Lock|NewRound|NewRoundStep|Polka|Relock|TimeoutPropose|TimeoutWait|Unlock|ValidBlock|Vote
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

module.exports = ProviderFactory;