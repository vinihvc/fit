import { TACO } from '@/content/TACO'

export const revalidate = 3600 * 24 * 7 // 1 week

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)

  const page = Number(searchParams.get('page')) || 1
  const limit = Number(searchParams.get('limit')) || 10
  const start = (page - 1) * limit
  const end = start + limit

  const paginatedData = TACO.slice(start, end)
  const total = TACO.length
  const totalPages = Math.ceil(total / limit)

  return Response.json({
    data: paginatedData,
    pagination: {
      total,
      totalPages,
      currentPage: page,
      limit,
    },
  })
}
