import { Reveal } from "@/components/reveal";

const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "120+", label: "Happy Clients" },
  { value: "100%", label: "Client focused" },
];

const projects = [
  {
    src: "/images/lanark3.jpg",
    title: "2 Bed Apartment",
    location: "Lanark",
    span: "lg:col-span-1",
    ratio: "aspect-[16/10]",
  },
  {
    src: "/images/lanark4.jpg",
    title: "2 Bed Apartment",
    location: "Lanark",
    span: "lg:col-span-1",
    ratio: "aspect-[16/10]",
  },
];

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
        {/* Serviced Accommodation */}
        <Reveal delay={200}>
          <div className="mt-24 border-t border-border pt-16">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-white">
                Serviced Accommodation Providers
              </p>

              <h3 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                Premium spaces designed for short-term stays.
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Our properties are carefully developed and renovated for
                serviced accommodation and short-term lets, providing
                comfortable, high-quality spaces for both business and leisure
                guests. Designed with modern living in mind, each property
                combines quality finishes, practical layouts, and attention to
                detail to ensure an exceptional stay.
              </p>
            </div>
            <div className="mt-25 flex gap-20">
              {projects.map((project, i) => (
                <Reveal
                  key={project.src}
                  delay={(i % 2) * 100}
                  as="article"
                  className={project.span}
                >
                  <div className="group">
                    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-xl">
                      <img
                        src={project.src || "/placeholder.svg"}
                        alt={`${project.title} in ${project.location}`}
                        className={`${project.ratio} w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105`}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-100 lg:opacity-0 transition-opacity duration-500 lg:group-hover:opacity-100" />

                      <div className="absolute inset-x-0 bottom-0 p-6 opacity-100 translate-y-0 lg:translate-y-3">
                        <p className="text-[10px] md:text-sm font-medium uppercase tracking-[0.2em] text-white">
                          {project.location}
                        </p>
                        <h3 className="mt-1 font-serif md:text-2xl font-semibold text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
