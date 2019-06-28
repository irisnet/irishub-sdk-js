const AbstractModule = require("../module");
class Slashing extends AbstractModule{
    /**
     *
     * @param provider {WsProvider|HttpProvider} - agent of network
     * @param opt {object} - other configurable parameters
     * @return {Slashing}
     */
    constructor(provider,opt) {
        super(provider,opt);
    }

    /**
     * Get sign info of given validator
     *
     * @param valPubkey {string} - validator's consensus public key
     * @return {Promise}
     */
    getSigningInfo(valPubkey){
        return super.__get("getSigningInfo",valPubkey);
    }
}

module.exports = Slashing;