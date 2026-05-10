import { Link } from 'react-router-dom'
import { trackOutboundLink } from '../utils/analytics.js'

export default function PrivacyPolicy() {
  return (
    <main className="bg-paper">
      <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex items-center gap-3 mb-5">
          <span className="eyebrow text-accent">Privacy</span>
          <div className="h-px flex-1 bg-rule" />
        </div>
        <h1 className="section-title text-4xl sm:text-5xl">Privacy Policy</h1>
        <div className="title-rule mb-10" />

        <div className="text-base sm:text-lg leading-relaxed text-graphite space-y-5 font-serif">
          <p>
            This site uses{' '}
            <span className="font-sans font-semibold text-ink">Google Analytics</span>{' '}
            to collect anonymous usage data — pages visited, time on site,
            general location. No personally identifiable information is
            collected.
          </p>
          <p>
            There are no user accounts, no logins, and no data-submission forms.
          </p>
          <p>
            Cookies are used only by Google Analytics. Users can opt out via
            Google's{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOutboundLink('https://tools.google.com/dlpage/gaoptout', 'GA opt-out')}
              className="font-sans not-italic text-accent hover:text-accent-dark transition-colors"
            >
              opt-out tools
            </a>
            .
          </p>
          <p>
            This site does not sell or share any data with third parties beyond
            Google Analytics.
          </p>
          <p className="font-sans border-l-4 border-accent pl-4 not-italic">
            <span className="text-slate text-sm">Contact for privacy questions:</span>
            <br />
            <a
              href="mailto:jleviloff@gmail.com"
              onClick={() => trackOutboundLink('mailto:jleviloff@gmail.com', 'privacy contact email')}
              className="text-ink font-semibold hover:text-accent transition-colors"
            >
              jleviloff@gmail.com
            </a>
          </p>
        </div>

        <div className="border-t border-rule pt-8 mt-12 flex items-center justify-between">
          <Link
            to="/"
            className="font-mono text-[10px] tracking-widest uppercase text-accent hover:text-accent-dark transition-colors"
          >
            ← Back to the data
          </Link>
          <div className="font-mono text-[10px] tracking-widest uppercase text-ash">
            Last updated · 2026
          </div>
        </div>
      </article>
    </main>
  )
}
