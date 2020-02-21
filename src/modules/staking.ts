import { Client } from '../client';
import * as types from '../types';
import SdkError from '../errors';
import { MsgDelegate, MsgUndelegate, MsgRedelegate } from '../types/staking';
import {
  EventQueryBuilder,
  EventKey,
  EventAction,
} from '../nets/event-listener';

/**
 * This module provides staking functionalities for validators and delegators
 *
 * [More Details](https://www.irisnet.org/docs/features/stake.html)
 *
 * @category Modules
 */
export class Staking {
  /** @hidden */
  client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Query a delegation based on delegator address and validator address
   *
   * @param delegatorAddr Bech32 delegator address
   * @param validatorAddr Bech32 validator address
   * @returns
   */
  queryDelegation(
    delegatorAddr: string,
    validatorAddr: string
  ): Promise<types.Delegation> {
    return this.client.rpcClient.abciQuery<types.Delegation>(
      'custom/stake/delegation',
      {
        DelegatorAddr: delegatorAddr,
        ValidatorAddr: validatorAddr,
      }
    );
  }

  /**
   * Query all delegations made from one delegator
   *
   * @param delegatorAddr Bech32 delegator address
   * @returns
   */
  queryDelegations(delegatorAddr: string): Promise<types.Delegation[]> {
    return this.client.rpcClient.abciQuery<types.Delegation[]>(
      'custom/stake/delegatorDelegations',
      {
        DelegatorAddr: delegatorAddr,
      }
    );
  }

  /**
   * Query an unbonding-delegation record based on delegator and validator address
   *
   * @param delegatorAddr Bech32 delegator address
   * @param validatorAddr Bech32 validator address
   * @returns
   */
  queryUnbondingDelegation(
    delegatorAddr: string,
    validatorAddr: string
  ): Promise<types.UnbondingDelegation> {
    return this.client.rpcClient.abciQuery<types.UnbondingDelegation>(
      'custom/stake/unbondingDelegation',
      {
        DelegatorAddr: delegatorAddr,
        ValidatorAddr: validatorAddr,
      }
    );
  }

  /**
   * Query all unbonding-delegations records for one delegator
   *
   * @param delegatorAddr Bech32 delegator address
   * @returns
   */
  queryUnbondingDelegations(
    delegatorAddr: string
  ): Promise<types.UnbondingDelegation[]> {
    return this.client.rpcClient.abciQuery<types.UnbondingDelegation[]>(
      'custom/stake/delegatorUnbondingDelegations',
      {
        DelegatorAddr: delegatorAddr,
      }
    );
  }

  /**
   * Query a redelegation record based on delegator and a source and destination validator address
   *
   * @param delegatorAddr Bech32 delegator address
   * @param srcValidatorAddr Bech32 source validator address
   * @param dstValidatorAddr Bech32 destination validator address
   * @returns
   */
  queryRedelegation(
    delegatorAddr: string,
    srcValidatorAddr: string,
    dstValidatorAddr: string
  ): Promise<types.Redelegation[]> {
    return this.client.rpcClient.abciQuery<types.Redelegation[]>(
      'custom/stake/redelegation',
      {
        DelegatorAddr: delegatorAddr,
        ValSrcAddr: srcValidatorAddr,
        ValDstAddr: dstValidatorAddr,
      }
    );
  }

  /**
   * Query all redelegations records for one delegator
   *
   * @param delegatorAddr Bech32 delegator address
   * @returns
   */
  queryRedelegations(delegatorAddr: string): Promise<types.Redelegation[]> {
    return this.client.rpcClient.abciQuery<types.Redelegation[]>(
      'custom/stake/delegatorRedelegations',
      {
        DelegatorAddr: delegatorAddr,
      }
    );
  }

  /**
   * Query all delegations to one validator
   *
   * @param validatorAddr Bech32 validator address
   * @returns
   */
  queryDelegationsTo(validatorAddr: string): Promise<types.Delegation[]> {
    return this.client.rpcClient.abciQuery<types.Delegation[]>(
      'custom/stake/validatorDelegations',
      {
        ValidatorAddr: validatorAddr,
      }
    );
  }

  /**
   * Query all unbonding delegatations from a validator
   *
   * @param validatorAddr Bech32 validator address
   * @returns
   */
  queryUnbondingDelegationsFrom(
    validatorAddr: string
  ): Promise<types.UnbondingDelegation[]> {
    return this.client.rpcClient.abciQuery<types.UnbondingDelegation[]>(
      'custom/stake/validatorUnbondingDelegations',
      {
        ValidatorAddr: validatorAddr,
      }
    );
  }

  /**
   * Query all outgoing redelegatations from a validator
   *
   * @param validatorAddr Bech32 validator address
   * @returns
   */
  queryRedelegationsFrom(validatorAddr: string): Promise<types.Redelegation[]> {
    return this.client.rpcClient.abciQuery<types.Redelegation[]>(
      'custom/stake/validatorRedelegations',
      {
        ValidatorAddr: validatorAddr,
      }
    );
  }

