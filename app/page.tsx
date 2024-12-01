import React from 'react'
import { TACO } from '@/content/TACO'
import { http } from '@/services/http'

import ClientHomePage from './client-page'

const fetchFood = async () => {
  const { data } = await http('/taco')

  return data
}

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
