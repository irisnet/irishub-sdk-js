import * as types from '../types'
import * as is from "is_js";

export function createPaginationModel(
  query: {
    key?: string,
    page?: number;
    size?: number;
    count_total?: boolean;
  }
) {
  const pagination = new types.base_pagination_pb.PageRequest();
  const {key, page = 1, size = 100, count_total} = query;
  if (is.not.undefined(key)) {//only one of offset or key should be set.
    pagination.setKey(key);
  } else {
    pagination.setLimit(size);
    pagination.setOffset((page - 1) * size)
  }
  if (is.not.undefined(count_total)) {
    pagination.setCountTotal(count_total);
  }
  return pagination;
}