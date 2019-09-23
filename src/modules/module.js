import * as crypto from "iris-crypto"
import {isEmpty, deepCopy, optional} from "../utils"
import ApiRouter from "./router"
import {Method} from "../constants"

export default class AbstractModule {

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
        if (isEmpty(address)) {
            throw new Error("address is empty");
        }
        return this.__get(Method.GetAccount, address)
    }


    /**
     * Information about the connected node
     *
     * @return {Promise}
     */
    async __getNodeInfo() {
        return this.__get(Method.GetNodeInfo);
    }

    async __get(method, ...args) {
        let handler = ApiRouter.getHandler(this.opt.chain,method);
        if (!handler) {
            throw new Error(`no handler found ${method}`);
        }
        return this.provider.get(handler(args));
    }

    /**
     * query chain-id from the Lcd
     *
     * @return {Promise}
     */
    async __getAndSetChainId() {
        let chain_id = this.opt.chain_id;
        if (!chain_id) {
            let nodeInfo = await this.__getNodeInfo();
            chain_id = nodeInfo.network
        }
        this.opt.chain_id = chain_id;
        return chain_id
    }

    async __checkAndSetConfig(singer, config) {
        if (!config) {
            config = {}
        }
        let conf = deepCopy(config);
        conf.fee = optional(conf.fee, this.opt.fee);
        conf.gas = optional(conf.gas, this.opt.gas);
        conf.memo = optional(conf.memo, this.opt.memo);
        conf.timeout = optional(conf.timeout, this.opt.timeout);
        conf.chain = optional(conf.chain, this.opt.chain);
        conf.network = optional(conf.network, this.opt.network);
        conf.pub_key = optional(conf.pub_key, this.opt.pub_key);
        conf.private_key = optional(conf.private_key, this.opt.private_key);
        conf.chain_id = optional(conf.chain_id, await this.__getAndSetChainId());
        conf.mode = optional(conf.mode, this.opt.mode);
        conf.mode = optional(conf.mode, 'sync');
        conf.simulate = optional(conf.simulate, this.opt.simulate);
        conf.simulate = optional(conf.simulate, false);

        if (isEmpty(conf.fee)) {
            throw new Error("fee is empty")
        }

        if (isEmpty(conf.gas)) {
            throw new Error("gas is empty")
        }

        if (isEmpty(conf.chain)) {
            throw new Error("chain is empty")
        }

        if (isEmpty(conf.network)) {
            throw new Error("gas is empty")
        }

        if (isEmpty(conf.private_key) && !conf.simulate) {
            throw new Error("private_key is empty")
        }

        if (isEmpty(conf.chain_id)) {
            throw new Error("chain_id is empty")
        }

        if (isEmpty(conf.txType)) {
            throw new Error("txType is empty")
        }

        let account = await this.__getAccount(singer);
        if (isEmpty(account)) {
            throw new Error(`address:${singer} is not existed`)
        }
        if (isEmpty(account.address)) {
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
        let builder = crypto.getBuilder(opts.chain, opts.network);
        let stdTx;
        if (opts.simulate) {
            if (!opts.pub_key) {
                throw new Error("in simulate mode,you must provide address's public key(bech32|hex)")
            }
            stdTx = builder.buildTx(req);
            stdTx.SetPubKey(opts.pub_key);
        } else {
            stdTx = builder.buildAndSignTx(req, opts.private_key);
        }

        let urlHandler = ApiRouter.getHandler(this.opt.chain,Method.Broadcast);
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
