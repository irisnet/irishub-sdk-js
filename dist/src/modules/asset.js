"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types = require("../types");
const is = require("is_js");
const errors_1 = require("../errors");
/**
 * IRISHub allows individuals and companies to create and issue their own tokens.
 *
 * [More Details](https://www.irisnet.org/docs/features/asset.html)
 *
 * @category Modules
 * @since v0.17
 */
class Asset {
    /** @hidden */
    constructor(client) {
        this.client = client;
    }
    /**
     * Query details of a token
     * @param symbol The token symbol
     * @returns
     * @since v0.17
     */
    queryToken(symbol) {
        if (is.empty(symbol)) {
            throw new errors_1.SdkError('symbol can not be empty');
        }
        return this.client.rpcClient.abciQuery('custom/asset/token', {
            Symbol: this.getCoinName(symbol),
        });
    }
    /**
     * Query details of a group of tokens
     * @param owner The optional token owner address
     * @returns
     * @since v0.17
     */
    queryTokens(owner) {
        return this.client.rpcClient.abciQuery('custom/asset/tokens', {
            Owner: owner,
        });
    }
    /**
     * Query the asset related fees
     * @param symbol The token symbol
     * @returns
     * @since v0.17
     */
    queryFees(symbol) {
        return this.client.rpcClient.abciQuery('custom/asset/fees', {
            Symbol: symbol,
        });
    }
    /**
     * Get coin name by denom
     *
     * **NOTE:** For iris units in irishub v0.17, only support `iris` and `iris-atto`
     *
     * @param denom
     * @since v0.17
     */
    getCoinName(denom) {
        denom = denom.toLowerCase();
        if (denom === types.IRIS || denom === types.IRIS_ATTO) {
            return types.IRIS;
        }
        if (!denom.startsWith(types.IRIS + '-') &&
            !denom.endsWith(types.MIN_UNIT_SUFFIX)) {
            return denom;
        }
        return denom.substr(0, denom.indexOf(types.MIN_UNIT_SUFFIX));
    }
}
exports.Asset = Asset;
//# sourceMappingURL=asset.js.map