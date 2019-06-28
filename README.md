# IRIS Network JavaScript SDK

The IRIS Chain JavaScript SDK allows browsers and node.js clients  to interact with IRISHUB. It includes the following core  components:

- **crypto** - core cryptographic functions.integrate [iris-crypto's](https://github.com/irisnet/irisnet-crypto) ability

- **net** - net encapsulates http and websocket protocols, providing sdk access to irishub

- **utils** - basic toolkit

- **IrisClient** -exposed the api available for sdk.

- **modules** - docking lcd api exposes.proxy `IrisClient` by. include:

  - bank - Bank module APIs
  - distr - Distribution module APIs  
  - gov - Governance module APIs
  - slashing - Slashing module APIs
  - stake - stake module APIs
  - tm - tendermint module APIs
  - Version - version module APIs

  detailed interface documentation please refer to [swagger docs]([http://irisnet-lcd.rainbow.one/](http://irisnet-lcd.rainbow.one/))

- **rpc** - [RPC client](http://irisnet-rpc.rainbow.one/), proxy by `IrisClient`.

- **test** - some test case

# Installation

Install by NPM :

`git+https://github.com/irisnet/sdk-js`

# API

For up-to-date API documentation, please check the [api](./docs/api.md)

# Contributing

Contributions to the IRIS JavaScript SDK are welcome. Please 
ensure that you have tested the changes with a local client and have 
added unit test coverage for your code,you can also submit an issue on github.