  /**
   * Query a validator
   *
   * @param address Bech32 validator address
   * @returns
   */
  queryValidator(address: string): Promise<types.Validator> {
    return this.client.rpcClient.abciQuery<types.Validator>(
      'custom/stake/validator',
      {
        ValidatorAddr: address,
      }
    );
  }

  /**
   * Query for all validators
   * @param page Page number
   * @param size Page size
   * @returns
   */
  queryValidators(
    page: number,
    size: number = 100
  ): Promise<types.Validator[]> {
    return this.client.rpcClient.abciQuery<types.Validator[]>(
      'custom/stake/validators',
      {
        Page: page,
        Size: size,
      }
    );
  }

  /**
   * Query the current staking pool values
   * @returns
   */
  queryPool(): Promise<types.StakingPool> {
    return this.client.rpcClient.abciQuery<types.StakingPool>(
      'custom/stake/pool'
    );
  }

  /**
   * Query the current staking parameters information
   * @returns
   */
  queryParams(): Promise<types.StakingParams> {
    return this.client.rpcClient.abciQuery<types.StakingParams>(
      'custom/stake/parameters'
    );
  }

  // TODO: querySigningInfo

  // TODO: Do we need `Create Validator` function?

  /**
   * Delegate liquid tokens to an validator
   *
   * @param validatorAddr Bech32 validator address
   * @param amount Amount to be delegated to the validator
   * @param baseTx
   * @returns
   */
  delegate(
    validatorAddr: string,
    amount: types.Coin,
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const delegatorAddr = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgDelegate(delegatorAddr, validatorAddr, amount),
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Undelegate from a validator
   * @param validatorAddr Bech32 validator address
   * @param amount Amount to be unbonded from the validator
   * @param baseTx
   * @returns
   */
  async unbond(
    validatorAddr: string,
    amount: string,
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const delegatorAddr = this.client.keys.show(baseTx.from);
    const validator = await this.queryValidator(validatorAddr);

    const shares =
      Number(amount) *
      (Number(validator.tokens) / Number(validator.delegator_shares));
    const msgs: types.Msg[] = [
      new MsgUndelegate(
        delegatorAddr,
        validatorAddr,
        this.appendZero(String(shares), 10)
      ),
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Redelegate illiquid tokens from one validator to another
   * @param validatorSrcAddr Bech32 source validator address
   * @param validatorDstAddr Bech32 destination validator address
   * @param amount Amount to be redelegated
   * @param baseTx
   */
  async redelegate(
    validatorSrcAddr: string,
    validatorDstAddr: string,
    amount: string,
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const delegatorAddr = this.client.keys.show(baseTx.from);
    const srcValidator = await this.queryValidator(validatorSrcAddr);

    const shares =
      Number(amount) *
      (Number(srcValidator.tokens) / Number(srcValidator.delegator_shares));
    const msgs: types.Msg[] = [
      new MsgRedelegate(
        delegatorAddr,
        validatorSrcAddr,
        validatorDstAddr,
        this.appendZero(String(shares), 10)
      ),
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Subscribe validator information updates
   * @param conditions Query conditions for the subscription
   * @param callback A function to receive notifications
   * @returns
   */
  subscribeValidatorInfoUpdates(
    conditions: { validatorAddress?: string },
    callback: (error?: SdkError, data?: types.EventDataMsgEditValidator) => void
  ): types.EventSubscription {
    const queryBuilder = new EventQueryBuilder().addCondition(
      EventKey.Action,
      EventAction.EditValidator
    );

    if (conditions.validatorAddress) {
      queryBuilder.addCondition(
        EventKey.DestinationValidator,
        conditions.validatorAddress
      );
    }

    const subscription = this.client.eventListener.subscribeTx(
      queryBuilder,
      (error, data) => {
        if (error) {
          callback(error);
        }
        data?.tx.value.msg.forEach(msg => {
          if (msg.type !== 'irishub/stake/MsgEditValidator') return;
          const msgEditValidator = msg as types.MsgEditValidator;
          const height = data.height;
          const hash = data.hash;
          const description = msgEditValidator.value.Description;
          const address = msgEditValidator.value.address;
          const commission_rate = msgEditValidator.value.commission_rate;
          callback(undefined, {
            height,
            hash,
            description,
            address,
            commission_rate,
          });
        });
      }
    );
    return subscription;
  }

  /**
   * TODO: Historical issue, irishub only accepts 10 decimal places due to `sdk.Dec`
   * @hidden
   */
  private appendZero(num: string, count: number): string {
    const length = num.length;
    const dotIndex = num.lastIndexOf('.');
    if (dotIndex <= 0) {
      return this.appendZero(num + '.0', count);
    }
    if (length - (dotIndex + 1) < count) {
      return this.appendZero(num + '0', count);
    }
    return num;
  }
}
