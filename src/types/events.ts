import { Tx, Pubkey as ValPubKey } from './types';
import { StdTx } from './auth';

export interface EventDataNewBlock {
  block: EventDataBlock;
  result_begin_block: EventDataResultBeginBlock;
  result_end_block: EventDataResultEndBlock;
}

export interface EventDataNewBlockHeader {
  header: EventDataBlockHeader;
  result_begin_block: EventDataResultBeginBlock;
  result_end_block: EventDataResultEndBlock;
}

export interface EventDataValidatorSetUpdates {
  address: string;
  pub_key: ValPubKey;
  voting_power: string;
  proposer_priority: string;
}

export interface EventDataBlockHeader {
  version: EventDataVersion;
  chain_id: string;
  height: string;
  time: string;
  num_txs: string;
  total_txs: string;
  last_block_id: EventDataBlockID;
  last_commit_hash: string;
  data_hash: string;
  validators_hash: string;
  next_validators_hash: string;
  consensus_hash: string;
  app_hash: string;
  last_results_hash: string;
  evidence_hash: string;
  proposer_address: string;
}

export interface EventDataBlock {
  header: EventDataHeader;
  data: EventDataBlockData;
  evidence: EventDataEvidence[];
  last_commit: EventDataLastCommit;
}

export interface EventDataBlockData {
  txs: Array<Tx<StdTx>>;
}

export interface EventDataEvidence {
  // TODO
}

export interface EventDataHeader {
  version: EventDataVersion;
  chain_id: string;
  height: string;
  time: string;
  num_txs: string;
  total_txs: string;
  last_block_id: EventDataBlockID;
  last_commit_hash: string;
  data_hash: string;
  validators_hash: string;
  next_validators_hash: string;
  consensus_hash: string;
  app_hash: string;
  last_results_hash: string;
  evidence_hash: string;
  proposer_address: string;
}

export interface EventDataBlockID {
  hash: string;
  parts: EventDataParts;
}

export interface EventDataParts {
  total: string;
  hash: string;
}

export interface EventDataVersion {
  block: string;
  app: string;
}

export interface EventDataLastCommit {
  block_id: EventDataBlockID;
  precommits: EventDataPrecommit[];
}

export interface EventDataPrecommit {
  type: number;
  height: string;
  round: string;
  block_id: EventDataBlockID;
  timestamp: string;
  validator_address: string;
  validator_index: string;
  signature: string;
}

export interface EventDataResultBeginBlock {
  tags: EventDataTag[];
}

export interface EventDataTag {
  key: string;
  value: string;
}

export interface EventDataResultEndBlock {
  validator_updates: EventDataValidatorUpdate[];
  tags: EventDataTag[];
}

export interface EventDataValidatorUpdate {
  pub_key: EventDataPubKey;
  power: number;
}

export interface EventDataPubKey {
  type: string;
  data: string;
}
