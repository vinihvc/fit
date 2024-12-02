import { Skeleton } from '@/components/ui/skeleton'

export const FoodLoading = () => {
  return (
    <div className="container max-w-screen-lg pb-5 pt-32">
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {[...Array(12)].map((_, i) => (
          <Skeleton key={i} className="h-[227px] w-full" />
        ))}
      </div>
    </div>
  )
}

export default FoodLoading
