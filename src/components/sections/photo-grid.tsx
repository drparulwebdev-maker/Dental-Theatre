"use client";

import { FadeIn } from "@/components/ui-custom/animations";
import { siteConfig } from "@/lib/data/site-data";
import { cn } from "@/lib/utils";
import { ArrowRight, MoveUpRight } from "lucide-react";
import Link from "next/link";

export function PhotoGridSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-8 right-0 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl" />
      </div>

      <div className="container mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <FadeIn direction="up" className="flex flex-col justify-center">
          <p className="mb-3 text-[11px] font-bold tracking-[0.3em] text-primary uppercase">
            Inside The Clinic
          </p>
          <h2 className="font-heading text-4xl leading-none md:text-5xl">
            A calmer, more elevated treatment experience.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.85] text-muted-foreground">
            This asymmetrical grid acts as a premium placeholder gallery for now, giving the
            homepage a stronger editorial rhythm until real clinic photography is ready.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {siteConfig.galleryHighlights.slice(0, 2).map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/60 bg-white/70 p-4 shadow-[0_20px_60px_-40px_rgba(11,36,73,0.5)] backdrop-blur-sm"
              >
                <p className="text-[11px] font-bold tracking-[0.28em] text-primary/70 uppercase">
                  {item.tag}
                </p>
                <p className="mt-2 text-sm font-bold text-foreground">{item.title}</p>
                <p className="mt-1 text-sm leading-[1.75] text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/gallery"
            className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-transform hover:translate-x-1"
          >
            Explore full smile gallery
            <ArrowRight className="size-4" />
          </Link>
        </FadeIn>

        <div className="grid auto-rows-[140px] grid-cols-2 gap-4 md:auto-rows-[160px]">
          {siteConfig.galleryHighlights.map((item, index) => (
            <FadeIn
              key={item.title}
              direction={index % 2 === 0 ? "up" : "left"}
              delay={index * 0.08}
              className={cn(
                "group relative overflow-hidden rounded-[28px] border border-white/50 p-5 text-white shadow-[0_25px_80px_-45px_rgba(12,36,79,0.7)]",
                item.size
              )}
            >
              <div className={cn("absolute inset-0", item.background)} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_34%),linear-gradient(180deg,rgba(8,22,49,0.04),rgba(6,18,39,0.72))]" />
              <div className="absolute inset-0 opacity-30 mix-blend-screen [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:24px_24px]" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold tracking-[0.28em] uppercase text-white/90 backdrop-blur-sm">
                    {item.tag}
                  </span>
                  <MoveUpRight className="size-4 text-white/75 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                <div>
                  <p className="text-xl font-bold leading-tight md:text-2xl">{item.title}</p>
                  <p className="mt-2 max-w-sm text-sm leading-[1.75] text-white/78">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
