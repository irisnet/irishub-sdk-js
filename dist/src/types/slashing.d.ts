import { Msg } from './types';
/**
 * ***Gov params for Slashing module***
 *
 * **Long Downtime**
 *
 * In the fixed time window `signed_blocks_window`,
 * the ratio of the time of the validator's absence from the block is less than the value of `min_signed_per_window`,
 * the validator's bonded token will be penalized in the `slash_fraction_downtime` ratio,
 * and the validator will be jailed. Until the jail time exceeds DowntimeJailDuration,
 * the validator can be released by executing `unjail` command.
 *
 * **Double Sign**
 *
 * When executing a block, it receives evidence that a validator has voted for conflicting votes of the same round at the same height.
 * If the time of the evidence from the current block time is less than `max_evidence_age`,
 * the validator's bonded token will be penalized in the `slash_fraction_double_sign` ratio, and the validator will be jailed.
 * Until the jail time exceeds `double_sign_jail_duration`, the validator can be released by executing `unjail` command.
 *
 * **Proposer Censorship**
 *
 * If the node is in the process of processing a new block,
 * it detects if any transaction does not pass `txDecoder`, `validateTx`, `validateBasicTxMsgs`,
 * the validator's bonded token will be slashed by `slash_fraction_censorship` percent, and the validator will be jailed.
 * Until the jail time exceeds `censorship_jail_duration`, the validator can be released by executing `unjail` command.
 *
 * [More Details](https://www.irisnet.org/docs/concepts/gov-params.html#parameters-in-slashing)
 */
export interface SlashingParams {
    max_evidence_age: string;
    signed_blocks_window: string;
    min_signed_per_window: string;
    double_sign_jail_duration: string;
    downtime_jail_duration: string;
    censorship_jail_duration: string;
    slash_fraction_double_sign: string;
    slash_fraction_downtime: string;
    slash_fraction_censorship: string;
}
/**
 * Msg struct for unjailing jailed validator
 * @hidden
 */
export declare class MsgUnjail extends Msg {
    value: {
        address: string;
    };
    constructor(address: string);
    getSignBytes(): object;
}
/** Defines the signing info for a validator */
export interface ValidatorSigningInfo {
    address: string;
    startHeight: string;
    indexOffset: string;
    jailedUntil: string;
    tombstoned: boolean;
    missedBlocksCounter: string;
}
