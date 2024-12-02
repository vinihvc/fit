'use client'

import React from 'react'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

interface NavLinkProps
  extends Omit<React.ComponentProps<'a'>, 'href'>,
    LinkProps {
  /**
   * The URL path must match exactly to be considered active
   * @default false
   */
  exact?: boolean
}

export const NavLink = (props: NavLinkProps) => {
  const { className, exact = false, ...rest } = props

  const pathname = usePathname()

  const isActive = exact
    ? pathname === rest.href
    : pathname.startsWith(String(rest.href))

  return (
    <Link
      className={cn({ active: isActive }, className)}
      aria-current={isActive ? 'page' : undefined}
      {...rest}
    />
  )
}
