export declare class Condition {
    private key;
    private value;
    private op;
    constructor(key: EventKey);
    lte(value: string): Condition;
    gte(value: string): Condition;
    le(value: string): Condition;
    ge(value: string): Condition;
    eq(value: string): Condition;
    contains(value: string): Condition;
    toString(): string;
    private fill;
}
/**
 * A builder for building event query strings
 */
export declare class EventQueryBuilder {
    private conditions;
    /**
     * Add a query condition
     * @param eventKey
     * @param value
     * @returns The builder itself
     */
    addCondition(condition: Condition): EventQueryBuilder;
    /**
     * Convert the current builder to the query string
     * @returns The query string
     */
    build(): string;
}
export declare enum EventKey {
    Type = "tm.event",
    Action = "action",
    Sender = "sender",
    Recipient = "recipient",
    DestinationValidator = "destination-validator",
    RequestID = "request-id"
}
export declare enum EventAction {
    Send = "send",
    Burn = "burn",
    SetMemoRegexp = "set-memo-regexp",
    EditValidator = "edit_validator"
}
