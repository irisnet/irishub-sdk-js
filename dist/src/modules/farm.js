"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Farm = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _errors = require("../errors");

var _helper = require("../helper");

var types = _interopRequireWildcard(require("../types"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Farm = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Farm(client) {
    (0, _classCallCheck2["default"])(this, Farm);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * stake lpt
   * @param farmPoolID  farm pool ID
   * @param lpt receive Lp
   * @param baseTx { types.BaseTx }
   * @returns
   */


  (0, _createClass2["default"])(Farm, [{
    key: "stakeLp",
    value: function () {
      var _stakeLp = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(pool_id, amount, baseTx) {
        var sender, msgs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sender = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgStake,
                  value: {
                    pool_id: pool_id,
                    amount: amount,
                    sender: sender
                  }
                }];
                return _context.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function stakeLp(_x, _x2, _x3) {
        return _stakeLp.apply(this, arguments);
      }

      return stakeLp;
    }()
  }, {
    key: "unStakeLp",
    value:
    /**
     * unstake lpt
     * @param farmPoolName  farm pool name
     * @param lpt receive Lp
     * @param baseTx { types.BaseTx }
     * @returns
     */
    function () {
      var _unStakeLp = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(pool_id, amount, baseTx) {
        var sender, msgs;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                sender = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgUnstake,
                  value: {
                    pool_id: pool_id,
                    amount: amount,
                    sender: sender
                  }
                }];
                return _context2.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function unStakeLp(_x4, _x5, _x6) {
        return _unStakeLp.apply(this, arguments);
      }

      return unStakeLp;
    }()
    /**
     * harvest lpt
     * @param farmPoolName  farm pool name
     * @param baseTx { types.BaseTx }
     * @returns
     */

  }, {
    key: "harvestReward",
    value: function () {
      var _harvestReward = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(pool_id, baseTx) {
        var sender, msgs;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                sender = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgHarvest,
                  value: {
                    pool_id: pool_id,
                    sender: sender
                  }
                }];
                return _context3.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function harvestReward(_x7, _x8) {
        return _harvestReward.apply(this, arguments);
      }

      return harvestReward;
    }()
    /**
     * query Farm Pools
     */

  }, {
    key: "queryFarmPools",
    value: function queryFarmPools(pagination) {
      var request = new types.farm_query_pb.QueryFarmPoolsRequest();
      request.setPagination(_helper.ModelCreator.createPaginationModel(pagination));
      return this.client.rpcClient.protoQuery('/irismod.farm.Query/FarmPools', request, types.farm_query_pb.QueryFarmPoolsResponse);
    }
    /**
     * query Farm Pool
     */

  }, {
    key: "queryFarmPool",
    value: function queryFarmPool(id) {
      if (!id) {
        throw new _errors.SdkError("id can ont be empty");
      }

      var request = new types.farm_query_pb.QueryFarmPoolRequest();
      request.setId(id);
      return this.client.rpcClient.protoQuery('/irismod.farm.Query/FarmPool', request, types.farm_query_pb.QueryFarmPoolResponse);
    }
    /**
     * query Farmer
     */

  }, {
    key: "queryFarmer",
    value: function queryFarmer(farmer, pool_id) {
      if (!farmer) {
        throw new _errors.SdkError("farmer can ont be empty");
      }

      if (!pool_id) {
        throw new _errors.SdkError("pool_id can ont be empty");
      }

      var request = new types.farm_query_pb.QueryFarmerRequest();
      request.setFarmer(farmer);
      request.setPoolId(pool_id);
      return this.client.rpcClient.protoQuery('/irismod.farm.Query/Farmer', request, types.farm_query_pb.QueryFarmerResponse);
    }
    /**
     * query Params
     */

  }, {
    key: "queryParams",
    value: function queryParams() {
      var request = new types.farm_query_pb.QueryParamsRequest();
      return this.client.rpcClient.protoQuery('/irismod.farm.Query/Params', request, types.farm_query_pb.QueryParamsResponse);
    }
  }]);
  return Farm;
}();

exports.Farm = Farm;