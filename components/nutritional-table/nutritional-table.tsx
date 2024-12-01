import { TacoType } from '@/content/TACO'

import { cn } from '@/lib/cn'
import { Table, TableBody, TableHead, TableRow } from '@/components/ui/table'

export type NutritionalTableProps = {
  data: TacoType
} & React.HTMLAttributes<HTMLDivElement>

export const NutritionalTable = (props: NutritionalTableProps) => {
  const { data, className, ...rest } = props

  return (
    <Table className={cn(className)} {...rest}>
      <TableBody>
        <TableRow>
          <TableHead className="font-semibold">Calories</TableHead>
          <TableHead>{data.energy_kcal.toFixed(1)}</TableHead>
        </TableRow>
        <TableRow>
          <TableHead className="font-semibold">Fat</TableHead>
          <TableHead>{data.saturated_g.toFixed(1)}</TableHead>
        </TableRow>
        <TableRow>
          <TableHead className="font-semibold">Carbs</TableHead>
          <TableHead>{data.carbohydrate_g.toFixed(1)}</TableHead>
        </TableRow>
        <TableRow>
          <TableHead className="font-semibold">Protein</TableHead>
          <TableHead>{data.protein_g.toFixed(1)}</TableHead>
        </TableRow>
      </TableBody>
    </Table>
  )
}
