import {ensureAllUInt256,parseRat} from "../../utils"
import {_0,_1} from "../../constants"
import BigNumber from 'bignumber.js'
import {AbstractModule} from "../module"
import {Method} from "../../constants"

export class CoinSwap extends AbstractModule{
    /**
     *
     * @param provider {WsProvider|HttpProvider} - agent of network
     * @param opt {object} - other configurable parameters
     * @return {Bank}
     */
    constructor(provider,opt) {
        super(provider,opt)
    }

    /**
     *
     * @param denom
     * @return {Promise<*>}
     */
    getReservePool(denom){
        return super.__get(Method.GetReservePool,denom)
    }

    /**
     *
     * @param input
     * @param output
     * @param deadline
     * @param is_buy_order
     * @param config {Object} - config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options
     */
    swap(input,output,deadline,is_buy_order,config = {}){
        //TODO
        let msg = {
        };
        config.txType = "swap-order";
        return super.__sendTransaction(input.address,msg,config);
    }
    /**
     * The function facilitates trading an exact amount of Iris for a specified token.
     * @param outputTokenDenom {string} - Address of output token.
     * @param inputIrisAmount {number} - The input amount of Iris.
     */
    async tradeExactIrisForTokens(outputTokenDenom,inputIrisAmount){
        let pool = await this.getReservePool(outputTokenDenom);
        return getInputPrice(inputIrisAmount,pool.iris.amount,pool.token.amount,pool.fee)
    }

    /**
     * The function facilitates trading Iris for an exact amount of a specified token.
     * @param outputTokenDenom {string} - Denom of output token.
     * @param outputTokenAmount {number} - Denom of output token.
     */
    async tradeIrisForExactTokens(outputTokenDenom,outputTokenAmount){
        let pool = await this.getReservePool(outputTokenDenom);
        return getOutputPrice(outputTokenDenom,pool.iris.amount,pool.token.amount,pool.fee)
    }

    /**
     * The function facilitates trading an exact amount of a specified token for Iris.
     * @param inputTokenDenom {string} - Denom of input token.
     * @param inputTokenAmount {number} - Amount of input token.
     */
    async tradeExactTokensForIris(inputTokenDenom,inputTokenAmount){
        let pool = await this.getReservePool(inputTokenDenom);
        return getInputPrice(inputTokenAmount,pool.token.amount,pool.iris.amount,pool.fee)
    }

    /**
     * The function facilitates trading a specified token for an exact amount of Iris.
     * @param inputTokenDenom {string} - Denom of input token.
     * @param outputIrisAmount {number} - The output amount of iris
     */
    async tradeTokensForExactIris(inputTokenDenom,outputIrisAmount){
        let pool = await this.getReservePool(inputTokenDenom);
        return getOutputPrice(outputIrisAmount,pool.token.amount,pool.iris.amount,pool.fee)
    }

    /**
     * The function facilitates trading an exact amount of a specified token for another token.
     * @param inputTokenDenom {string} - Denom of input token.
     * @param outputTokenDenom {string} - Denom of output token.
     * @param inputTokenAmount {number} - The input amount of tokens
     */
    async tradeExactTokensForTokens(inputTokenDenom,outputTokenDenom,inputTokenAmount){
        let irisAmount = await this.tradeExactTokensForIris(inputTokenDenom,inputTokenAmount);
        return this.tradeExactIrisForTokens(outputTokenDenom,irisAmount)
    }

    /**
     * The function facilitates trading an exact amount of a specified token for another token
     * @param inputTokenDenom {string} - Denom of input token.
     * @param outputTokenDenom {string} - Denom of output token.
     * @param outputTokenAmount {number} - The output amount of tokens
     */
    async tradeTokensForExactTokens(inputTokenDenom,outputTokenDenom,outputTokenAmount){
        let irisAmount = await this.tradeIrisForExactTokens(outputTokenDenom,outputTokenAmount);
        return this.tradeTokensForExactIris(inputTokenDenom,outputTokenAmount)
    }
}

function getInputPrice(inputAmount, inputReserve, outputReserve, fee) {
    inputAmount = new BigNumber(inputAmount);
    inputReserve = new BigNumber(inputReserve);
    outputReserve = new BigNumber(outputReserve);
    fee = new BigNumber(fee);

    ensureAllUInt256([inputAmount, inputReserve, outputReserve,fee]);

    let deltaFee = parseRat(new BigNumber(1).minus(fee));
    if (inputReserve.isLessThanOrEqualTo(_0) || outputReserve.isLessThanOrEqualTo(_0)) {
        throw Error(`Both inputReserve '${inputReserve}' and outputReserve '${outputReserve}' must be non-zero.`)
    }

    const inputAmountWithFee  = inputAmount.multipliedBy(deltaFee.numerator);
    const numerator  = inputAmountWithFee.multipliedBy(outputReserve);
    const denominator  = inputReserve.multipliedBy(deltaFee.denominator).plus(inputAmountWithFee);
    const outputAmount = numerator.dividedToIntegerBy(denominator);

    ensureAllUInt256([inputAmountWithFee, numerator, denominator, outputAmount]);

    return outputAmount
}

function getOutputPrice(outputAmount , inputReserve , outputReserve, fee) {
    outputAmount = new BigNumber(outputAmount);
    inputReserve = new BigNumber(inputReserve);
    outputReserve = new BigNumber(outputReserve);
    fee = new BigNumber(fee);

    ensureAllUInt256([outputAmount, inputReserve, outputReserve]);

    if (inputReserve.isLessThanOrEqualTo(_0) || outputReserve.isLessThanOrEqualTo(_0)) {
        throw Error(`Both inputReserve '${inputReserve}' and outputReserve '${outputReserve}' must be non-zero.`)
    }
    let deltaFee = parseRat(new BigNumber(1).minus(fee));
    const numerator = inputReserve.multipliedBy(outputAmount).multipliedBy(deltaFee.denominator);
    const denominator = outputReserve.minus(outputAmount).multipliedBy(deltaFee.numerator);
    const inputAmount = numerator.dividedToIntegerBy(denominator).plus(_1);

    ensureAllUInt256([numerator, denominator, inputAmount]);
    return inputAmount
}