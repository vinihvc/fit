import { formatValue } from '@/utils/formatters'
import { Info } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from './button'
import { Card, CardContent, CardHeader } from './card'
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'

interface BurnCaloriesProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Calories to burn
   */
  calories: number
}

export const BurnCalories = (props: BurnCaloriesProps) => {
  const { calories, className, ...rest } = props

  const formattedCalories = formatValue(calories)

  return (
    <div
      className={cn(
        'sm:rounded-lg sm:bg-background/50 sm:px-4 sm:py-5 sm:backdrop-blur',
        className,
      )}
      {...rest}
    >
      <div className="flex gap-2">
        <div className="text-lg font-bold">{`How to burn ${formattedCalories} calories`}</div>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="size-6" size="icon" variant="ghost">
              <Info className="h-2 w-2" />
            </Button>
          </TooltipTrigger>

          <TooltipContent className="max-w-xs">
            <p>
              Approximately, the number of calories you burn depends on your
              weight, height, age, and gender.
            </p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Card className="flex flex-col px-3 py-2">
          <span className="text-sm text-muted-foreground">Steps</span>
          <span className="font-bold">9071</span>
        </Card>

        <Card className="flex flex-col px-3 py-2">
          <span className="text-sm text-muted-foreground">Walking</span>
          <span className="font-bold">1h 30min</span>
        </Card>

        <Card className="flex flex-col px-3 py-2">
          <span className="text-sm text-muted-foreground">Cycling</span>
          <span className="font-bold">30 min</span>
        </Card>

        <Card className="flex flex-col px-3 py-2">
          <span className="text-sm text-muted-foreground">Swimming</span>
          <span className="font-bold">20 min</span>
        </Card>
      </div>
    </div>
  )
}
