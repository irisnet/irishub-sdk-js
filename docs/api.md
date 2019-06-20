## Classes

<dl>
<dt><a href="#Bank">Bank</a></dt>
<dd></dd>
<dt><a href="#Distribution">Distribution</a></dt>
<dd></dd>
<dt><a href="#Gov">Gov</a></dt>
<dd></dd>
<dt><a href="#Slashing">Slashing</a></dt>
<dd></dd>
<dt><a href="#Stake">Stake</a></dt>
<dd></dd>
<dt><a href="#Tm">Tm</a></dt>
<dd></dd>
<dt><a href="#Version">Version</a></dt>
<dd></dd>
</dl>

<a name="Bank"></a>

## Bank
**Kind**: global class  

* [Bank](#Bank)
    * [new Bank(provider, opt)](#new_Bank_new)
    * [.getAccount(address)](#Bank+getAccount) ⇒ <code>\*</code>
    * [.getCoinType(coinType)](#Bank+getCoinType) ⇒ <code>\*</code>
    * [.getTokenStats()](#Bank+getTokenStats) ⇒ <code>\*</code>
    * [.transfer(from, to, tokens, config)](#Bank+transfer) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>

<a name="new_Bank_new"></a>

### new Bank(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="Bank+getAccount"></a>

### bank.getAccount(address) ⇒ <code>\*</code>
Get the account information on blockchain

**Kind**: instance method of [<code>Bank</code>](#Bank)  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | address of account |

<a name="Bank+getCoinType"></a>

### bank.getCoinType(coinType) ⇒ <code>\*</code>
Get the detailed information about the given coin type

**Kind**: instance method of [<code>Bank</code>](#Bank)  

| Param | Type | Description |
| --- | --- | --- |
| coinType | <code>string</code> | token's symbol |

<a name="Bank+getTokenStats"></a>

### bank.getTokenStats() ⇒ <code>\*</code>
Get token statistics, such as total loose tokens, total bonded token and total burned token

**Kind**: instance method of [<code>Bank</code>](#Bank)  
<a name="Bank+transfer"></a>

### bank.transfer(from, to, tokens, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
**Kind**: instance method of [<code>Bank</code>](#Bank)  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>string</code> | sender's address |
| to | <code>string</code> | receiver's address |
| tokens | <code>Array.&lt;Coin&gt;</code> | token array |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="Distribution"></a>

## Distribution
**Kind**: global class  

* [Distribution](#Distribution)
    * [new Distribution(provider, opt)](#new_Distribution_new)
    * [.getWithdrawAddr(delegator)](#Distribution+getWithdrawAddr) ⇒ <code>Promise</code>
    * [.queryRewards(delegator)](#Distribution+queryRewards) ⇒ <code>Promise</code>
    * [.getCommunityTax()](#Distribution+getCommunityTax) ⇒ <code>Promise</code>
    * [.withdrawAllRewards(delegator, config)](#Distribution+withdrawAllRewards) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
    * [.withdrawRewards(delegator, varAddr, config)](#Distribution+withdrawRewards) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>

<a name="new_Distribution_new"></a>

### new Distribution(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="Distribution+getWithdrawAddr"></a>

### distribution.getWithdrawAddr(delegator) ⇒ <code>Promise</code>
Query withdraw address

**Kind**: instance method of [<code>Distribution</code>](#Distribution)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |

<a name="Distribution+queryRewards"></a>

### distribution.queryRewards(delegator) ⇒ <code>Promise</code>
Query all the rewards of validator or delegator

**Kind**: instance method of [<code>Distribution</code>](#Distribution)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |

<a name="Distribution+getCommunityTax"></a>

### distribution.getCommunityTax() ⇒ <code>Promise</code>
Query community tax

**Kind**: instance method of [<code>Distribution</code>](#Distribution)  
<a name="Distribution+withdrawAllRewards"></a>

### distribution.withdrawAllRewards(delegator, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
delegator withdraw all rewards from the validators

**Kind**: instance method of [<code>Distribution</code>](#Distribution)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="Distribution+withdrawRewards"></a>

### distribution.withdrawRewards(delegator, varAddr, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
delegator withdraw rewards from a validators

**Kind**: instance method of [<code>Distribution</code>](#Distribution)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| varAddr | <code>string</code> | validator's address |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="Gov"></a>

## Gov
**Kind**: global class  

* [Gov](#Gov)
    * [new Gov(provider, opt)](#new_Gov_new)
    * [.getProposals(voter, depositor, status, limit)](#Gov+getProposals) ⇒ <code>Promise</code>
    * [.getProposal(proposalId)](#Gov+getProposal) ⇒ <code>Promise</code>
    * [.getDeposits(proposalId)](#Gov+getDeposits) ⇒ <code>Promise</code>
    * [.getDeposit(proposalId, depositor)](#Gov+getDeposit) ⇒ <code>Promise</code>
    * [.getVotes(proposalId)](#Gov+getVotes) ⇒ <code>Promise</code>
    * [.getVote(proposalId, voter)](#Gov+getVote) ⇒ <code>Promise</code>
    * [.getParams(module)](#Gov+getParams) ⇒ <code>Promise</code>

<a name="new_Gov_new"></a>

### new Gov(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="Gov+getProposals"></a>

### gov.getProposals(voter, depositor, status, limit) ⇒ <code>Promise</code>
Query proposals information with parameters

**Kind**: instance method of [<code>Gov</code>](#Gov)  

| Param | Type | Description |
| --- | --- | --- |
| voter | <code>string</code> | voter's address |
| depositor | <code>string</code> | depositor's address |
| status | <code>string</code> | proposal's status,valid values can be "DepositPeriod", "VotingPeriod", "Passed", "Rejected" |
| limit | <code>number</code> | limit to latest [number] proposals. Defaults to all proposals |

<a name="Gov+getProposal"></a>

### gov.getProposal(proposalId) ⇒ <code>Promise</code>
Query a proposal by proposalId

**Kind**: instance method of [<code>Gov</code>](#Gov)  

| Param | Type | Description |
| --- | --- | --- |
| proposalId | <code>number</code> | proposal's id |

<a name="Gov+getDeposits"></a>

### gov.getDeposits(proposalId) ⇒ <code>Promise</code>
Query deposits by proposalId

**Kind**: instance method of [<code>Gov</code>](#Gov)  

| Param | Type | Description |
| --- | --- | --- |
| proposalId | <code>number</code> | proposal's id |

<a name="Gov+getDeposit"></a>

### gov.getDeposit(proposalId, depositor) ⇒ <code>Promise</code>
Query deposit by proposalId and depositor address

**Kind**: instance method of [<code>Gov</code>](#Gov)  

| Param | Type | Description |
| --- | --- | --- |
| proposalId | <code>number</code> | proposal's id |
| depositor | <code>string</code> | depositor's address |

<a name="Gov+getVotes"></a>

### gov.getVotes(proposalId) ⇒ <code>Promise</code>
Query voters information by proposalId

**Kind**: instance method of [<code>Gov</code>](#Gov)  

| Param | Type | Description |
| --- | --- | --- |
| proposalId | <code>number</code> | proposal's id |

<a name="Gov+getVote"></a>

### gov.getVote(proposalId, voter) ⇒ <code>Promise</code>
Query vote information by proposalId and voter address

**Kind**: instance method of [<code>Gov</code>](#Gov)  

| Param | Type | Description |
| --- | --- | --- |
| proposalId | <code>number</code> | proposal's id |
| voter | <code>string</code> | voter's address |

<a name="Gov+getParams"></a>

### gov.getParams(module) ⇒ <code>Promise</code>
Query governance parameters

**Kind**: instance method of [<code>Gov</code>](#Gov)  

| Param | Type | Description |
| --- | --- | --- |
| module | <code>string</code> | module's symbol,valid values can be "gov","stake","bank","auth" |

<a name="Slashing"></a>

## Slashing
**Kind**: global class  

* [Slashing](#Slashing)
    * [new Slashing(provider, opt)](#new_Slashing_new)
    * [.getSigningInfo(valPubkey)](#Slashing+getSigningInfo) ⇒ <code>Promise</code>

<a name="new_Slashing_new"></a>

### new Slashing(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="Slashing+getSigningInfo"></a>

### slashing.getSigningInfo(valPubkey) ⇒ <code>Promise</code>
Get sign info of given validator

**Kind**: instance method of [<code>Slashing</code>](#Slashing)  

| Param | Type | Description |
| --- | --- | --- |
| valPubkey | <code>string</code> | validator's consensus public key |

<a name="Stake"></a>

## Stake
**Kind**: global class  

* [Stake](#Stake)
    * [new Stake(provider, opt)](#new_Stake_new)
    * [.getValidators(page, size)](#Stake+getValidators) ⇒ <code>Promise</code>
    * [.getValidator(validator)](#Stake+getValidator) ⇒ <code>Promise</code>
    * [.getDelegations(delegator)](#Stake+getDelegations) ⇒ <code>Promise</code>
    * [.getDelegationsByValidator(validator)](#Stake+getDelegationsByValidator) ⇒ <code>Promise</code>
    * [.getUbDelegations(delegator)](#Stake+getUbDelegations) ⇒ <code>Promise</code>
    * [.getUbDelegationsByValidator(validator)](#Stake+getUbDelegationsByValidator) ⇒ <code>Promise</code>
    * [.getReDelegations(delegator)](#Stake+getReDelegations) ⇒ <code>Promise</code>
    * [.getReDelegationsByValidator(validator)](#Stake+getReDelegationsByValidator) ⇒ <code>Promise</code>
    * [.getAllValidatorsByDelegator(delegator)](#Stake+getAllValidatorsByDelegator) ⇒ <code>Promise</code>
    * [.getValidatorByDelegator(delegator, validator)](#Stake+getValidatorByDelegator) ⇒ <code>Promise</code>
    * [.getDelegation(delegator, validator)](#Stake+getDelegation) ⇒ <code>Promise</code>
    * [.getUbDelegation(delegator, validator)](#Stake+getUbDelegation) ⇒ <code>Promise</code>
    * [.getStakePool()](#Stake+getStakePool) ⇒ <code>Promise</code>
    * [.delegate(delegator, validator, amount, config)](#Stake+delegate) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
    * [.redelegate(delegator, srcVarAddr, dstVarAddr, shares, config)](#Stake+redelegate) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
    * [.undelegate(delegator, valAddr, shares, config)](#Stake+undelegate) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>

<a name="new_Stake_new"></a>

### new Stake(provider, opt)
**Returns**: [<code>Stake</code>](#Stake) - opt  

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="Stake+getValidators"></a>

### stake.getValidators(page, size) ⇒ <code>Promise</code>
Get validators

**Kind**: instance method of [<code>Stake</code>](#Stake)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>number</code> | page |
| size | <code>number</code> | page's size |

<a name="Stake+getValidator"></a>

### stake.getValidator(validator) ⇒ <code>Promise</code>
Query the information from a single validator

**Kind**: instance method of [<code>Stake</code>](#Stake)  

| Param | Type | Description |
| --- | --- | --- |
| validator | <code>string</code> | validator's address |

<a name="Stake+getDelegations"></a>

### stake.getDelegations(delegator) ⇒ <code>Promise</code>
Get all delegations from a delegator

**Kind**: instance method of [<code>Stake</code>](#Stake)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |

<a name="Stake+getDelegationsByValidator"></a>

### stake.getDelegationsByValidator(validator) ⇒ <code>Promise</code>
Get all delegations from a validator

**Kind**: instance method of [<code>Stake</code>](#Stake)  

| Param | Type | Description |
| --- | --- | --- |
| validator | <code>string</code> | validator's address |

<a name="Stake+getUbDelegations"></a>

### stake.getUbDelegations(delegator) ⇒ <code>Promise</code>
Get all unbonding delegations from a delegator

**Kind**: instance method of [<code>Stake</code>](#Stake)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |

<a name="Stake+getUbDelegationsByValidator"></a>

### stake.getUbDelegationsByValidator(validator) ⇒ <code>Promise</code>
Get all unbonding delegations from a validator

**Kind**: instance method of [<code>Stake</code>](#Stake)  

| Param | Type | Description |
| --- | --- | --- |
| validator | <code>string</code> | validator's address |

<a name="Stake+getReDelegations"></a>

### stake.getReDelegations(delegator) ⇒ <code>Promise</code>
Get all redelegations from a delegator

**Kind**: instance method of [<code>Stake</code>](#Stake)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |

<a name="Stake+getReDelegationsByValidator"></a>

### stake.getReDelegationsByValidator(validator) ⇒ <code>Promise</code>
Get all outgoing redelegations from a validator

**Kind**: instance method of [<code>Stake</code>](#Stake)  

| Param | Type | Description |
| --- | --- | --- |
| validator | <code>string</code> | validator's address |

<a name="Stake+getAllValidatorsByDelegator"></a>

### stake.getAllValidatorsByDelegator(delegator) ⇒ <code>Promise</code>
Query all validators that a delegator is bonded to

**Kind**: instance method of [<code>Stake</code>](#Stake)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |

<a name="Stake+getValidatorByDelegator"></a>

### stake.getValidatorByDelegator(delegator, validator) ⇒ <code>Promise</code>
Query a validator that a delegator is bonded to

**Kind**: instance method of [<code>Stake</code>](#Stake)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| validator | <code>string</code> | validator's address |

<a name="Stake+getDelegation"></a>

### stake.getDelegation(delegator, validator) ⇒ <code>Promise</code>
Query the current delegation between a delegator and a validator

**Kind**: instance method of [<code>Stake</code>](#Stake)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| validator | <code>string</code> | validator's address |

<a name="Stake+getUbDelegation"></a>

### stake.getUbDelegation(delegator, validator) ⇒ <code>Promise</code>
Query all unbonding delegations between a delegator and a validator

**Kind**: instance method of [<code>Stake</code>](#Stake)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| validator | <code>string</code> | validator's address |

<a name="Stake+getStakePool"></a>

### stake.getStakePool() ⇒ <code>Promise</code>
Get the current state of the staking pool

**Kind**: instance method of [<code>Stake</code>](#Stake)  
<a name="Stake+delegate"></a>

### stake.delegate(delegator, validator, amount, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
delegate liquid tokens to an validator

**Kind**: instance method of [<code>Stake</code>](#Stake)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| validator | <code>string</code> | validator's operator address |
| amount | <code>Coin</code> | token |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="Stake+redelegate"></a>

### stake.redelegate(delegator, srcVarAddr, dstVarAddr, shares, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
redelegate illiquid tokens from one validator to another

**Kind**: instance method of [<code>Stake</code>](#Stake)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| srcVarAddr | <code>string</code> | bech32 address of the source validator |
| dstVarAddr | <code>string</code> | bech32 address of the destination validator |
| shares | <code>string</code> | Amount of source-shares to either unbond or redelegate as a positive integer or decimal |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="Stake+undelegate"></a>

### stake.undelegate(delegator, valAddr, shares, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
undelegate shares from a validator

**Kind**: instance method of [<code>Stake</code>](#Stake)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| valAddr | <code>string</code> | bech32 address of the validator |
| shares | <code>string</code> | Amount of source-shares to either unbond or redelegate as a positive integer or decimal |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="Tm"></a>

## Tm
**Kind**: global class  

* [Tm](#Tm)
    * [new Tm(provider, opt)](#new_Tm_new)
    * [.getNodeInfo()](#Tm+getNodeInfo) ⇒ <code>Promise</code>
    * [.getSyncing()](#Tm+getSyncing) ⇒ <code>Promise</code>
    * [.getBlock(height)](#Tm+getBlock) ⇒ <code>Promise</code>
    * [.getBlockResult(height)](#Tm+getBlockResult) ⇒ <code>Promise</code>
    * [.getValidatorSet(height)](#Tm+getValidatorSet) ⇒ <code>Promise</code>
    * [.getTx(hash)](#Tm+getTx) ⇒ <code>Promise</code>

<a name="new_Tm_new"></a>

### new Tm(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="Tm+getNodeInfo"></a>

### tm.getNodeInfo() ⇒ <code>Promise</code>
Information about the connected node

**Kind**: instance method of [<code>Tm</code>](#Tm)  
<a name="Tm+getSyncing"></a>

### tm.getSyncing() ⇒ <code>Promise</code>
Get if the node is currently syning with other nodes

**Kind**: instance method of [<code>Tm</code>](#Tm)  
<a name="Tm+getBlock"></a>

### tm.getBlock(height) ⇒ <code>Promise</code>
Get a  block

**Kind**: instance method of [<code>Tm</code>](#Tm)  

| Param | Type | Description |
| --- | --- | --- |
| height | <code>number</code> | block's height,optional,if null,will return the latest block |

<a name="Tm+getBlockResult"></a>

### tm.getBlockResult(height) ⇒ <code>Promise</code>
Get a block result

**Kind**: instance method of [<code>Tm</code>](#Tm)  

| Param | Type | Description |
| --- | --- | --- |
| height | <code>number</code> | block's height,optional,if null,will return the latest block's result |

<a name="Tm+getValidatorSet"></a>

### tm.getValidatorSet(height) ⇒ <code>Promise</code>
Get the validator set

**Kind**: instance method of [<code>Tm</code>](#Tm)  

| Param | Type | Description |
| --- | --- | --- |
| height | <code>number</code> | block's height,optional,if null,will return the latest validator set |

<a name="Tm+getTx"></a>

### tm.getTx(hash) ⇒ <code>Promise</code>
Get a Tx by hash

**Kind**: instance method of [<code>Tm</code>](#Tm)  

| Param | Type | Description |
| --- | --- | --- |
| hash | <code>string</code> | transaction's hash |

<a name="Version"></a>

## Version
**Kind**: global class  

* [Version](#Version)
    * [new Version(provider, opt)](#new_Version_new)
    * [.getLcdVersion()](#Version+getLcdVersion) ⇒ <code>Promise</code>
    * [.getNodeVersion()](#Version+getNodeVersion) ⇒ <code>Promise</code>

<a name="new_Version_new"></a>

### new Version(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="Version+getLcdVersion"></a>

### version.getLcdVersion() ⇒ <code>Promise</code>
Get the version of irislcd running locally to compare against expected

**Kind**: instance method of [<code>Version</code>](#Version)  
<a name="Version+getNodeVersion"></a>

### version.getNodeVersion() ⇒ <code>Promise</code>
Get the version of node that lcd connected

**Kind**: instance method of [<code>Version</code>](#Version)  
