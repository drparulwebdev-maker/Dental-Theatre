"use client";

import Image from "next/image";
import { FadeIn, StaggerContainer } from "@/components/ui-custom/animations";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap, Briefcase, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const credentials = [
    {
      title: "BDS (M.I.D.A)",
      description: "Reg. no. 009857",
      icon: GraduationCap,
    },
    {
      title: "Diploma in Oral Surgery",
      description: "Specialized Surgical Training",
      icon: Briefcase,
    },
    {
      title: "Implantologist & Aligner Specialist",
      description: "Advanced Aesthetic Solutions",
      icon: Award,
    },
  ];

  const highlights = [
    "Expert in Oral Surgery and Dental Implants",
    "Specialized in Invisible Aligners and Smile Design",
    "Registered Professional with Reg. no. 009857",
    "Member of Indian Dental Association (M.I.D.A)",
    "Dedicated to a Patient-First, Theatrical Experience",
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Hero */}
      <section className="border-b border-border/40 bg-muted/20 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-9 sm:gap-14 lg:grid-cols-2">
            {/* Image placeholder */}
            <FadeIn direction="right">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[25rem] overflow-hidden rounded-[26px] shadow-2xl shadow-primary/10 ring-1 ring-border/40 lg:max-w-none lg:rounded-2xl">
                <Image
                  src="/hero_image.jpeg"
                  alt="Dr. Parul Jangra"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-5 py-5 sm:px-6">
                  <p className="text-base font-semibold text-white sm:text-lg">Dr. Parul Jangra</p>
                  <p className="mt-0.5 text-xs font-light text-white/65">BDS (M.I.D.A) · Reg. no. 009857</p>
                </div>
              </div>
            </FadeIn>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <FadeIn direction="left">
                <Badge className="w-fit px-3 py-1 text-[11px] tracking-wider uppercase font-semibold mb-1">
                  Founder & Lead Dentist
                </Badge>
                <h1 className="mt-3 text-[2rem] font-bold leading-tight tracking-tight md:text-4xl">
                  Meet Dr. Parul Jangra
                </h1>
                <p className="mt-3 border-l-2 border-primary/40 pl-4 text-[15px] leading-relaxed text-muted-foreground italic sm:text-base">
                  &ldquo;At Dental Theatre, we don&apos;t just fix teeth — we perform a symphony of care to ensure every patient leaves with a smile that&apos;s ready for the spotlight.&rdquo;
                </p>
                <div className="h-px w-14 bg-primary/50 rounded-full mt-5 mb-5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dr. Parul Jangra is a dedicated dental surgeon specializing in Oral Surgery, Implantology, and Aligners. With her background as a BDS (M.I.D.A) and a Diploma in Oral Surgery, she brings technical precision and aesthetic artistry to every procedure.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  Registered with the dental council (Reg. no. 009857), Dr. Parul has established Dental Theatre in Panipat as a destination for premium dental care. Her approach combines advanced clinical expertise with a calming, patient-focused environment.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-9 text-center sm:mb-12">
            <FadeIn direction="up">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">
                Credentials
              </p>
              <h2 className="text-[1.75rem] font-bold tracking-tight md:text-3xl">
                Qualifications & Achievements
              </h2>
            </FadeIn>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {credentials.map((cred, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <Card className="rounded-xl border border-border/60 text-center shadow-sm transition-all hover:border-primary/20 hover:shadow-md">
                  <CardContent className="px-5 pt-7 pb-7 sm:pt-8 sm:pb-8">
                    <div className="size-12 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                      <cred.icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight sm:text-xl">{cred.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1.5">{cred.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-primary py-12 text-primary-foreground sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-9 sm:gap-14 lg:grid-cols-2">
            <FadeIn direction="right">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-white/50 mb-4">
                Why Choose Us
              </p>
              <h2 className="mb-7 text-[1.85rem] font-bold leading-tight tracking-tight md:mb-8 md:text-4xl">
                Why Choose Dr. Parul?
              </h2>
              <div className="flex flex-col gap-4">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-white/70 shrink-0 mt-0.5" />
                    <span className="text-sm leading-snug opacity-85 sm:text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="flex aspect-video items-center justify-center rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm">
                <span className="text-white/30 text-sm italic tracking-wide">
                  Clinic Interior · Coming Soon
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
