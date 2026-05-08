"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { siteConfig } from "@/lib/data/site-data";
import { FadeIn } from "@/components/ui-custom/animations";
import { Button } from "@/components/ui/button";

const ServiceCard = ({ service }: { service: any }) => {
  const iconMap = LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>;
  const Icon = (iconMap[service.icon] as LucideIcons.LucideIcon) || LucideIcons.Activity;

  return (
    <div className="mx-3 sm:mx-4 flex-[0_0_85%] min-w-0 sm:flex-[0_0_350px] md:flex-[0_0_380px]">
      <Link href={`/services#${service.slug}`} className="block h-full outline-none">
        <div className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[28px] border border-white/60 bg-white/70 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/95 hover:shadow-[0_20px_60px_-15px_rgba(11,56,102,0.15)]">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(238,246,252,0.5)_0%,rgba(255,255,255,0)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          <div className="mb-5 flex items-center justify-between">
            <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/10 bg-primary/5 text-primary shadow-sm transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:shadow-md">
              <Icon className="size-5" />
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-primary/10 bg-primary/5 px-2.5 py-1 text-[10px] font-bold tracking-wider text-primary/80 uppercase">
              {service.category}
            </div>
          </div>

          <h3 className="mb-2 text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
            {service.title}
          </h3>
          
          <p className="line-clamp-2 flex-grow text-[13px] leading-relaxed text-muted-foreground/90">
            {service.description}
          </p>

          <div className="mt-6 flex items-center text-xs font-semibold text-primary/80 transition-colors group-hover:text-primary">
            Explore treatment
            <ArrowRight className="ml-1.5 size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export function ServicesPreview() {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: true,
      }),
    ]
  );

  const [emblaRefReverse] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1,
        direction: "backward",
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: true,
      }),
    ]
  );

  const firstRow = siteConfig.services.slice(0, Math.ceil(siteConfig.services.length / 2));
  const secondRow = siteConfig.services.slice(Math.ceil(siteConfig.services.length / 2));

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[#f8fbff]" />
      <div className="absolute -top-[20%] left-[-10%] -z-10 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,152,212,0.08)_0%,transparent_70%)] blur-[80px]" />
      <div className="absolute -bottom-[20%] right-[-10%] -z-10 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(20,72,128,0.06)_0%,transparent_70%)] blur-[80px]" />

      <div className="container mx-auto mb-16 max-w-7xl px-6 text-center lg:px-10">
        <FadeIn direction="up">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/60 px-4 py-1.5 text-[11px] font-bold tracking-[0.25em] text-primary shadow-sm backdrop-blur-md uppercase">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
            </span>
            Comprehensive Care
          </div>
          <h2 className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            A Symphony of <span className="text-primary">Services</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
            From precision implants to theatrical smile makeovers, our clinic offers a full spectrum of advanced dental treatments designed around your comfort and aesthetic goals.
          </p>
        </FadeIn>
      </div>

      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        {/* Left/Right Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f8fbff] to-transparent md:w-48"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f8fbff] to-transparent md:w-48"></div>

        {/* Embla Carousel - Row 1 */}
        <div className="w-full max-w-[100vw] overflow-hidden pb-4 pt-2 outline-none" ref={emblaRef}>
          <div className="flex touch-pan-y [backface-visibility:hidden]">
            {firstRow.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>

        {/* Embla Carousel - Row 2 */}
        <div className="w-full max-w-[100vw] overflow-hidden pb-6 pt-4 outline-none" ref={emblaRefReverse}>
          <div className="flex touch-pan-y [backface-visibility:hidden]">
            {secondRow.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 flex max-w-7xl justify-center px-6 lg:px-10">
        <FadeIn direction="up">
          <Button
            nativeButton={false}
            size="lg"
            className="group h-14 rounded-2xl bg-white px-8 text-[15px] font-semibold text-foreground shadow-[0_8px_25px_rgb(0,0,0,0.06)] ring-1 ring-border/50 hover:bg-slate-50 hover:shadow-[0_12px_30px_rgb(0,0,0,0.1)]"
            render={<Link href="/services" />}
          >
            View Full Treatment Menu
            <div className="ml-3 flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="size-3.5" />
            </div>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}