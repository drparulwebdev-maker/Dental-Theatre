"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { siteConfig } from "@/lib/data/site-data";
import { FadeIn, StaggerContainer } from "@/components/ui-custom/animations";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesPreview() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.25),rgba(236,244,249,0.8))]" />

      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center text-center">
          <FadeIn direction="up">
            <p className="mb-3 text-[11px] font-bold tracking-[0.3em] text-primary uppercase">
              What We Offer
            </p>
            <h2 className="mb-4 font-heading text-4xl leading-none md:text-5xl">
              Our Specialised Treatments
            </h2>
            <p className="text-[15px] leading-[1.85] text-muted-foreground">
              From routine check-ups to advanced cosmetic procedures, every service is shaped
              around patient comfort, aesthetic detail, and clinical precision.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, index) => {
            const iconMap = LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>;
            const Icon = (iconMap[service.icon] as LucideIcons.LucideIcon) || LucideIcons.Activity;

            return (
              <FadeIn key={service.slug} direction="up" delay={index * 0.08}>
                <Card className="group relative h-full cursor-pointer overflow-hidden rounded-[24px] border border-white/70 bg-white/80 shadow-[0_20px_60px_-40px_rgba(7,33,77,0.5)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_28px_90px_-45px_rgba(9,42,92,0.6)]">
                  <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(37,112,160,0.08),transparent)]" />
                  <CardHeader className="px-6 pt-6 pb-3">
                    <div className="mb-4 flex size-11 items-center justify-center rounded-2xl border border-primary/10 bg-primary/8 text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-base leading-snug font-bold transition-colors group-hover:text-primary">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="mt-1.5 text-sm leading-[1.75] text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <div className="mb-4 h-px bg-border/50" />
                    <Link
                      href={`/services#${service.slug}`}
                      className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-primary"
                    >
                      Learn more
                      <ArrowRight className="size-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <FadeIn direction="up">
            <Button
              nativeButton={false}
              variant="outline"
              className="h-11 rounded-xl border-border/70 bg-white/70 px-8 text-sm hover:border-primary/50 hover:bg-white"
              render={<Link href="/services" />}
            >
              View All Services
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
