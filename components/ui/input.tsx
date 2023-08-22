import * as React from 'react'
import { useMergeRefs } from '@/hooks/use-merge-refs'
import { cn } from '@/utils/cn'
import { X } from 'lucide-react'

import { Button } from './button'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { className, ...rest } = props

    const innerRef = React.useRef<HTMLInputElement>(null)

    const handleClean = () => {
      if (innerRef.current) {
        innerRef.current.value = ''

        innerRef.current.focus()

        rest.onChange?.({
          target: innerRef.current,
          currentTarget: innerRef.current,
        } as any)
      }
    }

    return (
      <div className="relative">
        <input
          ref={useMergeRefs(innerRef, ref)}
          className={cn(
            'flex h-10 w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-50 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900',
            className,
          )}
          {...rest}
        />

        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {rest.value && (
            <Button
              variant="ghost"
              className="h-[26px] px-1"
              onClick={handleClean}
            >
              <X size={16} />
            </Button>
          )}
        </div>
      </div>
    )
  },
)

Input.displayName = 'Input'
