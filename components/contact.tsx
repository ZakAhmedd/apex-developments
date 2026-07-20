"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@apexdevelopments.co.uk",
    href: "mailto:hello@apexdevelopments.co.uk",
  },
];

const inputClasses =
  "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY!);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully!");
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-secondary/90 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-white">
              <span className="h-px w-10 bg-white" />
              Contact
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Let&apos;s discuss your next project.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Whether you are planning a new development or a full renovation,
              we would be delighted to talk through your ideas.
            </p>

            <ul className="mt-10 space-y-6">
              {details.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-white text-accent shadow-sm shadow-foreground/5">
                    <item.icon className="size-5 text-black" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block text-base font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-base font-medium text-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm shadow-foreground/5 md:p-10">
              {submitted ? (
                <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                  <span className="inline-flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-7" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-foreground">
                    Thank you
                  </h3>
                  <p className="mt-2 max-w-xs text-muted-foreground">
                    Your message has been received. A member of our team will be
                    in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project"
                      className={`${inputClasses} resize-none`}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="h-12 w-full rounded-full cursor-pointer hover:bg-primary/70"
                  >
                    Send
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
