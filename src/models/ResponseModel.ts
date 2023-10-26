export interface Pagination {
  page: number;
  pages: number;
  perPage: number;
  totalCount: number;
  rowsNumber?: number;
  rowsPerPage?: number;
  descending?: boolean;
  sortBy: string;
}

export interface PaginationResponse<T> {
  items: T[];
  pagination: Pagination;
}

export interface ApiItemResponse<T> {
  success: boolean;
  result: {
    item: T;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  result: T;
}

export interface ErrorResponse {
  success: boolean;
  message: string;
  status?: number;
}

export interface ApiPaginateResponse<T> {
  success: boolean;
  result: PaginationResponse<T>;
}
