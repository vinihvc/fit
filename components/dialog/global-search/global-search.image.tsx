'use client'

import React from 'react'
import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'
import { ShimmerImage } from '@/components/ui/shimmer-image'

interface GlobalSearchImageProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    title: string
  }
}

export const GlobalSearchImage = (props: GlobalSearchImageProps) => {
  const { data, className, ...rest } = props

  const { theme } = useTheme()

  const backgroundColor = theme === 'dark' ? 'fff' : '000'
  const textColor = theme === 'dark' ? '000' : 'fff'
  const title = data.title.split(' ').join('+')

  return (
    <div
      className={cn(
        'relative aspect-[16/9] h-6 w-auto overflow-hidden rounded-md shadow',
        className,
      )}
      {...rest}
    >
      <ShimmerImage
        src={`https://dummyimage.com/600x400/${backgroundColor}/${textColor}&text=${title}`}
        alt={data.title}
        className="size-full object-cover"
        fill
      />
    </div>
  )
}
