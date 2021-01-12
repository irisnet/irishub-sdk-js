"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelCreator = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var types = _interopRequireWildcard(require("../types"));

var is = _interopRequireWildcard(require("is_js"));

var ModelCreator = /*#__PURE__*/function () {
  function ModelCreator() {
    (0, _classCallCheck2["default"])(this, ModelCreator);
  }

  (0, _createClass2["default"])(ModelCreator, null, [{
    key: "createPaginationModel",
    value: function createPaginationModel() {
      var page_number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var page_size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
      var count_total = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var key = arguments.length > 3 ? arguments[3] : undefined;
      var pagination = new types.base_query_pagination_pb.PageRequest();

      if (is.not.undefined(key)) {
        //only one of offset or key should be set.
        pagination.setKey(key);
      } else {
        pagination.setOffset((page_number - 1) * page_size > 0 ? (page_number - 1) * page_size : 0);
        pagination.setLimit(page_size > 0 ? page_size : 10);
      }

      pagination.setCountTotal(count_total);
      return pagination;
    }
  }]);
  return ModelCreator;
}();

exports.ModelCreator = ModelCreator;