import * as iris from '../src';

test('Init Sdk', () => {
  const node = 'localhost:26657';

  const sdk = iris.newSdk({ node: node });
  expect(sdk.config.chainId).toBe('irishub');
  expect(sdk.config.fee).toBe('0.6iris');
  expect(sdk.config.gas).toBe(100000);
  expect(sdk.config.network).toBe(iris.Network.Mainnet);
  expect(sdk.config.node).toBe(node);

  const chainId = 'test';
  const fee = '0.3iris';
  const gas = '50000';
  const network = iris.Network.Testnet;

  sdk
    .withChainId(chainId)
    .withFee(fee)
    .withGas(gas)
    .withNetwork(network);
  expect(sdk.config.chainId).toBe(chainId);
  expect(sdk.config.fee).toBe(fee);
  expect(sdk.config.gas).toBe(gas);
  expect(sdk.config.network).toBe(network);
  expect(sdk.config.node).toBe(node);
});
