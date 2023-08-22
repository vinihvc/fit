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
      className={cn(
        'rounded shadow dark:border dark:border-neutral-700 dark:shadow-none',
        className,
      )}
      {...rest}
    >
      <div className="overflow-hidden rounded-t">
        <img
          src="https://picsum.photos/200/132"
          alt=""
          className="h-32 w-full"
        />
      </div>

      <div className="p-2">
        <h2 className="text-lg font-semibold">{food.name}</h2>

        <hr className="my-3 border-t border-neutral-700" />

        <CardTable nutrients={food.nutrients} />
      </div>
    </article>
  )
}
