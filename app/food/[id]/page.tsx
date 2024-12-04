import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getItem, getItems } from '@/services/requests'

import { GlobalSearchImage } from '@/components/dialog/global-search/global-search.image'
import { BurnCalories } from '@/components/ui/burn-calories'
import { NutritionTable } from '@/components/ui/nutrition-table'

interface FoodDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export const dynamic = 'force-static'

export const generateMetadata = async (props: FoodDetailPageProps) => {
  const { id } = await props.params

  const { data } = await getItem(id)

  if (!data) {
    notFound()
  }

  return {
    title: `${data.description}`,
  }
}

const FoodDetailPage = async (props: FoodDetailPageProps) => {
  const { id } = await props.params

  const { data } = await getItem(id)

  return (
    <div className="container max-w-screen-lg pb-5 pt-24 sm:pt-32">
      <div className="rounded-lg bg-background/50 px-2 py-3.5 backdrop-blur sm:px-4 sm:py-5">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h1 className="text-xl font-extrabold">{data.description}</h1>

            <h2 className="text-sm text-muted-foreground">{data.category}</h2>

            <div className="mt-4 flex w-full gap-2">
              <GlobalSearchImage
                className="h-auto w-full"
                data={{ title: data.description }}
              />

              <GlobalSearchImage
                className="h-auto w-full"
                data={{ title: data.description }}
              />

              <GlobalSearchImage
                className="h-auto w-full"
                data={{ title: data.description }}
              />
            </div>
          </div>

          <div className="space-y-5">
            <NutritionTable data={data} />

            <BurnCalories calories={data.energy_kcal} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodDetailPage
