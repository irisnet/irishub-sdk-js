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