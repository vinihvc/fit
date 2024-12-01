import { TacoType } from '@/content/TACO'

import { http } from './http'

export const getItems = async () => {
  const { data } = await http<{ data: TacoType[] }>('/items')

  return data
}

export const getItem = async (id: string) => {
  const { data } = await http<{ data: TacoType }>(`/item-detail?id=${id}`)

  return data
}
