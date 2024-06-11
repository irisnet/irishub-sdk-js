# irishub-sdk-js

![Banner](https://raw.githubusercontent.com/irisnet/irishub/master/docs/pics/iris.jpg)
[![License](https://img.shields.io/github/license/irisnet/irishub-sdk-js.svg)](https://github.com/irisnet/irishub-sdk-js/blob/master/LICENSE)
[![Version](https://img.shields.io/github/tag/irisnet/irishub-sdk-js.svg)](https://github.com/irisnet/irishub-sdk-js/releases)

The IRISnet JavaScript SDK allows browsers and Node.js clients to interact with IRISnet. Core functionality and examples
are in the `test` folder.

- client - client that implements IRISnet transactions types, such as for transfers and staking,etc.
- crypto - core cryptographic functions.
- accounts - management of accounts and wallets, including seed and encrypted mnemonic generation, recover account by
  mnemonic or keystore, etc.

## Installation

Install the package via npm.

```bash
npm install https://github.com/irisnet/irishub-sdk-js.git
```

## Config

```typescript
interface ClientConfig {
    node: string,//address of a rpc node on IRISnet
    chainNetwork: consts.ChainNetwork; // IRISHUB = 0, Cosmos = 1, Akash = 2
    chainId: string,
    gas?: string,
    fee?: {
        denom: string;
        amount: string;
    }, //default fee for transactions
    keyDAO: KeyDAO,//key manager for wallet, which must be implemented
    bech32Prefix?: {
        AccAddr: string,
        AccPub: string,
        ValAddr: string,
        ValPub: string,
        ConsAddr: string,
        ConsPub: string,
    },
    rpcConfig?: AxiosRequestConfig// axios request config
}
```

## Client Setup

First you should implement your KeyDAO like follows:

```typescript
class KeyDAO {
    /**
     * save private key to client
     * @param name for account you generated, which will be use to query private key and other account info
     * @param wallet: {address: string,privateKey: string,publicKey: string,mnemonic: string}
     * @throws error if save failed
     */
    write(name, wallet):void {
        localStorage.setItem(name, JSON.stringify(wallet));
    }

    /**
     * save walet in client
     * @param name
     * @throws error if read failed
     */
    read(name):wallet{
        const wallet = localStorage.getItem(name);
        if(wallet) {
            return JSON.parse(wallet);
        }
        throw new Error(`no wallet was found`)
    }

    /**
     * encrypt your private key before save to client
     * @param private key
     * @param password for encrypt private key
     */
    encrypt?(privateKey, password): string {
        return CryptoJS.AES.encrypt(msg, password).toString();
    }

    /**
     * decrypto your private key with password
     * @param encrypted private key
     * @param password that can decrypto private key ecrypted
     */
    decrypt?(encryptedPrivateKey, password): string {
        const bytes = CryptoJS.AES.decrypt(encryptedPrivateKey, password);
        const privateKey = bytes.toString(CryptoJS.enc.Utf8);
        if (privateKey) {
            return privateKey
        } else {
            throw new Error('can not decrypto the private key');
        }

    }

}

```

```typescript
import {newClient as irisSdkClient} from 'irishub-sdk-js';

const client = irisSdkClient(ClientConfig)
    .withKeyDAO(new KeyDAO())
    .withRpcConfig({timeout: 15000});

```
## Client Usage
The following selected examples demonstrate basic client usage.

- create account
```typescript
const account: { address: string, mnemonic: string } = client.keys.add(`wallet name`, 'wallet password');
```
- recover account by mnemonic
```typescript
const account: string = client.keys.recover(`wallet name`, 'wallet password', `mnemonic`);
```
- recover account by keystore
```typescript
const account: string = client.keys.recover(`wallet name`, 'wallet password', `keystore`);
```
- transfer example
```typescript
const res = await client.bank.send({
    to:`iaa1eqvkfthtrr93g4p9qspp54w6dtjtrn27ar7rpw`,
    amount:[{
        denom:`uiris`,
        amount:`1000000`
    }],
    baseTx:{
        from:`wallet name`,
        password:`wallet password`,
        gas:50000,
        fee:{
            denom:`uiris`,
            amount:`500000`
        }
    }
})
```
### auth `src/modules/auth.ts`
- newStdTx
- queryAccount
- queryAccounts
- queryParams
### bank `src/modules/bank.ts`
- send 
- multiSend
- queryBalance
- queryAllBalances
- queryTotalSupply
- querySupplyOf
- queryDenomMetadata
- queryDenomsMetadata
- queryParams
### coinswap `src/modules/coinswap.ts`
- addLiquidity
- removeLiquidity
- swapOrder
- queryLiquidity

### distribution `src/modules/distribution.ts`
- setWithdrawAddr
- withdrawRewards
- withdrawValidatorCommission
- fundCommunityPool
- withdrawTokenizeShareRecordReward
- withdrawAllTokenizeShareRecordReward
- queryParams
- queryValidatorOutstandingRewards
- queryValidatorCommission
- queryValidatorSlashes
- queryDelegationRewards
- queryDelegationTotalRewards
- queryDelegatorValidators
- queryDelegatorWithdrawAddress
- queryCommunityPool
- queryTokenizeShareRecordReward
### farm `src/modules/farm.ts`
- stakeLp
- unStakeLp
- harvestReward
- queryFarmPools
- queryFarmPool
- queryFarmer
- queryParams
### gov `src/modules/gov.ts`
- queryProposal
- queryProposals
- queryVote
- queryVotes
- queryDeposit
- queryDeposits
- queryTally
- submitParameterChangeProposal
- submitPlainTextProposal
- submitCommunityTaxUsageProposal
- deposit
- vote
- voteWeighted

### htlc `src/modules/htlc.ts`
- createHTLC
- claimHTLC
- queryHTLC
- queryAssetSupply
- queryAssetSupplies
- queryParams
### ibc `src/modules/ibc/ibc.ts`
- transfer
- queryDenomTrace
- queryDenomTraces
- queryParams
- queryChannels
### ibc-nft-transfer `src/modules/ibc/ibc-nft-transfer.ts`
- transfer
- queryClassTrace
- queryClassTraces
- queryClassHash
- queryEscrowAddress
- queryParams
### keys `src/modules/keys.ts`
- add
- recover
- import
- importPrivateKey
- export
- exportPrivateKey
- delete
- show
### nft `src/modules/nft.ts`
- issueDenom
- mintNft
- editNft
- transferNft
- burnNft
- querySupply
- queryOwner
- queryCollection
- queryDenom
- queryDenoms
- queryNFT
### oracle `src/modules/oracle.ts`
- queryFeed
- queryFeeds
- queryFeedValue
### protobuf `src/modules/protobuf.ts`
- deserializeTx
- unpackMsg
- deserializeSignDoc
- deserializeTxRaw
- deserializeSigningInfo
- deserializePubkey
### random `src/modules/random.ts`
- queryRandom
- queryRequest
- request
### service `src/modules/service.ts`
- queryDefinition
- queryBinding
- queryBindings
- queryRequest
- queryRequests
- queryRequestsByReqCtx
- queryRequestContext
- queryResponse
- queryResponses
- queryFees
- defineService
- bindService
- updateServiceBinding
- disableServiceBinding
- enableServiceBinding
- invokeService
- setWithdrawAddress
- refundServiceDeposit
- startRequestContext
- pauseRequestContext
- killRequestContext
- updateRequestContext
- withdrawEarnedFees
- withdrawTax
### slashing `src/modules/slashing.ts`
- queryParams
- querySigningInfo
- unjail
### staking `src/modules/staking.ts`
- delegate
- undelegate
- redelegate
- tokenizeShares
- redeemTokensForShares
- transferTokenizeShareRecord
- disableTokenizeShares
- enableTokenizeShares
- validatorBond
- UnbondValidator
- queryDelegation
- queryDelegations
- queryUnbondingDelegation
- queryDelegatorUnbondingDelegations
- queryRedelegation
- queryDelegatorValidators
- queryDelegatorValidator
- queryHistoricalInfo
- queryValidatorDelegations
- queryValidatorUnbondingDelegations
- queryValidator
- queryValidators
- queryPool
- queryParams
- queryTokenizeShareRecordById
- queryTokenizeShareRecordByDenom
- queryTokenizeShareRecordsOwned
- queryAllTokenizeShareRecords
- queryLastTokenizeShareRecordId
- queryTotalTokenizeSharedAssets
- queryTotalLiquidStaked
- queryTokenizeShareLockInfo
- appendZero
- createValidator
### tendermint `src/modules/tendermint.ts`
- queryBlock
- queryBlockResult
- queryTx
- queryValidators
- searchTxs
- queryNetInfo
- queryGlobalAccountNumber
### token `src/modules/token.ts`
- issueToken
- editToken
- mintToken
- transferTokenOwner
- swapFeeToken
- SwapToERC20
- SwapFromERC20
- queryTokens
- queryToken
- queryFees
- queryParameters
- queryTotalBurn
- queryBalances
### tx `src/modules/tx.ts`
- buildTx
- newStdTxFromProtoTxModel
- buildAndSend
- broadcast
- sign
- sign_signDoc
- broadcastTxAsync
- broadcastTxSync
- broadcastTxCommit
- broadcastTx
- newTxResult
- createMsg
