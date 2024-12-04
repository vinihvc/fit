import Link from 'next/link'

import { Button } from '@/components/ui/button'

const NotFoundPage = () => {
  return (
    <div className="container flex flex-1 flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold">Not Found</h1>

        <p className="text-sm text-muted-foreground">
          The page you are looking for does not exist.
        </p>
      </div>

      <Button variant="outline" asChild>
        <Link href="/">Go back to home</Link>
      </Button>
    </div>
  )
}

export default NotFoundPage
