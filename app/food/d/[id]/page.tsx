import { notFound } from 'next/navigation'
import { getItem } from '@/services/requests'

import { NutritionalTable } from '@/components/nutritional-table'

interface FoodDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export const generateMetadata = async (props: FoodDetailPageProps) => {
  const { id } = await props.params

  const data = await getItem(id)

  if (!data) {
    notFound()
  }

  return {
    title: `Detail ${data.description}`,
  }
}

const FoodDetailPage = async (props: FoodDetailPageProps) => {
  const { id } = await props.params

  const data = await getItem(id)

  console.log(data)

  return (
    <div className="container max-w-screen-lg py-5">
      <h1 className="text-3xl font-extrabold">{data.description}</h1>

      <NutritionalTable className="mt-5" data={data} />
    </div>
  )
}

export default FoodDetailPage
