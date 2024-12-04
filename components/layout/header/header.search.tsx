'use client'

import React from 'react'

import { cn } from '@/lib/cn'
import { useToggleGlobalSearch } from '@/components/dialog/global-search'
import { Button } from '@/components/ui/button'
import { Kbd } from '@/components/ui/kdb'

interface HeaderSearchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const HeaderSearch = (props: HeaderSearchProps) => {
  const { className, ...rest } = props

  const [, toggle] = useToggleGlobalSearch()

  return (
    <Button
      size="sm"
      className={cn(
        'relative',
        'flex justify-start',
        'w-40',
        'px-4 py-2',
        'bg-muted/50',
        'text-sm font-normal text-muted-foreground',
        'border shadow-none transition-colors focus-visible:ring-1',
        'hover:bg-accent hover:text-accent-foreground',
        className,
      )}
      onClick={toggle}
      {...rest}
    >
      Search
      <Kbd className="absolute right-2">⌘ K</Kbd>
    </Button>
  )
}

export default HeaderSearch
