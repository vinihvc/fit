'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useToggle } from '@/hooks/use-toggle'
import { getItems } from '@/services/requests'
import { useQuery } from '@tanstack/react-query'

import { cn } from '@/lib/cn'
import { Button } from '@/components/ui/button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { Kbd } from '@/components/ui/kdb'

interface HeaderSearchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const HeaderSearch = (props: HeaderSearchProps) => {
  const { className, ...rest } = props

  const searchParams = useSearchParams()

  const router = useRouter()

  const search = searchParams.get('search') || ''

  const [isOpen, toggle] = useToggle(false)

  const { data } = useQuery({
    queryKey: ['recipes', search],
    queryFn: () => getItems({ search }),
  })

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        toggle()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [toggle])

  return (
    <>
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

      <CommandDialog open={isOpen} onOpenChange={toggle}>
        <DialogTitle className="sr-only">Search</DialogTitle>
        <DialogDescription className="sr-only">
          Quickly search for recipes or ingredients by name
        </DialogDescription>

        <CommandInput
          placeholder="Type a command or search..."
          onValueChange={(value) => {
            router.push(`?search=${value}`)
          }}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Foods">
            {data?.data.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => {
                  router.push(`/food/${item.id}`)
                  toggle()
                }}
              >
                {item.description}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default HeaderSearch
