/***************TX*****************/
//cosmos tx
export const bank_tx_pb = require( './proto-types/cosmos/bank/v1beta1/tx_pb');
export const crisis_tx_pb = require( './proto-types/cosmos/crisis/v1beta1/tx_pb');
export const distribution_tx_pb = require( './proto-types/cosmos/distribution/v1beta1/tx_pb');
export const evidence_tx_pb = require( './proto-types/cosmos/evidence/v1beta1/tx_pb');
export const gov_tx_pb = require( './proto-types/cosmos/gov/v1beta1/tx_pb');
export const slashing_tx_pb = require( './proto-types/cosmos/slashing/v1beta1/tx_pb');
export const staking_tx_pb = require( './proto-types/cosmos/staking/v1beta1/tx_pb');
export const tx_tx_pb = require( './proto-types/cosmos/tx/v1beta1/tx_pb');
export const vesting_tx_pb = require( './proto-types/cosmos/vesting/v1beta1/tx_pb');
//irismod tx
export const coinswap_tx_pb= require( './proto-types/irismod/coinswap/tx_pb');
export const htlc_tx_pb= require( './proto-types/irismod/htlc/tx_pb');
export const nft_tx_pb= require( './proto-types/irismod/nft/tx_pb');
export const oracle_tx_pb= require( './proto-types/irismod/oracle/tx_pb');
export const random_tx_pb= require( './proto-types/irismod/random/tx_pb');
export const record_tx_pb= require( './proto-types/irismod/record/tx_pb');
export const service_tx_pb= require( './proto-types/irismod/service/tx_pb');
export const token_tx_pb= require( './proto-types/irismod/token/tx_pb');
//wasm tx
export const contract_tx_pb= require( './proto-types/wasm/msg_pb');
export const contract_types_pb= require( './proto-types/wasm/types_pb');

/***************QUERY***************/
export const base_query_pagination_pb = require( './proto-types/cosmos/base/query/v1beta1/pagination_pb');
//cosmos query
export const auth_query_pb = require( './proto-types/cosmos/auth/v1beta1/query_pb');
export const bank_query_pb = require( './proto-types/cosmos/bank/v1beta1/query_pb');
export const distribution_query_pb = require( './proto-types/cosmos/distribution/v1beta1/query_pb');
export const evidence_query_pb = require( './proto-types/cosmos/evidence/v1beta1/query_pb');
export const gov_query_pb = require( './proto-types/cosmos/gov/v1beta1/query_pb');
export const mint_query_pb = require( './proto-types/cosmos/mint/v1beta1/query_pb');
export const params_query_pb = require( './proto-types/cosmos/params/v1beta1/query_pb');
export const slashing_query_pb = require( './proto-types/cosmos/slashing/v1beta1/query_pb');
export const staking_query_pb = require( './proto-types/cosmos/staking/v1beta1/query_pb');
export const upgrade_query_pb = require( './proto-types/cosmos/upgrade/v1beta1/query_pb');
//irismod query
export const coinswap_query_pb = require( './proto-types/irismod/coinswap/query_pb');
export const htlc_query_pb = require( './proto-types/irismod/htlc/query_pb');
export const nft_query_pb = require( './proto-types/irismod/nft/query_pb');
export const oracle_query_pb = require( './proto-types/irismod/oracle/query_pb');
export const random_query_pb = require( './proto-types/irismod/random/query_pb');
export const record_query_pb = require( './proto-types/irismod/record/query_pb');
export const service_query_pb = require( './proto-types/irismod/service/query_pb');
export const token_query_pb = require( './proto-types/irismod/token/query_pb');
// wasm query
export const contract_query_pb = require( './proto-types/wasm/query_pb');

/***************MODULES***************/
//cosmos module
export const auth_auth_pb = require( './proto-types/cosmos/auth/v1beta1/auth_pb');
export const crypto_secp256k1_keys_pb = require( './proto-types/cosmos/crypto/secp256k1/keys_pb');
export const crypto_ed25519_keys_pb = require( './proto-types/cosmos/crypto/ed25519/keys_pb');
export const crypto_sm2_keys_pb = require( './proto-types/cosmos/crypto/sm2/keys_pb');
export const base_coin_pb = require('./proto-types/cosmos/base/v1beta1/coin_pb');
export const signing_signing_pb = require('./proto-types/cosmos/tx/signing/v1beta1/signing_pb');

//irimod module
export const token_token_pb = require( './proto-types/irismod/token/token_pb');

//any
export const any_pb = require( './proto-types/google/protobuf/any_pb');
