"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data/site-data";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui-custom/animations";

const testimonialSlides = [...testimonials, ...testimonials];

export function TestimonialsSection() {
  const [autoScroll] = React.useState(() =>
    AutoScroll({
      playOnInit: true,
      speed: 0.85,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
    })
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [autoScroll]
  );

  return (
    <section className="overflow-hidden py-8 lg:py-12">
      <div className="container mx-auto mb-12 max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn direction="up">
            <p className="mb-3 text-[11px] font-bold tracking-[0.3em] text-primary uppercase">
              Patient Stories
            </p>
            <h2 className="mb-4 font-heading text-4xl leading-none md:text-5xl">
              What Our Patients Say
            </h2>
            <p className="text-[15px] leading-[1.85] text-muted-foreground">
              Credibility matters even more in healthcare, so the testimonial rail now feels
              brighter, softer, and more aligned with the rest of the premium clinic experience.
            </p>
          </FadeIn>
        </div>
      </div>

      <FadeIn direction="up" delay={0.2}>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-stretch gap-5 px-6 py-4 lg:px-10">
            {testimonialSlides.map((testimonial, index) => {
              const initials = testimonial.name
                .split(" ")
                .map((name: string) => name[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();

              return (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="min-w-0 flex-[0_0_88%] sm:flex-[0_0_72%] lg:flex-[0_0_420px]"
                >
                  <article className="flex h-full min-h-[260px] flex-col gap-5 rounded-[28px] border border-border/80 bg-white/92 p-7 shadow-[0_24px_70px_-50px_rgba(8,36,78,0.38)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_28px_80px_-48px_rgba(8,36,78,0.42)]">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "size-4",
                            i < testimonial.rating
                              ? "fill-yellow-500 text-yellow-500"
                              : "text-muted-foreground/25"
                          )}
                        />
                      ))}
                    </div>

                    <p className="flex-1 text-base leading-[1.9] text-muted-foreground">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    <div className="flex items-center gap-3 border-t border-border/40 pt-4">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        {initials}
                      </div>
                      <div>
                        <p className="text-base font-bold leading-tight text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
