import React from 'react'
import { getItems } from '@/services/requests'

import { FoodCard } from '@/components/ui/food-card'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface FoodPageProps {
  searchParams: Promise<{
    search?: string
    page?: string
    limit?: string
  }>
}

const FoodPage = async (props: FoodPageProps) => {
  const { searchParams } = props

  const promisedParams = await searchParams

  const {
    search: searchParam,
    page: pageParam,
    limit: limitParam,
  } = promisedParams

  const { data, pagination } = await getItems({
    search: searchParam,
    page: pageParam,
    limit: limitParam,
  })

  const { currentPage, totalPages } = pagination

  const pages = []
  const maxVisiblePages = 5
  const halfMaxPages = Math.floor(maxVisiblePages / 2)

  let startPage = Math.max(currentPage - halfMaxPages, 1)
  let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages)

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(endPage - maxVisiblePages + 1, 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  const showStartEllipsis = startPage > 1
  const showEndEllipsis = endPage < totalPages

  const createPageUrl = (page: number) => {
    const searchParams = new URLSearchParams(searchParam)
    searchParams.set('page', page.toString())
    return `?${searchParams.toString()}`
  }

  const prevPageUrl = currentPage > 1 ? createPageUrl(currentPage - 1) : null
  const nextPageUrl =
    currentPage < totalPages ? createPageUrl(currentPage + 1) : null

  return (
    <div className="container max-w-screen-lg pb-5 pt-32">
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {data.map((food) => (
          <FoodCard key={food.id} data={food} />
        ))}

        {data.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center">
            <p className="text-lg font-semibold">No food found 😅</p>
          </div>
        )}
      </div>

      <Pagination className="mt-10">
        <PaginationContent>
          {prevPageUrl && (
            <PaginationItem>
              <PaginationPrevious href={prevPageUrl} />
            </PaginationItem>
          )}

          {showStartEllipsis && (
            <PaginationItem>
              <PaginationLink href={createPageUrl(1)}>1</PaginationLink>
            </PaginationItem>
          )}

          {showStartEllipsis && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {pages.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href={createPageUrl(page)}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          {showEndEllipsis && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {showEndEllipsis && (
            <PaginationItem>
              <PaginationLink href={createPageUrl(totalPages)}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          )}

          {nextPageUrl && (
            <PaginationItem>
              <PaginationNext href={nextPageUrl} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default FoodPage
