'use client'

import { useToggleGlobalSearch } from '@/components/dialog/global-search'
import { Button } from '@/components/ui/button'

export const CallToActionButton = () => {
  const [, toggle] = useToggleGlobalSearch()

  return (
    <Button variant="secondary" size="lg" onClick={toggle}>
      Get Started Now
    </Button>
  )
}
