import React from 'react'
import { getItems } from '@/services/requests'

import { FoodCard } from '@/components/ui/food-card'
import { FoodPagination } from './_components/pagination'

interface FoodPageProps {
  searchParams: Promise<{
    search?: string
    page?: string
    limit?: string
  }>
}

const FoodPage = async (props: FoodPageProps) => {
  const { searchParams } = props

  const promisedParams = await searchParams

  const {
    search: searchParam,
    page: pageParam,
    limit: limitParam,
  } = promisedParams

  const { data, pagination } = await getItems({
    search: searchParam,
    page: pageParam,
    limit: limitParam,
  })

  return (
    <div className="container max-w-screen-lg pb-5 pt-32">
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {data.map((food) => (
          <FoodCard key={food.id} data={food} />
        ))}

        {data.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center">
            <p className="text-lg font-semibold">No food found 😅</p>
          </div>
        )}
      </div>

      <FoodPagination className="mt-10" pagination={pagination} />
    </div>
  )
}

export default FoodPage
