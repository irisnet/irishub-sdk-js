"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelCreator = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var types = _interopRequireWildcard(require("../types"));
var is = _interopRequireWildcard(require("is_js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var ModelCreator = exports.ModelCreator = /*#__PURE__*/function () {
  function ModelCreator() {
    (0, _classCallCheck2["default"])(this, ModelCreator);
  }
  return (0, _createClass2["default"])(ModelCreator, null, [{
    key: "createPaginationModel",
    value: function createPaginationModel(pageInfo) {
      var _pageInfo$count_total, _pageInfo$reverse;
      var pagination = new types.base_query_pagination_pb.PageRequest();
      if (is.not.undefined(pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.key)) {
        //only one of offset or key should be set.
        pagination.setKey(pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.key);
      } else {
        var page_number = (pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.page_number) || 1;
        var page_size = (pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.page_size) || 10;
        pagination.setOffset((page_number - 1) * page_size > 0 ? (page_number - 1) * page_size : 0);
        pagination.setLimit(page_size);
      }
      pagination.setCountTotal((_pageInfo$count_total = pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.count_total) !== null && _pageInfo$count_total !== void 0 ? _pageInfo$count_total : true);
      pagination.setReverse((_pageInfo$reverse = pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.reverse) !== null && _pageInfo$reverse !== void 0 ? _pageInfo$reverse : false);
      return pagination;
    }
  }]);
}();