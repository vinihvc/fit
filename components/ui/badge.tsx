import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

export const badgeVariants = tv({
  base: [
    'inline-flex items-center',
    'px-2.5 py-0.5',
    'text-xs font-semibold',
    'rounded-md border',
    'transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  ],
  variants: {
    variant: {
      solid: [
        'bg-background',
        'border-transparent',
        'text-foreground',
        'shadow',
        'hover:bg-primary/80',
      ],
      secondary: [
        'bg-secondary',
        'border-transparent',
        'text-secondary-foreground',
        'hover:bg-secondary/80',
      ],
      destructive: [
        'bg-destructive',
        'border-transparent',
        'text-destructive-foreground',
        'shadow',
        'hover:bg-destructive/80',
      ],
      outline: ['text-foreground'],
    },
  },
  defaultVariants: {
    variant: 'solid',
  },
})

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = (props: BadgeProps) => {
  const { variant, className, ...rest } = props

  return <div className={cn(badgeVariants({ variant }), className)} {...rest} />
}
