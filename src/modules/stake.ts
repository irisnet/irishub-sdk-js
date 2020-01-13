import { Sdk } from '../sdk';
import { Crypto } from '../utils/crypto';
import * as is from 'is_js';
import * as types from '../types';
import * as Amino from '@irisnet/amino-js';
import * as AminoTypes from '@irisnet/amino-js/types';
import SdkError from '../errors';
import Utils from '../utils/utils';
import { MsgSend, MsgBurn, MsgSetMemoRegexp } from '../types/bank';

export class Stake {
  sdk: Sdk;
  constructor(sdk: Sdk) {
    this.sdk = sdk;
  }

  queryDelegation(
    delegatorAddr: string,
    validatorAddr: string
  ): Promise<types.Delegation> {
    return this.sdk.rpcClient.abciQuery<types.Delegation>(
      'custom/stake/delegation',
      {
        DelegatorAddr: delegatorAddr,
        ValidatorAddr: validatorAddr,
      }
    );
  }

  queryDelegations(delegatorAddr: string): Promise<types.Delegation[]> {
    return this.sdk.rpcClient.abciQuery<types.Delegation[]>(
      'custom/stake/delegatorDelegations',
      {
        DelegatorAddr: delegatorAddr,
      }
    );
  }
  
  queryUnbondingDelegation(
    delegatorAddr: string,
    validatorAddr: string
  ): Promise<types.UnbondingDelegation> {
    return this.sdk.rpcClient.abciQuery<types.UnbondingDelegation>(
      'custom/stake/unbondingDelegation',
      {
        DelegatorAddr: delegatorAddr,
        ValidatorAddr: validatorAddr,
      }
    );
  }

  queryUnbondingDelegations(
    delegatorAddr: string
  ): Promise<types.UnbondingDelegation[]> {
    return this.sdk.rpcClient.abciQuery<types.UnbondingDelegation[]>(
      'custom/stake/delegatorUnbondingDelegations',
      {
        DelegatorAddr: delegatorAddr,
      }
    );
  }

  queryRedelegation(
    delegatorAddr: string,
    srcValidatorAddr: string,
    dstValidatorAddr: string
  ): Promise<types.Redelegation[]> {
    return this.sdk.rpcClient.abciQuery<types.Redelegation[]>(
      'custom/stake/redelegation',
      {
        DelegatorAddr: delegatorAddr,
        ValSrcAddr: srcValidatorAddr,
        ValDstAddr: dstValidatorAddr,
      }
    );
  }

  queryRedelegations(delegatorAddr: string): Promise<types.Redelegation[]> {
    return this.sdk.rpcClient.abciQuery<types.Redelegation[]>(
      'custom/stake/delegatorRedelegations',
      {
        DelegatorAddr: delegatorAddr,
      }
    );
  }

  queryDelegationsTo(validatorAddr: string): Promise<types.Delegation[]> {
    return this.sdk.rpcClient.abciQuery<types.Delegation[]>(
      'custom/stake/validatorDelegations',
      {
        ValidatorAddr: validatorAddr,
      }
    );
  }

  queryUnbondingDelegationsFrom(
    validatorAddr: string
  ): Promise<types.UnbondingDelegation[]> {
    return this.sdk.rpcClient.abciQuery<types.UnbondingDelegation[]>(
      'custom/stake/validatorUnbondingDelegations',
      {
        ValidatorAddr: validatorAddr,
      }
    );
  }

  queryRedelegationsFrom(validatorAddr: string): Promise<types.Redelegation[]> {
    return this.sdk.rpcClient.abciQuery<types.Redelegation[]>(
      'custom/stake/validatorRedelegations',
      {
        ValidatorAddr: validatorAddr,
      }
    );
  }

  queryValidator(address: string): Promise<types.Validator> {
    return this.sdk.rpcClient.abciQuery<types.Validator>(
      'custom/stake/validator',
      {
        ValidatorAddr: address,
      }
    );
  }

  queryValidators(
    page: number,
    size: number = 100
  ): Promise<types.Validator[]> {
    return this.sdk.rpcClient.abciQuery<types.Validator[]>(
      'custom/stake/validators',
      {
        Page: page,
        Size: size,
      }
    );
  }

  queryPool(): Promise<types.StakePool> {
    return this.sdk.rpcClient.abciQuery<types.StakePool>('custom/stake/pool');
  }

  queryParams(): Promise<types.StakeParams> {
    return this.sdk.rpcClient.abciQuery<types.StakeParams>(
      'custom/stake/parameters'
    );
  }
}
