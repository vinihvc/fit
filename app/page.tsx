import React from 'react'
import { FOOD } from '@/content/food'

import ClientHomePage from './client-page'

const fetchFood = async () => FOOD

const RootPage = async () => {
  const food = await fetchFood()

  return (
    <div className="container flex max-w-[980px] flex-1 flex-col">
      <h1 className="py-8 text-3xl font-extrabold">Greetings 👋</h1>

      <ClientHomePage food={food} />
    </div>
  )
}

export default RootPage
