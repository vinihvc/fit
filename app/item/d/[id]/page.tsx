import { notFound } from 'next/navigation'
import { getItem } from '@/services/requests'

interface DetailPageProps {
  params: Promise<{
    id: string
  }>
}

export const generateMetadata = async (props: DetailPageProps) => {
  const { id } = await props.params

  const data = await getItem(id)

  if (!data) {
    notFound()
  }

  return {
    title: `Detail ${data.description}`,
  }
}

const DetailPage = async (props: DetailPageProps) => {
  const { id } = await props.params

  const data = await getItem(id)

  if (!data) {
    notFound()
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default DetailPage
