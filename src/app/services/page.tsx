"use client";

import { FadeIn, StaggerContainer } from "@/components/ui-custom/animations";
import { siteConfig } from "@/lib/data/site-data";
import { Card, CardContent } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageSquare, ArrowRight, PhoneCall } from "lucide-react";

export default function ServicesPage() {
  // Group services by category
  const servicesByCategory = siteConfig.services.reduce((acc, service) => {
    const category = service.category || "General";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, typeof siteConfig.services>);

  return (
    <div className="flex w-full flex-col">
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#0a192f] py-14 text-white sm:py-20 lg:py-28">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-[30%] left-[-10%] h-[500px] w-[500px] rounded-full bg-sky-500/20 blur-[100px]" />
          <div className="absolute -bottom-[20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-primary/30 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-10">
          <FadeIn direction="up">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.2em] text-sky-200 uppercase backdrop-blur-md sm:mb-6 sm:px-4 sm:text-[11px] sm:tracking-[0.25em]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-sky-500"></span>
              </span>
              Comprehensive Care
            </div>
            <h1 className="mb-5 text-[2.4rem] font-extrabold leading-tight tracking-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              Our <span className="text-sky-300">Services</span>
            </h1>
            <p className="mx-auto max-w-2xl text-[14px] leading-[1.75] text-white/70 sm:text-[16px] sm:leading-relaxed">
              From advanced implantology to precision smile design, discover a full spectrum of dental treatments performed with theatrical perfection and absolute care.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Categorized Services list */}
      <section className="bg-[#f8fbff] py-12 sm:py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
            {Object.entries(servicesByCategory).map(([category, services]) => (
              <div key={category} className="scroll-mt-24">
                <FadeIn direction="up">
                  <div className="mb-5 flex items-center gap-4 sm:mb-8">
                    <h2 className="text-[1.55rem] font-bold tracking-tight text-foreground md:text-3xl">
                      {category}
                    </h2>
                    <div className="h-px flex-grow bg-gradient-to-r from-border to-transparent" />
                  </div>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                  {services.map((service, i) => {
                    const iconMap = LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>;
                    const Icon = (iconMap[service.icon] as LucideIcons.LucideIcon) || LucideIcons.Activity;

                    return (
                      <FadeIn key={service.slug} direction="up" delay={i * 0.05}>
                        <Card
                          id={service.slug}
                          className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/60 bg-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-[0_20px_60px_-15px_rgba(11,56,102,0.12)] sm:rounded-[24px]"
                        >
                          <CardContent className="flex flex-grow flex-col p-5 sm:p-6">
                            <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4">
                              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary/10 bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white sm:size-12">
                                <Icon className="size-5" />
                              </div>
                              <h3 className="text-base font-bold leading-tight text-foreground transition-colors group-hover:text-primary sm:text-lg">
                                {service.title}
                              </h3>
                            </div>
                            
                            <p className="mb-5 flex-grow text-[13px] leading-[1.7] text-muted-foreground sm:mb-6 sm:text-sm">
                              {service.description}
                            </p>
                            
                            <div className="mt-auto border-t border-border/50 pt-4">
                              <Link
                                href={siteConfig.links.whatsapp}
                                target="_blank"
                                className="inline-flex w-fit items-center text-xs font-semibold text-primary/80 transition-colors hover:text-primary"
                              >
                                Book Consultation
                                <ArrowRight className="ml-1.5 size-3.5" />
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                      </FadeIn>
                    );
                  })}
                </StaggerContainer>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-primary py-14 text-white sm:py-20 lg:py-24">
        <div className="absolute inset-0 z-0 opacity-20">
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="container relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-10">
          <FadeIn direction="up">
            <p className="mb-4 text-[11px] font-bold tracking-[0.25em] text-white/60 uppercase">
              Personalised Care
            </p>
            <h2 className="mb-5 text-[2rem] font-extrabold leading-tight tracking-tight md:text-4xl lg:mb-6 lg:text-5xl">
              Not sure which treatment is right for you?
            </h2>
            <p className="mx-auto mb-8 hidden max-w-2xl text-[14px] leading-[1.75] text-white/80 sm:mb-10 sm:block sm:text-[16px] sm:leading-relaxed">
              Every smile is unique. Schedule a comprehensive check-up with Dr. Parul to discuss your goals, explore your options, and create a highly personalised treatment plan.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                nativeButton={false}
                size="lg"
                variant="secondary"
                className="h-12 w-full rounded-xl bg-white px-7 text-sm font-bold text-primary shadow-[0_8px_25px_rgb(0,0,0,0.15)] hover:bg-slate-50 hover:text-primary sm:h-14 sm:w-auto sm:px-8 sm:text-[15px]"
                render={<Link href={siteConfig.links.whatsapp} target="_blank" />}
              >
                <MessageSquare className="mr-2 size-4" />
                Talk to Us on WhatsApp
              </Button>
              <p className="text-xs font-medium text-white/50 sm:hidden">or</p>
              <Button
                nativeButton={false}
                size="lg"
                variant="outline"
                className="h-12 w-full rounded-xl border-white/20 bg-white/5 px-7 text-sm font-bold text-white hover:bg-white/10 hover:text-white sm:h-14 sm:w-auto sm:px-8 sm:text-[15px]"
                render={<a href="tel:+918930244673" />}
              >
                <PhoneCall className="mr-2.5 size-5" />
                Call Us
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
