"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventAction = exports.EventKey = exports.EventQueryBuilder = exports.Condition = void 0;
const errors_1 = require("../errors");
const is = require("is_js");
class Condition {
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
            throw new errors_1.SdkError('invalid condition');
        }
        return this.key + this.op + "'" + this.value + "'";
    }
    fill(value, op) {
        this.value = value;
        this.op = op;
        return this;
    }
}
exports.Condition = Condition;
/**
 * A builder for building event query strings
 */
class EventQueryBuilder {
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
exports.EventQueryBuilder = EventQueryBuilder;
var EventKey;
(function (EventKey) {
    EventKey["Type"] = "tm.event";
    EventKey["Action"] = "action";
    EventKey["Sender"] = "sender";
    EventKey["Recipient"] = "recipient";
    EventKey["DestinationValidator"] = "destination-validator";
    EventKey["RequestID"] = "request-id";
    // TODO: more
})(EventKey = exports.EventKey || (exports.EventKey = {}));
var EventAction;
(function (EventAction) {
    EventAction["Send"] = "send";
    EventAction["Burn"] = "burn";
    EventAction["SetMemoRegexp"] = "set-memo-regexp";
    EventAction["EditValidator"] = "edit_validator";
    // TODO: more
})(EventAction = exports.EventAction || (exports.EventAction = {}));
//# sourceMappingURL=query-builder.js.map