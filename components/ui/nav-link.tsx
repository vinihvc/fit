'use client'

import React from 'react'
import { Route } from 'next'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

interface NavLinkProps<T extends string>
  extends Omit<React.ComponentProps<'a'>, 'href'> {
  /**
   * The URL path to be linked to
   */
  href: Route<T>
  /**
   * The URL path must match exactly to be considered active
   * @default false
   */
  exact?: boolean
}

export const NavLink = <T extends string>(props: NavLinkProps<T>) => {
  const { href, exact = false, className, ...rest } = props

  const pathname = usePathname()

  const isActive = exact ? pathname === href : pathname.startsWith(String(href))

  return (
    <Link
      href={href}
      className={cn({ active: isActive }, className)}
      aria-current={isActive ? 'page' : undefined}
      {...rest}
    />
  )
}
