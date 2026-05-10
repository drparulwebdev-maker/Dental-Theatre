"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, User, MessageSquare, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/data/site-data";
import { FadeIn } from "@/components/ui-custom/animations";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const doctors = [
  {
    name: "Dr. Parul Jangra",
    role: "Implantologist & Aligner Specialist",
    tags: ["Smile Design", "Implants"],
    regNo: "009857",
  },
  {
    name: "Dr. Bijender Duhan",
    role: "Orthodontics & Ortho Surgeon",
    tags: ["Implantology", "Faicial Trauma"],
    regNo: "6196",
  }
];

const extendedLocations = [
  {
    ...siteConfig.locations[0],
    shortName: "Main Branch",
    image: "bg-[linear-gradient(135deg,#0f2f5e_0%,#1c6aa1_48%,#93d8f5_100%)]",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13905.565347388138!2d76.96347470111633!3d29.388106029308222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ddbe4b5af9bb1%3A0x61671b9b559b5bbd!2sDr%20Duhan%20and%20Dr%20Parul%27s%20Dental%20Theatre%20-%20Sanoli%20Road%20Panipat!5e0!3m2!1sen!2sin!4v1778243719107!5m2!1sen!2sin",
  },
  {
    name: "Dental Theatre - Gupta Hospital",
    shortName: "Gupta Hospital",
    address: "Room No. 25, G.C. Gupta Hospital, Gohana Road, HUDA Sector 11, Panipat",
    phone: "+91 89302 44673",
    hours: "Open 24hrs",
    mapUrl: "https://www.google.com/maps/place/Dr+Duhan+%26+Dr+Parul%E2%80%99s+DENTAL+Theatre/@29.3806061,76.9768055,19.75z/data=!4m6!3m5!1s0x48fc794398599e8f:0x54a48e94484ea7e3!8m2!3d29.3806952!4d76.9769885!16s%2Fg%2F11tp5rv3k1?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
    image: "bg-[linear-gradient(135deg,#35668f_0%,#7bc0d8_52%,#dff6fb_100%)]",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d614.5903240929982!2d76.97690003445777!3d29.380597493922256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48fc794398599e8f%3A0x54a48e94484ea7e3!2sDr%20Duhan%20%26%20Dr%20Parul%E2%80%99s%20DENTAL%20Theatre!5e0!3m2!1sen!2sin!4v1778405890997!5m2!1sen!2sin",
  },
];

