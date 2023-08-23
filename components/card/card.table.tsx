import { Croissant, CupSoda, Drumstick, Flame } from 'lucide-react'

import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

export type CardTableProps = {
  nutrients: {
    carbs: number
    fat: number
    calories: number
    protein: number
  }
}

export const CardTable = ({ nutrients }: CardTableProps) => {
  return (
    <div className="flex space-x-1 text-sm sm:space-x-3">
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center space-x-1">
            <Flame className="h-3 w-3" />
            <span>{nutrients.calories}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Calories</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center space-x-1">
            <CupSoda className="h-3 w-3" />
            <span>{nutrients.fat}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Fat</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center space-x-1">
            <Croissant className="h-3 w-3" />

            <span>{nutrients.carbs}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Carbs</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center space-x-1">
            <Drumstick className="h-3 w-3" />
            <span>{nutrients.protein}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Protein</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
