import { Client } from '../client';
import * as types from '../types';
export declare class Stake {
    client: Client;
    constructor(client: Client);
    queryDelegation(delegatorAddr: string, validatorAddr: string): Promise<types.Delegation>;
    queryDelegations(delegatorAddr: string): Promise<types.Delegation[]>;
    queryUnbondingDelegation(delegatorAddr: string, validatorAddr: string): Promise<types.UnbondingDelegation>;
    queryUnbondingDelegations(delegatorAddr: string): Promise<types.UnbondingDelegation[]>;
    queryRedelegation(delegatorAddr: string, srcValidatorAddr: string, dstValidatorAddr: string): Promise<types.Redelegation[]>;
    queryRedelegations(delegatorAddr: string): Promise<types.Redelegation[]>;
    queryDelegationsTo(validatorAddr: string): Promise<types.Delegation[]>;
    queryUnbondingDelegationsFrom(validatorAddr: string): Promise<types.UnbondingDelegation[]>;
    queryRedelegationsFrom(validatorAddr: string): Promise<types.Redelegation[]>;
    queryValidator(address: string): Promise<types.Validator>;
    queryValidators(page: number, size?: number): Promise<types.Validator[]>;
    queryPool(): Promise<types.StakePool>;
    queryParams(): Promise<types.StakeParams>;
    delegate(validatorAddr: string, amount: types.Coin, baseTx: types.BaseTx): Promise<types.ResultBroadcastTx>;
    /**
     * Undelegate from a validator
     * @param validatorAddr
     * @param amount Amount to be unbonded in iris-atto
     */
    unbond(validatorAddr: string, amount: string, baseTx: types.BaseTx): Promise<types.ResultBroadcastTx>;
    /**
     * Undelegate from a validator
     * @param validatorAddr
     * @param amount Amount to be unbonded in iris-atto
     */
    redelegate(validatorSrcAddr: string, validatorDstAddr: string, amount: string, baseTx: types.BaseTx): Promise<types.ResultBroadcastTx>;
    /**
     * TODO: Historical issue, irishub only accepts 10 decimal places due to `sdk.Dec`
     */
    private appendZero;
}
