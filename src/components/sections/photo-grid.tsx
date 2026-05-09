"use client";

import { FadeIn } from "@/components/ui-custom/animations";
import { siteConfig } from "@/lib/data/site-data";
import { cn } from "@/lib/utils";
import { ArrowRight, MoveUpRight, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export function PhotoGridSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-8 right-0 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl" />
      </div>

      <div className="container mx-auto grid max-w-7xl gap-9 px-5 sm:gap-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <FadeIn direction="up" className="flex flex-col justify-center">
          <p className="mb-3 text-[11px] font-bold tracking-[0.3em] text-primary uppercase">
            Inside The Clinic
          </p>
          <h2 className="font-heading text-[2rem] leading-tight sm:text-4xl md:text-5xl md:leading-none">
            A calmer, more elevated treatment experience.
          </h2>
          <p className="mt-4 max-w-xl text-[14px] leading-[1.75] text-muted-foreground sm:mt-5 sm:text-[15px] sm:leading-[1.85]">
            Discover the serene and modern environment of our dental clinic, where advanced technology and compassionate care come together to create a calming treatment experience.
          </p>

          <div className="mt-6 hidden gap-3 sm:mt-8 sm:grid sm:grid-cols-2 sm:gap-4">
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

        <div className="grid auto-rows-[132px] grid-cols-2 gap-3 sm:auto-rows-[140px] sm:gap-4 md:auto-rows-[160px]">
          {siteConfig.galleryHighlights.map((item, index) => (
            <FadeIn
              key={item.title}
              direction={index % 2 === 0 ? "up" : "left"}
              delay={index * 0.08}
              className={cn(
                "group relative overflow-hidden rounded-[22px] border border-white/50 p-4 text-white shadow-[0_25px_80px_-45px_rgba(12,36,79,0.7)] sm:rounded-[28px] sm:p-5",
                item.size
              )}
            >
              <div className={cn("absolute inset-0", item.background)} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_34%),linear-gradient(180deg,rgba(8,22,49,0.04),rgba(6,18,39,0.72))]" />
              <div className="absolute inset-0 opacity-30 mix-blend-screen [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:24px_24px]" />

              <ImageIcon className="absolute inset-0 m-auto size-10 text-white/30" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[9px] font-bold tracking-[0.22em] uppercase text-white/90 backdrop-blur-sm sm:px-3 sm:text-[10px] sm:tracking-[0.28em]">
                    {item.tag}
                  </span>
                  <MoveUpRight className="size-4 text-white/75 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                <div>
                  <p className="text-base font-bold leading-tight sm:text-xl md:text-2xl">{item.title}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
