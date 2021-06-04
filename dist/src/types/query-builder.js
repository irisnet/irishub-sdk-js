"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventAction = exports.EventKey = exports.EventQueryBuilder = exports.Condition = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _errors = require("../errors");

var is = _interopRequireWildcard(require("is_js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Condition = /*#__PURE__*/function () {
  function Condition(key) {
    (0, _classCallCheck2["default"])(this, Condition);
    (0, _defineProperty2["default"])(this, "key", void 0);
    (0, _defineProperty2["default"])(this, "value", void 0);
    (0, _defineProperty2["default"])(this, "op", void 0);
    this.key = key;
    this.value = '';
    this.op = '';
  }

  (0, _createClass2["default"])(Condition, [{
    key: "lte",
    value: function lte(value) {
      return this.fill(value, '<=');
    }
  }, {
    key: "gte",
    value: function gte(value) {
      return this.fill(value, '>=');
    }
  }, {
    key: "le",
    value: function le(value) {
      return this.fill(value, '<');
    }
  }, {
    key: "ge",
    value: function ge(value) {
      return this.fill(value, '>');
    }
  }, {
    key: "eq",
    value: function eq(value) {
      return this.fill(value, '=');
    }
  }, {
    key: "contains",
    value: function contains(value) {
      return this.fill(value, 'CONTAINS');
    }
  }, {
    key: "toString",
    value: function toString() {
      if (is.empty(this.key) || is.empty(this.value) || is.empty(this.op)) {
        throw new _errors.SdkError('invalid condition', _errors.CODES.Internal);
      }

      return this.key + this.op + "'" + this.value + "'";
    }
  }, {
    key: "fill",
    value: function fill(value, op) {
      this.value = value;
      this.op = op;
      return this;
    }
  }]);
  return Condition;
}();
/**
 * A builder for building event query strings
 */


exports.Condition = Condition;

var EventQueryBuilder = /*#__PURE__*/function () {
  function EventQueryBuilder() {
    (0, _classCallCheck2["default"])(this, EventQueryBuilder);
    (0, _defineProperty2["default"])(this, "conditions", new Array());
  }

  (0, _createClass2["default"])(EventQueryBuilder, [{
    key: "addCondition",
    value:
    /**
     * Add a query condition
     * @param eventKey
     * @param value
     * @returns The builder itself
     */
    function addCondition(condition) {
      this.conditions.push(condition);
      return this;
    }
    /**
     * Convert the current builder to the query string
     * @returns The query string
     */

  }, {
    key: "build",
    value: function build() {
      var query = '';
      this.conditions.forEach(function (c, index) {
        if (index > 0) {
          query += ' AND ';
        }

        query += c.toString();
      });
      return query;
    }
  }]);
  return EventQueryBuilder;
}();

exports.EventQueryBuilder = EventQueryBuilder;
var EventKey;
exports.EventKey = EventKey;

(function (EventKey) {
  EventKey["Type"] = "tm.event";
  EventKey["Action"] = "action";
  EventKey["Sender"] = "sender";
  EventKey["Recipient"] = "recipient";
  EventKey["DestinationValidator"] = "destination-validator";
  EventKey["RequestID"] = "request-id";
})(EventKey || (exports.EventKey = EventKey = {}));

var EventAction;
exports.EventAction = EventAction;

(function (EventAction) {
  EventAction["Send"] = "send";
  EventAction["Burn"] = "burn";
  EventAction["SetMemoRegexp"] = "set-memo-regexp";
  EventAction["EditValidator"] = "edit_validator";
})(EventAction || (exports.EventAction = EventAction = {}));