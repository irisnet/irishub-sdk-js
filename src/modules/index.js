/**
 * @module MethodFactory
 */
const Bank = require("./bank");
const Stake = require("./stake");

class MethodFactory {

    /**
     *
     * @param provider
     */
    constructor(provider){
        this.provider = provider;
        this.methods = {};
        this._register(new Bank(provider));
        this._register(new Stake(provider));
    }

    /**
     *
     * @param name
     * @returns {boolean}
     */
    hasMethod(name){
        return typeof this.methods[name] !== 'undefined';
    };

    /**
     *
     * @param name
     */
    createMethod(name) {
        if (this.hasMethod(name)){
            return this.methods[name];
        }
        throw new Error(`not found this method:${name}`)
    }

    /**
     *
     * @param module
     * @private
     */
    _register(module){
       Object.getOwnPropertyNames(Object.getPrototypeOf(module)).forEach((name) => {
           if(name !== "constructor"){
               if(this.methods[name]){
                   throw new Error(`method : ${name} has already register`)
               }
               this.methods[name] = module
           }
       })

    }
}
module.exports = MethodFactory;