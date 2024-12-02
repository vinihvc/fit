export type ApiPagination = {
  pagination: {
    currentPage: number
    itemsPerPage: number
    totalItems: number
    totalPages: number
  }
}

export type ApiResponse<T> = {
  data: T
}
