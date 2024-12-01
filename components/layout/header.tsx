import Link from 'next/link'
import { Cherry } from 'lucide-react'

import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '../ui/button'

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-neutral-200 bg-white dark:border-b-neutral-700 dark:bg-neutral-900">
      <div className="container flex h-16 items-center gap-4 sm:justify-between sm:gap-0">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Cherry className="text-red-500" strokeWidth={1} />
            <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              Fit
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4">
          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/item">Item</Link>
            </Button>

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
