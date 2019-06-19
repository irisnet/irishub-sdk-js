const Bank = require("./bank");
const Stake = require("./stake");
const Tm = require("./tm");
const Version = require("./version");
const Slashing = require("./slashing");
const Gov = require("./gov");
const Distribution = require("./distr");

class ModuleManager {

    /**
     *
     * @param provider
     */
    constructor(provider,opt){
        this.provider = provider;
        this._add(new Bank(provider,opt));
        this._add(new Stake(provider,opt));
        this._add(new Tm(provider,opt));
        this._add(new Version(provider,opt));
        this._add(new Slashing(provider,opt));
        this._add(new Gov(provider,opt));
        this._add(new Distribution(provider,opt));
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
    _add(module){
       Object.getOwnPropertyNames(Object.getPrototypeOf(module)).forEach((name) => {
           if(!this.methods){
               this.methods = {}
           }
           if(name !== "constructor"){
               if(this.methods[name]){
                   throw new Error(`method : ${name} has already register`)
               }
               this.methods[name] = module
           }
       })

    }
}
module.exports = ModuleManager;