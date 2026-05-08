"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/data/site-data";
import { FadeIn } from "@/components/ui-custom/animations";
import { Counter } from "@/components/ui-custom/counter";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-24">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(180deg,rgba(14,46,91,0.08),transparent)]" />
        <div className="absolute -top-32 right-[-7rem] h-[600px] w-[600px] rounded-full bg-primary/12 blur-[120px]" />
        <div className="absolute bottom-0 left-[-6rem] h-[420px] w-[420px] rounded-full bg-sky-200/40 blur-[120px]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(19,74,123,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(19,74,123,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5 sm:gap-6">
            <FadeIn direction="up">
              <div className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.2em] text-primary uppercase sm:text-[11px] sm:tracking-[0.28em]">
                <ShieldCheck className="size-3" />
                <span className="truncate">Most Trusted Dental Clinic in Panipat</span>
              </div>
              <h1 className="mt-4 text-[2.6rem] font-extrabold leading-[1.04] tracking-tight text-foreground sm:mt-5 sm:text-4xl md:text-[2.75rem] lg:text-5xl lg:leading-[1.08]">
                Where Science Meets<br className="hidden md:block" /> the{" "}
                <span className="text-primary underline decoration-primary/35 decoration-wavy underline-offset-4">
                  Art of Smiles.
                </span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {["Smile Design", "Implants", "Invisible Aligners"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/70 bg-white/75 px-3 py-1 text-xs font-medium text-foreground/72 shadow-sm backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.14} className="lg:hidden">
              <div className="relative mx-auto w-full max-w-[26rem] overflow-visible px-1 pb-5 pt-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-muted/20 shadow-2xl shadow-primary/10 ring-1 ring-border/50">
                  <Image
                    src="/hero_image.jpeg"
                    alt="Dr. Parul Jangra"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-5 py-6">
                    <p className="text-base font-semibold leading-tight text-white">Dr. Parul Jangra</p>
                    <p className="mt-1 text-[11px] font-medium text-white/78">BDS (M.I.D.A) · Oral & Dental Surgeon</p>
                    <p className="mt-0.5 text-[10px] font-medium tracking-wider text-white/58">Reg. no. 009857</p>
                  </div>
                </div>

                <div className="absolute right-0 top-0 rounded-[20px] border border-white/70 bg-white/92 px-3 py-2 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="rounded-xl bg-amber-50 p-1.5">
                      <Star className="size-3.5 fill-yellow-500 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-none">4.9 / 5.0</p>
                      <p className="mt-1 text-[10px] text-muted-foreground">Google Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.18}>
              <p className="max-w-[560px] text-[15px] leading-[1.75] text-muted-foreground md:text-base md:leading-[1.85]">
                Dental Theatre combines advanced clinical care with a calmer, more polished
                patient experience, so every consultation, treatment plan, and smile makeover
                feels precise, personal, and confidence-building.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.28}>
                <div className="rounded-[24px] border border-white/70 bg-white/78 p-4 shadow-[0_20px_60px_-40px_rgba(7,33,77,0.55)] backdrop-blur-md sm:rounded-[28px] sm:p-5">
                  <p className="text-[11px] font-bold tracking-[0.28em] text-primary/80 uppercase">
                    Patient Promise
                  </p>
                  <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">
                    Detailed consultations, aesthetic precision, and a treatment environment
                    that feels premium without becoming intimidating.
                  </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.34}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  nativeButton={false}
                  size="lg"
                  className="h-12 w-full rounded-xl px-7 text-sm font-semibold shadow-md shadow-primary/20 sm:w-auto"
                  render={<Link href={siteConfig.links.whatsapp} target="_blank" />}
                >
                  <MessageSquare className="mr-2 size-4" />
                  Book Appointment
                </Button>
                <Button
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                  className="h-12 w-full rounded-xl border-border/70 bg-white/65 px-7 text-sm backdrop-blur-sm hover:bg-white sm:w-auto"
                  render={<Link href="/services" />}
                >
                  Explore Services
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.45}>
              <div className="mt-2 grid grid-cols-3 gap-3 border-t border-border/50 pt-5 sm:flex sm:items-start sm:gap-6 sm:pt-6">
                <div>
                  <p className="text-[1.55rem] font-bold tracking-tight sm:text-2xl">
                    <Counter value={10} suffix="k+" />
                  </p>
                  <p className="mt-1 text-[11px] font-medium leading-tight text-muted-foreground sm:mt-0.5 sm:text-xs">Happy Patients</p>
                </div>
                <div className="hidden h-10 w-px self-center bg-border sm:block" />
                <div className="border-l border-border pl-3 sm:border-l-0 sm:pl-0">
                  <p className="text-[1.55rem] font-bold tracking-tight sm:text-2xl">
                    <Counter value={12} suffix="+" />
                  </p>
                  <p className="mt-1 text-[11px] font-medium leading-tight text-muted-foreground sm:mt-0.5 sm:text-xs">Years Experience</p>
                </div>
                <div className="hidden h-10 w-px self-center bg-border sm:block" />
                <div className="border-l border-border pl-3 sm:border-l-0 sm:pl-0">
                  <p className="text-[1.55rem] font-bold tracking-tight sm:text-2xl">
                    <Counter value={3} />
                  </p>
                  <p className="mt-1 text-[11px] font-medium leading-tight text-muted-foreground sm:mt-0.5 sm:text-xs">Clinic Locations</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="left" delay={0.2} className="relative hidden lg:block">
            <div className="relative overflow-visible px-2 pt-0 pb-8">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl shadow-primary/10 ring-1 ring-border/50 bg-muted/20">
                <Image
                  src="/hero_image.jpeg"
                  alt="Dr. Parul Jangra"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 py-8">
                  <p className="text-lg leading-tight font-semibold text-white">Dr. Parul Jangra</p>
                  <p className="mt-1 text-xs font-medium text-white/80">BDS (M.I.D.A) · Oral & Dental Surgeon</p>
                  <p className="mt-0.5 text-[10px] font-medium text-white/60 tracking-wider">Reg. no. 009857</p>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-5 right-6 rounded-[24px] border border-white/70 bg-white/92 px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-amber-50 p-2">
                    <Star className="size-4 fill-yellow-500 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-none">4.9 / 5.0</p>
                    <p className="mt-1 text-[11px] text-muted-foreground">Google Reviews</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-1 left-6 flex items-center gap-3 rounded-[24px] bg-primary px-4 py-3 text-primary-foreground shadow-xl"
              >
                <PhoneCall className="size-4 shrink-0" />
                <div>
                  <p className="text-[10px] leading-none opacity-75">Available</p>
                  <p className="mt-0.5 text-sm font-semibold">7 Days a Week</p>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
