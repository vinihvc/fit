import { Apple, Heart, Salad, Users } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const features = [
  {
    icon: Salad,
    title: 'Personalized Meal Plans',
    description:
      'Get custom meal plans tailored to your dietary needs and preferences.',
  },
  {
    icon: Apple,
    title: 'Nutritional Guidance',
    description:
      'Expert advice on making healthy food choices and understanding nutrition.',
  },
  {
    icon: Heart,
    title: 'Wellness Tracking',
    description:
      'Monitor your progress and celebrate your health achievements.',
  },
  {
    icon: Users,
    title: 'Community Support',
    description:
      'Join a supportive community of people on their wellness journey.',
  },
]

interface FeatureSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FeaturesSection = (props: FeatureSectionProps) => {
  const { className, ...rest } = props

  return (
    <div className={cn(className)} {...rest}>
      <div className="container space-y-20">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold">Features</h2>

          <p className="mx-auto max-w-3xl text-xl">
            Discover the benefits of our comprehensive approach to nutrition
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="transition-shadow duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <feature.icon className="h-10 w-10 stroke-1 text-primary" />
              </CardHeader>

              <CardContent className="space-y-3">
                <CardTitle>{feature.title}</CardTitle>

                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
