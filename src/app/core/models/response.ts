import {Pagination} from "./pagination";

export interface Response<T> {
  data: T[];
  details:T;
  pagination: Pagination;
}
export interface Respn<T> {
  data: T;
  pagination: Pagination;
}