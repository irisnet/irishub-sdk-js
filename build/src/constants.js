"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Network;
(function (Network) {
    Network[Network["Mainnet"] = 0] = "Mainnet";
    Network[Network["Testnet"] = 1] = "Testnet";
})(Network = exports.Network || (exports.Network = {}));
class Consts {
}
exports.Consts = Consts;
Consts.defaultNetwork = Network.Mainnet;
Consts.defaultChainId = 'irishub';
Consts.defaultFees = '0.6iris';
Consts.defaultGas = 100000;
//# sourceMappingURL=constants.js.map