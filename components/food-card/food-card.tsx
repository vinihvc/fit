import React from 'react'
import Link from 'next/link'
import { TacoType } from '@/content/TACO'

import { cn } from '@/lib/cn'
import { ShimmerImage } from '../shimmer-image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { CardTable, CardTableProps } from './food-card.table'

interface FoodCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Data to display
   */
  data: TacoType
}

export const FoodCard = (props: FoodCardProps) => {
  const { data, className, ...rest } = props

  return (
    <Link href={`/food/d/${data.id}`} key={data.description}>
      <Card className={cn(className)} {...rest}>
        <CardHeader className="relative h-32 w-full overflow-hidden rounded-t">
          <ShimmerImage
            src="https://picsum.photos/300"
            className="object-cover"
            alt={data.description}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </CardHeader>

        <CardContent className="mt-3">
          <CardTitle>{data.description}</CardTitle>
        </CardContent>

        <CardFooter>
          <CardTable data={data} />
        </CardFooter>
      </Card>
    </Link>
  )
}
