import { cn } from '@/lib/utils'

export const Skeleton = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { className, ...rest } = props

  return (
    <div
      className={cn('animate-pulse rounded-md bg-foreground/10', className)}
      {...rest}
    />
  )
}
