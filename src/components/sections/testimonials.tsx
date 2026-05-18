"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Star, Quote } from "lucide-react";
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
    <section id="testimonials" className="overflow-hidden py-10 sm:py-8 lg:py-12">
      <div className="container mx-auto mb-7 max-w-7xl px-5 sm:mb-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn direction="up">
            <p className="mb-3 text-[11px] font-bold tracking-[0.3em] text-primary uppercase">
              Patient Stories
            </p>
            <h2 className="mb-4 font-heading text-[2rem] leading-tight sm:text-4xl md:text-5xl md:leading-none">
              What Our Patients Say
            </h2>
            <p className="text-[14px] leading-[1.75] text-muted-foreground sm:text-[15px] sm:leading-[1.85]">
              Credibility matters even more in healthcare, so the testimonial rail now feels
              brighter, softer, and more aligned with the rest of the premium clinic experience.
            </p>
          </FadeIn>
        </div>
      </div>

      <FadeIn direction="up" delay={0.2}>
        <div className="overflow-hidden" ref={emblaRef} role="region" aria-label="Patient Testimonials">
          <div className="flex items-stretch gap-4 px-5 py-3 sm:gap-5 sm:px-6 sm:py-4 lg:px-10">
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
                  className="min-w-0 flex-[0_0_86%] sm:flex-[0_0_72%] lg:flex-[0_0_420px]"
                >
                  <article className="group relative flex h-full min-h-[232px] flex-col gap-4 overflow-hidden rounded-[24px] border border-primary/30 bg-white/92 bg-gradient-to-br from-white/60 to-primary/[0.02] p-5 shadow-[0_24px_70px_-50px_rgba(8,36,78,0.38)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:bg-gradient-to-br hover:from-white/80 hover:to-primary/[0.08] hover:shadow-[0_28px_80px_-48px_rgba(8,36,78,0.42)] sm:min-h-[260px] sm:gap-5 sm:rounded-[28px] sm:p-7">
                    <Quote className="absolute -right-4 -top-4 size-24 rotate-12 text-primary/[0.04] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110 group-hover:text-primary/[0.08]" />
                    
                    <div className="relative z-10 flex gap-1">
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

                    <p className="line-clamp-4 flex-1 text-sm leading-[1.75] text-muted-foreground sm:text-base sm:leading-[1.9]">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    <div className="flex items-center gap-3 border-t border-border/40 pt-3 sm:pt-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary sm:size-11 sm:text-sm">
                        {initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold leading-tight text-foreground sm:text-base">
                          {testimonial.name}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground sm:mt-1 sm:text-sm">{testimonial.location}</p>
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
