"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Star,
  Users,
  CalendarCheck,
  MapPin,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/data/site-data";
import { FadeIn } from "@/components/ui-custom/animations";
import { Counter } from "@/components/ui-custom/counter";

const stats = [
  { value: 10, suffix: "k+", label: "Happy Patients", icon: Users },
  { value: 12, suffix: "+", label: "Years Experience", icon: CalendarCheck },
  { value: 4.9, suffix: "", label: "Google Rating", icon: Star, decimals: 1 },
  { value: 3, suffix: "", label: "Clinic Locations", icon: MapPin },
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">

      {/* ══════════════════════════════════════════
          FULL-BLEED BACKGROUND IMAGE
      ══════════════════════════════════════════ */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/dental_bg.jpg"
          alt="Dental Theatre — Modern Clinic Interior"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />

        {/* Deep cinematic overlay — dark at top/bottom, slightly lifted in the centre */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,15,35,0.78)_0%,rgba(4,15,35,0.52)_40%,rgba(4,15,35,0.60)_70%,rgba(4,15,35,0.90)_100%)]" />

        {/* Subtle blue tint that matches the brand */}
        <div className="absolute inset-0 bg-[oklch(0.22_0.09_244/0.28)] mix-blend-multiply" />

        {/* Vignette ring */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,rgba(2,8,23,0.55)_100%)]" />
      </div>

      {/* ══════════════════════════════════════════
          MAIN CONTENT — centred column
      ══════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-5 sm:px-8 pt-28 pb-36 sm:pt-32 sm:pb-40 lg:pt-36 lg:pb-44">

        {/* ── Eyebrow badge ── */}
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-white/90 uppercase shadow-lg">
            <ShieldCheck className="size-3 shrink-0 text-sky-300" />
            <span>Most Trusted Dental Clinic in Panipat</span>
          </div>
        </FadeIn>

        {/* ── Headline ── */}
        <FadeIn direction="up" delay={0.1}>
          <h1 className="mt-6 max-w-4xl fluid-display font-extrabold leading-[1.04] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.4)]">
            Where Science Meets{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-200 to-sky-400">
                the Art of Smiles.
              </span>
              {/* Wavy underline */}
              <svg
                className="absolute -bottom-1.5 left-0 w-full"
                viewBox="0 0 400 10"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7 Q50 1 100 6 Q150 11 200 5 Q250 0 300 6 Q350 11 398 5"
                  stroke="rgba(125,211,252,0.6)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
        </FadeIn>

        {/* ── Sub-copy ── */}
        <FadeIn direction="up" delay={0.18}>
          <p className="mt-6 max-w-xl text-[15px] sm:text-base leading-[1.8] text-white/72 font-normal">
            Advanced clinical care with a calmer, more polished patient experience — every
            consultation, treatment plan, and smile makeover feels precise, personal, and
            confidence-building.
          </p>
        </FadeIn>

        {/* ══════════════════════════════════════════
            STAT BAR
        ══════════════════════════════════════════ */}
        <FadeIn direction="up" delay={0.26}>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl shadow-[0_8px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10 bg-white/8">
            {stats.map(({ value, suffix, label, icon: Icon, decimals }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-1.5 bg-white/[0.08] backdrop-blur-xl px-6 py-5 sm:py-6 hover:bg-white/[0.13] transition-colors duration-300 first:rounded-l-2xl last:rounded-r-2xl"
              >
                <Icon className="size-4 text-sky-300 mb-0.5" />
                <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  <Counter value={value} suffix={suffix} decimals={decimals ?? 0} />
                </p>
                <p className="text-[10px] sm:text-[11px] font-medium text-white/55 text-center leading-tight">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── Service pills ── */}
        <FadeIn direction="up" delay={0.33}>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["Smile Design", "Implants", "Invisible Aligners", "Root Canal", "Teeth Whitening"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/8 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-medium text-white/75 hover:bg-white/14 hover:text-white/95 transition-colors duration-200 cursor-default"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </FadeIn>

        {/* ── CTA buttons ── */}
        <FadeIn direction="up" delay={0.42}>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            {/* Primary — solid white */}
            <Link
              href={siteConfig.links.whatsapp}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 h-13 rounded-xl bg-white px-8 text-sm font-semibold text-[oklch(0.22_0.09_244)] shadow-[0_4px_30px_rgba(255,255,255,0.22)] hover:bg-white/90 hover:shadow-[0_6px_40px_rgba(255,255,255,0.3)] active:scale-[0.98] transition-all duration-200"
            >
              <MessageSquare className="size-4" />
              Book Free Consultation
            </Link>

            {/* Secondary — glass */}
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 h-13 rounded-xl border border-white/25 bg-white/10 backdrop-blur-md px-8 text-sm font-semibold text-white hover:bg-white/18 hover:border-white/40 active:scale-[0.98] transition-all duration-200"
            >
              Explore Services
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </FadeIn>

        {/* ── Floating trust badges ── */}
        {/* Google rating */}
        <FadeIn direction="up" delay={0.5}>
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="absolute top-[14%] right-8 lg:right-16 hidden md:flex items-center gap-3 rounded-2xl border border-white/18 bg-white/10 backdrop-blur-xl px-4 py-3 shadow-2xl"
          >
            <div className="rounded-xl bg-amber-400/20 p-2">
              <Star className="size-4 fill-yellow-400 text-yellow-400" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold leading-none text-white">4.9 / 5.0</p>
              <p className="mt-1 text-[10px] text-white/60">500+ Google Reviews</p>
            </div>
          </motion.div>
        </FadeIn>

        {/* Doctor nameplate */}
        <FadeIn direction="up" delay={0.55}>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.2 }}
            className="absolute top-[18%] left-8 lg:left-16 hidden md:block rounded-2xl border border-white/18 bg-white/10 backdrop-blur-xl px-5 py-4 shadow-2xl text-left"
          >
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-full bg-sky-400/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="size-4 text-sky-300" />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-none">Dr. Parul Jangra</p>
                <p className="mt-1 text-[10px] text-white/55 font-medium">BDS · Oral &amp; Dental Surgeon</p>
                <p className="text-[9px] text-white/40 tracking-wider mt-0.5">Reg. No. 009857</p>
              </div>
            </div>
          </motion.div>
        </FadeIn>

      </div>

      {/* ══════════════════════════════════════════
          BOTTOM SCROLL INDICATOR
      ══════════════════════════════════════════ */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="size-5 text-white/40" />
        </motion.div>
        <span className="text-[9px] tracking-[0.22em] text-white/30 uppercase font-medium">Scroll</span>
      </div>

      {/* ══════════════════════════════════════════
          BOTTOM FROSTED EDGE — soft blend into next section
      ══════════════════════════════════════════ */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

    </section>
  );
}
