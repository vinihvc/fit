import React from 'react'
import { cn } from '@/utils/cn'

import { Image } from '../image'
import { CardTable, CardTableProps } from './card.table'

type CardProps = {
  food: {
    name: string
    nutrients: CardTableProps['nutrients']
  }
} & React.HTMLAttributes<HTMLDivElement>

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const { food, className, ...rest } = props

    return (
      <article
        ref={ref}
        tabIndex={0}
        className={cn(
          'rounded shadow dark:border',
          'ring-1 ring-neutral-200',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-100',
          'dark:border-neutral-800 dark:shadow-none dark:ring-neutral-700 dark:focus:ring-offset-neutral-900',
          className,
        )}
        {...rest}
      >
        <div className="overflow-hidden rounded-t">
          <div className="relative h-32 w-full">
            <Image
              src={`https://source.unsplash.com/random/?${food.name},food&q=60&w=400`}
              className="object-cover"
              alt={food.name}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        <div className="p-2">
          <h2 className="text-center text-lg font-semibold">{food.name}</h2>

          <hr className="my-1 border-t dark:border-neutral-800 md:my-3" />

          <div className="flex justify-center">
            <CardTable nutrients={food.nutrients} />
          </div>
        </div>
      </article>
    )
  },
)

Card.displayName = 'Card'
