## Modules

<dl>
<dt><a href="#module_asset">asset</a></dt>
<dd></dd>
<dt><a href="#module_bank">bank</a></dt>
<dd></dd>
<dt><a href="#module_coinswap">coinswap</a></dt>
<dd></dd>
<dt><a href="#module_distribution">distribution</a></dt>
<dd></dd>
<dt><a href="#module_gov">gov</a></dt>
<dd></dd>
<dt><a href="#module_htlc">htlc</a></dt>
<dd></dd>
<dt><a href="#module_rand">rand</a></dt>
<dd></dd>
<dt><a href="#module_slashing">slashing</a></dt>
<dd></dd>
<dt><a href="#module_stake">stake</a></dt>
<dd></dd>
<dt><a href="#module_tendermint">tendermint</a></dt>
<dd></dd>
<dt><a href="#module_version">version</a></dt>
<dd></dd>
</dl>

<a name="module_asset"></a>

## asset

* [asset](#module_asset)
    * [module.exports](#exp_module_asset--module.exports) ⏏
        * [new module.exports(provider, opt)](#new_module_asset--module.exports_new)
        * [.getToken(id)](#module_asset--module.exports+getToken) ⇒ <code>Promise</code>
        * [.getTokens(source, gateway, owner)](#module_asset--module.exports+getTokens) ⇒ <code>Promise</code>
        * [.getGateway(moniker)](#module_asset--module.exports+getGateway) ⇒ <code>Promise</code>
        * [.getGateways(owner)](#module_asset--module.exports+getGateways) ⇒ <code>Promise</code>
        * [.getGatewayFee(moniker)](#module_asset--module.exports+getGatewayFee) ⇒ <code>Promise</code>
        * [.getTokenFee(id)](#module_asset--module.exports+getTokenFee) ⇒ <code>Promise</code>

<a name="exp_module_asset--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_asset--module.exports_new"></a>

#### new module.exports(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_asset--module.exports+getToken"></a>

#### module.exports.getToken(id) ⇒ <code>Promise</code>
Query token by unique id

**Kind**: instance method of [<code>module.exports</code>](#exp_module_asset--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | token's id |

<a name="module_asset--module.exports+getTokens"></a>

#### module.exports.getTokens(source, gateway, owner) ⇒ <code>Promise</code>
Query tokens by condition

**Kind**: instance method of [<code>module.exports</code>](#exp_module_asset--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | the source of the destination token, options: native, external, gateway |
| gateway | <code>string</code> | the owner address of the destination token, optional when source is native, ignored when source is not native |
| owner | <code>string</code> | the gateway moniker of the destination token, optional when source is gateway |

<a name="module_asset--module.exports+getGateway"></a>

#### module.exports.getGateway(moniker) ⇒ <code>Promise</code>
Query the gateway with the specified moniker

**Kind**: instance method of [<code>module.exports</code>](#exp_module_asset--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| moniker | <code>string</code> | the unique name of the destination gateway |

<a name="module_asset--module.exports+getGateways"></a>

#### module.exports.getGateways(owner) ⇒ <code>Promise</code>
Query all the gateways with an optional owner

**Kind**: instance method of [<code>module.exports</code>](#exp_module_asset--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| owner | <code>string</code> | the owner address to be queried |

<a name="module_asset--module.exports+getGatewayFee"></a>

#### module.exports.getGatewayFee(moniker) ⇒ <code>Promise</code>
Query the fee for the creation of the gateway with the given moniker

**Kind**: instance method of [<code>module.exports</code>](#exp_module_asset--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| moniker | <code>string</code> | he unique name of a gateway |

<a name="module_asset--module.exports+getTokenFee"></a>

#### module.exports.getTokenFee(id) ⇒ <code>Promise</code>
Query the fees for the issuance and minting of the token with the given id

**Kind**: instance method of [<code>module.exports</code>](#exp_module_asset--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | he unique name of a gateway |

<a name="module_bank"></a>

## bank

* [bank](#module_bank)
    * [module.exports](#exp_module_bank--module.exports) ⏏
        * [new module.exports(provider, opt)](#new_module_bank--module.exports_new)
        * [.getAccount(address)](#module_bank--module.exports+getAccount) ⇒ <code>\*</code>
        * [.getCoinType(coinType)](#module_bank--module.exports+getCoinType) ⇒ <code>\*</code>
        * [.getTokenStats()](#module_bank--module.exports+getTokenStats) ⇒ <code>\*</code>
        * [.transfer(from, to, tokens, config)](#module_bank--module.exports+transfer) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>

<a name="exp_module_bank--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_bank--module.exports_new"></a>

#### new module.exports(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_bank--module.exports+getAccount"></a>

#### module.exports.getAccount(address) ⇒ <code>\*</code>
Get the account information on blockchain

**Kind**: instance method of [<code>module.exports</code>](#exp_module_bank--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | address of account |

<a name="module_bank--module.exports+getCoinType"></a>

#### module.exports.getCoinType(coinType) ⇒ <code>\*</code>
Get the detailed information about the given coin type

**Kind**: instance method of [<code>module.exports</code>](#exp_module_bank--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| coinType | <code>string</code> | token's symbol |

<a name="module_bank--module.exports+getTokenStats"></a>

#### module.exports.getTokenStats() ⇒ <code>\*</code>
Get token statistics, such as total loose tokens, total bonded token and total burned token

**Kind**: instance method of [<code>module.exports</code>](#exp_module_bank--module.exports)  
<a name="module_bank--module.exports+transfer"></a>

#### module.exports.transfer(from, to, tokens, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
**Kind**: instance method of [<code>module.exports</code>](#exp_module_bank--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>string</code> | sender's address |
| to | <code>string</code> | receiver's address |
| tokens | <code>Array.&lt;Coin&gt;</code> | token array |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_coinswap"></a>

## coinswap

* [coinswap](#module_coinswap)
    * [module.exports](#exp_module_coinswap--module.exports) ⏏
        * [new module.exports(provider, opt)](#new_module_coinswap--module.exports_new)
        * [.getReservePool(denom)](#module_coinswap--module.exports+getReservePool) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.addLiquidity(maxToken, irisAmt, minLiquidity, deadline, sender, config)](#module_coinswap--module.exports+addLiquidity) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
        * [.removeLiquidity(minToken, withdrawLiquidity, minIrisAmt, deadline, sender, config)](#module_coinswap--module.exports+removeLiquidity) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
        * [.swap(input, output, ddeadline, isBuyOrder, config)](#module_coinswap--module.exports+swap)
        * [.tradeExactIrisForTokens(outputTokenDenom, inputIrisAmount)](#module_coinswap--module.exports+tradeExactIrisForTokens)
        * [.tradeIrisForExactTokens(outputTokenDenom, outputTokenAmount)](#module_coinswap--module.exports+tradeIrisForExactTokens)
        * [.tradeExactTokensForIris(inputTokenDenom, inputTokenAmount)](#module_coinswap--module.exports+tradeExactTokensForIris)
        * [.tradeTokensForExactIris(inputTokenDenom, outputIrisAmount)](#module_coinswap--module.exports+tradeTokensForExactIris)
        * [.tradeExactTokensForTokens(inputTokenDenom, outputTokenDenom, inputTokenAmount)](#module_coinswap--module.exports+tradeExactTokensForTokens)
        * [.tradeTokensForExactTokens(inputTokenDenom, outputTokenDenom, outputTokenAmount)](#module_coinswap--module.exports+tradeTokensForExactTokens)

<a name="exp_module_coinswap--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_coinswap--module.exports_new"></a>

#### new module.exports(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_coinswap--module.exports+getReservePool"></a>

#### module.exports.getReservePool(denom) ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: instance method of [<code>module.exports</code>](#exp_module_coinswap--module.exports)  
**Returns**: <code>Promise.&lt;\*&gt;</code> - - reserve pool information  

| Param | Type | Description |
| --- | --- | --- |
| denom | <code>string</code> | uni denom of token,such as u-btc |

<a name="module_coinswap--module.exports+addLiquidity"></a>

#### module.exports.addLiquidity(maxToken, irisAmt, minLiquidity, deadline, sender, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
**Kind**: instance method of [<code>module.exports</code>](#exp_module_coinswap--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| maxToken | <code>Coin</code> | deposited token |
| irisAmt | <code>number</code> | amount of iris deposited |
| minLiquidity | <code>number</code> | amount of uni token |
| deadline | <code>number</code> | timestamp |
| sender | <code>string</code> | address of deposit |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_coinswap--module.exports+removeLiquidity"></a>

#### module.exports.removeLiquidity(minToken, withdrawLiquidity, minIrisAmt, deadline, sender, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
**Kind**: instance method of [<code>module.exports</code>](#exp_module_coinswap--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| minToken | <code>number</code> | amount of token retrieved |
| withdrawLiquidity | <code>Coin</code> | uni withdraw |
| minIrisAmt | <code>number</code> | amount of iris retrieved |
| deadline | <code>number</code> | timestamp |
| sender | <code>string</code> | address of sender |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_coinswap--module.exports+swap"></a>

#### module.exports.swap(input, output, ddeadline, isBuyOrder, config)
**Kind**: instance method of [<code>module.exports</code>](#exp_module_coinswap--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Coin</code> | user spending tokens |
| output | <code>Coin</code> | user received tokens |
| ddeadline | <code>number</code> | timestamp |
| isBuyOrder | <code>boolean</code> |  |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_coinswap--module.exports+tradeExactIrisForTokens"></a>

#### module.exports.tradeExactIrisForTokens(outputTokenDenom, inputIrisAmount)
The function facilitates trading an exact amount of Iris for a specified token.

**Kind**: instance method of [<code>module.exports</code>](#exp_module_coinswap--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| outputTokenDenom | <code>string</code> | Address of output token. |
| inputIrisAmount | <code>number</code> | The input amount of Iris. |

<a name="module_coinswap--module.exports+tradeIrisForExactTokens"></a>

#### module.exports.tradeIrisForExactTokens(outputTokenDenom, outputTokenAmount)
The function facilitates trading Iris for an exact amount of a specified token.

**Kind**: instance method of [<code>module.exports</code>](#exp_module_coinswap--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| outputTokenDenom | <code>string</code> | Denom of output token. |
| outputTokenAmount | <code>number</code> | Denom of output token. |

<a name="module_coinswap--module.exports+tradeExactTokensForIris"></a>

#### module.exports.tradeExactTokensForIris(inputTokenDenom, inputTokenAmount)
The function facilitates trading an exact amount of a specified token for Iris.

**Kind**: instance method of [<code>module.exports</code>](#exp_module_coinswap--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| inputTokenDenom | <code>string</code> | Denom of input token. |
| inputTokenAmount | <code>number</code> | Amount of input token. |

<a name="module_coinswap--module.exports+tradeTokensForExactIris"></a>

#### module.exports.tradeTokensForExactIris(inputTokenDenom, outputIrisAmount)
The function facilitates trading a specified token for an exact amount of Iris.

**Kind**: instance method of [<code>module.exports</code>](#exp_module_coinswap--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| inputTokenDenom | <code>string</code> | Denom of input token. |
| outputIrisAmount | <code>number</code> | The output amount of iris |

<a name="module_coinswap--module.exports+tradeExactTokensForTokens"></a>

#### module.exports.tradeExactTokensForTokens(inputTokenDenom, outputTokenDenom, inputTokenAmount)
The function facilitates trading an exact amount of a specified token for another token.

**Kind**: instance method of [<code>module.exports</code>](#exp_module_coinswap--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| inputTokenDenom | <code>string</code> | Denom of input token. |
| outputTokenDenom | <code>string</code> | Denom of output token. |
| inputTokenAmount | <code>number</code> | The input amount of tokens |

<a name="module_coinswap--module.exports+tradeTokensForExactTokens"></a>

#### module.exports.tradeTokensForExactTokens(inputTokenDenom, outputTokenDenom, outputTokenAmount)
The function facilitates trading an exact amount of a specified token for another token

**Kind**: instance method of [<code>module.exports</code>](#exp_module_coinswap--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| inputTokenDenom | <code>string</code> | Denom of input token. |
| outputTokenDenom | <code>string</code> | Denom of output token. |
| outputTokenAmount | <code>number</code> | The output amount of tokens |

<a name="module_distribution"></a>

## distribution

* [distribution](#module_distribution)
    * [module.exports](#exp_module_distribution--module.exports) ⏏
        * [new module.exports(provider, opt)](#new_module_distribution--module.exports_new)
        * [.getWithdrawAddr(delegator)](#module_distribution--module.exports+getWithdrawAddr) ⇒ <code>Promise</code>
        * [.queryRewards(delegator)](#module_distribution--module.exports+queryRewards) ⇒ <code>Promise</code>
        * [.getCommunityTax()](#module_distribution--module.exports+getCommunityTax) ⇒ <code>Promise</code>
        * [.withdrawAllRewards(delegator, config)](#module_distribution--module.exports+withdrawAllRewards) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
        * [.withdrawRewards(delegator, varAddr, config)](#module_distribution--module.exports+withdrawRewards) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>

<a name="exp_module_distribution--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_distribution--module.exports_new"></a>

#### new module.exports(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_distribution--module.exports+getWithdrawAddr"></a>

#### module.exports.getWithdrawAddr(delegator) ⇒ <code>Promise</code>
Query withdraw address

**Kind**: instance method of [<code>module.exports</code>](#exp_module_distribution--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |

<a name="module_distribution--module.exports+queryRewards"></a>

#### module.exports.queryRewards(delegator) ⇒ <code>Promise</code>
Query all the rewards of validator or delegator

**Kind**: instance method of [<code>module.exports</code>](#exp_module_distribution--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |

<a name="module_distribution--module.exports+getCommunityTax"></a>

#### module.exports.getCommunityTax() ⇒ <code>Promise</code>
Query community tax

**Kind**: instance method of [<code>module.exports</code>](#exp_module_distribution--module.exports)  
<a name="module_distribution--module.exports+withdrawAllRewards"></a>

#### module.exports.withdrawAllRewards(delegator, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
delegator withdraw all rewards from the validators

**Kind**: instance method of [<code>module.exports</code>](#exp_module_distribution--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_distribution--module.exports+withdrawRewards"></a>

#### module.exports.withdrawRewards(delegator, varAddr, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
delegator withdraw rewards from a validators

**Kind**: instance method of [<code>module.exports</code>](#exp_module_distribution--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| varAddr | <code>string</code> | validator's address |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_gov"></a>

## gov

* [gov](#module_gov)
    * [module.exports](#exp_module_gov--module.exports) ⏏
        * [new module.exports(provider, opt)](#new_module_gov--module.exports_new)
        * [.getProposals(voter, depositor, status, limit)](#module_gov--module.exports+getProposals) ⇒ <code>Promise</code>
        * [.getProposal(proposalId)](#module_gov--module.exports+getProposal) ⇒ <code>Promise</code>
        * [.getDeposits(proposalId)](#module_gov--module.exports+getDeposits) ⇒ <code>Promise</code>
        * [.getDeposit(proposalId, depositor)](#module_gov--module.exports+getDeposit) ⇒ <code>Promise</code>
        * [.getVotes(proposalId)](#module_gov--module.exports+getVotes) ⇒ <code>Promise</code>
        * [.getVote(proposalId, voter)](#module_gov--module.exports+getVote) ⇒ <code>Promise</code>
        * [.getParams(module)](#module_gov--module.exports+getParams) ⇒ <code>Promise</code>

<a name="exp_module_gov--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_gov--module.exports_new"></a>

#### new module.exports(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_gov--module.exports+getProposals"></a>

#### module.exports.getProposals(voter, depositor, status, limit) ⇒ <code>Promise</code>
Query proposals information with parameters

**Kind**: instance method of [<code>module.exports</code>](#exp_module_gov--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| voter | <code>string</code> | voter's address |
| depositor | <code>string</code> | depositor's address |
| status | <code>string</code> | proposal's status,valid values can be "DepositPeriod", "VotingPeriod", "Passed", "Rejected" |
| limit | <code>number</code> | limit to latest [number] proposals. Defaults to all proposals |

<a name="module_gov--module.exports+getProposal"></a>

#### module.exports.getProposal(proposalId) ⇒ <code>Promise</code>
Query a proposal by proposalId

**Kind**: instance method of [<code>module.exports</code>](#exp_module_gov--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| proposalId | <code>number</code> | proposal's id |

<a name="module_gov--module.exports+getDeposits"></a>

#### module.exports.getDeposits(proposalId) ⇒ <code>Promise</code>
Query deposits by proposalId

**Kind**: instance method of [<code>module.exports</code>](#exp_module_gov--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| proposalId | <code>number</code> | proposal's id |

<a name="module_gov--module.exports+getDeposit"></a>

#### module.exports.getDeposit(proposalId, depositor) ⇒ <code>Promise</code>
Query deposit by proposalId and depositor address

**Kind**: instance method of [<code>module.exports</code>](#exp_module_gov--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| proposalId | <code>number</code> | proposal's id |
| depositor | <code>string</code> | depositor's address |

<a name="module_gov--module.exports+getVotes"></a>

#### module.exports.getVotes(proposalId) ⇒ <code>Promise</code>
Query voters information by proposalId

**Kind**: instance method of [<code>module.exports</code>](#exp_module_gov--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| proposalId | <code>number</code> | proposal's id |

<a name="module_gov--module.exports+getVote"></a>

#### module.exports.getVote(proposalId, voter) ⇒ <code>Promise</code>
Query vote information by proposalId and voter address

**Kind**: instance method of [<code>module.exports</code>](#exp_module_gov--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| proposalId | <code>number</code> | proposal's id |
| voter | <code>string</code> | voter's address |

<a name="module_gov--module.exports+getParams"></a>

#### module.exports.getParams(module) ⇒ <code>Promise</code>
Query governance parameters

**Kind**: instance method of [<code>module.exports</code>](#exp_module_gov--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| module | <code>string</code> | module's symbol,valid values can be "gov","stake","bank","auth" |

<a name="module_htlc"></a>

## htlc

* [htlc](#module_htlc)
    * [module.exports](#exp_module_htlc--module.exports) ⏏
        * [new module.exports(provider, opt)](#new_module_htlc--module.exports_new)
        * [.getHTLC(hashLock)](#module_htlc--module.exports+getHTLC) ⇒ <code>Promise</code>
        * [.createHTLC(sender, receiver, receiverOnOtherChain, hashLock, amount, timeLock, timestamp, config)](#module_htlc--module.exports+createHTLC) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
        * [.claimHTLC(sender, hashLock, secret, config)](#module_htlc--module.exports+claimHTLC) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
        * [.refundHTLC(sender, hashLock, config)](#module_htlc--module.exports+refundHTLC) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>

<a name="exp_module_htlc--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_htlc--module.exports_new"></a>

#### new module.exports(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_htlc--module.exports+getHTLC"></a>

#### module.exports.getHTLC(hashLock) ⇒ <code>Promise</code>
Query HTLC by hash-lock

**Kind**: instance method of [<code>module.exports</code>](#exp_module_htlc--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| hashLock | <code>string</code> | the hash-lock of the HTLC |

<a name="module_htlc--module.exports+createHTLC"></a>

#### module.exports.createHTLC(sender, receiver, receiverOnOtherChain, hashLock, amount, timeLock, timestamp, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
create a HTLC (TODO)

**Kind**: instance method of [<code>module.exports</code>](#exp_module_htlc--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| sender | <code>string</code> | sender's address |
| receiver | <code>string</code> | receiver's address |
| receiverOnOtherChain | <code>string</code> | receiver's address on other chain |
| hashLock | <code>string</code> | the hash lock generated from secret (and timestamp if provided) |
| amount | <code>Coin</code> | the amount to be transferred |
| timeLock | <code>string</code> | the time span after which the HTLC will expire |
| timestamp | <code>string</code> | if provided, used to generate the hash lock together with secret |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_htlc--module.exports+claimHTLC"></a>

#### module.exports.claimHTLC(sender, hashLock, secret, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
claim an opened HTLC (TODO)

**Kind**: instance method of [<code>module.exports</code>](#exp_module_htlc--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| sender | <code>string</code> | sender's address |
| hashLock | <code>string</code> | the hash lock identifying the HTLC to be claimed |
| secret | <code>string</code> | the secret with which to claim |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_htlc--module.exports+refundHTLC"></a>

#### module.exports.refundHTLC(sender, hashLock, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
refund from an expired HTLC (TODO)

**Kind**: instance method of [<code>module.exports</code>](#exp_module_htlc--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| sender | <code>string</code> | sender's address |
| hashLock | <code>string</code> | the hash lock identifying the HTLC to be claimed |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_rand"></a>

## rand

* [rand](#module_rand)
    * [module.exports](#exp_module_rand--module.exports) ⏏
        * [new module.exports(provider, opt)](#new_module_rand--module.exports_new)
        * [.getRand(requestId)](#module_rand--module.exports+getRand) ⇒ <code>Promise</code>
        * [.getPendingRands(height)](#module_rand--module.exports+getPendingRands) ⇒ <code>Promise</code>
        * [.requestRand(consumer, blockInterval, config)](#module_rand--module.exports+requestRand) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>

<a name="exp_module_rand--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_rand--module.exports_new"></a>

#### new module.exports(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_rand--module.exports+getRand"></a>

#### module.exports.getRand(requestId) ⇒ <code>Promise</code>
Query a random number by the specified request id

**Kind**: instance method of [<code>module.exports</code>](#exp_module_rand--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| requestId | <code>string</code> | the request id |

<a name="module_rand--module.exports+getPendingRands"></a>

#### module.exports.getPendingRands(height) ⇒ <code>Promise</code>
Query the pending requests with an optional height

**Kind**: instance method of [<code>module.exports</code>](#exp_module_rand--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| height | <code>int</code> | the destination block height |

<a name="module_rand--module.exports+requestRand"></a>

#### module.exports.requestRand(consumer, blockInterval, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
request a random number (TODO)

**Kind**: instance method of [<code>module.exports</code>](#exp_module_rand--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| consumer | <code>string</code> | consumer's address |
| blockInterval | <code>string</code> | block interval after which the requested random number will be generated |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_slashing"></a>

## slashing

* [slashing](#module_slashing)
    * [module.exports](#exp_module_slashing--module.exports) ⏏
        * [new module.exports(provider, opt)](#new_module_slashing--module.exports_new)
        * [.getSigningInfo(valPubkey)](#module_slashing--module.exports+getSigningInfo) ⇒ <code>Promise</code>

<a name="exp_module_slashing--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_slashing--module.exports_new"></a>

#### new module.exports(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_slashing--module.exports+getSigningInfo"></a>

#### module.exports.getSigningInfo(valPubkey) ⇒ <code>Promise</code>
Get sign info of given validator

**Kind**: instance method of [<code>module.exports</code>](#exp_module_slashing--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| valPubkey | <code>string</code> | validator's consensus public key |

<a name="module_stake"></a>

## stake

* [stake](#module_stake)
    * [module.exports](#exp_module_stake--module.exports) ⏏
        * [new module.exports(provider, opt)](#new_module_stake--module.exports_new)
        * [.getValidators(page, size)](#module_stake--module.exports+getValidators) ⇒ <code>Promise</code>
        * [.getValidator(validator)](#module_stake--module.exports+getValidator) ⇒ <code>Promise</code>
        * [.getDelegations(delegator)](#module_stake--module.exports+getDelegations) ⇒ <code>Promise</code>
        * [.getDelegationsByValidator(validator)](#module_stake--module.exports+getDelegationsByValidator) ⇒ <code>Promise</code>
        * [.getUbDelegations(delegator)](#module_stake--module.exports+getUbDelegations) ⇒ <code>Promise</code>
        * [.getUbDelegationsByValidator(validator)](#module_stake--module.exports+getUbDelegationsByValidator) ⇒ <code>Promise</code>
        * [.getReDelegations(delegator)](#module_stake--module.exports+getReDelegations) ⇒ <code>Promise</code>
        * [.getReDelegationsByValidator(validator)](#module_stake--module.exports+getReDelegationsByValidator) ⇒ <code>Promise</code>
        * [.getAllValidatorsByDelegator(delegator)](#module_stake--module.exports+getAllValidatorsByDelegator) ⇒ <code>Promise</code>
        * [.getValidatorByDelegator(delegator, validator)](#module_stake--module.exports+getValidatorByDelegator) ⇒ <code>Promise</code>
        * [.getDelegation(delegator, validator)](#module_stake--module.exports+getDelegation) ⇒ <code>Promise</code>
        * [.getUbDelegation(delegator, validator)](#module_stake--module.exports+getUbDelegation) ⇒ <code>Promise</code>
        * [.getStakePool()](#module_stake--module.exports+getStakePool) ⇒ <code>Promise</code>
        * [.delegate(delegator, validator, amount, config)](#module_stake--module.exports+delegate) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
        * [.redelegate(delegator, srcVarAddr, dstVarAddr, shares, config)](#module_stake--module.exports+redelegate) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
        * [.undelegate(delegator, valAddr, shares, config)](#module_stake--module.exports+undelegate) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>

<a name="exp_module_stake--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_stake--module.exports_new"></a>

#### new module.exports(provider, opt)
**Returns**: <code>Stake</code> - opt  

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_stake--module.exports+getValidators"></a>

#### module.exports.getValidators(page, size) ⇒ <code>Promise</code>
Get validators

**Kind**: instance method of [<code>module.exports</code>](#exp_module_stake--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>number</code> | page |
| size | <code>number</code> | page's size |

<a name="module_stake--module.exports+getValidator"></a>

#### module.exports.getValidator(validator) ⇒ <code>Promise</code>
Query the information from a single validator

**Kind**: instance method of [<code>module.exports</code>](#exp_module_stake--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| validator | <code>string</code> | validator's address |

<a name="module_stake--module.exports+getDelegations"></a>

#### module.exports.getDelegations(delegator) ⇒ <code>Promise</code>
Get all delegations from a delegator

**Kind**: instance method of [<code>module.exports</code>](#exp_module_stake--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |

<a name="module_stake--module.exports+getDelegationsByValidator"></a>

#### module.exports.getDelegationsByValidator(validator) ⇒ <code>Promise</code>
Get all delegations from a validator

**Kind**: instance method of [<code>module.exports</code>](#exp_module_stake--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| validator | <code>string</code> | validator's address |

<a name="module_stake--module.exports+getUbDelegations"></a>

#### module.exports.getUbDelegations(delegator) ⇒ <code>Promise</code>
Get all unbonding delegations from a delegator

**Kind**: instance method of [<code>module.exports</code>](#exp_module_stake--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |

<a name="module_stake--module.exports+getUbDelegationsByValidator"></a>

#### module.exports.getUbDelegationsByValidator(validator) ⇒ <code>Promise</code>
Get all unbonding delegations from a validator

**Kind**: instance method of [<code>module.exports</code>](#exp_module_stake--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| validator | <code>string</code> | validator's address |

<a name="module_stake--module.exports+getReDelegations"></a>

#### module.exports.getReDelegations(delegator) ⇒ <code>Promise</code>
Get all redelegations from a delegator

**Kind**: instance method of [<code>module.exports</code>](#exp_module_stake--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |

<a name="module_stake--module.exports+getReDelegationsByValidator"></a>

#### module.exports.getReDelegationsByValidator(validator) ⇒ <code>Promise</code>
Get all outgoing redelegations from a validator

**Kind**: instance method of [<code>module.exports</code>](#exp_module_stake--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| validator | <code>string</code> | validator's address |

<a name="module_stake--module.exports+getAllValidatorsByDelegator"></a>

#### module.exports.getAllValidatorsByDelegator(delegator) ⇒ <code>Promise</code>
Query all validators that a delegator is bonded to

**Kind**: instance method of [<code>module.exports</code>](#exp_module_stake--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |

<a name="module_stake--module.exports+getValidatorByDelegator"></a>

#### module.exports.getValidatorByDelegator(delegator, validator) ⇒ <code>Promise</code>
Query a validator that a delegator is bonded to

**Kind**: instance method of [<code>module.exports</code>](#exp_module_stake--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| validator | <code>string</code> | validator's address |

<a name="module_stake--module.exports+getDelegation"></a>

#### module.exports.getDelegation(delegator, validator) ⇒ <code>Promise</code>
Query the current delegation between a delegator and a validator

**Kind**: instance method of [<code>module.exports</code>](#exp_module_stake--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| validator | <code>string</code> | validator's address |

<a name="module_stake--module.exports+getUbDelegation"></a>

#### module.exports.getUbDelegation(delegator, validator) ⇒ <code>Promise</code>
Query all unbonding delegations between a delegator and a validator

**Kind**: instance method of [<code>module.exports</code>](#exp_module_stake--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| validator | <code>string</code> | validator's address |

<a name="module_stake--module.exports+getStakePool"></a>

#### module.exports.getStakePool() ⇒ <code>Promise</code>
Get the current state of the staking pool

**Kind**: instance method of [<code>module.exports</code>](#exp_module_stake--module.exports)  
<a name="module_stake--module.exports+delegate"></a>

#### module.exports.delegate(delegator, validator, amount, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
delegate liquid tokens to an validator

**Kind**: instance method of [<code>module.exports</code>](#exp_module_stake--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| validator | <code>string</code> | validator's operator address |
| amount | <code>Coin</code> | token |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_stake--module.exports+redelegate"></a>

#### module.exports.redelegate(delegator, srcVarAddr, dstVarAddr, shares, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
redelegate illiquid tokens from one validator to another

**Kind**: instance method of [<code>module.exports</code>](#exp_module_stake--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| srcVarAddr | <code>string</code> | bech32 address of the source validator |
| dstVarAddr | <code>string</code> | bech32 address of the destination validator |
| shares | <code>string</code> | Amount of source-shares to either unbond or redelegate as a positive integer or decimal |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_stake--module.exports+undelegate"></a>

#### module.exports.undelegate(delegator, valAddr, shares, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
undelegate shares from a validator

**Kind**: instance method of [<code>module.exports</code>](#exp_module_stake--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| valAddr | <code>string</code> | bech32 address of the validator |
| shares | <code>string</code> | Amount of source-shares to either unbond or redelegate as a positive integer or decimal |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_tendermint"></a>

## tendermint

* [tendermint](#module_tendermint)
    * [module.exports](#exp_module_tendermint--module.exports) ⏏
        * [new module.exports(provider, opt)](#new_module_tendermint--module.exports_new)
        * [.getNodeInfo()](#module_tendermint--module.exports+getNodeInfo) ⇒ <code>Promise</code>
        * [.getSyncing()](#module_tendermint--module.exports+getSyncing) ⇒ <code>Promise</code>
        * [.getBlock(height)](#module_tendermint--module.exports+getBlock) ⇒ <code>Promise</code>
        * [.getBlockResult(height)](#module_tendermint--module.exports+getBlockResult) ⇒ <code>Promise</code>
        * [.getValidatorSet(height)](#module_tendermint--module.exports+getValidatorSet) ⇒ <code>Promise</code>
        * [.getTx(hash)](#module_tendermint--module.exports+getTx) ⇒ <code>Promise</code>

<a name="exp_module_tendermint--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_tendermint--module.exports_new"></a>

#### new module.exports(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_tendermint--module.exports+getNodeInfo"></a>

#### module.exports.getNodeInfo() ⇒ <code>Promise</code>
Information about the connected node

**Kind**: instance method of [<code>module.exports</code>](#exp_module_tendermint--module.exports)  
<a name="module_tendermint--module.exports+getSyncing"></a>

#### module.exports.getSyncing() ⇒ <code>Promise</code>
Get if the node is currently syning with other nodes

**Kind**: instance method of [<code>module.exports</code>](#exp_module_tendermint--module.exports)  
<a name="module_tendermint--module.exports+getBlock"></a>

#### module.exports.getBlock(height) ⇒ <code>Promise</code>
Get a  block

**Kind**: instance method of [<code>module.exports</code>](#exp_module_tendermint--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| height | <code>number</code> | block's height,optional,if null,will return the latest block |

<a name="module_tendermint--module.exports+getBlockResult"></a>

#### module.exports.getBlockResult(height) ⇒ <code>Promise</code>
Get a block result

**Kind**: instance method of [<code>module.exports</code>](#exp_module_tendermint--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| height | <code>number</code> | block's height,optional,if null,will return the latest block's result |

<a name="module_tendermint--module.exports+getValidatorSet"></a>

#### module.exports.getValidatorSet(height) ⇒ <code>Promise</code>
Get the validator set

**Kind**: instance method of [<code>module.exports</code>](#exp_module_tendermint--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| height | <code>number</code> | block's height,optional,if null,will return the latest validator set |

<a name="module_tendermint--module.exports+getTx"></a>

#### module.exports.getTx(hash) ⇒ <code>Promise</code>
Get a Tx by hash

**Kind**: instance method of [<code>module.exports</code>](#exp_module_tendermint--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| hash | <code>string</code> | transaction's hash |

<a name="module_version"></a>

## version

* [version](#module_version)
    * [module.exports](#exp_module_version--module.exports) ⏏
        * [new module.exports(provider, opt)](#new_module_version--module.exports_new)
        * [.getLcdVersion()](#module_version--module.exports+getLcdVersion) ⇒ <code>Promise</code>
        * [.getNodeVersion()](#module_version--module.exports+getNodeVersion) ⇒ <code>Promise</code>

<a name="exp_module_version--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_version--module.exports_new"></a>

#### new module.exports(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_version--module.exports+getLcdVersion"></a>

#### module.exports.getLcdVersion() ⇒ <code>Promise</code>
Get the version of irislcd running locally to compare against expected

**Kind**: instance method of [<code>module.exports</code>](#exp_module_version--module.exports)  
<a name="module_version--module.exports+getNodeVersion"></a>

#### module.exports.getNodeVersion() ⇒ <code>Promise</code>
Get the version of node that lcd connected

**Kind**: instance method of [<code>module.exports</code>](#exp_module_version--module.exports)  
