import React from 'react'
import Link from 'next/link'
import { Salad } from 'lucide-react'
import { RemoveScroll } from 'react-remove-scroll'

import { cn } from '@/lib/utils'
import { NavLink } from '@/components/ui/nav-link'
import { Button } from '../../ui/button'
import { HEADER_DATA } from './header.data'
import { HeaderSearch } from './header.search'
import { HeaderTheme } from './header.theme'

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Header = (props: HeaderProps) => {
  const { className, ...rest } = props

  return (
    <header
      className={cn(
        'container fixed inset-x-0 z-40 max-w-screen-lg bg-background sm:top-4 sm:rounded-lg sm:shadow-sm',
        RemoveScroll.classNames.zeroRight,
        className,
      )}
      {...rest}
    >
      <div className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="inline-flex items-center gap-2">
          <Salad className="size-5 text-green-500" />
          <span className="text-xl font-bold">Fit</span>
        </Link>

        <nav className="flex items-center justify-between gap-4">
          {HEADER_DATA.map((item) => (
            <Button variant="ghost" size="sm" asChild>
              <NavLink href={item.link} className="[&.active]:bg-primary/10">
                {item.title}
              </NavLink>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <HeaderSearch />

          <HeaderTheme />
        </div>
      </div>
    </header>
  )
}
