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
    <div className="flex space-x-2">
      <div>🔥 {nutrients.calories}</div>
      <div>🛢️ {nutrients.fat}</div>
      <div>🍙 {nutrients.carbs}</div>
      <div>🍗 {nutrients.protein}</div>
    </div>
  )
}
