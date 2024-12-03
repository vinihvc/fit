import { cn } from '@/lib/utils'

interface KbdProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Kbd = (props: KbdProps) => {
  const { className, ...rest } = props

  return (
    <kbd
      className={cn(
        'pointer-events-none absolute flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium',
        className,
      )}
      {...rest}
    />
  )
}
