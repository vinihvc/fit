'use client'

import React from 'react'
import { FOOD } from '@/content/food'
import { DialogClose } from '@radix-ui/react-dialog'

import { Card } from '@/components/card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

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
      <div className="space-y-2">
        <Label htmlFor="good" className="text-2xl font-semibold">
          Food
        </Label>

        <Input
          id="good"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-4 gap-4 py-4">
        {filteredFilter.map((food) => (
          <Dialog>
            <DialogTrigger asChild>
              <Card key={food.name} food={food} className="cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{food.name}</DialogTitle>
              </DialogHeader>

              <DialogDescription>
                <div className="flex space-x-2">
                  <div>🔥 {food.nutrients.calories}</div>
                  <div>🛢️ {food.nutrients.fat}</div>
                  <div>🍙 {food.nutrients.carbs}</div>
                  <div>🍗 {food.nutrients.protein}</div>
                </div>
              </DialogDescription>

              <DialogFooter>
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </>
  )
}

export default ClientHomePage
