import { TacoType } from '@/content/TACO'
import { Croissant, CupSoda, Drumstick, Flame } from 'lucide-react'

import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

export type CardTableProps = {
  data: TacoType
}

export const CardTable = (props: CardTableProps) => {
  const { data } = props

  return (
    <div className="flex gap-1 text-sm sm:gap-3">
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-1">
            <Flame className="h-3 w-3" />
            <span>{data.energy_kcal}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Calories</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-1">
            <CupSoda className="h-3 w-3" />
            <span>{data.saturated_g}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Fat</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-1">
            <Croissant className="h-3 w-3" />

            <span>{data.carbohydrate_g}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Carbs</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-1">
            <Drumstick className="h-3 w-3" />
            <span>{Math.round(data.protein_g)}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Protein</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
