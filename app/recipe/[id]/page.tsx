import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getRecipe } from '@/services/requests'

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
    <div className="container max-w-screen-lg pb-5 pt-32">
      <div className="rounded-lg bg-background/50 px-4 py-5 backdrop-blur">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <h1 className="text-xl font-extrabold">{data.title}</h1>

            <Link
              href={`/categories`}
              className="text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:text-foreground"
            >
              {data.category}
            </Link>
          </div>

          <div className="space-y-5"></div>
        </div>
      </div>
    </div>
  )
}

export default RecipePage
