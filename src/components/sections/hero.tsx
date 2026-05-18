"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  Star,
  Users,
  MapPin,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/data/site-data";
import { FadeIn } from "@/components/ui-custom/animations";
import { Counter } from "@/components/ui-custom/counter";

const stats = [
  { 
    value: 100, 
    suffix: "+", 
    label: "Happy Patients", 
    icon: Users,
    formatFn: (v: number) => {
      const floored = Math.floor(v);
      if (floored >= 100) return "1L";
      if (floored === 0) return "0";
      return `${floored}k`;
    }
  },
  { value: 4.9, suffix: "", label: "Google Rating", icon: Star, decimals: 1 },
  { value: 2, suffix: "", label: "Locations", icon: MapPin },
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">

      {/* ══════════════════════════════════════════
          FULL-BLEED BACKGROUND VIDEO
      ══════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0 bg-sky-100">
        <video
          autoPlay
          loop
          muted
          playsInline
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        >
          <source src="/hero_video.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient: transparent in the middle to let the clinic breathe, dark at edges for text */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/75 via-[#020817]/35 to-[#020817]/85" />
      </div>

      {/* ══════════════════════════════════════════
          MAIN CONTENT — vertically centred column
      ══════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-6 sm:px-8 pt-16 pb-24 sm:pt-24 sm:pb-36">

        {/* ── Eyebrow — minimal, medical, authoritative ── */}
        <FadeIn direction="up">
          <div className="mb-6 inline-flex max-w-[19rem] items-center justify-center gap-2 sm:mb-8 sm:max-w-none sm:gap-2.5">
            <span className="block h-px w-6 sm:w-8 bg-sky-400/70" />
            <span className="text-[9px] leading-[1.45] sm:text-[11px] font-semibold tracking-[0.24em] sm:tracking-[0.28em] text-sky-300/90 uppercase">
              Most Trusted Dental Clinic in Panipat
            </span>
            <span className="block h-px w-6 sm:w-8 bg-sky-400/70" />
          </div>
        </FadeIn>

        {/* ── Headline — dual weight for typographic hierarchy ── */}
        <FadeIn direction="up" delay={0.1}>
          <h1 className="max-w-[19rem] sm:max-w-4xl text-[clamp(2.85rem,10.8vw,4.1rem)] sm:fluid-display leading-[0.98] sm:leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_32px_rgba(0,0,0,0.5)]">
            <span className="font-light text-white/80">Where Science Meets</span>
            <br />
            <span className="font-black text-white">
              the{" "}
              <span className="relative inline-block">
                Art of Smiles.
                <motion.span
                  className="absolute -bottom-1 sm:-bottom-2 left-0 h-[4px] sm:h-[6px] bg-sky-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                />
              </span>
            </span>
          </h1>
        </FadeIn>

        {/* ── Sub-copy — one line, punchy, subdued ── */}
        <FadeIn direction="up" delay={0.18}>
          <p className="mt-4 max-w-[21rem] sm:max-w-none text-[14px] sm:text-[16px] leading-[1.75] sm:leading-relaxed text-white/95 font-semibold sm:font-medium tracking-normal sm:tracking-wide drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Advanced dentistry. Unhurried care. Two locations across Panipat.
            <br className="hidden sm:block" />
            Where every smile gets a treatment plan, not just a procedure.
          </p>
        </FadeIn>

        {/* ── CTA buttons — clear visual hierarchy ── */}
        <FadeIn direction="up" delay={0.26}>
          <div className="mt-8 flex w-full max-w-[20rem] flex-col items-center gap-3 sm:mt-9 sm:max-w-none sm:flex-row">
            {/* Primary — solid white, dominant */}
            <Link
              href={siteConfig.links.whatsapp}
              target="_blank"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 h-13 sm:h-12 rounded-2xl sm:rounded-xl bg-white px-8 text-[15px] sm:text-[13px] font-semibold text-[#020817] shadow-[0_0_0_0_rgba(255,255,255,0),0_8px_40px_rgba(255,255,255,0.18)] hover:shadow-[0_8px_50px_rgba(255,255,255,0.32)] hover:bg-white/95 active:scale-[0.98] transition-all duration-200"
            >
              <MessageSquare className="size-[15px]" />
              Book Consultation
            </Link>

            {/* Secondary — minimal border, clearly secondary */}
            <Link
              href="/services"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 h-12 rounded-2xl sm:rounded-xl border border-white/40 bg-white/10 backdrop-blur-md px-8 text-[15px] sm:text-[13px] font-semibold text-white hover:bg-white/20 hover:border-white/50 active:scale-[0.98] transition-all duration-200"
            >
              Explore Services
              <ArrowRight className="size-[15px]" />
            </Link>
          </div>
        </FadeIn>

        {/* ══════════════════════════════════════════
            STAT BAR — directly under CTA over image
        ══════════════════════════════════════════ */}
        <FadeIn direction="up" delay={0.34}>
          <div className="mt-7 sm:mt-8 w-full max-w-[21rem] sm:max-w-3xl mx-auto grid grid-cols-3 divide-x divide-white/15 border-t border-white/15 px-0 pt-5 sm:pt-8">
            {stats.map(({ value, suffix, label, decimals, formatFn }) => (
              <div key={label} className="flex flex-col items-center justify-center px-2 sm:px-4">
                <p className="mb-1 text-[2rem] sm:text-4xl font-light tracking-tight text-white drop-shadow-md">
                  <Counter value={value} suffix={suffix} decimals={decimals ?? 0} formatFn={formatFn} />
                </p>
                <p className="text-[8px] leading-[1.35] sm:text-[11px] font-semibold text-white/80 uppercase tracking-[0.14em] sm:tracking-[0.15em] text-center drop-shadow-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1">
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ChevronDown className="size-5 text-white/40" />
        </motion.div>
      </div>

    </section>
  );
}
