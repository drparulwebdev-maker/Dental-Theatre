"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, Calendar, User, MessageSquare, ArrowRight, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/data/site-data";
import { FadeIn } from "@/components/ui-custom/animations";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const extendedLocations = [
  {
    ...siteConfig.locations[0],
    shortName: "Main Branch",
    doctor: "Dr. Parul Jangra",
    doctorRole: "Implantologist & Aligner Specialist",
    doctorTags: ["Smile Design", "Implants", "Oral Surgery"],
    regNo: "009857",
    image: "bg-[linear-gradient(135deg,#0f2f5e_0%,#1c6aa1_48%,#93d8f5_100%)]",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13905.565347388138!2d76.96347470111633!3d29.388106029308222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ddbe4b5af9bb1%3A0x61671b9b559b5bbd!2sDr%20Duhan%20and%20Dr%20Parul%27s%20Dental%20Theatre%20-%20Sanoli%20Road%20Panipat!5e0!3m2!1sen!2sin!4v1778243719107!5m2!1sen!2sin",
  },
  {
    ...siteConfig.locations[1],
    shortName: "City Center",
    doctor: "Dr. Amit Sharma",
    doctorRole: "Orthodontist",
    doctorTags: ["Braces", "Invisalign", "8+ Yrs Exp"],
    image: "bg-[linear-gradient(135deg,#35668f_0%,#7bc0d8_52%,#dff6fb_100%)]",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111551.99264671043!2d76.9712!3d29.3909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ddb0507a213e1%3A0xcb1b590e89cb79e0!2sPanipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin",
  },
  {
    ...siteConfig.locations[2],
    shortName: "HUDA Section",
    doctor: "Dr. Neha Verma",
    doctorRole: "Pediatric Dentist",
    doctorTags: ["Child Care", "Painless", "5+ Yrs Exp"],
    image: "bg-[linear-gradient(160deg,#0b2449_0%,#14578a_58%,#7ccde8_100%)]",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111551.99264671043!2d76.9712!3d29.3909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ddb0507a213e1%3A0xcb1b590e89cb79e0!2sPanipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin",
  },
];

export function LocationsSection({ id }: { id?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLocation = extendedLocations[activeIndex];

  return (
    <section id={id} className="relative overflow-hidden py-16 lg:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        
        <FadeIn direction="up" className="mb-10 text-center lg:text-left">
          <p className="mb-3 text-[11px] font-bold tracking-[0.3em] text-primary uppercase">
            Our Clinics
          </p>
          <h2 className="font-heading text-4xl leading-none md:text-5xl">
            Find Us Near You
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Side: Info & Controls */}
          <div className="flex flex-col">
            
            {/* Location Switcher */}
            <FadeIn direction="up" delay={0.1}>
              <div className="flex flex-wrap gap-2 mb-8 bg-slate-100/50 p-1.5 rounded-2xl border border-border/50 w-fit">
                {extendedLocations.map((loc, idx) => (
                  <button
                    key={loc.shortName}
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300",
                      activeIndex === idx
                        ? "bg-white text-primary shadow-sm ring-1 ring-border/50"
                        : "text-muted-foreground hover:text-foreground hover:bg-slate-100"
                    )}
                  >
                    {loc.shortName}
                  </button>
                ))}
              </div>
            </FadeIn>

            <div className="min-h-[380px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-8"
                >
                  
                  {/* Location Info */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{activeLocation.name}</h3>
                    
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <MapPin className="size-5 shrink-0 text-primary mt-0.5" />
                        <p className="text-[15px] leading-relaxed">{activeLocation.address}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="size-5 shrink-0 text-primary" />
                        <p className="text-[15px]">{activeLocation.phone}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="size-5 shrink-0 text-primary mt-0.5" />
                        <p className="text-[15px] leading-relaxed">{activeLocation.hours}</p>
                      </div>
                    </div>
                  </div>

                  {/* Doctor Profile */}
                  <div className="rounded-[24px] border border-primary/10 bg-slate-50/80 p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <User className="size-6" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-foreground">{activeLocation.doctor}</p>
                        <p className="text-sm font-medium text-primary">{activeLocation.doctorRole}</p>
                        {"regNo" in activeLocation && (
                          <p className="mt-0.5 text-[10px] text-muted-foreground uppercase tracking-wider">
                            Reg. no. {activeLocation.regNo}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {activeLocation.doctorTags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-3">
                    <Button
                      nativeButton={false}
                      size="lg"
                      className="h-12 rounded-xl px-8 shadow-md shadow-primary/20"
                      render={<Link href={siteConfig.links.whatsapp} target="_blank" />}
                    >
                      <MessageSquare className="mr-2 size-4" />
                      Book Consultation
                    </Button>
                    <Button
                      nativeButton={false}
                      size="lg"
                      variant="outline"
                      className="h-12 rounded-xl px-6 bg-white hover:bg-slate-50"
                      render={<Link href={activeLocation.mapUrl} target="_blank" />}
                    >
                      Get Directions
                      <ExternalLink className="ml-2 size-4" />
                    </Button>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Image & Map Overlay */}
          <FadeIn direction="left" delay={0.2} className="h-full">
            <div className="relative h-[500px] w-full rounded-[32px] overflow-hidden shadow-2xl shadow-primary/10 ring-1 ring-border/50">
              
              {/* Abstract/Placeholder Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className={cn("absolute inset-0 transition-colors duration-500", activeLocation.image)}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <p className="text-white/60 tracking-widest uppercase text-sm font-semibold">Clinic Interior</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Interactive Map Widget Overlay */}
              <motion.div 
                className="absolute bottom-6 right-6 w-[35%] h-[30%] min-w-[200px] min-h-[160px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20 bg-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 20 }}
              >
                <AnimatePresence mode="wait">
                  <motion.iframe
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={activeLocation.mapEmbed}
                    className="w-full h-full border-0"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </AnimatePresence>
                
                {/* Subtle gradient to blend map edges if needed */}
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 rounded-2xl" />
              </motion.div>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
