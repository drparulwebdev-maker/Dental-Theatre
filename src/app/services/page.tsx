"use client";

import { FadeIn, StaggerContainer } from "@/components/ui-custom/animations";
import { siteConfig } from "@/lib/data/site-data";
import { Card, CardContent } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page hero */}
      <section className="py-14 lg:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl text-center">
          <FadeIn direction="up">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-white/55 mb-4">
              Full Spectrum Dental Care
            </p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Services</h1>
            <p className="text-[15px] opacity-75 max-w-2xl mx-auto leading-relaxed">
              Precision, care, and excellence in every procedure. We offer a full spectrum of dental treatments tailored to your needs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
          <StaggerContainer className="flex flex-col gap-6">
            {siteConfig.services.map((service, i) => {
              const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Activity;
              return (
                <FadeIn key={service.slug} direction="up" delay={i * 0.07}>
                  <Card
                    id={service.slug}
                    className="overflow-hidden border border-border/60 shadow-sm hover:shadow-md hover:border-primary/20 transition-all rounded-xl bg-background"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-4">
                      {/* Icon panel */}
                      <div className="lg:col-span-1 bg-muted/30 px-8 py-10 flex flex-col items-center justify-center text-primary border-b lg:border-b-0 lg:border-r border-border/50">
                        <div className="size-14 rounded-2xl bg-primary/8 border border-primary/15 flex items-center justify-center mb-4">
                          <Icon className="size-7" />
                        </div>
                        <h2 className="text-base font-semibold text-center text-foreground leading-snug">
                          {service.title}
                        </h2>
                      </div>

                      {/* Content panel */}
                      <div className="lg:col-span-3 px-8 py-10 flex flex-col justify-center gap-4 bg-background">
                        <h3 className="text-xl font-bold tracking-tight text-foreground">
                          Restore your confidence with{" "}
                          <span className="text-primary">{service.title}</span>
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                          {service.description} Our {service.title} procedures are designed to be minimally invasive while providing maximum results. We use the latest equipment and follow international safety standards to ensure your comfort.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-1">
                          <Button
                            nativeButton={false}
                            size="sm"
                            className="h-10 px-5 text-sm rounded-lg shadow-sm shadow-primary/10"
                            render={<Link href={siteConfig.links.whatsapp} target="_blank" />}
                          >
                            <MessageSquare className="mr-2 size-3.5" />
                            Book Consultation
                          </Button>
                          <Button
                            nativeButton={false}
                            size="sm"
                            variant="outline"
                            className="h-10 px-5 text-sm rounded-lg hover:border-primary/40"
                            render={<Link href="/contact" />}
                          >
                            Find Nearest Clinic
                            <ArrowRight className="ml-2 size-3.5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-muted/20 border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl text-center">
          <FadeIn direction="up">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">
              Personalised Care
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Not sure which treatment is right for you?
            </h2>
            <p className="text-[15px] text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              Every smile is unique. Schedule a comprehensive check-up with Dr. Parul to discuss your goals and create a personalised treatment plan.
            </p>
            <Button
              nativeButton={false}
              size="lg"
              className="h-12 px-8 text-sm font-semibold rounded-xl shadow-md shadow-primary/20"
              render={<Link href={siteConfig.links.whatsapp} target="_blank" />}
            >
              <MessageSquare className="mr-2 size-4" />
              Book Consultation
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
