import React from 'react'
import { FOOD } from '@/content/food'

import ClientHomePage from './client-page'

const fetchFood = async () => {
  // fake delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return FOOD
}

const RootPage = async () => {
  const food = await fetchFood()

  return (
    <div className="container flex max-w-[980px] flex-1 flex-col">
      <div className="mt-10">
        <ClientHomePage food={food} />
      </div>
    </div>
  )
}

export default RootPage
