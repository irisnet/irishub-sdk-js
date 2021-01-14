import { SdkError, CODES } from '../errors';
import * as is from 'is_js';

export class Condition {
  private key: EventKey;
  private value: string | EventAction;
  private op: string;

  constructor(key: EventKey) {
    this.key = key;
    this.value = '';
    this.op = '';
  }

  lte(value: string): Condition {
    return this.fill(value, '<=');
  }

  gte(value: string): Condition {
    return this.fill(value, '>=');
  }

  le(value: string): Condition {
    return this.fill(value, '<');
  }

  ge(value: string): Condition {
    return this.fill(value, '>');
  }

  eq(value: string): Condition {
    return this.fill(value, '=');
  }

  contains(value: string): Condition {
    return this.fill(value, 'CONTAINS');
  }

  toString(): string {
    if (is.empty(this.key) || is.empty(this.value) || is.empty(this.op)) {
      throw new SdkError('invalid condition',CODES.Internal);
    }
    return this.key + this.op + "'" + this.value + "'";
  }

  private fill(value: string, op: string): Condition {
    this.value = value;
    this.op = op;
    return this;
  }
}

/**
 * A builder for building event query strings
 */
export class EventQueryBuilder {
  private conditions = new Array<Condition>();

  /**
   * Add a query condition
   * @param eventKey
   * @param value
   * @returns The builder itself
   */
  addCondition(condition: Condition): EventQueryBuilder {
    this.conditions.push(condition);
    return this;
  }

  /**
   * Convert the current builder to the query string
   * @returns The query string
   */
  build(): string {
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

export enum EventKey {
  Type = 'tm.event',
  Action = 'action',
  Sender = 'sender',
  Recipient = 'recipient',
  DestinationValidator = 'destination-validator',
  RequestID = 'request-id',
  // TODO: more
}

export enum EventAction {
  Send = 'send',
  Burn = 'burn',
  SetMemoRegexp = 'set-memo-regexp',
  EditValidator = 'edit_validator',
  // TODO: more
}
