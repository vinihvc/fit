import Link from 'next/link'
import { Salad } from 'lucide-react'

import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '../../ui/button'
import { HeaderSearch } from './header.search'

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="inline-flex items-center gap-2">
          <Salad className="size-5 text-green-500" />
          <span className="text-xl font-bold">Fit</span>
        </Link>

        <nav className="flex items-center justify-between gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/food ">Foods</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-4">
          <HeaderSearch />

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
