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
    * [~Asset](#module_asset..Asset)
        * [new Asset(provider, opt)](#new_module_asset..Asset_new)
        * [.getToken(id)](#module_asset..Asset+getToken) ⇒ <code>Promise</code>
        * [.getTokens(source, gateway, owner)](#module_asset..Asset+getTokens) ⇒ <code>Promise</code>
        * [.getGateway(moniker)](#module_asset..Asset+getGateway) ⇒ <code>Promise</code>
        * [.getGateways(owner)](#module_asset..Asset+getGateways) ⇒ <code>Promise</code>
        * [.getGatewayFee(moniker)](#module_asset..Asset+getGatewayFee) ⇒ <code>Promise</code>
        * [.getTokenFee(id)](#module_asset..Asset+getTokenFee) ⇒ <code>Promise</code>

<a name="module_asset..Asset"></a>

### asset~Asset
**Kind**: inner class of [<code>asset</code>](#module_asset)  

* [~Asset](#module_asset..Asset)
    * [new Asset(provider, opt)](#new_module_asset..Asset_new)
    * [.getToken(id)](#module_asset..Asset+getToken) ⇒ <code>Promise</code>
    * [.getTokens(source, gateway, owner)](#module_asset..Asset+getTokens) ⇒ <code>Promise</code>
    * [.getGateway(moniker)](#module_asset..Asset+getGateway) ⇒ <code>Promise</code>
    * [.getGateways(owner)](#module_asset..Asset+getGateways) ⇒ <code>Promise</code>
    * [.getGatewayFee(moniker)](#module_asset..Asset+getGatewayFee) ⇒ <code>Promise</code>
    * [.getTokenFee(id)](#module_asset..Asset+getTokenFee) ⇒ <code>Promise</code>

<a name="new_module_asset..Asset_new"></a>

#### new Asset(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_asset..Asset+getToken"></a>

#### asset.getToken(id) ⇒ <code>Promise</code>
Query token by unique id

**Kind**: instance method of [<code>Asset</code>](#module_asset..Asset)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | token's id |

<a name="module_asset..Asset+getTokens"></a>

#### asset.getTokens(source, gateway, owner) ⇒ <code>Promise</code>
Query tokens by condition

**Kind**: instance method of [<code>Asset</code>](#module_asset..Asset)  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | the source of the destination token, options: native, external, gateway |
| gateway | <code>string</code> | the owner address of the destination token, optional when source is native, ignored when source is not native |
| owner | <code>string</code> | the gateway moniker of the destination token, optional when source is gateway |

<a name="module_asset..Asset+getGateway"></a>

#### asset.getGateway(moniker) ⇒ <code>Promise</code>
Query the gateway with the specified moniker

**Kind**: instance method of [<code>Asset</code>](#module_asset..Asset)  

| Param | Type | Description |
| --- | --- | --- |
| moniker | <code>string</code> | the unique name of the destination gateway |

<a name="module_asset..Asset+getGateways"></a>

#### asset.getGateways(owner) ⇒ <code>Promise</code>
Query all the gateways with an optional owner

**Kind**: instance method of [<code>Asset</code>](#module_asset..Asset)  

| Param | Type | Description |
| --- | --- | --- |
| owner | <code>string</code> | the owner address to be queried |

<a name="module_asset..Asset+getGatewayFee"></a>

#### asset.getGatewayFee(moniker) ⇒ <code>Promise</code>
Query the fee for the creation of the gateway with the given moniker

**Kind**: instance method of [<code>Asset</code>](#module_asset..Asset)  

| Param | Type | Description |
| --- | --- | --- |
| moniker | <code>string</code> | he unique name of a gateway |

<a name="module_asset..Asset+getTokenFee"></a>

#### asset.getTokenFee(id) ⇒ <code>Promise</code>
Query the fees for the issuance and minting of the token with the given id

**Kind**: instance method of [<code>Asset</code>](#module_asset..Asset)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | he unique name of a gateway |

<a name="module_bank"></a>

## bank

* [bank](#module_bank)
    * [~Bank](#module_bank..Bank)
        * [new Bank(provider, opt)](#new_module_bank..Bank_new)
        * [.getAccount(address)](#module_bank..Bank+getAccount) ⇒ <code>\*</code>
        * [.getCoinType(coinType)](#module_bank..Bank+getCoinType) ⇒ <code>\*</code>
        * [.getTokenStats()](#module_bank..Bank+getTokenStats) ⇒ <code>\*</code>
        * [.transfer(from, to, tokens, config)](#module_bank..Bank+transfer) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>

<a name="module_bank..Bank"></a>

### bank~Bank
**Kind**: inner class of [<code>bank</code>](#module_bank)  

* [~Bank](#module_bank..Bank)
    * [new Bank(provider, opt)](#new_module_bank..Bank_new)
    * [.getAccount(address)](#module_bank..Bank+getAccount) ⇒ <code>\*</code>
    * [.getCoinType(coinType)](#module_bank..Bank+getCoinType) ⇒ <code>\*</code>
    * [.getTokenStats()](#module_bank..Bank+getTokenStats) ⇒ <code>\*</code>
    * [.transfer(from, to, tokens, config)](#module_bank..Bank+transfer) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>

<a name="new_module_bank..Bank_new"></a>

#### new Bank(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_bank..Bank+getAccount"></a>

#### bank.getAccount(address) ⇒ <code>\*</code>
Get the account information on blockchain

**Kind**: instance method of [<code>Bank</code>](#module_bank..Bank)  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | address of account |

<a name="module_bank..Bank+getCoinType"></a>

#### bank.getCoinType(coinType) ⇒ <code>\*</code>
Get the detailed information about the given coin type

**Kind**: instance method of [<code>Bank</code>](#module_bank..Bank)  

| Param | Type | Description |
| --- | --- | --- |
| coinType | <code>string</code> | token's symbol |

<a name="module_bank..Bank+getTokenStats"></a>

#### bank.getTokenStats() ⇒ <code>\*</code>
Get token statistics, such as total loose tokens, total bonded token and total burned token

**Kind**: instance method of [<code>Bank</code>](#module_bank..Bank)  
<a name="module_bank..Bank+transfer"></a>

#### bank.transfer(from, to, tokens, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
**Kind**: instance method of [<code>Bank</code>](#module_bank..Bank)  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>string</code> | sender's address |
| to | <code>string</code> | receiver's address |
| tokens | <code>Array.&lt;Coin&gt;</code> | token array |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_coinswap"></a>

## coinswap

* [coinswap](#module_coinswap)
    * [~CoinSwap](#module_coinswap..CoinSwap)
        * [new CoinSwap(provider, opt)](#new_module_coinswap..CoinSwap_new)
        * [.getReservePool(denom)](#module_coinswap..CoinSwap+getReservePool) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.addLiquidity(maxToken, irisAmt, minLiquidity, deadline, sender, config)](#module_coinswap..CoinSwap+addLiquidity) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
        * [.removeLiquidity(minToken, withdrawLiquidity, minIrisAmt, deadline, sender, config)](#module_coinswap..CoinSwap+removeLiquidity) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
        * [.swap(input, output, ddeadline, isBuyOrder, config)](#module_coinswap..CoinSwap+swap)
        * [.tradeExactIrisForTokens(outputTokenDenom, inputIrisAmount)](#module_coinswap..CoinSwap+tradeExactIrisForTokens)
        * [.tradeIrisForExactTokens(outputTokenDenom, outputTokenAmount)](#module_coinswap..CoinSwap+tradeIrisForExactTokens)
        * [.tradeExactTokensForIris(inputTokenDenom, inputTokenAmount)](#module_coinswap..CoinSwap+tradeExactTokensForIris)
        * [.tradeTokensForExactIris(inputTokenDenom, outputIrisAmount)](#module_coinswap..CoinSwap+tradeTokensForExactIris)
        * [.tradeExactTokensForTokens(inputTokenDenom, outputTokenDenom, inputTokenAmount)](#module_coinswap..CoinSwap+tradeExactTokensForTokens)
        * [.tradeTokensForExactTokens(inputTokenDenom, outputTokenDenom, outputTokenAmount)](#module_coinswap..CoinSwap+tradeTokensForExactTokens)

<a name="module_coinswap..CoinSwap"></a>

### coinswap~CoinSwap
**Kind**: inner class of [<code>coinswap</code>](#module_coinswap)  

* [~CoinSwap](#module_coinswap..CoinSwap)
    * [new CoinSwap(provider, opt)](#new_module_coinswap..CoinSwap_new)
    * [.getReservePool(denom)](#module_coinswap..CoinSwap+getReservePool) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.addLiquidity(maxToken, irisAmt, minLiquidity, deadline, sender, config)](#module_coinswap..CoinSwap+addLiquidity) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
    * [.removeLiquidity(minToken, withdrawLiquidity, minIrisAmt, deadline, sender, config)](#module_coinswap..CoinSwap+removeLiquidity) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
    * [.swap(input, output, ddeadline, isBuyOrder, config)](#module_coinswap..CoinSwap+swap)
    * [.tradeExactIrisForTokens(outputTokenDenom, inputIrisAmount)](#module_coinswap..CoinSwap+tradeExactIrisForTokens)
    * [.tradeIrisForExactTokens(outputTokenDenom, outputTokenAmount)](#module_coinswap..CoinSwap+tradeIrisForExactTokens)
    * [.tradeExactTokensForIris(inputTokenDenom, inputTokenAmount)](#module_coinswap..CoinSwap+tradeExactTokensForIris)
    * [.tradeTokensForExactIris(inputTokenDenom, outputIrisAmount)](#module_coinswap..CoinSwap+tradeTokensForExactIris)
    * [.tradeExactTokensForTokens(inputTokenDenom, outputTokenDenom, inputTokenAmount)](#module_coinswap..CoinSwap+tradeExactTokensForTokens)
    * [.tradeTokensForExactTokens(inputTokenDenom, outputTokenDenom, outputTokenAmount)](#module_coinswap..CoinSwap+tradeTokensForExactTokens)

<a name="new_module_coinswap..CoinSwap_new"></a>

#### new CoinSwap(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_coinswap..CoinSwap+getReservePool"></a>

#### coinSwap.getReservePool(denom) ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: instance method of [<code>CoinSwap</code>](#module_coinswap..CoinSwap)  
**Returns**: <code>Promise.&lt;\*&gt;</code> - - reserve pool information  

| Param | Type | Description |
| --- | --- | --- |
| denom | <code>string</code> | uni denom of token,such as u-btc |

<a name="module_coinswap..CoinSwap+addLiquidity"></a>

#### coinSwap.addLiquidity(maxToken, irisAmt, minLiquidity, deadline, sender, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
**Kind**: instance method of [<code>CoinSwap</code>](#module_coinswap..CoinSwap)  

| Param | Type | Description |
| --- | --- | --- |
| maxToken | <code>Coin</code> | deposited token |
| irisAmt | <code>number</code> | amount of iris deposited |
| minLiquidity | <code>number</code> | amount of uni token |
| deadline | <code>number</code> | timestamp |
| sender | <code>string</code> | address of deposit |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_coinswap..CoinSwap+removeLiquidity"></a>

#### coinSwap.removeLiquidity(minToken, withdrawLiquidity, minIrisAmt, deadline, sender, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
**Kind**: instance method of [<code>CoinSwap</code>](#module_coinswap..CoinSwap)  

| Param | Type | Description |
| --- | --- | --- |
| minToken | <code>number</code> | amount of token retrieved |
| withdrawLiquidity | <code>Coin</code> | uni withdraw |
| minIrisAmt | <code>number</code> | amount of iris retrieved |
| deadline | <code>number</code> | timestamp |
| sender | <code>string</code> | address of sender |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_coinswap..CoinSwap+swap"></a>

#### coinSwap.swap(input, output, ddeadline, isBuyOrder, config)
**Kind**: instance method of [<code>CoinSwap</code>](#module_coinswap..CoinSwap)  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Coin</code> | user spending tokens |
| output | <code>Coin</code> | user received tokens |
| ddeadline | <code>number</code> | timestamp |
| isBuyOrder | <code>boolean</code> |  |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_coinswap..CoinSwap+tradeExactIrisForTokens"></a>

#### coinSwap.tradeExactIrisForTokens(outputTokenDenom, inputIrisAmount)
The function facilitates trading an exact amount of Iris for a specified token.

**Kind**: instance method of [<code>CoinSwap</code>](#module_coinswap..CoinSwap)  

| Param | Type | Description |
| --- | --- | --- |
| outputTokenDenom | <code>string</code> | Address of output token. |
| inputIrisAmount | <code>number</code> | The input amount of Iris. |

<a name="module_coinswap..CoinSwap+tradeIrisForExactTokens"></a>

#### coinSwap.tradeIrisForExactTokens(outputTokenDenom, outputTokenAmount)
The function facilitates trading Iris for an exact amount of a specified token.

**Kind**: instance method of [<code>CoinSwap</code>](#module_coinswap..CoinSwap)  

| Param | Type | Description |
| --- | --- | --- |
| outputTokenDenom | <code>string</code> | Denom of output token. |
| outputTokenAmount | <code>number</code> | Denom of output token. |

<a name="module_coinswap..CoinSwap+tradeExactTokensForIris"></a>

#### coinSwap.tradeExactTokensForIris(inputTokenDenom, inputTokenAmount)
The function facilitates trading an exact amount of a specified token for Iris.

**Kind**: instance method of [<code>CoinSwap</code>](#module_coinswap..CoinSwap)  

| Param | Type | Description |
| --- | --- | --- |
| inputTokenDenom | <code>string</code> | Denom of input token. |
| inputTokenAmount | <code>number</code> | Amount of input token. |

<a name="module_coinswap..CoinSwap+tradeTokensForExactIris"></a>

#### coinSwap.tradeTokensForExactIris(inputTokenDenom, outputIrisAmount)
The function facilitates trading a specified token for an exact amount of Iris.

**Kind**: instance method of [<code>CoinSwap</code>](#module_coinswap..CoinSwap)  

| Param | Type | Description |
| --- | --- | --- |
| inputTokenDenom | <code>string</code> | Denom of input token. |
| outputIrisAmount | <code>number</code> | The output amount of iris |

<a name="module_coinswap..CoinSwap+tradeExactTokensForTokens"></a>

#### coinSwap.tradeExactTokensForTokens(inputTokenDenom, outputTokenDenom, inputTokenAmount)
The function facilitates trading an exact amount of a specified token for another token.

**Kind**: instance method of [<code>CoinSwap</code>](#module_coinswap..CoinSwap)  

| Param | Type | Description |
| --- | --- | --- |
| inputTokenDenom | <code>string</code> | Denom of input token. |
| outputTokenDenom | <code>string</code> | Denom of output token. |
| inputTokenAmount | <code>number</code> | The input amount of tokens |

<a name="module_coinswap..CoinSwap+tradeTokensForExactTokens"></a>

#### coinSwap.tradeTokensForExactTokens(inputTokenDenom, outputTokenDenom, outputTokenAmount)
The function facilitates trading an exact amount of a specified token for another token

**Kind**: instance method of [<code>CoinSwap</code>](#module_coinswap..CoinSwap)  

| Param | Type | Description |
| --- | --- | --- |
| inputTokenDenom | <code>string</code> | Denom of input token. |
| outputTokenDenom | <code>string</code> | Denom of output token. |
| outputTokenAmount | <code>number</code> | The output amount of tokens |

<a name="module_distribution"></a>

## distribution

* [distribution](#module_distribution)
    * [~Distribution](#module_distribution..Distribution)
        * [new Distribution(provider, opt)](#new_module_distribution..Distribution_new)
        * [.getWithdrawAddr(delegator)](#module_distribution..Distribution+getWithdrawAddr) ⇒ <code>Promise</code>
        * [.queryRewards(delegator)](#module_distribution..Distribution+queryRewards) ⇒ <code>Promise</code>
        * [.getCommunityTax()](#module_distribution..Distribution+getCommunityTax) ⇒ <code>Promise</code>
        * [.withdrawAllRewards(delegator, config)](#module_distribution..Distribution+withdrawAllRewards) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
        * [.withdrawRewards(delegator, varAddr, config)](#module_distribution..Distribution+withdrawRewards) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>

<a name="module_distribution..Distribution"></a>

### distribution~Distribution
**Kind**: inner class of [<code>distribution</code>](#module_distribution)  

* [~Distribution](#module_distribution..Distribution)
    * [new Distribution(provider, opt)](#new_module_distribution..Distribution_new)
    * [.getWithdrawAddr(delegator)](#module_distribution..Distribution+getWithdrawAddr) ⇒ <code>Promise</code>
    * [.queryRewards(delegator)](#module_distribution..Distribution+queryRewards) ⇒ <code>Promise</code>
    * [.getCommunityTax()](#module_distribution..Distribution+getCommunityTax) ⇒ <code>Promise</code>
    * [.withdrawAllRewards(delegator, config)](#module_distribution..Distribution+withdrawAllRewards) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
    * [.withdrawRewards(delegator, varAddr, config)](#module_distribution..Distribution+withdrawRewards) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>

<a name="new_module_distribution..Distribution_new"></a>

#### new Distribution(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_distribution..Distribution+getWithdrawAddr"></a>

#### distribution.getWithdrawAddr(delegator) ⇒ <code>Promise</code>
Query withdraw address

**Kind**: instance method of [<code>Distribution</code>](#module_distribution..Distribution)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |

<a name="module_distribution..Distribution+queryRewards"></a>

#### distribution.queryRewards(delegator) ⇒ <code>Promise</code>
Query all the rewards of validator or delegator

**Kind**: instance method of [<code>Distribution</code>](#module_distribution..Distribution)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |

<a name="module_distribution..Distribution+getCommunityTax"></a>

#### distribution.getCommunityTax() ⇒ <code>Promise</code>
Query community tax

**Kind**: instance method of [<code>Distribution</code>](#module_distribution..Distribution)  
<a name="module_distribution..Distribution+withdrawAllRewards"></a>

#### distribution.withdrawAllRewards(delegator, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
delegator withdraw all rewards from the validators

**Kind**: instance method of [<code>Distribution</code>](#module_distribution..Distribution)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_distribution..Distribution+withdrawRewards"></a>

#### distribution.withdrawRewards(delegator, varAddr, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
delegator withdraw rewards from a validators

**Kind**: instance method of [<code>Distribution</code>](#module_distribution..Distribution)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| varAddr | <code>string</code> | validator's address |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_gov"></a>

## gov

* [gov](#module_gov)
    * [~Gov](#module_gov..Gov)
        * [new Gov(provider, opt)](#new_module_gov..Gov_new)
        * [.getProposals(voter, depositor, status, limit)](#module_gov..Gov+getProposals) ⇒ <code>Promise</code>
        * [.getProposal(proposalId)](#module_gov..Gov+getProposal) ⇒ <code>Promise</code>
        * [.getDeposits(proposalId)](#module_gov..Gov+getDeposits) ⇒ <code>Promise</code>
        * [.getDeposit(proposalId, depositor)](#module_gov..Gov+getDeposit) ⇒ <code>Promise</code>
        * [.getVotes(proposalId)](#module_gov..Gov+getVotes) ⇒ <code>Promise</code>
        * [.getVote(proposalId, voter)](#module_gov..Gov+getVote) ⇒ <code>Promise</code>
        * [.getParams()](#module_gov..Gov+getParams) ⇒ <code>Promise</code>

<a name="module_gov..Gov"></a>

### gov~Gov
**Kind**: inner class of [<code>gov</code>](#module_gov)  

* [~Gov](#module_gov..Gov)
    * [new Gov(provider, opt)](#new_module_gov..Gov_new)
    * [.getProposals(voter, depositor, status, limit)](#module_gov..Gov+getProposals) ⇒ <code>Promise</code>
    * [.getProposal(proposalId)](#module_gov..Gov+getProposal) ⇒ <code>Promise</code>
    * [.getDeposits(proposalId)](#module_gov..Gov+getDeposits) ⇒ <code>Promise</code>
    * [.getDeposit(proposalId, depositor)](#module_gov..Gov+getDeposit) ⇒ <code>Promise</code>
    * [.getVotes(proposalId)](#module_gov..Gov+getVotes) ⇒ <code>Promise</code>
    * [.getVote(proposalId, voter)](#module_gov..Gov+getVote) ⇒ <code>Promise</code>
    * [.getParams()](#module_gov..Gov+getParams) ⇒ <code>Promise</code>

<a name="new_module_gov..Gov_new"></a>

#### new Gov(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_gov..Gov+getProposals"></a>

#### gov.getProposals(voter, depositor, status, limit) ⇒ <code>Promise</code>
Query proposals information with parameters

**Kind**: instance method of [<code>Gov</code>](#module_gov..Gov)  

| Param | Type | Description |
| --- | --- | --- |
| voter | <code>string</code> | voter's address |
| depositor | <code>string</code> | depositor's address |
| status | <code>string</code> | proposal's status,valid values can be "DepositPeriod", "VotingPeriod", "Passed", "Rejected" |
| limit | <code>number</code> | limit to latest [number] proposals. Defaults to all proposals |

<a name="module_gov..Gov+getProposal"></a>

#### gov.getProposal(proposalId) ⇒ <code>Promise</code>
Query a proposal by proposalId

**Kind**: instance method of [<code>Gov</code>](#module_gov..Gov)  

| Param | Type | Description |
| --- | --- | --- |
| proposalId | <code>number</code> | proposal's id |

<a name="module_gov..Gov+getDeposits"></a>

#### gov.getDeposits(proposalId) ⇒ <code>Promise</code>
Query deposits by proposalId

**Kind**: instance method of [<code>Gov</code>](#module_gov..Gov)  

| Param | Type | Description |
| --- | --- | --- |
| proposalId | <code>number</code> | proposal's id |

<a name="module_gov..Gov+getDeposit"></a>

#### gov.getDeposit(proposalId, depositor) ⇒ <code>Promise</code>
Query deposit by proposalId and depositor address

**Kind**: instance method of [<code>Gov</code>](#module_gov..Gov)  

| Param | Type | Description |
| --- | --- | --- |
| proposalId | <code>number</code> | proposal's id |
| depositor | <code>string</code> | depositor's address |

<a name="module_gov..Gov+getVotes"></a>

#### gov.getVotes(proposalId) ⇒ <code>Promise</code>
Query voters information by proposalId

**Kind**: instance method of [<code>Gov</code>](#module_gov..Gov)  

| Param | Type | Description |
| --- | --- | --- |
| proposalId | <code>number</code> | proposal's id |

<a name="module_gov..Gov+getVote"></a>

#### gov.getVote(proposalId, voter) ⇒ <code>Promise</code>
Query vote information by proposalId and voter address

**Kind**: instance method of [<code>Gov</code>](#module_gov..Gov)  

| Param | Type | Description |
| --- | --- | --- |
| proposalId | <code>number</code> | proposal's id |
| voter | <code>string</code> | voter's address |

<a name="module_gov..Gov+getParams"></a>

#### gov.getParams() ⇒ <code>Promise</code>
Query all parameters

**Kind**: instance method of [<code>Gov</code>](#module_gov..Gov)  
<a name="module_htlc"></a>

## htlc

* [htlc](#module_htlc)
    * [~HTLC](#module_htlc..HTLC)
        * [new HTLC(provider, opt)](#new_module_htlc..HTLC_new)
        * [.getHTLC(hashLock)](#module_htlc..HTLC+getHTLC) ⇒ <code>Promise</code>
        * [.createHTLC(sender, receiver, receiverOnOtherChain, hashLock, amount, timeLock, timestamp, config)](#module_htlc..HTLC+createHTLC) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
        * [.claimHTLC(sender, hashLock, secret, config)](#module_htlc..HTLC+claimHTLC) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
        * [.refundHTLC(sender, hashLock, config)](#module_htlc..HTLC+refundHTLC) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>

<a name="module_htlc..HTLC"></a>

### htlc~HTLC
**Kind**: inner class of [<code>htlc</code>](#module_htlc)  

* [~HTLC](#module_htlc..HTLC)
    * [new HTLC(provider, opt)](#new_module_htlc..HTLC_new)
    * [.getHTLC(hashLock)](#module_htlc..HTLC+getHTLC) ⇒ <code>Promise</code>
    * [.createHTLC(sender, receiver, receiverOnOtherChain, hashLock, amount, timeLock, timestamp, config)](#module_htlc..HTLC+createHTLC) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
    * [.claimHTLC(sender, hashLock, secret, config)](#module_htlc..HTLC+claimHTLC) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
    * [.refundHTLC(sender, hashLock, config)](#module_htlc..HTLC+refundHTLC) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>

<a name="new_module_htlc..HTLC_new"></a>

#### new HTLC(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_htlc..HTLC+getHTLC"></a>

#### htlC.getHTLC(hashLock) ⇒ <code>Promise</code>
Query HTLC by hash-lock

**Kind**: instance method of [<code>HTLC</code>](#module_htlc..HTLC)  

| Param | Type | Description |
| --- | --- | --- |
| hashLock | <code>string</code> | the hash-lock of the HTLC |

<a name="module_htlc..HTLC+createHTLC"></a>

#### htlC.createHTLC(sender, receiver, receiverOnOtherChain, hashLock, amount, timeLock, timestamp, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
create a HTLC (TODO)

**Kind**: instance method of [<code>HTLC</code>](#module_htlc..HTLC)  

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

<a name="module_htlc..HTLC+claimHTLC"></a>

#### htlC.claimHTLC(sender, hashLock, secret, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
claim an opened HTLC (TODO)

**Kind**: instance method of [<code>HTLC</code>](#module_htlc..HTLC)  

| Param | Type | Description |
| --- | --- | --- |
| sender | <code>string</code> | sender's address |
| hashLock | <code>string</code> | the hash lock identifying the HTLC to be claimed |
| secret | <code>string</code> | the secret with which to claim |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_htlc..HTLC+refundHTLC"></a>

#### htlC.refundHTLC(sender, hashLock, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
refund from an expired HTLC (TODO)

**Kind**: instance method of [<code>HTLC</code>](#module_htlc..HTLC)  

| Param | Type | Description |
| --- | --- | --- |
| sender | <code>string</code> | sender's address |
| hashLock | <code>string</code> | the hash lock identifying the HTLC to be claimed |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_rand"></a>

## rand

* [rand](#module_rand)
    * [~Rand](#module_rand..Rand)
        * [new Rand(provider, opt)](#new_module_rand..Rand_new)
        * [.getRand(requestId)](#module_rand..Rand+getRand) ⇒ <code>Promise</code>
        * [.getPendingRands(height)](#module_rand..Rand+getPendingRands) ⇒ <code>Promise</code>
        * [.requestRand(consumer, blockInterval, config)](#module_rand..Rand+requestRand) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>

<a name="module_rand..Rand"></a>

### rand~Rand
**Kind**: inner class of [<code>rand</code>](#module_rand)  

* [~Rand](#module_rand..Rand)
    * [new Rand(provider, opt)](#new_module_rand..Rand_new)
    * [.getRand(requestId)](#module_rand..Rand+getRand) ⇒ <code>Promise</code>
    * [.getPendingRands(height)](#module_rand..Rand+getPendingRands) ⇒ <code>Promise</code>
    * [.requestRand(consumer, blockInterval, config)](#module_rand..Rand+requestRand) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>

<a name="new_module_rand..Rand_new"></a>

#### new Rand(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_rand..Rand+getRand"></a>

#### rand.getRand(requestId) ⇒ <code>Promise</code>
Query a random number by the specified request id

**Kind**: instance method of [<code>Rand</code>](#module_rand..Rand)  

| Param | Type | Description |
| --- | --- | --- |
| requestId | <code>string</code> | the request id |

<a name="module_rand..Rand+getPendingRands"></a>

#### rand.getPendingRands(height) ⇒ <code>Promise</code>
Query the pending requests with an optional height

**Kind**: instance method of [<code>Rand</code>](#module_rand..Rand)  

| Param | Type | Description |
| --- | --- | --- |
| height | <code>int</code> | the destination block height |

<a name="module_rand..Rand+requestRand"></a>

#### rand.requestRand(consumer, blockInterval, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
request a random number (TODO)

**Kind**: instance method of [<code>Rand</code>](#module_rand..Rand)  

| Param | Type | Description |
| --- | --- | --- |
| consumer | <code>string</code> | consumer's address |
| blockInterval | <code>string</code> | block interval after which the requested random number will be generated |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_slashing"></a>

## slashing

* [slashing](#module_slashing)
    * [~Slashing](#module_slashing..Slashing)
        * [new Slashing(provider, opt)](#new_module_slashing..Slashing_new)
        * [.getSigningInfo(valPubkey)](#module_slashing..Slashing+getSigningInfo) ⇒ <code>Promise</code>

<a name="module_slashing..Slashing"></a>

### slashing~Slashing
**Kind**: inner class of [<code>slashing</code>](#module_slashing)  

* [~Slashing](#module_slashing..Slashing)
    * [new Slashing(provider, opt)](#new_module_slashing..Slashing_new)
    * [.getSigningInfo(valPubkey)](#module_slashing..Slashing+getSigningInfo) ⇒ <code>Promise</code>

<a name="new_module_slashing..Slashing_new"></a>

#### new Slashing(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_slashing..Slashing+getSigningInfo"></a>

#### slashing.getSigningInfo(valPubkey) ⇒ <code>Promise</code>
Get sign info of given validator

**Kind**: instance method of [<code>Slashing</code>](#module_slashing..Slashing)  

| Param | Type | Description |
| --- | --- | --- |
| valPubkey | <code>string</code> | validator's consensus public key |

<a name="module_stake"></a>

## stake

* [stake](#module_stake)
    * [~Stake](#module_stake..Stake)
        * [new Stake(provider, opt)](#new_module_stake..Stake_new)
        * [.getValidators(page, size)](#module_stake..Stake+getValidators) ⇒ <code>Promise</code>
        * [.getValidator(validator)](#module_stake..Stake+getValidator) ⇒ <code>Promise</code>
        * [.getDelegations(delegator)](#module_stake..Stake+getDelegations) ⇒ <code>Promise</code>
        * [.getDelegationsByValidator(validator)](#module_stake..Stake+getDelegationsByValidator) ⇒ <code>Promise</code>
        * [.getUbDelegations(delegator)](#module_stake..Stake+getUbDelegations) ⇒ <code>Promise</code>
        * [.getUbDelegationsByValidator(validator)](#module_stake..Stake+getUbDelegationsByValidator) ⇒ <code>Promise</code>
        * [.getReDelegations(delegator)](#module_stake..Stake+getReDelegations) ⇒ <code>Promise</code>
        * [.getReDelegationsByValidator(validator)](#module_stake..Stake+getReDelegationsByValidator) ⇒ <code>Promise</code>
        * [.getAllValidatorsByDelegator(delegator)](#module_stake..Stake+getAllValidatorsByDelegator) ⇒ <code>Promise</code>
        * [.getValidatorByDelegator(delegator, validator)](#module_stake..Stake+getValidatorByDelegator) ⇒ <code>Promise</code>
        * [.getDelegation(delegator, validator)](#module_stake..Stake+getDelegation) ⇒ <code>Promise</code>
        * [.getUbDelegation(delegator, validator)](#module_stake..Stake+getUbDelegation) ⇒ <code>Promise</code>
        * [.getStakePool()](#module_stake..Stake+getStakePool) ⇒ <code>Promise</code>
        * [.delegate(delegator, validator, amount, config)](#module_stake..Stake+delegate) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
        * [.redelegate(delegator, srcVarAddr, dstVarAddr, shares, config)](#module_stake..Stake+redelegate) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
        * [.undelegate(delegator, valAddr, shares, config)](#module_stake..Stake+undelegate) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>

<a name="module_stake..Stake"></a>

### stake~Stake
**Kind**: inner class of [<code>stake</code>](#module_stake)  

* [~Stake](#module_stake..Stake)
    * [new Stake(provider, opt)](#new_module_stake..Stake_new)
    * [.getValidators(page, size)](#module_stake..Stake+getValidators) ⇒ <code>Promise</code>
    * [.getValidator(validator)](#module_stake..Stake+getValidator) ⇒ <code>Promise</code>
    * [.getDelegations(delegator)](#module_stake..Stake+getDelegations) ⇒ <code>Promise</code>
    * [.getDelegationsByValidator(validator)](#module_stake..Stake+getDelegationsByValidator) ⇒ <code>Promise</code>
    * [.getUbDelegations(delegator)](#module_stake..Stake+getUbDelegations) ⇒ <code>Promise</code>
    * [.getUbDelegationsByValidator(validator)](#module_stake..Stake+getUbDelegationsByValidator) ⇒ <code>Promise</code>
    * [.getReDelegations(delegator)](#module_stake..Stake+getReDelegations) ⇒ <code>Promise</code>
    * [.getReDelegationsByValidator(validator)](#module_stake..Stake+getReDelegationsByValidator) ⇒ <code>Promise</code>
    * [.getAllValidatorsByDelegator(delegator)](#module_stake..Stake+getAllValidatorsByDelegator) ⇒ <code>Promise</code>
    * [.getValidatorByDelegator(delegator, validator)](#module_stake..Stake+getValidatorByDelegator) ⇒ <code>Promise</code>
    * [.getDelegation(delegator, validator)](#module_stake..Stake+getDelegation) ⇒ <code>Promise</code>
    * [.getUbDelegation(delegator, validator)](#module_stake..Stake+getUbDelegation) ⇒ <code>Promise</code>
    * [.getStakePool()](#module_stake..Stake+getStakePool) ⇒ <code>Promise</code>
    * [.delegate(delegator, validator, amount, config)](#module_stake..Stake+delegate) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
    * [.redelegate(delegator, srcVarAddr, dstVarAddr, shares, config)](#module_stake..Stake+redelegate) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
    * [.undelegate(delegator, valAddr, shares, config)](#module_stake..Stake+undelegate) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>

<a name="new_module_stake..Stake_new"></a>

#### new Stake(provider, opt)
**Returns**: <code>Stake</code> - opt  

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_stake..Stake+getValidators"></a>

#### stake.getValidators(page, size) ⇒ <code>Promise</code>
Get validators

**Kind**: instance method of [<code>Stake</code>](#module_stake..Stake)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>number</code> | page |
| size | <code>number</code> | page's size |

<a name="module_stake..Stake+getValidator"></a>

#### stake.getValidator(validator) ⇒ <code>Promise</code>
Query the information from a single validator

**Kind**: instance method of [<code>Stake</code>](#module_stake..Stake)  

| Param | Type | Description |
| --- | --- | --- |
| validator | <code>string</code> | validator's address |

<a name="module_stake..Stake+getDelegations"></a>

#### stake.getDelegations(delegator) ⇒ <code>Promise</code>
Get all delegations from a delegator

**Kind**: instance method of [<code>Stake</code>](#module_stake..Stake)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |

<a name="module_stake..Stake+getDelegationsByValidator"></a>

#### stake.getDelegationsByValidator(validator) ⇒ <code>Promise</code>
Get all delegations from a validator

**Kind**: instance method of [<code>Stake</code>](#module_stake..Stake)  

| Param | Type | Description |
| --- | --- | --- |
| validator | <code>string</code> | validator's address |

<a name="module_stake..Stake+getUbDelegations"></a>

#### stake.getUbDelegations(delegator) ⇒ <code>Promise</code>
Get all unbonding delegations from a delegator

**Kind**: instance method of [<code>Stake</code>](#module_stake..Stake)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |

<a name="module_stake..Stake+getUbDelegationsByValidator"></a>

#### stake.getUbDelegationsByValidator(validator) ⇒ <code>Promise</code>
Get all unbonding delegations from a validator

**Kind**: instance method of [<code>Stake</code>](#module_stake..Stake)  

| Param | Type | Description |
| --- | --- | --- |
| validator | <code>string</code> | validator's address |

<a name="module_stake..Stake+getReDelegations"></a>

#### stake.getReDelegations(delegator) ⇒ <code>Promise</code>
Get all redelegations from a delegator

**Kind**: instance method of [<code>Stake</code>](#module_stake..Stake)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |

<a name="module_stake..Stake+getReDelegationsByValidator"></a>

#### stake.getReDelegationsByValidator(validator) ⇒ <code>Promise</code>
Get all outgoing redelegations from a validator

**Kind**: instance method of [<code>Stake</code>](#module_stake..Stake)  

| Param | Type | Description |
| --- | --- | --- |
| validator | <code>string</code> | validator's address |

<a name="module_stake..Stake+getAllValidatorsByDelegator"></a>

#### stake.getAllValidatorsByDelegator(delegator) ⇒ <code>Promise</code>
Query all validators that a delegator is bonded to

**Kind**: instance method of [<code>Stake</code>](#module_stake..Stake)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |

<a name="module_stake..Stake+getValidatorByDelegator"></a>

#### stake.getValidatorByDelegator(delegator, validator) ⇒ <code>Promise</code>
Query a validator that a delegator is bonded to

**Kind**: instance method of [<code>Stake</code>](#module_stake..Stake)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| validator | <code>string</code> | validator's address |

<a name="module_stake..Stake+getDelegation"></a>

#### stake.getDelegation(delegator, validator) ⇒ <code>Promise</code>
Query the current delegation between a delegator and a validator

**Kind**: instance method of [<code>Stake</code>](#module_stake..Stake)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| validator | <code>string</code> | validator's address |

<a name="module_stake..Stake+getUbDelegation"></a>

#### stake.getUbDelegation(delegator, validator) ⇒ <code>Promise</code>
Query all unbonding delegations between a delegator and a validator

**Kind**: instance method of [<code>Stake</code>](#module_stake..Stake)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| validator | <code>string</code> | validator's address |

<a name="module_stake..Stake+getStakePool"></a>

#### stake.getStakePool() ⇒ <code>Promise</code>
Get the current state of the staking pool

**Kind**: instance method of [<code>Stake</code>](#module_stake..Stake)  
<a name="module_stake..Stake+delegate"></a>

#### stake.delegate(delegator, validator, amount, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
delegate liquid tokens to an validator

**Kind**: instance method of [<code>Stake</code>](#module_stake..Stake)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| validator | <code>string</code> | validator's operator address |
| amount | <code>Coin</code> | token |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_stake..Stake+redelegate"></a>

#### stake.redelegate(delegator, srcVarAddr, dstVarAddr, shares, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
redelegate illiquid tokens from one validator to another

**Kind**: instance method of [<code>Stake</code>](#module_stake..Stake)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| srcVarAddr | <code>string</code> | bech32 address of the source validator |
| dstVarAddr | <code>string</code> | bech32 address of the destination validator |
| shares | <code>string</code> | Amount of source-shares to either unbond or redelegate as a positive integer or decimal |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_stake..Stake+undelegate"></a>

#### stake.undelegate(delegator, valAddr, shares, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
undelegate shares from a validator

**Kind**: instance method of [<code>Stake</code>](#module_stake..Stake)  

| Param | Type | Description |
| --- | --- | --- |
| delegator | <code>string</code> | delegator's address |
| valAddr | <code>string</code> | bech32 address of the validator |
| shares | <code>string</code> | Amount of source-shares to either unbond or redelegate as a positive integer or decimal |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_tendermint"></a>

## tendermint

* [tendermint](#module_tendermint)
    * [~Tm](#module_tendermint..Tm)
        * [new Tm(provider, opt)](#new_module_tendermint..Tm_new)
        * [.getNodeInfo()](#module_tendermint..Tm+getNodeInfo) ⇒ <code>Promise</code>
        * [.getSyncing()](#module_tendermint..Tm+getSyncing) ⇒ <code>Promise</code>
        * [.getBlock(height)](#module_tendermint..Tm+getBlock) ⇒ <code>Promise</code>
        * [.getBlockResult(height)](#module_tendermint..Tm+getBlockResult) ⇒ <code>Promise</code>
        * [.getValidatorSet(height)](#module_tendermint..Tm+getValidatorSet) ⇒ <code>Promise</code>
        * [.getTx(hash)](#module_tendermint..Tm+getTx) ⇒ <code>Promise</code>

<a name="module_tendermint..Tm"></a>

### tendermint~Tm
**Kind**: inner class of [<code>tendermint</code>](#module_tendermint)  

* [~Tm](#module_tendermint..Tm)
    * [new Tm(provider, opt)](#new_module_tendermint..Tm_new)
    * [.getNodeInfo()](#module_tendermint..Tm+getNodeInfo) ⇒ <code>Promise</code>
    * [.getSyncing()](#module_tendermint..Tm+getSyncing) ⇒ <code>Promise</code>
    * [.getBlock(height)](#module_tendermint..Tm+getBlock) ⇒ <code>Promise</code>
    * [.getBlockResult(height)](#module_tendermint..Tm+getBlockResult) ⇒ <code>Promise</code>
    * [.getValidatorSet(height)](#module_tendermint..Tm+getValidatorSet) ⇒ <code>Promise</code>
    * [.getTx(hash)](#module_tendermint..Tm+getTx) ⇒ <code>Promise</code>

<a name="new_module_tendermint..Tm_new"></a>

#### new Tm(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_tendermint..Tm+getNodeInfo"></a>

#### tm.getNodeInfo() ⇒ <code>Promise</code>
Information about the connected node

**Kind**: instance method of [<code>Tm</code>](#module_tendermint..Tm)  
<a name="module_tendermint..Tm+getSyncing"></a>

#### tm.getSyncing() ⇒ <code>Promise</code>
Get if the node is currently syning with other nodes

**Kind**: instance method of [<code>Tm</code>](#module_tendermint..Tm)  
<a name="module_tendermint..Tm+getBlock"></a>

#### tm.getBlock(height) ⇒ <code>Promise</code>
Get a  block

**Kind**: instance method of [<code>Tm</code>](#module_tendermint..Tm)  

| Param | Type | Description |
| --- | --- | --- |
| height | <code>number</code> | block's height,optional,if null,will return the latest block |

<a name="module_tendermint..Tm+getBlockResult"></a>

#### tm.getBlockResult(height) ⇒ <code>Promise</code>
Get a block result

**Kind**: instance method of [<code>Tm</code>](#module_tendermint..Tm)  

| Param | Type | Description |
| --- | --- | --- |
| height | <code>number</code> | block's height,optional,if null,will return the latest block's result |

<a name="module_tendermint..Tm+getValidatorSet"></a>

#### tm.getValidatorSet(height) ⇒ <code>Promise</code>
Get the validator set

**Kind**: instance method of [<code>Tm</code>](#module_tendermint..Tm)  

| Param | Type | Description |
| --- | --- | --- |
| height | <code>number</code> | block's height,optional,if null,will return the latest validator set |

<a name="module_tendermint..Tm+getTx"></a>

#### tm.getTx(hash) ⇒ <code>Promise</code>
Get a Tx by hash

**Kind**: instance method of [<code>Tm</code>](#module_tendermint..Tm)  

| Param | Type | Description |
| --- | --- | --- |
| hash | <code>string</code> | transaction's hash |

<a name="module_version"></a>

## version

* [version](#module_version)
    * [~Version](#module_version..Version)
        * [new Version(provider, opt)](#new_module_version..Version_new)
        * [.getLcdVersion()](#module_version..Version+getLcdVersion) ⇒ <code>Promise</code>
        * [.getNodeVersion()](#module_version..Version+getNodeVersion) ⇒ <code>Promise</code>

<a name="module_version..Version"></a>

### version~Version
**Kind**: inner class of [<code>version</code>](#module_version)  

* [~Version](#module_version..Version)
    * [new Version(provider, opt)](#new_module_version..Version_new)
    * [.getLcdVersion()](#module_version..Version+getLcdVersion) ⇒ <code>Promise</code>
    * [.getNodeVersion()](#module_version..Version+getNodeVersion) ⇒ <code>Promise</code>

<a name="new_module_version..Version_new"></a>

#### new Version(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_version..Version+getLcdVersion"></a>

#### version.getLcdVersion() ⇒ <code>Promise</code>
Get the version of irislcd running locally to compare against expected

**Kind**: instance method of [<code>Version</code>](#module_version..Version)  
<a name="module_version..Version+getNodeVersion"></a>

#### version.getNodeVersion() ⇒ <code>Promise</code>
Get the version of node that lcd connected

**Kind**: instance method of [<code>Version</code>](#module_version..Version)  
