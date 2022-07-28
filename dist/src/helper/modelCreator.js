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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ModelCreator = /*#__PURE__*/function () {
  function ModelCreator() {
    (0, _classCallCheck2["default"])(this, ModelCreator);
  }

  (0, _createClass2["default"])(ModelCreator, null, [{
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
  return ModelCreator;
}();

exports.ModelCreator = ModelCreator;