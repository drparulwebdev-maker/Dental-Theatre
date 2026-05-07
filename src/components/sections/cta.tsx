"use client";

import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/data/site-data";
import { FadeIn } from "@/components/ui-custom/animations";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn direction="up">
          <div className="relative overflow-hidden rounded-[32px] border border-primary/10 bg-[linear-gradient(135deg,#102f58_0%,#1f5f8e_48%,#5fa9d0_100%)] px-8 py-16 text-primary-foreground shadow-[0_35px_120px_-55px_rgba(8,38,88,0.9)] md:px-16 md:py-20">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/8 blur-xl" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/6 blur-xl" />
              <div className="absolute top-1/2 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/4 blur-2xl" />
              <svg className="absolute inset-0 h-full w-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cta-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-grid)" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
              <div className="max-w-xl text-center lg:text-left">
                <p className="mb-4 text-[11px] font-bold tracking-[0.3em] text-white/60 uppercase">
                  Start Today
                </p>
                <h2 className="mb-4 font-heading text-4xl leading-none md:text-5xl">
                  Ready for Your Theatrical Transformation?
                </h2>
                <p className="text-[15px] leading-[1.85] text-primary-foreground/74">
                  Book your appointment and take the first step toward a healthier, brighter,
                  more confident smile with a clinic experience that already feels elevated.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button
                  nativeButton={false}
                  size="lg"
                  variant="secondary"
                  className="h-12 rounded-xl bg-white px-8 text-sm font-semibold text-primary shadow-md hover:bg-white/90"
                  render={<Link href={siteConfig.links.whatsapp} target="_blank" />}
                >
                  <MessageSquare className="mr-2 size-4" />
                  Book via WhatsApp
                </Button>
                <Button
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-xl border-white/40 bg-transparent px-8 text-sm font-semibold text-white hover:border-white/70 hover:bg-white/10"
                  render={<Link href="/contact" />}
                >
                  Find Nearest Clinic
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
