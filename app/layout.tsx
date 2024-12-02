import { Metadata } from 'next'

import { Providers } from './providers'

import '@/styles/globals.css'

import { SEO } from '@/constants/seo'

import { fontSans } from '@/lib/font'
import { BackgroundGrid } from '@/components/background/grid'
import { MediaQueryDebug } from '@/components/debug/media-query'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: { absolute: SEO.title, template: `%s // ${SEO.title}` },
  applicationName: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  openGraph: {
    locale: 'en',
    title: SEO.title,
    description: SEO.description,
    url: SEO.url,
    type: 'website',
    images: [
      {
        url: '/images/thumb.png',
        width: 1200,
        height: 630,
        alt: SEO.description,
      },
    ],
    siteName: SEO.title,
  },
  twitter: {
    site: SEO.twitter,
  },
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontSans.variable}>
        <Providers>
          <Header />

          <BackgroundGrid />

          <main className="flex flex-1 flex-col">{children}</main>

          <Footer />

          <MediaQueryDebug />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
