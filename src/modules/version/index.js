/** @module version */
import AbstractModule from "../module"
import {Method} from "../../constants"

class Version extends AbstractModule {
    /**
     *
     * @param provider {WsProvider|HttpProvider} - agent of network
     * @param opt {object} - other configurable parameters
     * @return {Version}
     */
    constructor(provider, opt) {
        super(provider, opt);
    }

    /**
     * Get the version of irislcd running locally to compare against expected
     *
     * @return {Promise}
     */
    getLcdVersion() {
        return super.__get(Method.GetLcdVersion);
    }

    /**
     * Get the version of node that lcd connected
     *
     * @return {Promise}
     */
    getNodeVersion() {
        return super.__get(Method.GetNodeVersion);
    }
}

export default Version;
