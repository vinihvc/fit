import { TacoType } from '@/content/TACO'
import { Croissant, CupSoda, Drumstick, Flame } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip'

export interface CardTableProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Data to display
   */
  data: TacoType
}

export const CardTable = (props: CardTableProps) => {
  const { data, className, ...rest } = props

  const facts = [
    {
      name: 'Calories',
      value: Number(data.energy_kcal) || 0,
      unit: 'kcal',
      icon: Flame,
    },
    {
      name: 'Protein',
      value: Number(data.protein_g) || 0,
      unit: 'g',
      icon: Drumstick,
    },
    {
      name: 'Carbohydrate',
      value: Number(data.carbohydrate_g) || 0,
      unit: 'g',
      icon: Croissant,
    },
    {
      name: 'Fat',
      value: Number(data.saturated_g) || 0,
      unit: 'g',
      icon: CupSoda,
    },
  ]

  return (
    <div className={cn('flex gap-1 text-sm sm:gap-3', className)} {...rest}>
      {facts.map((fact) => (
        <Tooltip key={fact.name}>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-1">
              <fact.icon className="h-3.5 w-3.5" />
              <span>{Math.round(fact.value) || 0}</span>
            </div>
          </TooltipTrigger>

          <TooltipContent>
            <p>{fact.name}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
