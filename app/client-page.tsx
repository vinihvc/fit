'use client'

import React from 'react'
import Image from 'next/image'
import { FOOD } from '@/content/food'

import { Card } from '@/components/card'
import { NutritionalTable } from '@/components/nutritional-table/nutritional-table'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

type ClientHomePageProps = {
  food: typeof FOOD
}

const ClientHomePage = ({ food }: ClientHomePageProps) => {
  const [search, setSearch] = React.useState('')

  const filteredFilter = React.useMemo(
    () =>
      food.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [search, food],
  )

  return (
    <>
      <Input
        id="good"
        placeholder="Search food"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-3 lg:grid-cols-4">
        {filteredFilter.map((food) => (
          <Dialog>
            <DialogTrigger asChild>
              <Card key={food.name} food={food} className="cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{food.name}</DialogTitle>
              </DialogHeader>

              <div className="overflow-hidden rounded-lg">
                <div className="relative h-32 w-full">
                  <Image
                    src={`https://source.unsplash.com/random/?${food.name},food`}
                    objectFit="cover"
                    alt={food.name}
                    fill
                  />
                </div>
              </div>

              <DialogDescription>
                <NutritionalTable nutrients={food.nutrients} />
              </DialogDescription>
            </DialogContent>
          </Dialog>
        ))}

        {filteredFilter.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-4">
            <p className="text-lg font-semibold">No food found 😅</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ClientHomePage
