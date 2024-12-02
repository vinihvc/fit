import { TacoType } from '@/content/TACO'

import { cn } from '@/lib/cn'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

export interface NutritionTableProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The data to display in the table
   */
  data: TacoType
}

export const NutritionTable = (props: NutritionTableProps) => {
  const { data, className, ...rest } = props

  const facts = [
    { name: 'Calories', value: Number(data.energy_kcal) || 0, unit: 'kcal' },
    {
      name: 'Carbohydrate',
      value: Number(data.carbohydrate_g) || 0,
      unit: 'g',
    },
    { name: 'Protein', value: Number(data.protein_g) || 0, unit: 'g' },
    { name: 'Fat', value: Number(data.saturated_g) || 0, unit: 'g' },
    { name: 'Fiber', value: Number(data.fiber_g) || 0, unit: 'g' },
    { name: 'Vitamin C', value: Number(data.vitaminC_mg) || 0, unit: 'mg' },
    { name: 'Sodium', value: Number(data.sodium_mg) || 0, unit: 'mg' },
  ]

  return (
    <div
      className={cn(
        'rounded-lg bg-background/50 px-4 py-5 backdrop-blur',
        className,
      )}
      {...rest}
    >
      <div className="text-lg font-bold">Nutrition Facts</div>

      <div className="text-sm text-muted-foreground">Portion of 100g</div>

      <Table className="border">
        <TableBody>
          {facts.map((fact) => (
            <TableRow>
              <TableCell className="font-bold">{fact.name}</TableCell>
              <TableCell>{`${fact.value.toFixed(1)} ${fact.unit}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
