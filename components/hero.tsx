import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/apex-hero2.jpg"
          alt="Modern luxury residential property at dusk"
          className="size-full object-cover"
        />
        {/* Subtle overlay for legibility */}
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pt-28 pb-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-white">
            <span className="h-px w-10 bg-white" />
            UK Property Development
          </p>
          <h1 className="text-balance font-serif text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Building Exceptional Homes. Creating Lasting Value.
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-white">
            Providing serviced accommodation alongside professional property
            development and renovation services, with a commitment to quality,
            craftsmanship, and attention to detail.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className={cn(
                buttonVariants(),
                "h-12 gap-2 rounded-full px-7 text-sm",
              )}
            >
              Get in Touch
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#projects"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 gap-2 rounded-full px-7 text-sm bg-primary/90 hover:bg-primary/60 hover:text-black text-black",
              )}
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
