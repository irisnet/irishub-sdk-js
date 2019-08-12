import {AbstractModule} from "../module"

export class Version extends AbstractModule{
    /**
     *
     * @param provider {WsProvider|HttpProvider} - agent of network
     * @param opt {object} - other configurable parameters
     * @return {Version}
     */
    constructor(provider,opt) {
        super(provider,opt);
    }

    /**
     * Get the version of irislcd running locally to compare against expected
     *
     * @return {Promise}
     */
    getLcdVersion(){
        return super.__get("getLcdVersion");
    }

    /**
     * Get the version of node that lcd connected
     *
     * @return {Promise}
     */
    getNodeVersion(){
        return super.__get("getNodeVersion");
    }
}
