'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { recipes } from '@/content/recipes'
import { getItems } from '@/services/requests'
import { debounce } from '@/utils/debounce'
import { useQuery } from '@tanstack/react-query'
import { Clock } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
} from '@/components/ui/command'
import { DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { GlobalSearchImage } from './global-search.image'
import { useToggleGlobalSearch } from './use-global-search'

const GlobalSearchDialog = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const search = searchParams.get('search') || ''

  const [isOpen, toggle] = useToggleGlobalSearch()

  const { data, isLoading } = useQuery({
    queryKey: ['food', search],
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

  const handleSearch = debounce((value: string) => {
    router.push(`?search=${value}`)
  }, 200)

  return (
    <CommandDialog open={isOpen} onOpenChange={toggle}>
      <DialogTitle className="sr-only">Search</DialogTitle>
      <DialogDescription className="sr-only">
        Quickly search for recipes or ingredients by name
      </DialogDescription>

      <CommandInput
        placeholder="Type a command or search..."
        onValueChange={(value) => handleSearch(value)}
      />

      <CommandList>
        {!isLoading && data?.data.length === 0 && (
          <CommandEmpty>No results found.</CommandEmpty>
        )}

        {isLoading && <CommandLoading>Loading...</CommandLoading>}

        <CommandGroup heading="Foods">
          {data?.data.map((item) => (
            <CommandItem
              key={item.id}
              value={item.description}
              onSelect={() => {
                router.push(`/food/${item.id}`)
                toggle()
              }}
              asChild
            >
              <div className="flex justify-between gap-1">
                <div className="flex gap-3">
                  <GlobalSearchImage data={{ title: item.description }} />

                  <span>{item.description}</span>
                </div>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="Recipes">
          {recipes.map((item) => (
            <CommandItem
              key={item.id}
              onSelect={() => {
                router.push(`/recipe/${item.id}`)
                toggle()
              }}
              asChild
            >
              <div className="flex justify-between gap-1">
                <div className="flex gap-3">
                  <GlobalSearchImage data={{ title: item.title }} />

                  <span>{item.title}</span>
                </div>

                <Badge>
                  <Clock className="mr-1.5 !h-3 !w-3" />
                  60
                  <span className="text-[10px]">min</span>
                </Badge>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}

export default GlobalSearchDialog
