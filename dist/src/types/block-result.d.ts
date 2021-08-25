import { Tag } from './types';
export interface BlockResult {
    height: string;
    results: Results;
}
export interface Results {
    DeliverTx: DeliverTx[];
    EndBlock: EndBlock;
    BeginBlock: BeginBlock;
}
export interface BeginBlock {
    tags: Tag[];
}
export interface DeliverTx {
    log: string;
    gasWanted: string;
    gasUsed: string;
    tags: Tag[];
}
export interface EndBlock {
    validator_updates: null;
    tags: Tag[];
}
