import Image from 'next/image'
import { cn } from '@/utils/cn'

import { CardTable, CardTableProps } from './card.table'

type CardProps = {
  food: {
    name: string
    nutrients: CardTableProps['nutrients']
  }
} & React.HTMLAttributes<HTMLDivElement>

export const Card = (props: CardProps) => {
  const { food, className, ...rest } = props

  return (
    <article
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
            src={`https://source.unsplash.com/random/?${food.name},food`}
            objectFit="cover"
            alt={food.name}
            fill
          />
        </div>
      </div>

      <div className="p-2">
        <h2 className="text-lg font-semibold">{food.name}</h2>

        <hr className="my-3 border-t dark:border-neutral-800" />

        <CardTable nutrients={food.nutrients} />
      </div>
    </article>
  )
}
