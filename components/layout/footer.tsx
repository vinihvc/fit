import { CONFIG } from '@/constants/config'
import { Globe2 } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="container">
      <div className="flex items-center justify-center gap-2 border-t py-6">
        <Globe2 size={20} />

        <p className="text-center text-sm leading-loose">
          Built by{' '}
          <a
            href={CONFIG.twitter}
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium underline underline-offset-4"
          >
            vinihvc
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
