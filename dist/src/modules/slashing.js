"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slashing = void 0;
const slashing_1 = require("../types/slashing");
const errors_1 = require("../errors");
const utils_1 = require("../utils");
const Bech32 = require("bech32");
/**
 * In Proof-of-Stake blockchain, validators will get block provisions by staking their token.
 * But if they failed to keep online, they will be punished by slashing a small portion of their staked tokens.
 * The offline validators will be removed from the validator set and put into jail, which means their voting power is zero.
 * During the jail period, these nodes are not even validator candidates. Once the jail period ends, they can send [[unjail]] transactions to free themselves and become validator candidates again.
 *
 * [More Details](https://www.irisnet.org/docs/features/slashing.html)
 *
 * @category Modules
 */
class Slashing {
    /** @hidden */
    constructor(client) {
        this.client = client;
    }
    /**
     * Query on-chain parameters of Slashing
     * @returns
     * @since v1.0
     */
    queryParams() {
        // return this.client.rpcClient.abciQuery<types.SlashingParams>(
        //   'custom/slashing/parameters'
        // );
        throw new errors_1.SdkError('Not supported');
    }
    /**
     * Query a validator's signing information
     * @param bech32ConsAddress Bech32 prefixed validator consensus address
     * @param height Block height to query, omit to get most recent provable block
     * @returns
     * @since v0.17
     */
    querySigningInfo(bech32ConsAddress, height) {
        const key = utils_1.StoreKeys.getSigningInfoKey(bech32ConsAddress);
        return this.client.rpcClient
            .queryStore(key, 'slashing', height)
            .then(res => {
            if (!res || !res.response || !res.response.value) {
                throw new errors_1.SdkError('Validator not found');
            }
            return this.client.protobuf.deserializeSigningInfo(res.response.value);
        });
    }
    /**
     * Unjail a validator previously jailed
     * @param baseTx
     * @returns
     * @since v0.17
     */
    unjail(baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const val = this.client.keys.show(baseTx.from);
            const words = Bech32.decode(val).words;
            const validatorAddr = Bech32.encode(this.client.config.bech32Prefix.ValAddr, words);
            const msgs = [new slashing_1.MsgUnjail(validatorAddr)];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
}
exports.Slashing = Slashing;
//# sourceMappingURL=slashing.js.map