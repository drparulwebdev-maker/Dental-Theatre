"use client";

import { ArrowRight, MessageSquare, PhoneCall } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/data/site-data";
import { FadeIn } from "@/components/ui-custom/animations";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <FadeIn direction="up">
          <div className="relative overflow-hidden rounded-[26px] border border-white/20 bg-[linear-gradient(145deg,#0a1b38_0%,#154c79_50%,#5499c7_100%)] px-6 py-14 text-center text-white shadow-[0_30px_100px_-30px_rgba(14,46,91,0.6)] sm:rounded-[32px] sm:px-12 sm:py-20 md:py-24">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[120px]" />
              <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-sky-300/20 blur-[100px]" />
              <svg className="absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-grid)" />
              </svg>
            </div>

            <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
              <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.28em] text-white/90 uppercase backdrop-blur-sm sm:mb-6 sm:px-4 sm:text-[11px]">
                <span className="mr-2 flex size-1.5 rounded-full bg-sky-300"></span>
                Specialist-Led Care
              </div>
              
              <h2 className="mb-5 font-heading text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-[3.5rem] lg:text-[4rem]">
                Expert care for your<br className="hidden sm:block" /> smile&apos;s next act.
              </h2>
              
              <p className="mb-8 hidden max-w-2xl text-[15px] leading-[1.8] text-white/80 sm:mb-10 sm:block sm:text-lg sm:leading-[1.85]">
                From complex oral surgeries to aesthetic refinements, get the specialist care you deserve. Skip the travel to metro cities—world-class dentistry is already here in Panipat.
              </p>

              <div className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
                <Button
                  nativeButton={false}
                  size="lg"
                  variant="secondary"
                  className="h-14 w-full rounded-2xl bg-white px-8 text-[15px] font-bold text-[#0a1b38] shadow-[0_10px_40px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-[1.02] hover:bg-slate-50 sm:w-auto sm:px-10"
                  render={<Link href={siteConfig.links.whatsapp} target="_blank" />}
                >
                  <MessageSquare className="mr-2.5 size-5" />
                  Book via WhatsApp
                </Button>
                <Button
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                  className="h-14 w-full rounded-2xl border border-white/30 bg-white/5 px-8 text-[15px] font-bold text-white backdrop-blur-md transition-all hover:scale-[1.02] hover:bg-white/10 sm:w-auto sm:px-10"
                  render={<a href="tel:+918930244673" />}
                >
                  <PhoneCall className="mr-2.5 size-5" />
                  Call Us
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
