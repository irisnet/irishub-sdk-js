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
    network: number, //[Number] 0: Mainnet, 1: Testnet
    chainId: string,
    gas?: string,
    fee?: {
        denom: string;
        amount: string;
    },//default fee for transactions
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
const account: { address: string, mnemonic: string } = client.keys.add(`iris_wallet`, 'S8js8Ka82lqAc');
```
- recover account by mnemonic
```typescript
const account: string = client.keys.recover(`iris_wallet`, 'S8js8Ka82lqAc', `fatigue panther innocent dress person fluid animal raven material embark target spread kiss smile cycle begin rocket pull couple mass story analyst guilt network`);
```
- recover account by keystore
```typescript
const account: string = client.keys.recover(`iris_wallet`, 'S8js8Ka82lqAc', `{"version":"1","id":"1d295464-aaa8-418e-b374-3052a91dc26a","address":"faa1eqvkfthtrr93g4p9qspp54w6dtjtrn279vcmpn","crypto":{"ciphertext":"a6ee40e3b38a7b24a373ec006bcc039ccbae45dc3b1f314405ab51ee975d6b1f","cipherparams":{"iv":"453b83b1331d334b70d160616fe43ace"},"cipher":"aes-128-ctr","kdf":"pbkdf2","kdfparams":{"dklen":32,"salt":"e702e41edf7277a39f7f5cc641c19e1b492cc29bf737aec9b53b496c9f217b37","c":10000,"prf":"hmac-sha256"},"mac":"6e8ed2619f0b30f00c20f9f01858368efbd0feae5811792d8b41a60c2d71d310"}}`);
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
        from:`iris_wallet`,
        password:`S8js8Ka82lqAc`,
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
### bank `src/modules/coinswap.ts`
- addLiquidity
- removeLiquidity
- swapOrder
- queryLiquidity

### distribution `src/modules/distribution.ts`
- setWithdrawAddr
- withdrawRewards
- withdrawValidatorCommission
- fundCommunityPool
- queryParams
- queryValidatorOutstandingRewards
- queryValidatorCommission
- queryValidatorSlashes
- queryDelegationRewards
- queryDelegationTotalRewards
- queryDelegatorValidators
- queryDelegatorWithdrawAddress
- queryCommunityPool
### keys `src/modules/farm.ts`
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

### bank `src/modules/htlc.ts`
- createHTLC
- claimHTLC
- queryHTLC
- queryAssetSupply
- queryAssetSupplies
- queryParams
### bank `src/modules/ibc.ts`
- transfer
- queryDenomTrace
- queryDenomTraces
- queryParams
- queryChannels
### keys `src/modules/keys.ts`
- add
- recover
- import
- importPrivateKey
- export
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
### slashing `src/modules/oracle.ts`
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
### slashing `src/modules/random.ts`
- queryRandom
- queryRequest
- request
### slashing `src/modules/service.ts`
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
- queryTokens
- queryToken
- queryFees
- queryParameters
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

