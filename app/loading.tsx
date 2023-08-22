import { Skeleton } from '@/components/ui/skeleton'

export const LoadingHome = () => {
  return (
    <div className="container flex max-w-[980px] flex-1 flex-col">
      <div className="mt-10">
        <Skeleton className="h-[40px] w-full" />

        <div className="grid grid-cols-4 gap-4 py-4">
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} className="h-[227px] w-full" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoadingHome
