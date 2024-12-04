import { Skeleton } from '@/components/ui/skeleton'

export const FoodLoading = () => {
  return (
    <div className="container max-w-screen-lg pb-5 pt-32">
      <div className="rounded-lg bg-background/50 px-4 py-5 backdrop-blur">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Skeleton className="mb-2 h-7 w-48" />
            <Skeleton className="h-5 w-24" />
          </div>

          <div className="space-y-5">
            <Skeleton className="h-[200px] w-full" />
            <Skeleton className="h-[100px] w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodLoading
