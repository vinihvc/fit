'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { recipes } from '@/content/recipes'
import { getItems } from '@/services/requests'
import { useQuery } from '@tanstack/react-query'
import { Clock } from 'lucide-react'

import { Badge } from '../ui/badge'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command'
import { DialogDescription, DialogTitle } from '../ui/dialog'
import { ShimmerImage } from '../ui/shimmer-image'

interface SearchDialogProps extends React.ComponentProps<typeof CommandDialog> {
  /**
   * Callback function to handle the selection of an item
   */
  onSelect?: (value: string) => void
}

export const SearchDialog = (props: SearchDialogProps) => {
  const { onSelect } = props

  const searchParams = useSearchParams()

  const router = useRouter()

  const search = searchParams.get('search') || ''

  const { data } = useQuery({
    queryKey: ['food', search],
    queryFn: () => getItems({ search }),
  })

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <CommandDialog {...props}>
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
              value={item.description}
              onSelect={() => {
                router.push(`/food/${item.id}`)
                onSelect?.(item.description)
              }}
              asChild
            >
              <div className="flex justify-between gap-1">
                <div className="flex gap-3">
                  <div className="relative aspect-[16/9] h-6 w-auto overflow-hidden rounded-md">
                    <ShimmerImage
                      src="https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=800&q=80"
                      alt={item.description}
                      className="size-full object-cover"
                      fill
                    />
                  </div>

                  <span>{item.description}</span>
                </div>

                <div>
                  <Badge>
                    <Clock className="mr-1 !h-3 !w-3" />
                    60min
                  </Badge>
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
                onSelect?.(item.title)
              }}
              asChild
            >
              <div className="flex justify-between gap-1">
                <div className="flex gap-3">
                  <div className="relative aspect-[16/9] h-6 w-auto overflow-hidden rounded-md">
                    <ShimmerImage
                      src={item.image}
                      alt={item.title}
                      className="size-full object-cover"
                      fill
                    />
                  </div>

                  <span>{item.title}</span>
                </div>

                <div>
                  <Badge>
                    <Clock className="mr-1 !h-3 !w-3" />
                    60min
                  </Badge>
                </div>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
