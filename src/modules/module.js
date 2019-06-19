const Crypto = require("iris-crypto");
const Utils = require("../utils");
const Router = require("./router");

class AbstractModule {

    /**
     *
     * @param provider {WsProvider|HttpProvider} - agent of network
     * @return opt {Bank|Distribution|Gov|Slashing|Stake|Tm|Version}
     */
    constructor(provider, opt) {
        this.provider = provider;
        this.opt = opt;
    }

    /**
     * Get the account information on blockchain
     *
     * @param address {string} - address of account
     * @returns {*}
     */
    async __getAccount(address) {
        if (Utils.isEmpty(address)) {
            throw new Error("address is empty");
        }
        return this.__get("getAccount",address)
    }


    /**
     * Information about the connected node
     *
     * @return {Promise}
     */
    async __getNodeInfo(){
        return this.__get("getNodeInfo");
    }

    async __get(method,...args){
        let urlHandler = Router.getSubRouter(this.opt.chain).get(method);
        if(!urlHandler){
            throw new Error(`no handler found ${method}`);
        }
        return this.provider.get(urlHandler(args));
    }

    /**
     * query chain-id from the Lcd
     *
     * @return {Promise}
     */
    async __getAndSetChainId() {
        let chain_id = this.opt.chain_id;
        if (!chain_id) {
            let nodeInfo = this.__getNodeInfo();
            chain_id = nodeInfo.network
        }
        this.opt.chain_id = chain_id;
        return chain_id
    }

    async __checkAndSetConfig(singer, config) {
        if (!config) {
            config = {}
        }
        let conf = Utils.deepCopy(config);
        conf.fee = conf.fee ? conf.fee : this.opt.fee;
        conf.gas = conf.gas ? conf.gas : this.opt.gas;
        conf.memo = conf.memo ? conf.memo : this.opt.memo;
        conf.timeout = conf.timeout ? conf.timeout : this.opt.timeout;
        conf.chain = conf.chain ? conf.chain : this.opt.chain;
        conf.network = conf.network ? conf.network : this.opt.network;
        conf.pub_key = conf.pub_key ? conf.pub_key : this.opt.pub_key;
        conf.private_key = conf.private_key ? conf.private_key : this.opt.private_key;
        conf.chain_id = conf.chain_id ? conf.chain_id : await this.__getAndSetChainId();

        conf.mode = conf.mode ? conf.mode : this.opt.mode;
        conf.mode = conf.mode ? conf.mode : 'sync';

        if(!Utils.isEmpty(conf.simulate)){
            //nothing
        }else if(!Utils.isEmpty(this.opt.simulate)){
            conf.simulate = this.opt.simulate
        }else {
            conf.simulate = false
        }

        if (Utils.isEmpty(conf.fee)) {
            throw new Error("fee is empty")
        }

        if (Utils.isEmpty(conf.gas)) {
            throw new Error("gas is empty")
        }

        if (Utils.isEmpty(conf.chain)) {
            throw new Error("chain is empty")
        }

        if (Utils.isEmpty(conf.network)) {
            throw new Error("gas is empty")
        }

        if (Utils.isEmpty(conf.private_key) && !conf.simulate) {
            throw new Error("private_key is empty")
        }

        if (Utils.isEmpty(conf.chain_id)) {
            throw new Error("chain_id is empty")
        }

        if (Utils.isEmpty(conf.txType)) {
            throw new Error("txType is empty")
        }

        let account = await this.__getAccount(singer);
        if (Utils.isEmpty(account)) {
            throw new Error(`address:${singer} is not existed`)
        }
        if (Utils.isEmpty(account.address)) {
            account = account.value
        }
        conf.account_number = Number.parseInt(account.account_number);
        conf.sequence = Number.parseInt(account.sequence);
        return conf
    }

    /**
     *
     * @param singer {string} singer of transaction
     * @param msg {Object}
     * @param config
     * @return {Promise<{resp: *, hash: string}>}
     */
    async __sendTransaction(singer, msg, config) {
        let opts = await this.__checkAndSetConfig(singer, config);
        let req = {
            chain_id: opts.chain_id,
            from: singer,
            account_number: opts.account_number,
            sequence: opts.sequence,
            fees: opts.fee,
            gas: opts.gas,
            memo: opts.memo,
            type: opts.txType,
            msg: msg
        };
        let builder = Crypto.getBuilder(opts.chain, opts.network);
        let stdTx;
        if(opts.simulate){
            if(!opts.pub_key){
                throw new Error("in simulate mode,you must provide address's public key(bech32|hex)")
            }
            stdTx = builder.buildTx(req);
            stdTx.SetPubKey(opts.pub_key);
        }else {
            stdTx = builder.buildAndSignTx(req, opts.private_key);
        }

        let urlHandler = Router.getSubRouter(this.opt.chain).get("broadcast");
        if(!urlHandler){
            throw new Error(`no handler found ${method}`);
        }
        return this.provider.post(urlHandler(opts), stdTx.GetData(), {
            timeout: opts.timeout
        }).then(res => {
            return {
                hash: stdTx.Hash().hash,
                resp: res
            }
        });
    }
}

module.exports = AbstractModule;