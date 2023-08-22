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
    <div className="flex space-x-3 text-sm">
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center space-x-1">
            <Flame size={14} />
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
            <CupSoda size={14} />
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
            <Croissant size={14} />

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
            <Drumstick size={14} />
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
