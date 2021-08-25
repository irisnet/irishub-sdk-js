import { Coin } from './types';
export interface FeedContext {
    feed: Feed;
    service_name: string;
    providers: string[];
    input: string;
    timeout: string;
    service_fee_cap: Coin[];
    repeated_frequency: string;
    repeated_total: string;
    response_threshold: number;
    state: string;
}
export interface Feed {
    feed_name: string;
    description: string;
    aggregate_func: string;
    value_json_path: string;
    latest_history: string;
    request_context_id: string;
    creator: string;
}
export interface FeedValue {
    data: string;
    timestamp: string;
}
