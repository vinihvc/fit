import Link from 'next/link'
import { notFound } from 'next/navigation'
import { TacoType } from '@/content/TACO'
import { getRecipe } from '@/services/requests'

import { BurnCalories } from '@/components/ui/burn-calories'
import { NutritionTable } from '@/components/ui/nutrition-table'

interface RecipePageProps {
  params: Promise<{
    id: string
  }>
}

export const generateMetadata = async (props: RecipePageProps) => {
  const { id } = await props.params

  const data = await getRecipe(id)

  if (!data) {
    notFound()
  }

  return {
    title: `${data.title}`,
  }
}

const RecipePage = async (props: RecipePageProps) => {
  const params = await props.params

  const data = await getRecipe(params.id)

  if (!data) {
    notFound()
  }

  return (
    <div className="container max-w-screen-lg pb-5 pt-24 sm:pt-32">
      <div className="rounded-lg bg-background/50 px-2 py-3.5 backdrop-blur sm:px-4 sm:py-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <h1 className="text-xl font-extrabold">{data.title}</h1>

            <h2 className="text-sm text-muted-foreground">{data.category}</h2>

            <h2 className="mb-3 mt-6 text-lg font-semibold">Instructions</h2>

            <ol className="space-y-4 text-foreground [counter-reset:item]">
              <li className="before:font-bold before:content-[counter(item)_'._'] before:[counter-increment:item]">
                Preheat your cooking equipment to the appropriate temperature
              </li>

              <li className="before:font-bold before:content-[counter(item)_'._'] before:[counter-increment:item]">
                Gather and measure all ingredients before starting
              </li>
              <li className="before:font-bold before:content-[counter(item)_'._'] before:[counter-increment:item]">
                Follow proper food safety guidelines while handling ingredients
              </li>
              <li className="before:font-bold before:content-[counter(item)_'._'] before:[counter-increment:item]">
                Cook thoroughly to recommended internal temperatures
              </li>
              <li className="before:font-bold before:content-[counter(item)_'._'] before:[counter-increment:item]">
                Let rest for a few minutes before serving if applicable
              </li>
            </ol>
          </div>

          <div className="space-y-5">
            <NutritionTable
              data={
                {
                  energy_kcal: 212,
                  carbohydrate_g: 12,
                  protein_g: 10,
                  saturated_g: 1,
                  fiber_g: 2,
                  vitaminC_mg: '10',
                  sodium_mg: 100,
                } as TacoType
              }
            />

            <BurnCalories calories={212} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipePage
