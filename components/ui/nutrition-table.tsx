import { TacoType } from '@/content/TACO'
import { factsMapper } from '@/utils/mappers'

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

  const facts = factsMapper(data)

  return (
    <div className={cn(className)} {...rest}>
      <div className="text-lg font-bold">Nutrition Facts</div>

      <div className="text-sm text-muted-foreground">Portion of 100g</div>

      <Table className="mt-2 rounded border">
        <TableBody>
          {facts.map((fact) => (
            <TableRow key={fact.name}>
              <TableCell className="font-bold">{fact.name}</TableCell>
              <TableCell>{`${fact.value} ${fact.unit}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
