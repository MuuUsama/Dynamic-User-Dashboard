import {Pagination} from "./pagination";

export interface Response<T> {
  data: T[];
  details:T;
  page: number;
  total_pages: number;
  total: number;
  per_page: number;
}
export interface Respn<T> {
  data: T;
  pagination: Pagination;
}