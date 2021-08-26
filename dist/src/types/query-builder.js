import { SdkError, CODES } from '../errors';
import * as is from 'is_js';
export class Condition {
    constructor(key) {
        this.key = key;
        this.value = '';
        this.op = '';
    }
    lte(value) {
        return this.fill(value, '<=');
    }
    gte(value) {
        return this.fill(value, '>=');
    }
    le(value) {
        return this.fill(value, '<');
    }
    ge(value) {
        return this.fill(value, '>');
    }
    eq(value) {
        return this.fill(value, '=');
    }
    contains(value) {
        return this.fill(value, 'CONTAINS');
    }
    toString() {
        if (is.empty(this.key) || is.empty(this.value) || is.empty(this.op)) {
            throw new SdkError('invalid condition', CODES.Internal);
        }
        return this.key + this.op + "'" + this.value + "'";
    }
    fill(value, op) {
        this.value = value;
        this.op = op;
        return this;
    }
}
/**
 * A builder for building event query strings
 */
export class EventQueryBuilder {
    constructor() {
        this.conditions = new Array();
    }
    /**
     * Add a query condition
     * @param eventKey
     * @param value
     * @returns The builder itself
     */
    addCondition(condition) {
        this.conditions.push(condition);
        return this;
    }
    /**
     * Convert the current builder to the query string
     * @returns The query string
     */
    build() {
        let query = '';
        this.conditions.forEach((c, index) => {
            if (index > 0) {
                query += ' AND ';
            }
            query += c.toString();
        });
        return query;
    }
}
export var EventKey;
(function (EventKey) {
    EventKey["Type"] = "tm.event";
    EventKey["Action"] = "action";
    EventKey["Sender"] = "sender";
    EventKey["Recipient"] = "recipient";
    EventKey["DestinationValidator"] = "destination-validator";
    EventKey["RequestID"] = "request-id";
    // TODO: more
})(EventKey || (EventKey = {}));
export var EventAction;
(function (EventAction) {
    EventAction["Send"] = "send";
    EventAction["Burn"] = "burn";
    EventAction["SetMemoRegexp"] = "set-memo-regexp";
    EventAction["EditValidator"] = "edit_validator";
    // TODO: more
})(EventAction || (EventAction = {}));
//# sourceMappingURL=query-builder.js.map