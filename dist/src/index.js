"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newClient = void 0;
exports.types = require("./types");
exports.utils = require("./utils");
var client_1 = require("./client");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return client_1.Client; } });
const client_2 = require("./client");
/**
 * Initialize IRISHub SDK
 *
 * @param config IRISHub SDK [[ClientConfig]]
 *
 * @returns New IRISHub SDK Instance
 */
function newClient(config) {
    const copyConfig = new client_2.DefaultClientConfig();
    Object.assign(copyConfig, config);
    return new client_2.Client(copyConfig);
}
exports.newClient = newClient;
//# sourceMappingURL=index.js.map