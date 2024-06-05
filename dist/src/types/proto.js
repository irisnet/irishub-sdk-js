"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vesting_tx_pb = exports.upgrade_upgrade_pb = exports.upgrade_query_pb = exports.tx_tx_pb = exports.token_tx_pb = exports.token_token_pb = exports.token_query_pb1 = exports.token_query_pb = exports.staking_tx_pb = exports.staking_query_pb = exports.slashing_tx_pb = exports.slashing_slashing_pb = exports.slashing_query_pb = exports.signing_signing_pb = exports.service_tx_pb = exports.service_query_pb = exports.record_tx_pb = exports.record_query_pb = exports.random_tx_pb = exports.random_query_pb = exports.params_query_pb = exports.params_params_pb = exports.oracle_tx_pb = exports.oracle_query_pb = exports.nft_tx_pb = exports.nft_query_pb = exports.mint_query_pb = exports.ibc_transfer_tx_pb = exports.ibc_transfer_query_pb = exports.ibc_nft_transfer_tx_pb = exports.ibc_nft_transfer_query_pb = exports.ibc_core_client_pb = exports.ibc_channel_query_pb = exports.htlc_tx_pb = exports.htlc_query_pb = exports.gov_tx_pb = exports.gov_query_pb = exports.gov_gov_pb = exports.google_protobuf_timestamp_pb = exports.farm_tx_pb = exports.farm_query_pb = exports.evidence_tx_pb = exports.evidence_query_pb = exports.distribution_tx_pb = exports.distribution_query_pb = exports.distribution_distribution_pb = exports.custom_base_pb = exports.crypto_sm2_keys_pb = exports.crypto_secp256r1_keys_pb = exports.crypto_secp256k1_keys_pb = exports.crypto_multisig_keys_pb = exports.crypto_ed25519_keys_pb = exports.crisis_tx_pb = exports.coinswap_tx_pb = exports.coinswap_query_pb = exports.coinswap_coinswap_pb = exports.base_query_pagination_pb = exports.base_coin_pb = exports.bank_tx_pb = exports.bank_query_pb = exports.auth_query_pb = exports.auth_auth_pb = exports.any_pb = void 0;
/***************TX*****************/
//cosmos tx
var bank_tx_pb = exports.bank_tx_pb = require('./proto-types/cosmos/bank/v1beta1/tx_pb');
var crisis_tx_pb = exports.crisis_tx_pb = require('./proto-types/cosmos/crisis/v1beta1/tx_pb');
var distribution_tx_pb = exports.distribution_tx_pb = require('./proto-types/cosmos/distribution/v1beta1/tx_pb');
var evidence_tx_pb = exports.evidence_tx_pb = require('./proto-types/cosmos/evidence/v1beta1/tx_pb');
var gov_tx_pb = exports.gov_tx_pb = require('./proto-types/cosmos/gov/v1beta1/tx_pb');
var slashing_tx_pb = exports.slashing_tx_pb = require('./proto-types/cosmos/slashing/v1beta1/tx_pb');
var staking_tx_pb = exports.staking_tx_pb = require('./proto-types/cosmos/staking/v1beta1/tx_pb');
var tx_tx_pb = exports.tx_tx_pb = require('./proto-types/cosmos/tx/v1beta1/tx_pb');
var vesting_tx_pb = exports.vesting_tx_pb = require('./proto-types/cosmos/vesting/v1beta1/tx_pb');

//irismod tx
var coinswap_tx_pb = exports.coinswap_tx_pb = require('./proto-types/irismod/coinswap/tx_pb');
var htlc_tx_pb = exports.htlc_tx_pb = require('./proto-types/irismod/htlc/tx_pb');
var nft_tx_pb = exports.nft_tx_pb = require('./proto-types/irismod/nft/tx_pb');
var oracle_tx_pb = exports.oracle_tx_pb = require('./proto-types/irismod/oracle/tx_pb');
var random_tx_pb = exports.random_tx_pb = require('./proto-types/irismod/random/tx_pb');
var record_tx_pb = exports.record_tx_pb = require('./proto-types/irismod/record/tx_pb');
var service_tx_pb = exports.service_tx_pb = require('./proto-types/irismod/service/tx_pb');
var token_tx_pb = exports.token_tx_pb = require('./proto-types/irismod/token/v1/tx_pb');

//farm tx
var farm_tx_pb = exports.farm_tx_pb = require('./proto-types/irismod/farm/tx_pb');

//ibc tx
var ibc_transfer_tx_pb = exports.ibc_transfer_tx_pb = require('./proto-types/ibc/applications/transfer/v1/tx_pb');
var ibc_nft_transfer_tx_pb = exports.ibc_nft_transfer_tx_pb = require('./proto-types/ibc/applications/nft_transfer/v1/tx_pb');

/***************QUERY***************/
var base_query_pagination_pb = exports.base_query_pagination_pb = require('./proto-types/cosmos/base/query/v1beta1/pagination_pb');

