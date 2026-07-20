import { Reveal } from "@/components/reveal";

const projects = [
  {
    src: "/images/hamilton1.jpg",
    title: "1 Bed Apartment",
    location: "Hamilton, Scotland",
    span: "lg:col-span-2",
    ratio: "aspect-[16/10]",
  },
  {
    src: "/images/lanark2.jpg",
    title: "2 Bed Apartment",
    location: "Lanark, Scotland",
    span: "lg:col-span-2",
    ratio: "aspect-[16/10]",
  },
  {
    src: "/images/lanark1.jpg",
    title: "1 Bed Apartment",
    location: "Lanark, Scotland",
    span: "lg:col-span-2",
    ratio: "aspect-[16/10]",
  },
  {
    src: "/images/hamilton2.jpg",
    title: "2 Bed Apartment",
    location: "Hamilton, Scotland",
    span: "lg:col-span-2",
    ratio: "aspect-[16/10]",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 py-24 md:py-32 bg-secondary/50"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-white">
            <span className="h-px w-10 bg-white" />
            Selected Projects
          </p>
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            A portfolio built on quality and detail.
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <Reveal
              key={project.src}
              delay={(i % 2) * 100}
              as="article"
              className={project.span}
            >
              <div className="group relative overflow-hidden rounded-xl">
                <img
                  src={project.src || "/placeholder.svg"}
                  alt={`${project.title} in ${project.location}`}
                  className={`${project.ratio} size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-100 lg:opacity-0 transition-opacity duration-500 lg:group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 p-6 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-3 transition-all duration-500 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                  <p className="md:text-xs text-[10px] font-medium uppercase tracking-[0.2em] text-background/80">
                    {project.location}
                  </p>
                  <h3 className="mt-1 font-serif md:text-2xl font-semibold text-background">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-14 max-w-2xl text-pretty text-center text-lg leading-relaxed text-muted-foreground">
            Every project is completed with a focus on quality, attention to
            detail, and long-term value.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
