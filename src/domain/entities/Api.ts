export interface ApiResponse<T> {
  items: T[]
  count: number
}

export interface PaginationParams {
  page: number
  size: number
}

export interface SortParams {
  sort?: {
    field: string
    order: number
  }
}

export interface FilterParams {
  filters?: {
    [key: string]: any
  }
}

export type RequestParams = PaginationParams & SortParams & FilterParams
