import { cn } from '@/lib/utils'
import { HeroButton } from './hero.button'

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HeroSection = (props: HeroSectionProps) => {
  const { className, ...rest } = props

  return (
    <section
      className={cn(
        'relative flex min-h-[calc(100vh-14rem)] items-center justify-center',
        className,
      )}
      {...rest}
    >
      <div className="container">
        <div className="text-center">
          <h1 className="mb-8 text-5xl font-extrabold leading-tight sm:text-6xl">
            Transform Your Life Through
            <span className="mt-2 block text-green-600">Healthy Nutrition</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-xl font-normal leading-relaxed text-muted-foreground">
            Discover personalized meal plans, expert advice, and a supportive
            community to help you achieve your wellness goals.
          </p>

          <div>
            <HeroButton />
          </div>
        </div>
      </div>
    </section>
  )
}
