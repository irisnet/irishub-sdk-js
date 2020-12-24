"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelCreator = void 0;
const types = require("../types");
const is = require("is_js");
class ModelCreator {
    static createPaginationModel(page_number = 1, page_size = 30, count_total = false, key) {
        const pagination = new types.base_query_pagination_pb.PageRequest();
        if (is.not.undefined(key)) { //only one of offset or key should be set.
            pagination.setKey(key);
        }
        else {
            pagination.setOffset((page_number - 1) * page_size > 0 ? (page_number - 1) * page_size : 0);
            pagination.setLimit(page_size > 0 ? page_size : 10);
        }
        pagination.setCountTotal(count_total);
        return pagination;
    }
}
exports.ModelCreator = ModelCreator;
//# sourceMappingURL=modelCreator.js.map