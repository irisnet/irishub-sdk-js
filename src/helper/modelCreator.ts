import * as types from '../types'
import * as is from "is_js";

export class ModelCreator{
  static createPaginationModel(
        page_number:number = 1,
        page_size:number = 30,
        count_total:boolean = false,
        key?:string):any{
        const pagination = new types.base_query_pagination_pb.PageRequest();
        if (is.not.undefined(key)) {//only one of offset or key should be set.
            pagination.setKey(key);
        } else {
            pagination.setOffset((page_number - 1) * page_size > 0 ? (page_number - 1) * page_size : 0);
            pagination.setLimit(page_size > 0 ? page_size : 10);
        }
        pagination.setCountTotal(count_total);
        return pagination;
    }
}