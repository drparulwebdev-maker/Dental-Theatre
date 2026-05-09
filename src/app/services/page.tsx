"use client";

import { FadeIn, StaggerContainer } from "@/components/ui-custom/animations";
import { siteConfig } from "@/lib/data/site-data";
import { Card, CardContent } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageSquare, ArrowRight, PhoneCall } from "lucide-react";

export default function ServicesPage() {
  const allServices = siteConfig.services;

  return (
    <div className="flex w-full flex-col">
      {/* Page hero - simplified */}
      <section className="relative overflow-hidden bg-[#0a192f] py-16 text-white sm:py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-[30%] left-[-10%] h-[500px] w-[500px] rounded-full bg-sky-500/20 blur-[100px]" />
          <div className="absolute -bottom-[20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-primary/30 blur-[120px]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-10">
          <FadeIn direction="up">
            <h1 className="mb-6 text-[2.4rem] font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Our <span className="text-sky-300">Services</span>
            </h1>
            <p className="mx-auto max-w-2xl text-[14px] leading-[1.75] text-white/70 sm:text-[16px]">
              Explore our full spectrum of dental treatments performed with theatrical perfection and absolute care.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Unified Services Grid */}
      <section className="bg-[#f8fbff] py-12 sm:py-20">
        <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allServices.map((service, i) => {
              const iconMap = LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>;
              const Icon = (iconMap[service.icon] as LucideIcons.LucideIcon) || LucideIcons.Activity;

              return (
                <FadeIn key={service.slug} direction="up" delay={i * 0.02}>
                  <Link href={`/services/${service.slug}`} className="group block h-full">
                    <Card
                      className="h-full overflow-hidden rounded-[20px] border border-white/60 bg-white/70 shadow-[0_4px_20px_rgb(0,0,0,0.03)] backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/20 group-hover:bg-white group-hover:shadow-[0_15px_40px_-10px_rgba(11,56,102,0.1)]"
                    >
                      <CardContent className="flex h-full flex-col p-6">
                        <div className="mb-4 flex size-12 items-center justify-center rounded-2xl border border-primary/10 bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                          <Icon className="size-6" />
                        </div>
                        
                        <h3 className="mb-2 text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                          {service.title}
                        </h3>
                        
                        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>
                        
                        <div className="mt-auto flex items-center text-xs font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                          LEARN MORE
                          <ArrowRight className="ml-1.5 size-3.5" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </FadeIn>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Simplified Bottom CTA */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-10">
          <FadeIn direction="up">
            <h2 className="mb-6 text-[1.8rem] font-extrabold leading-tight tracking-tight md:text-3xl">
              Ready to start your dental journey?
            </h2>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                nativeButton={false}
                size="lg"
                variant="secondary"
                className="h-12 w-full rounded-xl bg-white px-8 text-sm font-bold text-primary sm:w-auto"
                render={<Link href={siteConfig.links.whatsapp} target="_blank" />}
              >
                <MessageSquare className="mr-2 size-4" />
                WhatsApp Us
              </Button>
              <Button
                nativeButton={false}
                size="lg"
                variant="outline"
                className="h-12 w-full rounded-xl border-white/20 bg-white/5 px-8 text-sm font-bold text-white sm:w-auto"
                render={<a href="tel:+918930244673" />}
              >
                <PhoneCall className="mr-2.5 size-5" />
                Call Now
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
