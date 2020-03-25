/**
 * A builder for building event query strings
 */
export class EventQueryBuilder {
  private conditions = new Array<string>();

  /**
   * Add a query condition
   * @param eventKey
   * @param value
   * @returns The builder itself
   */
  addCondition(
    eventKey: EventKey,
    value: string | EventAction
  ): EventQueryBuilder {
    this.conditions.push(eventKey + "='" + value + "'");
    return this;
  }

  /**
   * Convert the current builder to the query string
   * @returns The query string
   */
  build(): string {
    return this.conditions.join(' and ');
  }
}

export enum EventKey {
  Type = 'tm.event',
  Action = 'action',
  Sender = 'sender',
  Recipient = 'recipient',
  DestinationValidator = 'destination-validator',
  // TODO: more
}

export enum EventAction {
  Send = 'send',
  Burn = 'burn',
  SetMemoRegexp = 'set-memo-regexp',
  EditValidator = 'edit_validator',
  // TODO: more
}
