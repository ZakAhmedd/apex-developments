import { Reveal } from '@/components/reveal'

const stats = [
  { value: '15+', label: 'Years of experience' },
  { value: '120+', label: 'Happy Clients' },
  { value: '100%', label: 'Client focused' },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-white">
              <span className="h-px w-10 bg-white" />
              About Apex
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Craftsmanship and considered design in every project.
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Apex Developments is a property development and renovation company
              focused on transforming residential properties into high-quality
              living spaces. We pride ourselves on excellent workmanship,
              thoughtful design, and delivering projects to an exceptional
              standard.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-sm leading-snug text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-xl shadow-lg shadow-foreground/5">
              <img
                src="/images/about.png"
                alt="Bright, high-quality renovated residential interior"
                className="aspect-[4/5] size-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
