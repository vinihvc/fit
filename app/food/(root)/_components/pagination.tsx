import { ApiPagination } from '@/types/common'
import { cn } from '@/lib/utils'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface FoodPaginationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ApiPagination {}

export const FoodPagination = (props: FoodPaginationProps) => {
  const { pagination, className, ...rest } = props

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
    // @ts-ignore
    pages.push(i)
  }

  const showStartEllipsis = startPage > 1
  const showEndEllipsis = endPage < totalPages

  const createPageUrl = (page: number) => {
    const searchParams = new URLSearchParams()
    searchParams.set('page', page.toString())
    return `?${searchParams.toString()}`
  }

  const prevPageUrl = currentPage > 1 ? createPageUrl(currentPage - 1) : null
  const nextPageUrl =
    currentPage < totalPages ? createPageUrl(currentPage + 1) : null

  return (
    <Pagination className={cn(className)} {...rest}>
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
  )
}
