import * as types from '../types'
import * as is from "is_js";

export class ModelCreator{
  static createPaginationModel( pageInfo?:types.Pagination ):any{
        const pagination = new types.base_query_pagination_pb.PageRequest();
        if (is.not.undefined(pageInfo?.key)) {//only one of offset or key should be set.
            pagination.setKey(pageInfo?.key);
        } else {
            let page_number = pageInfo?.page_number || 1;
            let page_size = pageInfo?.page_size || 10;
            pagination.setOffset((page_number - 1) * page_size > 0 ? (page_number - 1) * page_size : 0);
            pagination.setLimit(page_size);
        }
        pagination.setCountTotal(pageInfo?.count_total ?? true);
        pagination.setReverse(pageInfo?.reverse ?? false);
        
        return pagination;
    }
}