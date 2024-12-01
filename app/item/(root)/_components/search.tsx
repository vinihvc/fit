'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { debounce } from '@/utils/debounce'

import { Input } from '@/components/ui/input'

export const Search = () => {
  const router = useRouter()

  const searchParams = useSearchParams()

  const searchParam = searchParams.get('search') || ''

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    // debounce(() => {
    router.push(`/item?search=${value}`)
    // })
  }

  return (
    <Input
      name="search"
      defaultValue={searchParam}
      placeholder="Search food"
      onChange={handleChange}
    />
  )
}
