import React from 'react'
import { getItems } from '@/services/requests'

import { FoodCard } from '@/components/food-card'

interface FoodPageProps {
  searchParams: Promise<{
    search?: string
    page?: string
    limit?: string
  }>
}

const FoodPage = async (props: FoodPageProps) => {
  const { search, page, limit } = await props.searchParams

  const data = await getItems({ search, page, limit })

  return (
    <div className="container max-w-screen-lg py-5">
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
    </div>
  )
}

export default FoodPage
