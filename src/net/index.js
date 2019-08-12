import {WsProvider} from "./ws-provider"
import {HttpProvider} from "./http-provider"

const Url = require("url");
const wsProto = ["ws:", "wss:"];
const httpProto = ["http:", "https:"];
const allProto = wsProto.concat(httpProto);

export class ProviderFactory{
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
}