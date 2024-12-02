'use client'

import { useRouter, useSearchParams } from 'next/navigation'

import { cn } from '@/lib/cn'
import { Input } from '@/components/ui/input'

interface HeaderSearchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {}

const HeaderSearch = (props: HeaderSearchProps) => {
  const { className, ...rest } = props

  const router = useRouter()

  const searchParams = useSearchParams()

  const searchParam = searchParams.get('search') || ''

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    router.push(`/food?search=${value}`)
  }

  return (
    <Input
      defaultValue={searchParam}
      className={cn('bg-card', className)}
      placeholder="Search food"
      onChange={handleChange}
      {...rest}
    />
  )
}

export default HeaderSearch
