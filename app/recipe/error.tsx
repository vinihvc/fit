'use client'

import React from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

interface FoodErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

const FoodError = ({ error, reset }: FoodErrorProps) => {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-5">
      <h2>Something went wrong!</h2>

      <div className="flex items-center gap-1.5">
        <Button variant="outline" onClick={() => reset()}>
          Try again
        </Button>

        <span className="px-2 text-sm text-muted-foreground">or</span>

        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  )
}

export default FoodError
