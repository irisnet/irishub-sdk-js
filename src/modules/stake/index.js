/**
 * @module Stake
 */

const Api = {
    validators:"stake/validators"
};
class Stake{
    constructor(provider){
        this.provider = provider;
    }

    /**
     *
     * @returns {*}
     */
    getValidators(){
        return this.provider.get(Api.validators);
    }

    static methods(){
        return {
            getValidators:Stake
        }
    }
}
module.exports = Stake;