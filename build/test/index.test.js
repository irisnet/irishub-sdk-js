"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iris = require("../src");
test('newSdk', () => {
    const node = 'localhost:26657';
    const chainId = 'test';
    const fee = '0.3iris';
    const gas = 50000;
    const network = iris.Network.Testnet;
    let sdk = new iris.Sdk(node);
    expect(sdk.chainId).toBe(iris.Consts.defaultChainId);
    expect(sdk.fee).toBe(iris.Consts.defaultFees);
    expect(sdk.gas).toBe(iris.Consts.defaultGas);
    expect(sdk.network).toBe(iris.Consts.defaultNetwork);
    expect(sdk.node).toBe(node);
    sdk = sdk
        .withChainId(chainId)
        .withFee(fee)
        .withGas(gas)
        .withNetwork(network);
    expect(sdk.chainId).toBe(chainId);
    expect(sdk.fee).toBe(fee);
    expect(sdk.gas).toBe(gas);
    expect(sdk.network).toBe(network);
    expect(sdk.node).toBe(node);
});
//# sourceMappingURL=index.test.js.map