export function LocationsSection({ id }: { id?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLocation = extendedLocations[activeIndex];

  return (
    <section id={id} className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        <FadeIn direction="up" className="mb-4 sm:mb-6 text-center lg:text-left">
          <p className="mb-3 text-[11px] font-bold tracking-[0.3em] text-primary uppercase">
            Our Clinics
          </p>
          <h2 className="font-heading text-[2rem] leading-tight sm:text-4xl md:text-5xl md:leading-none">
            Find Us Near You
          </h2>
        </FadeIn>

        <div className="flex flex-col">
          {/* Location Switcher */}
          <FadeIn direction="up" delay={0.1}>
            <div
              className="flex w-full gap-2 overflow-x-auto rounded-2xl border border-border/50 bg-slate-100/50 p-2 sm:w-fit sm:flex-wrap sm:overflow-visible sm:p-1.5"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style dangerouslySetInnerHTML={{
                __html: `
                .overflow-x-auto::-webkit-scrollbar {
                  display: none;
                }
              ` }} />
              {extendedLocations.map((loc, idx) => (
                <button
                  key={loc.shortName}
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "shrink-0 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-5",
                    activeIndex === idx
                      ? "bg-white text-primary shadow-sm ring-1 ring-border/50"
                      : "text-muted-foreground hover:text-foreground hover:bg-slate-100"
                  )}
                >
                  {loc.shortName}
                </button>
              ))}
              <div className="w-4 shrink-0 sm:hidden" aria-hidden="true" />
            </div>
          </FadeIn>

          <div className="min-h-0 mt-2 sm:mt-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 gap-9 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-16"
              >
                <div className="flex flex-col gap-6 sm:gap-8 lg:col-start-1">
                  <h3 className="order-1 text-[1.45rem] font-bold leading-tight sm:text-2xl">{activeLocation.name}</h3>

                  {/* Doctor Profiles - Side by Side */}
                  <div className="order-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {doctors.map((doc) => (
                      <div key={doc.name} className="rounded-2xl border border-primary/10 bg-slate-50/80 p-4 shadow-sm">
                        <div className="mb-3 flex items-center gap-3">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <User className="size-5" />
                          </div>
                          <div>
                            <p className="text-[13px] font-bold text-foreground">{doc.name}</p>
                            <p className="text-[11px] font-medium text-primary line-clamp-1">{doc.role}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {doc.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-lg bg-white px-2 py-0.5 text-[9px] font-medium text-muted-foreground shadow-xs border border-border/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile Image/Map column */}
                  <div className="order-3 block lg:hidden">
                    <div className="relative h-[360px] w-full overflow-hidden rounded-[26px] shadow-2xl shadow-primary/10 ring-1 ring-border/50 sm:h-[430px] sm:rounded-[32px]">
                      <div className={cn("absolute inset-0 transition-colors duration-500", activeLocation.image)}>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-white/60 tracking-widest uppercase text-xs font-semibold">Clinic Interior</p>
                        </div>
                      </div>

                      <div className="absolute right-4 bottom-4 left-4 h-[38%] overflow-hidden rounded-2xl bg-white shadow-2xl ring-4 ring-white/20 sm:left-auto sm:right-6 sm:bottom-6 sm:h-[30%] sm:min-h-[160px] sm:w-[35%] sm:min-w-[200px]">
                        <iframe
                          src={activeLocation.mapEmbed}
                          className="w-full h-full border-0"
                          allowFullScreen={false}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 rounded-2xl" />
                      </div>
                    </div>
                  </div>

                  <div className="order-4 space-y-3 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <MapPin className="size-5 shrink-0 text-primary mt-0.5" />
                      <p className="text-[14px] leading-relaxed sm:text-[15px]">{activeLocation.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="size-5 shrink-0 text-primary" />
                      <p className="text-[14px] sm:text-[15px]">{activeLocation.phone}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="size-5 shrink-0 text-primary mt-0.5" />
                      <p className="text-[14px] leading-relaxed sm:text-[15px]">{activeLocation.hours}</p>
                    </div>
                  </div>

                  <div className="order-5 grid gap-3 sm:flex sm:flex-wrap">
                    <Button
                      nativeButton={false}
                      size="lg"
                      className="h-12 w-full rounded-xl px-8 shadow-md shadow-primary/20 sm:w-auto"
                      render={<Link href={siteConfig.links.whatsapp} target="_blank" />}
                    >
                      <MessageSquare className="mr-2 size-4" />
                      Book Consultation
                    </Button>
                    <Button
                      nativeButton={false}
                      size="lg"
                      variant="outline"
                      className="h-12 w-full rounded-xl bg-white px-6 hover:bg-slate-50 sm:w-auto"
                      render={<Link href={activeLocation.mapUrl} target="_blank" />}
                    >
                      Get Directions
                      <ExternalLink className="ml-2 size-4" />
                    </Button>
                  </div>
                </div>

                <div className="hidden lg:block lg:col-start-2 lg:-mt-12">
                  <div className="relative h-[360px] w-full overflow-hidden rounded-[26px] shadow-2xl shadow-primary/10 ring-1 ring-border/50 sm:h-[430px] sm:rounded-[32px] lg:h-[500px]">
                    <div className={cn("absolute inset-0 transition-colors duration-500", activeLocation.image)}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white/60 tracking-widest uppercase text-xs font-semibold">Clinic Interior</p>
                      </div>
                    </div>

                    <div className="absolute right-4 bottom-4 left-4 h-[38%] overflow-hidden rounded-2xl bg-white shadow-2xl ring-4 ring-white/20 sm:left-auto sm:right-6 sm:bottom-6 sm:h-[30%] sm:min-h-[160px] sm:w-[35%] sm:min-w-[200px]">
                      <iframe
                        src={activeLocation.mapEmbed}
                        className="w-full h-full border-0"
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                      <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 rounded-2xl" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