//cosmos query
var auth_query_pb = exports.auth_query_pb = require('./proto-types/cosmos/auth/v1beta1/query_pb');
var bank_query_pb = exports.bank_query_pb = require('./proto-types/cosmos/bank/v1beta1/query_pb');
var distribution_query_pb = exports.distribution_query_pb = require('./proto-types/cosmos/distribution/v1beta1/query_pb');
var evidence_query_pb = exports.evidence_query_pb = require('./proto-types/cosmos/evidence/v1beta1/query_pb');
var gov_query_pb = exports.gov_query_pb = require('./proto-types/cosmos/gov/v1beta1/query_pb');
var mint_query_pb = exports.mint_query_pb = require('./proto-types/cosmos/mint/v1beta1/query_pb');
var params_query_pb = exports.params_query_pb = require('./proto-types/cosmos/params/v1beta1/query_pb');
var slashing_query_pb = exports.slashing_query_pb = require('./proto-types/cosmos/slashing/v1beta1/query_pb');
var staking_query_pb = exports.staking_query_pb = require('./proto-types/cosmos/staking/v1beta1/query_pb');
var upgrade_query_pb = exports.upgrade_query_pb = require('./proto-types/cosmos/upgrade/v1beta1/query_pb');

//irismod query
var coinswap_query_pb = exports.coinswap_query_pb = require('./proto-types/irismod/coinswap/query_pb');
var htlc_query_pb = exports.htlc_query_pb = require('./proto-types/irismod/htlc/query_pb');
var nft_query_pb = exports.nft_query_pb = require('./proto-types/irismod/nft/query_pb');
var oracle_query_pb = exports.oracle_query_pb = require('./proto-types/irismod/oracle/query_pb');
var random_query_pb = exports.random_query_pb = require('./proto-types/irismod/random/query_pb');
var record_query_pb = exports.record_query_pb = require('./proto-types/irismod/record/query_pb');
var service_query_pb = exports.service_query_pb = require('./proto-types/irismod/service/query_pb');
var token_query_pb = exports.token_query_pb = require('./proto-types/irismod/token/v1/query_pb');
var token_query_pb1 = exports.token_query_pb1 = require('./proto-types/irismod/token/v1beta1/query_pb');
var farm_query_pb = exports.farm_query_pb = require('./proto-types/irismod/farm/query_pb');

//ibc query
var ibc_transfer_query_pb = exports.ibc_transfer_query_pb = require('./proto-types/ibc/applications/transfer/v1/query_pb');
var ibc_channel_query_pb = exports.ibc_channel_query_pb = require('./proto-types/ibc/core/channel/v1/query_pb');
var ibc_nft_transfer_query_pb = exports.ibc_nft_transfer_query_pb = require('./proto-types/ibc/applications/nft_transfer/v1/query_pb');

/***************MODULES***************/
//cosmos module
var auth_auth_pb = exports.auth_auth_pb = require('./proto-types/cosmos/auth/v1beta1/auth_pb');
// ->keys
var crypto_ed25519_keys_pb = exports.crypto_ed25519_keys_pb = require('./proto-types/cosmos/crypto/ed25519/keys_pb');
var crypto_multisig_keys_pb = exports.crypto_multisig_keys_pb = require('./proto-types/cosmos/crypto/multisig/keys_pb');
var crypto_secp256k1_keys_pb = exports.crypto_secp256k1_keys_pb = require('./proto-types/cosmos/crypto/secp256k1/keys_pb');
var crypto_secp256r1_keys_pb = exports.crypto_secp256r1_keys_pb = require('./proto-types/cosmos/crypto/secp256r1/keys_pb');
var crypto_sm2_keys_pb = exports.crypto_sm2_keys_pb = require('./proto-types/cosmos/crypto/sm2/keys_pb');
// ->coin
var base_coin_pb = exports.base_coin_pb = require('./proto-types/cosmos/base/v1beta1/coin_pb');
var signing_signing_pb = exports.signing_signing_pb = require('./proto-types/cosmos/tx/signing/v1beta1/signing_pb');
var gov_gov_pb = exports.gov_gov_pb = require('./proto-types/cosmos/gov/v1beta1/gov_pb');
var coinswap_coinswap_pb = exports.coinswap_coinswap_pb = require('./proto-types/irismod/coinswap/coinswap_pb');
var distribution_distribution_pb = exports.distribution_distribution_pb = require('./proto-types/cosmos/distribution/v1beta1/distribution_pb');
var params_params_pb = exports.params_params_pb = require('./proto-types/cosmos/params/v1beta1/params_pb');
var upgrade_upgrade_pb = exports.upgrade_upgrade_pb = require('./proto-types/cosmos/upgrade/v1beta1/upgrade_pb');
var slashing_slashing_pb = exports.slashing_slashing_pb = require('./proto-types/cosmos/slashing/v1beta1/slashing_pb');

// ibc module
var ibc_core_client_pb = exports.ibc_core_client_pb = require('./proto-types/ibc/core/client/v1/client_pb');
// export const lightclients_tendermint_tendermint_pb = require( './proto-types/ibc/lightclients/tendermint/v1/tendermint_pb');

//confio module
// export const confio_proofs_pb = require( './proto-types/confio/proofs_pb');

// google module
var google_protobuf_timestamp_pb = exports.google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
// export const google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');

//irimod module
var token_token_pb = exports.token_token_pb = require('./proto-types/irismod/token/v1/token_pb');

//any
var any_pb = exports.any_pb = require('./proto-types/google/protobuf/any_pb');

//custom
var custom_base_pb = exports.custom_base_pb = require('./proto-types/custom/base_pb.js');