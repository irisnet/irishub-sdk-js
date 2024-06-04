"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventQueryBuilder = exports.EventKey = exports.EventAction = exports.Condition = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _errors = require("../errors");
var is = _interopRequireWildcard(require("is_js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Condition = exports.Condition = /*#__PURE__*/function () {
  function Condition(key) {
    (0, _classCallCheck2["default"])(this, Condition);
    (0, _defineProperty2["default"])(this, "key", void 0);
    (0, _defineProperty2["default"])(this, "value", void 0);
    (0, _defineProperty2["default"])(this, "op", void 0);
    this.key = key;
    this.value = '';
    this.op = '';
  }
  return (0, _createClass2["default"])(Condition, [{
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
}();
/**
 * A builder for building event query strings
 */
var EventQueryBuilder = exports.EventQueryBuilder = /*#__PURE__*/function () {
  function EventQueryBuilder() {
    (0, _classCallCheck2["default"])(this, EventQueryBuilder);
    (0, _defineProperty2["default"])(this, "conditions", new Array());
  }
  return (0, _createClass2["default"])(EventQueryBuilder, [{
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
}();
var EventKey = exports.EventKey = /*#__PURE__*/function (EventKey) {
  EventKey["Type"] = "tm.event";
  EventKey["Action"] = "action";
  EventKey["Sender"] = "sender";
  EventKey["Recipient"] = "recipient";
  EventKey["DestinationValidator"] = "destination-validator";
  EventKey["RequestID"] = "request-id";
  return EventKey;
}({}); // TODO: more
var EventAction = exports.EventAction = /*#__PURE__*/function (EventAction) {
  EventAction["Send"] = "send";
  EventAction["Burn"] = "burn";
  EventAction["SetMemoRegexp"] = "set-memo-regexp";
  EventAction["EditValidator"] = "edit_validator";
  return EventAction;
}({}); // TODO: more