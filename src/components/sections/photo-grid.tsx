"use client";

import { FadeIn } from "@/components/ui-custom/animations";
import { siteConfig } from "@/lib/data/site-data";
import { cn } from "@/lib/utils";
import { ArrowRight, MoveUpRight, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function PhotoGridSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-8 right-0 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl" />
      </div>

      <div className="container mx-auto grid max-w-7xl gap-9 px-5 sm:gap-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        <FadeIn direction="up" className="flex flex-col justify-center">
          <p className="mb-3 text-[11px] font-bold tracking-[0.3em] text-primary uppercase">
            The Facility
          </p>
          <h2 className="font-heading text-[2.2rem] font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] [text-wrap:balance] max-w-[15ch] sm:max-w-none">
            Metro-city standards, right here in Panipat.
          </h2>
          <p className="mt-6 max-w-[540px] text-[15px] leading-[1.8] text-muted-foreground sm:text-[16px]">
            Dental Theatre was built to bridge the gap between local accessibility and elite specialist care. We’ve combined hospital-grade sterilization protocols with a modern, patient-first environment to ensure your treatment is as predictable as it is comfortable.
          </p>

          <div className="mt-8 hidden sm:block">
            {siteConfig.galleryHighlights.slice(0, 1).map((item) => (
              <div
                key={item.title}
                className="max-w-[28rem] rounded-[24px] border border-border/50 bg-slate-50/50 p-6 shadow-[0_15px_50px_-30px_rgba(11,36,73,0.3)]"
              >
                <p className="text-lg font-bold text-foreground tracking-tight">{item.title}</p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/gallery"
            className="mt-10 hidden sm:inline-flex w-fit items-center gap-2.5 text-[15px] font-bold text-primary transition-all hover:gap-4"
          >
            Explore the full gallery
            <ArrowRight className="size-4" />
          </Link>
        </FadeIn>

        <div className="flex flex-col gap-4 sm:block">
          <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:gap-4 md:auto-rows-[200px]">
          {siteConfig.galleryHighlights.slice(1).map((item, index) => (
            <FadeIn
              key={item.title}
              direction={index % 2 === 0 ? "up" : "left"}
              delay={index * 0.08}
              className={cn(
                "group relative overflow-hidden rounded-[22px] border border-white/50 text-white shadow-[0_25px_80px_-45px_rgba(12,36,79,0.7)] sm:rounded-[28px]",
                item.size
              )}
            >
              <div className="absolute inset-0 z-0">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  />
                )}
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[9px] font-bold tracking-[0.22em] uppercase text-white/90 backdrop-blur-sm sm:px-3 sm:text-[10px] sm:tracking-[0.28em]">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <p className="text-base font-bold leading-tight sm:text-lg md:text-xl">{item.title}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

          <FadeIn direction="up" className="sm:hidden flex justify-start">
            <Link
              href="/gallery"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-transform hover:translate-x-1"
            >
              Explore full gallery
              <ArrowRight className="size-4" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
