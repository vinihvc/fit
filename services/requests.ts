import { TacoType } from '@/content/TACO'

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

  const { data } = await http<{ data: TacoType[] }>(`/foods?${queryParams}`)

  return data
}

export const getItem = async (id: string) => {
  const { data } = await http<{ data: TacoType }>(`/food?id=${id}`)

  return data
}
