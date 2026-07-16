// import { Building2, Hammer, PaintRoller, ClipboardCheck } from 'lucide-react'
// import { Reveal } from '@/components/reveal'

// const services = [
//   {
//     icon: Building2,
//     title: 'Property Development',
//     description:
//       'End-to-end development of residential properties, from concept through to completion.',
//   },
//   {
//     icon: Hammer,
//     title: 'Property Renovations',
//     description:
//       'Transforming existing homes into refined, functional and comfortable living spaces.',
//   },
//   {
//     icon: PaintRoller,
//     title: 'Refurbishments',
//     description:
//       'High-quality finishes and detailed refurbishment work that stands the test of time.',
//   },
//   {
//     icon: ClipboardCheck,
//     title: 'Project Management',
//     description:
//       'Careful coordination and oversight ensuring projects are delivered to standard.',
//   },
// ]

// export function Services() {
//   return (
//     <section
//       id="services"
//       className="scroll-mt-20 bg-secondary/80 py-24 md:py-32"
//     >
//       <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <p className="mb-5 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-white">
//             <span className="h-px w-10 bg-white" />
//             Our Services
//             <span className="h-px w-10 bg-white" />
//           </p>
//           <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
//             A complete approach to residential property.
//           </h2>
//         </Reveal>

//         <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {services.map((service, i) => (
//             <Reveal key={service.title} delay={i * 90} as="article">
//               <div className="group h-full rounded-xl border border-border bg-card p-8 shadow-sm shadow-foreground/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md">
//                 <span className="inline-flex size-12 items-center justify-center rounded-lg bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
//                   <service.icon className="size-6" />
//                 </span>
//                 <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
//                   {service.title}
//                 </h3>
//                 <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
//                   {service.description}
//                 </p>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

import { Building2, Hammer, PaintRoller, ClipboardCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: Building2,
    title: 'Property Development',
    description:
      'End-to-end development of residential properties, from concept through to completion.',
  },
  {
    icon: Hammer,
    title: 'Property Renovations',
    description:
      'Transforming existing homes into refined, functional and comfortable living spaces.',
  },
  {
    icon: PaintRoller,
    title: 'Refurbishments',
    description:
      'High-quality finishes and detailed refurbishment work that stands the test of time.',
  },
  {
    icon: ClipboardCheck,
    title: 'Project Management',
    description:
      'Careful coordination and oversight ensuring projects are delivered to standard.',
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-secondary/80 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-white">
            <span className="h-px w-10 bg-white" />
            Our Services
            <span className="h-px w-10 bg-white" />
          </p>
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            A complete approach to residential property.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 90} as="article">
              <div className="group h-full rounded-xl border border-border bg-card p-8 shadow-sm shadow-foreground/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md">
                <span className="inline-flex size-12 items-center justify-center rounded-lg bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <service.icon className="size-6 text-white" />
                </span>
                <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
