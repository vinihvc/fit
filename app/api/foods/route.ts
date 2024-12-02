import type { NextRequest } from 'next/server'
import { TACO } from '@/content/TACO'
import { z } from 'zod'

const schema = z.object({
  search: z.string().trim().min(0).optional().default(''),
  page: z.coerce.number().min(0).optional().default(0),
  limit: z.coerce.number().min(1).max(100).optional().default(16),
})

const parseParams = (searchParams: URLSearchParams) => {
  return schema.parse({
    search: searchParams.get('search') || '',
    page: Number(searchParams.get('page')) || 0,
    limit: Number(searchParams.get('limit')) || 16,
  })
}

export const GET = async (request: NextRequest) => {
  try {
    const searchParams = request.nextUrl.searchParams

    console.log(searchParams)

    const { search, page, limit } = parseParams(searchParams)

    let filteredData = TACO

    if (search) {
      const searchLower = search.toLowerCase()
      filteredData = TACO.filter((food) =>
        food.description.toLowerCase().includes(searchLower),
      )
    }

    const start = page * limit
    const end = start + limit
    const total = filteredData.length
    const totalPages = Math.ceil(total / limit)

    // Validate pagination bounds
    if (page >= totalPages && total > 0) {
      return Response.json(
        { error: 'Page number exceeds available pages' },
        { status: 400 },
      )
    }

    return Response.json({
      data: filteredData.slice(start, end),
      pagination: {
        total,
        totalPages,
        currentPage: page,
        limit,
        hasNextPage: page < totalPages - 1,
        hasPreviousPage: page > 0,
      },
      filters: {
        search,
      },
    })
  } catch (error) {
    console.error('Error processing food request:', error)
    return Response.json(
      { error: 'Failed to process request' },
      { status: 500 },
    )
  }
}
