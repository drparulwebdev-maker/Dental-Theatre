"use client";

import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { siteConfig } from "@/lib/data/site-data";

export function Footer() {
  const { Facebook, Instagram, Youtube, Mail, Phone, MapPin } = LucideIcons;

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-[#081a36] text-white">
      <div className="absolute inset-0">
        <div className="absolute left-[-6rem] top-0 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute bottom-0 right-[-5rem] h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%)]" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 pt-16 pb-12 md:grid-cols-2 lg:grid-cols-12">
          
          {/* Logo & About */}
          <div className="flex flex-col gap-5 lg:col-span-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/Logo.png" alt="Dental Theatre Logo" width={32} height={32} className="h-9 w-auto object-contain" style={{ width: 'auto', height: '2.25rem' }} />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold tracking-tight text-white leading-none">
                  <span className="text-sky-200">Dental</span> Theatre
                </span>
                <div className="flex w-full justify-between text-[13px] font-bold text-white/50 tracking-tight">
                  <span>By</span>
                  <span>Dr.</span>
                  <span>Duhan</span>
                  <span>&amp;</span>
                  <span>Dr.</span>
                  <span>Parul</span>
                </div>
              </div>
            </Link>
            <p className="max-w-[260px] text-[13px] leading-relaxed text-white/70">
              Premium dental care in Panipat, led by a team of expert doctors, where every visit feels
              like a confidence-restoring performance.
            </p>
            <div className="mt-2 flex items-center gap-3">
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-white/10 hover:text-white"
              >
                <Instagram className="size-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href={siteConfig.links.facebook}
                target="_blank"
                className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-white/10 hover:text-white"
              >
                <Facebook className="size-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href={siteConfig.links.youtube}
                target="_blank"
                className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-white/10 hover:text-white"
              >
                <Youtube className="size-4" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5 md:col-span-1 lg:col-span-2 lg:pl-4">
            <h3 className="text-[11px] font-bold tracking-widest text-white/50 uppercase">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { label: "About Clinic", href: "/about" },
                { label: "Dr. Parul Jangra", href: "/dr-parul-jangra" },
                { label: "Dr. Bijender Duhan", href: "/dr-bijender-duhan" },
                { label: "Our Services", href: "/services" },
                { label: "Smile Gallery", href: "/gallery" },
                { label: "Contact Us", href: "/#locations" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium text-white/70 transition-colors hover:text-sky-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="hidden md:flex flex-col gap-5 md:col-span-1 lg:col-span-3">
            <h3 className="text-[11px] font-bold tracking-widest text-white/50 uppercase">
              Services
            </h3>
            <nav className="flex flex-col gap-3">
              {siteConfig.services.slice(0, 5).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services#${service.slug}`}
                  className="text-[13px] font-medium text-white/70 transition-colors hover:text-sky-300"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Get in Touch */}
          <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-4">
            <h3 className="text-[11px] font-bold tracking-widest text-white/50 uppercase">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-5">
              {/* Locations */}
              <div className="flex flex-col gap-4">
                {siteConfig.locations.slice(0, 2).map((loc, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10">
                      <MapPin className="size-3.5 text-sky-300" />
                    </div>
                    <div className="flex flex-col">
                      <strong className="text-[13px] text-white/90 font-semibold leading-tight">{loc.name}</strong>
                      <span className="mt-1 text-xs leading-relaxed text-white/60">
                        {loc.address}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-1 flex flex-col gap-3 pt-5 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10">
                    <Phone className="size-3.5 text-sky-300" />
                  </div>
                  <span className="text-[13px] font-medium text-white/80">
                    8930244673 <span className="mx-2 text-white/30">|</span> 8930010599
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10">
                    <Mail className="size-3.5 text-sky-300" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-medium text-white/80">pearljangra160794@gmail.com</span>
                    <span className="text-[13px] font-medium text-white/80">bijendersingh196@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
