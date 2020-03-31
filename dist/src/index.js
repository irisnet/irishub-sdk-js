"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./types/constants"));
const client_1 = require("./client");
/**
 * Initialize IRISHub SDK
 *
 * @param config IRISHub SDK [[ClientConfig]]
 *
 * @returns New IRISHub SDK Instance
 */
function newClient(config) {
    const copyConfig = new client_1.DefaultClientConfig();
    Object.assign(copyConfig, config);
    return new client_1.Client(copyConfig);
}
exports.newClient = newClient;
//# sourceMappingURL=index.js.map