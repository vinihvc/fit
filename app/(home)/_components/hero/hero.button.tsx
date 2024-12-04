'use client'

import { useToggleGlobalSearch } from '@/components/dialog/global-search'
import { Button } from '@/components/ui/button'

export const HeroButton = () => {
  const [, toggle] = useToggleGlobalSearch()

  return (
    <Button size="lg" onClick={toggle}>
      Start browsing
    </Button>
  )
}
