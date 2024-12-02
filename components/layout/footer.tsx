import { CONFIG } from '@/constants/config'

export const Footer = () => {
  return (
    <footer className="container">
      <div className="flex items-center justify-between gap-2 py-6 text-sm">
        <p className="flex-1 text-center leading-loose">
          Built by{' '}
          <a
            href={CONFIG.twitter}
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium underline underline-offset-4"
          >
            vinihvc
          </a>
        </p>

        <div>&copy; Fit {new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}
