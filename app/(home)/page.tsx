import React from 'react'

import { CallToActionSection } from './_components/call-to-action'
import { FeaturesSection } from './_components/features'
import { HeroSection } from './_components/hero'

const HomePage = () => {
  return (
    <>
      <HeroSection className="pt-32" />

      <FeaturesSection className="py-20" />

      <CallToActionSection className="py-20" />
    </>
  )
}

export default HomePage
