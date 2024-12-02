import React from 'react'
import Link from 'next/link'
import { TacoType } from '@/content/TACO'

import { cn } from '@/lib/cn'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../card'
import { CardTable } from './food-card.table'

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
        <CardHeader className="space-y-2 px-2 py-4">
          <CardTitle className="line-clamp-1">{data.description}</CardTitle>

          <CardTable data={data} />
        </CardHeader>
      </Card>
    </Link>
  )
}
