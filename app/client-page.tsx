'use client'

import React from 'react'
import { TacoType } from '@/content/TACO'

import { Card } from '@/components/card'
import { Image } from '@/components/image'
import { NutritionalTable } from '@/components/nutritional-table'
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
  food: TacoType[]
}

const ClientHomePage = ({ food }: ClientHomePageProps) => {
  const [search, setSearch] = React.useState('')

  const filteredFilter = React.useMemo(
    () =>
      food.filter((item) =>
        item.description.toLowerCase().includes(search.toLowerCase()),
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
          <Dialog key={food.description}>
            <DialogTrigger asChild>
              <Card food={food} className="cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{food.description}</DialogTitle>
              </DialogHeader>

              <div className="overflow-hidden rounded-lg">
                <div className="relative h-32 w-full">
                  <Image
                    src="https://picsum.photos/200"
                    alt={food.description}
                    fill
                  />
                </div>
              </div>

              <NutritionalTable data={food} />
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
