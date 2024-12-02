import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HeroSection = (props: HeroSectionProps) => {
  const { className, ...rest } = props

  return (
    <section
      className={cn(
        'relative flex min-h-[calc(100vh-14rem)] items-center justify-center bg-gradient-to-b from-green-500/40 to-background dark:from-green-500/10',
        className,
      )}
      {...rest}
    >
      <div className="container">
        <div className="text-center">
          <h1 className="mb-8 text-6xl font-extrabold leading-tight">
            Transform Your Life Through
            <span className="mt-2 block text-green-600">Healthy Nutrition</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-xl font-normal leading-relaxed text-muted-foreground">
            Discover personalized meal plans, expert advice, and a supportive
            community to help you achieve your wellness goals.
          </p>

          <div>
            <Button size="lg" asChild>
              <Link href="/food">Start browsing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
