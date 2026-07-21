import { ArrowUpRight } from 'lucide-react'

const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'FAQ', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

const legal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-serif text-2xl font-semibold">
              Apex Developments
            </p>
            <p className="mt-4 max-w-sm text-pretty leading-relaxed text-primary-foreground/70">
              Delivering high-quality residential development and renovation
              across the UK, with a focus on trust, craftsmanship and lasting
              value.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:border-accent hover:text-accent-foreground"
            >
              Book a Consultation
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/50">
              Navigation
            </p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/50">
              Legal
            </p>
            <ul className="mt-5 space-y-3">
              {legal.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-primary-foreground/15 pt-8">
          <p className="text-sm text-primary-foreground/60">
            © 2026 Apex Developments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
