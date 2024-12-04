import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface CallToActionSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const CallToActionSection = (props: CallToActionSectionProps) => {
  const { className, ...rest } = props

  return (
    <div className={cn('bg-green-600', className)} {...rest}>
      <div className="container text-center text-white">
        <h2 className="text- mb-6 text-4xl font-bold">
          Start Your Journey to Better Health Today
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed">
          Join thousands of others who have transformed their lives through
          proper nutrition.
        </p>

        <Button variant="secondary" size="lg">
          Get Started Now
        </Button>
      </div>
    </div>
  )
}
