import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

export const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center',
    'gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  ],
  variants: {
    variant: {
      solid: [
        'bg-primary',
        'text-primary-foreground',
        'shadow',
        'hover:bg-primary/90',
      ],
      destructive: [
        'bg-destructive',
        'text-destructive-foreground',
        'shadow-sm',
        'hover:bg-destructive/90',
      ],
      outline: [
        'border border-primary',
        'text-primary',
        'bg-transparent',
        'shadow-sm',
        'hover:bg-primary/10',
      ],
      secondary: [
        'bg-secondary',
        'text-secondary-foreground',
        'shadow-sm',
        'hover:bg-secondary/80',
      ],
      ghost: ['hover:bg-accent hover:text-accent-foreground'],
      link: ['text-primary underline-offset-4 hover:underline'],
    },
    size: {
      sm: 'h-8 rounded-md px-3 text-xs',
      md: 'h-9 px-4 py-2',
      lg: 'h-10 rounded-md px-8',
      icon: 'h-9 w-9',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      type = 'button',
      asChild = false,
      variant,
      size,
      className,
      ...rest
    } = props

    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...rest}
      />
    )
  },
)

Button.displayName = 'Button'
