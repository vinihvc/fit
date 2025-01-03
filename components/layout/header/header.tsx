import React from 'react'
import Link from 'next/link'
import { Salad } from 'lucide-react'
import { RemoveScroll } from 'react-remove-scroll'

import { cn } from '@/lib/utils'
import { HeaderTheme } from './header.theme'

const HeaderSearch = React.lazy(() => import('./header.search'))

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Header = (props: HeaderProps) => {
  const { className, ...rest } = props

  return (
    <header
      className={cn(
        'fixed inset-x-0 z-40 mx-auto max-w-screen-lg bg-background px-4 sm:top-4 sm:rounded-3xl sm:shadow-ln-xs',
        RemoveScroll.classNames.zeroRight,
        className,
      )}
      {...rest}
    >
      <div className="flex h-16 items-center justify-between gap-5">
        <div className="flex gap-4">
          <div className="flex items-center justify-between gap-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <Salad className="size-5 text-green-500" />
              <span className="text-xl font-bold">Fit</span>
            </Link>
          </div>

          {/* <nav>
            {HEADER_DATA.map((item) => (
              <Button key={item.link} variant="link" size="md" asChild>
                <NavLink href={item.link} className="[&.active]:underline">
                  {item.title}
                </NavLink>
              </Button>
            ))}
          </nav> */}
        </div>

        <div className="flex items-center gap-2">
          <React.Suspense>
            <HeaderSearch />
          </React.Suspense>

          <HeaderTheme />
        </div>
      </div>
    </header>
  )
}
