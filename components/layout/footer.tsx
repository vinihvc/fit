import { CONFIG } from '@/constants/config'
import { Globe2 } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="container">
      <div className="flex items-center justify-center gap-2 border-t border-t-neutral-200 py-6 dark:border-t-neutral-700">
        <Globe2 size={20} />

        <p className="text-center text-sm leading-loose text-neutral-600 dark:text-neutral-400">
          Built by{' '}
          <a
            href={CONFIG.twitter}
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium underline underline-offset-4 dark:text-white"
          >
            vinihvc
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
