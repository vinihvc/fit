import { TacoType } from '@/content/TACO'

import { ApiPagination, ApiResponse } from '@/types/common'
import { http } from './http'

interface GetItemsArgs {
  /**
   * Search for items by name
   */
  search?: string
  /**
   * Page number
   */
  page?: string
  /**
   * Limit number of items per page
   */
  limit?: string
}

export const getItems = async (args?: GetItemsArgs) => {
  const { search, page, limit } = args || {}

  const queryParams = new URLSearchParams()

  if (search) queryParams.set('search', search)
  if (page) queryParams.set('page', page)
  if (limit) queryParams.set('limit', limit)

  return await http<ApiResponse<TacoType[]> & ApiPagination>(
    `/foods?${queryParams}`,
  )
}

export const getItem = async (id: string) => {
  return await http<ApiResponse<TacoType>>(`/food?id=${id}`)
}
