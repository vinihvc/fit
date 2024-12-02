import * as React from 'react'
import { tv, VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/cn'

export const inputStyles = tv({
  base: [
    'flex w-full',
    'rounded-md border bg-transparent',
    'px-3 py-2',
    'text-sm',
    'shadow-sm',
    'placeholder:text-muted-foreground',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  variants: {
    size: {
      sm: 'h-8',
      md: 'h-10',
      lg: 'h-12',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputStyles> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { size, className, ...rest } = props

    return (
      <input
        ref={ref}
        className={cn(inputStyles({ size }), className)}
        {...rest}
      />
    )
  },
)

Input.displayName = 'Input'
