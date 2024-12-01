import { TacoType } from '@/content/TACO'
import { cn } from '@/utils/cn'

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
          <TableHead>{data.energy_kcal}</TableHead>
        </TableRow>
        <TableRow>
          <TableHead className="font-semibold">Fat</TableHead>
          <TableHead>{data.saturated_g}</TableHead>
        </TableRow>
        <TableRow>
          <TableHead className="font-semibold">Carbs</TableHead>
          <TableHead>{data.carbohydrate_g}</TableHead>
        </TableRow>
        <TableRow>
          <TableHead className="font-semibold">Protein</TableHead>
          <TableHead>{data.protein_g}</TableHead>
        </TableRow>
      </TableBody>
    </Table>
  )
}
