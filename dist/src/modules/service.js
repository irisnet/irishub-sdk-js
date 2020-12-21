"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Service = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _service = require("../types/service");

var _errors = require("../errors");

var _utils = require("../utils");

/**
 * @todo docs
 * @category Modules
 * @since v0.17
 */
var Service = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Service(client) {
    (0, _classCallCheck2["default"])(this, Service);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * Query a service definition
   *
   * @param serviceName The unique service name
   * @returns
   * @since v0.17
   */


  (0, _createClass2["default"])(Service, [{
    key: "queryDefinition",
    value: function queryDefinition(serviceName) {
      return this.client.rpcClient.abciQuery('custom/service/definition', {
        ServiceName: serviceName
      });
    }
    /**
     * Query a service binding
     *
     * @param serviceName The unique service name
     * @param provider Bech32 provider address
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryBinding",
    value: function queryBinding(serviceName, provider) {
      return this.client.rpcClient.abciQuery('custom/service/binding', {
        ServiceName: serviceName,
        Provider: provider
      });
    }
    /**
     * Query service bindings by service name
     *
     * @param serviceName The unique service name
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryBindings",
    value: function queryBindings(serviceName) {
      return this.client.rpcClient.abciQuery('custom/service/bindings', {
        ServiceName: serviceName
      });
    }
    /**
     * Query a service request
     *
     * @param requestID The ID of the request
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryRequest",
    value: function queryRequest(requestID) {
      return this.client.rpcClient.abciQuery('custom/service/request', {
        RequestID: requestID
      });
    }
    /**
     * Query all requests of a specified service and provider
     *
     * @param serviceName The unique service name
     * @param provider Bech32 provider address
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryRequests",
    value: function queryRequests(serviceName, provider) {
      return this.client.rpcClient.abciQuery('custom/service/request', {
        ServiceName: serviceName,
        Provider: provider
      });
    }
    /**
     * Query all requests of a specified request context ID and batch counter
     *
     * @param requestContextID The context ID of the service invocation which is returned when calling the service
     * @param batchCounter The sequence number of the request context
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryRequestsByReqCtx",
    value: function queryRequestsByReqCtx(requestContextID, batchCounter) {
      return this.client.rpcClient.abciQuery('custom/service/requests_by_ctx', {
        RequestContextID: _utils.Utils.str2ab(requestContextID),
        BatchCounter: batchCounter
      });
    }
    /**
     * Query a request context
     *
     * @param requestContextID The context ID of the service invocation which is returned when calling the service
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryRequestContext",
    value: function queryRequestContext(requestContextID) {
      return this.client.rpcClient.abciQuery('custom/service/context', {
        RequestContextID: _utils.Utils.str2ab(requestContextID)
      });
    }
    /**
     * Query a service response
     *
     * @param requestID The ID of the request
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryResponse",
    value: function queryResponse(requestID) {
      return this.client.rpcClient.abciQuery('custom/service/response', {
        RequestID: requestID
      });
    }
    /**
     * Query service responses
     *
     * @param requestContextID The context ID of the service invocation which is returned when calling the service
     * @param batchCounter The sequence number of the request context
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryResponses",
    value: function queryResponses(requestContextID, batchCounter) {
      return this.client.rpcClient.abciQuery('custom/service/responses', {
        RequestContextID: _utils.Utils.str2ab(requestContextID),
        BatchCounter: batchCounter
      });
    }
    /**
     * Query service fee
     *
     * @param provider Bech32 provider address
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryFees",
    value: function queryFees(provider) {
      return this.client.rpcClient.abciQuery('custom/service/fees', {
        Address: provider
      });
    }
    /**
     * Creating a new service definition
     *
     * @param definition Service definition
     * @param baseTx
     * @returns
     * @since v0.17
     */

  }, {
    key: "defineService",
    value: function () {
      var _defineService = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(definition, baseTx) {
        var author, msgs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                author = this.client.keys.show(baseTx.from);
                msgs = [new _service.MsgDefineService({
                  name: definition.name,
                  author: author,
                  schemas: definition.schemas,
                  description: definition.description,
                  tags: definition.tags,
                  author_description: definition.author_description
                })];
                return _context.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function defineService(_x, _x2) {
        return _defineService.apply(this, arguments);
      }

      return defineService;
    }()
    /**
     * Bind an existing service definition
     *
     * @param binding Service binding
     * @param baseTx
     * @returns
     * @since v0.17
     */

  }, {
    key: "bindService",
    value: function () {
      var _bindService = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(binding, baseTx) {
        var provider, deposit, msgs;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                provider = this.client.keys.show(baseTx.from);
                _context2.next = 3;
                return this.client.utils.toMinCoins(binding.deposit);

              case 3:
                deposit = _context2.sent;
                msgs = [new _service.MsgBindService({
                  service_name: binding.serviceName,
                  provider: provider,
                  deposit: deposit,
                  pricing: binding.pricing
                })];
                return _context2.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function bindService(_x3, _x4) {
        return _bindService.apply(this, arguments);
      }

      return bindService;
    }()
    /**
     * Update the specified service binding
     *
     * @param binding Service binding
     * @param baseTx
     * @returns
     * @since v0.17
     */

  }, {
    key: "updateServiceBinding",
    value: function () {
      var _updateServiceBinding = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(binding, baseTx) {
        var provider, deposit, msgs;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                provider = this.client.keys.show(baseTx.from);
                _context3.next = 3;
                return this.client.utils.toMinCoins(binding.deposit);

              case 3:
                deposit = _context3.sent;
                msgs = [new _service.MsgUpdateServiceBinding({
                  service_name: binding.serviceName,
                  provider: provider,
                  deposit: deposit,
                  pricing: binding.pricing
                })];
                return _context3.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateServiceBinding(_x5, _x6) {
        return _updateServiceBinding.apply(this, arguments);
      }

      return updateServiceBinding;
    }()
    /**
     * Disable an available service binding
     *
     * @param serviceName The unique name of the service
     * @param baseTx
     * @returns
     * @since v0.17
     */

  }, {
    key: "disableServiceBinding",
    value: function () {
      var _disableServiceBinding = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(serviceName, baseTx) {
        var provider, msgs;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                provider = this.client.keys.show(baseTx.from);
                msgs = [new _service.MsgDisableServiceBinding(serviceName, provider)];
                return _context4.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function disableServiceBinding(_x7, _x8) {
        return _disableServiceBinding.apply(this, arguments);
      }

      return disableServiceBinding;
    }()
    /**
     * Enable an unavailable service binding
     *
     * ** Not Supported **
     * @param serviceName The unique name of the service
     * @param baseTx
     * @returns
     * @since v0.17
     */

  }, {
    key: "enableServiceBinding",
    value: function () {
      var _enableServiceBinding = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(serviceName, baseTx) {
        var provider, msgs;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                provider = this.client.keys.show(baseTx.from);
                msgs = [new _service.MsgEnableServiceBinding(serviceName, provider)];
                return _context5.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function enableServiceBinding(_x9, _x10) {
        return _enableServiceBinding.apply(this, arguments);
      }

      return enableServiceBinding;
    }()
    /**
     * Initiate a service call
     *
     * @hidden
     * @param request Service request
     * @param baseTx
     * @returns
     * @since v0.17
     */

  }, {
    key: "invokeService",
    value: function () {
      var _invokeService = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(request, baseTx) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                throw new _errors.SdkError('Not supported');

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function invokeService(_x11, _x12) {
        return _invokeService.apply(this, arguments);
      }

      return invokeService;
    }()
    /**
     * Set a withdrawal address for a provider
     *
     * @param withdrawAddress Bech32 account address
     * @param baseTx
     * @returns
     * @since v0.17
     */

  }, {
    key: "setWithdrawAddress",
    value: function () {
      var _setWithdrawAddress = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(withdrawAddress, baseTx) {
        var provider, msgs;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                provider = this.client.keys.show(baseTx.from);
                msgs = [new _service.MsgSetServiceWithdrawAddress(withdrawAddress, provider)];
                return _context7.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function setWithdrawAddress(_x13, _x14) {
        return _setWithdrawAddress.apply(this, arguments);
      }

      return setWithdrawAddress;
    }()
    /**
     * Refund deposits from the specified service binding
     *
     * @param serviceName The unique name of the service
     * @param baseTx
     * @returns
     * @since v0.17
     */

  }, {
    key: "refundServiceDeposit",
    value: function () {
      var _refundServiceDeposit = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(serviceName, baseTx) {
        var provider, msgs;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                provider = this.client.keys.show(baseTx.from);
                msgs = [new _service.MsgRefundServiceDeposit(serviceName, provider)];
                return _context8.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function refundServiceDeposit(_x15, _x16) {
        return _refundServiceDeposit.apply(this, arguments);
      }

      return refundServiceDeposit;
    }()
    /**
     * Start the specified request context
     *
     * @param requestContextID The context ID of the service invocation which is returned when calling the service
     * @param baseTx
     * @returns
     * @since v0.17
     */

  }, {
    key: "startRequestContext",
    value: function () {
      var _startRequestContext = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(requestContextID, baseTx) {
        var consumer, msgs;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                consumer = this.client.keys.show(baseTx.from);
                msgs = [new _service.MsgStartRequestContext(requestContextID, consumer)];
                return _context9.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function startRequestContext(_x17, _x18) {
        return _startRequestContext.apply(this, arguments);
      }

      return startRequestContext;
    }()
    /**
     * Pause the specified request context
     *
     * @param requestContextID The context ID of the service invocation which is returned when calling the service
     * @param baseTx
     * @returns
     * @since v0.17
     */

  }, {
    key: "pauseRequestContext",
    value: function () {
      var _pauseRequestContext = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(requestContextID, baseTx) {
        var consumer, msgs;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                consumer = this.client.keys.show(baseTx.from);
                msgs = [new _service.MsgPauseRequestContext(requestContextID, consumer)];
                return _context10.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function pauseRequestContext(_x19, _x20) {
        return _pauseRequestContext.apply(this, arguments);
      }

      return pauseRequestContext;
    }()
    /**
     * Kill the specified request context
     *
     * @param requestContextID The context ID of the service invocation which is returned when calling the service
     * @param baseTx
     * @returns
     * @since v0.17
     */

  }, {
    key: "killRequestContext",
    value: function () {
      var _killRequestContext = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(requestContextID, baseTx) {
        var consumer, msgs;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                consumer = this.client.keys.show(baseTx.from);
                msgs = [new _service.MsgKillRequestContext(requestContextID, consumer)];
                return _context11.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function killRequestContext(_x21, _x22) {
        return _killRequestContext.apply(this, arguments);
      }

      return killRequestContext;
    }()
    /**
     * Update the specified request context
     *
     * @param request Params to be updated
     * @param baseTx
     * @returns
     * @since v0.17
     */

  }, {
    key: "updateRequestContext",
    value: function () {
      var _updateRequestContext = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(request, baseTx) {
        var consumer, serviceFeeCap, msgs;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                consumer = this.client.keys.show(baseTx.from);

                if (!request.service_fee_cap) {
                  _context12.next = 7;
                  break;
                }

                _context12.next = 4;
                return this.client.utils.toMinCoins(request.service_fee_cap);

              case 4:
                _context12.t0 = _context12.sent;
                _context12.next = 8;
                break;

              case 7:
                _context12.t0 = [];

              case 8:
                serviceFeeCap = _context12.t0;
                msgs = [new _service.MsgUpdateRequestContext({
                  request_context_id: request.request_context_id,
                  providers: request.providers,
                  service_fee_cap: serviceFeeCap,
                  timeout: request.timeout || 0,
                  repeated_frequency: request.repeated_frequency || 0,
                  repeated_total: request.repeated_total || 0,
                  consumer: consumer
                })];
                return _context12.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 11:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function updateRequestContext(_x23, _x24) {
        return _updateRequestContext.apply(this, arguments);
      }

      return updateRequestContext;
    }()
    /**
     * Withdraw the earned fees to the specified provider
     *
     * @param baseTx
     * @returns
     * @since v0.17
     */

  }, {
    key: "withdrawEarnedFees",
    value: function () {
      var _withdrawEarnedFees = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(baseTx) {
        var provider, msgs;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                provider = this.client.keys.show(baseTx.from);
                msgs = [new _service.MsgWithdrawEarnedFees(provider)];
                return _context13.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function withdrawEarnedFees(_x25) {
        return _withdrawEarnedFees.apply(this, arguments);
      }

      return withdrawEarnedFees;
    }()
    /**
     * Withdraw the service tax to the speicified destination address by the trustee
     *
     * @param destAddress The speicified destination address to receive the service tax
     * @param baseTx
     * @returns
     * @since v0.17
     */

  }, {
    key: "withdrawTax",
    value: function () {
      var _withdrawTax = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(destAddress, amount, baseTx) {
        var trustee, coins, msgs;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                trustee = this.client.keys.show(baseTx.from);
                _context14.next = 3;
                return this.client.utils.toMinCoins(amount);

              case 3:
                coins = _context14.sent;
                msgs = [new _service.MsgWithdrawTax(trustee, destAddress, coins)];
                return _context14.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 6:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function withdrawTax(_x26, _x27, _x28) {
        return _withdrawTax.apply(this, arguments);
      }

      return withdrawTax;
    }() // Service listeners not supported in browser

  }]);
  return Service;
}();

exports.Service = Service;