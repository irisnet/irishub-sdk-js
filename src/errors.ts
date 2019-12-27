export default class SdkError extends Error {
  /** Tendermint error code */
  code: number = 0;
  /** Tendermint error log */
  log: string = '';
  
  /**
   * Initialize SdkError with Tendermint error msg
   * @param msg Tendermint error msg
   */
  constructor(msg: string) {
    super(msg);
    this.name = 'SdkError';
  }
}
