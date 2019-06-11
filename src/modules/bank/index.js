/**
 * @module Bank
 */
const Utils = require("../../utils");
const Api = {
    account:"auth/accounts/%s"
};

class Bank{
    constructor(provider){
        this.provider = provider;
    }

    /**
     *
     * @param address
     * @returns {*}
     */
    getAccount(address){
        return this.provider.get(Utils.parseUrl(Api.account,address));
    }
}
module.exports = Bank;