import React from 'react'
import Link from 'next/link'
import { getItems } from '@/services/requests'

import { Card } from '@/components/card'
import { Search } from './_components/search'

const RootPage = async () => {
  const data = await getItems()

  return (
    <div className="container flex max-w-[980px] flex-1 flex-col">
      <h1 className="py-8 text-3xl font-extrabold">Greetings 👋</h1>

      <Search />

      <div className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-3 lg:grid-cols-4">
        {data.map((food) => (
          <Link href={`/item/d/${food.id}`} key={food.description}>
            <Card data={food} />
          </Link>
        ))}

        {data.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-4">
            <p className="text-lg font-semibold">No food found 😅</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default RootPage
