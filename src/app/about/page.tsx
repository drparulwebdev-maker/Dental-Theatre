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
      <section className="py-16 lg:py-20 bg-muted/20 border-b border-border/40">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Image placeholder */}
            <FadeIn direction="right">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 ring-1 ring-border/40">
                <Image
                  src="/hero_image.jpeg"
                  alt="Dr. Parul Jangra"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-6 py-5">
                  <p className="text-white font-semibold text-lg">Dr. Parul Jangra</p>
                  <p className="text-white/65 text-xs mt-0.5 font-light">BDS (M.I.D.A) · Reg. no. 009857</p>
                </div>
              </div>
            </FadeIn>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <FadeIn direction="left">
                <Badge className="w-fit px-3 py-1 text-[11px] tracking-wider uppercase font-semibold mb-1">
                  Founder & Lead Dentist
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mt-3">
                  Meet Dr. Parul Jangra
                </h1>
                <p className="text-base text-muted-foreground leading-relaxed mt-3 italic border-l-2 border-primary/40 pl-4">
                  "At Dental Theatre, we don't just fix teeth — we perform a symphony of care to ensure every patient leaves with a smile that's ready for the spotlight."
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
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
          <div className="text-center mb-12">
            <FadeIn direction="up">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">
                Credentials
              </p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Qualifications & Achievements
              </h2>
            </FadeIn>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {credentials.map((cred, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <Card className="text-center border border-border/60 shadow-sm hover:shadow-md hover:border-primary/20 transition-all rounded-xl">
                  <CardContent className="pt-8 pb-8">
                    <div className="size-12 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                      <cred.icon className="size-5" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">{cred.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1.5">{cred.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeIn direction="right">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-white/50 mb-4">
                Why Choose Us
              </p>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8 leading-tight">
                Why Choose Dr. Parul?
              </h2>
              <div className="flex flex-col gap-4">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-white/70 shrink-0 mt-0.5" />
                    <span className="text-[15px] opacity-85 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="aspect-video rounded-2xl bg-white/8 backdrop-blur-sm border border-white/15 flex items-center justify-center">
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
