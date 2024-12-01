import React from 'react'
import { TacoType } from '@/content/TACO'

import { cn } from '@/lib/cn'
import { Image } from '../image'
import { CardTable, CardTableProps } from './card.table'

type CardProps = {
  data: TacoType
} & React.HTMLAttributes<HTMLDivElement>

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const { data, className, ...rest } = props

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
              src="https://picsum.photos/300"
              className="object-cover"
              alt={data.description}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        <div className="p-2">
          <h2 className="text-center text-lg font-semibold">
            {data.description}
          </h2>

          <hr className="my-1 border-t dark:border-neutral-800 md:my-3" />

          <div className="flex justify-center">
            <CardTable data={data} />
          </div>
        </div>
      </article>
    )
  },
)

Card.displayName = 'Card'
