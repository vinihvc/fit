import { notFound } from 'next/navigation'
import { getItem } from '@/services/requests'

import { NutritionTable } from '@/components/ui/nutrition-table'

interface FoodDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export const generateMetadata = async (props: FoodDetailPageProps) => {
  const { id } = await props.params

  const { data } = await getItem(id)

  if (!data) {
    notFound()
  }

  return {
    title: `Detail ${data.description}`,
  }
}

const FoodDetailPage = async (props: FoodDetailPageProps) => {
  const { id } = await props.params

  const { data } = await getItem(id)

  return (
    <div className="container max-w-screen-lg pb-5 pt-32">
      <div className="rounded-lg bg-background/50 px-4 py-5 backdrop-blur">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <h1 className="text-xl font-extrabold">{data.description}</h1>

            <h2 className="text-sm text-muted-foreground">{data.category}</h2>
          </div>

          <NutritionTable data={data} />
        </div>
      </div>
    </div>
  )
}

export default FoodDetailPage
