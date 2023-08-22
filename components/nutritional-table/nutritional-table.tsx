import { cn } from '@/utils/cn'

import { Table, TableHead, TableRow } from '@/components/ui/table'

export type NutritionalTableProps = {
  nutrients: {
    carbs: number
    fat: number
    calories: number
    protein: number
  }
} & React.HTMLAttributes<HTMLDivElement>

export const NutritionalTable = (props: NutritionalTableProps) => {
  const { nutrients, className, ...rest } = props

  return (
    <Table className={cn(className)} {...rest}>
      <TableRow>
        <TableHead className="font-semibold">Calories</TableHead>
        <TableHead>{nutrients.calories}</TableHead>
      </TableRow>
      <TableRow>
        <TableHead className="font-semibold">Fat</TableHead>
        <TableHead>{nutrients.fat}</TableHead>
      </TableRow>
      <TableRow>
        <TableHead className="font-semibold">Carbs</TableHead>
        <TableHead>{nutrients.carbs}</TableHead>
      </TableRow>
      <TableRow>
        <TableHead className="font-semibold">Protein</TableHead>
        <TableHead>{nutrients.protein}</TableHead>
      </TableRow>
    </Table>
  )
}
