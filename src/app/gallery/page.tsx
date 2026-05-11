"use client";

import { useState } from "react";
import { FadeIn, StaggerContainer } from "@/components/ui-custom/animations";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Maximize2, ArrowRight } from "lucide-react";

const categories = ["All", "Clinic", "Doctor at Work", "Procedures", "Patient Setups"];

const galleryImages = [
  { id: 1, category: "Clinic", title: "Modern Reception", placeholder: "Reception Area" },
  { id: 2, category: "Clinic", title: "Operation Theatre", placeholder: "Theatre Room" },
  { id: 3, category: "Doctor at Work", title: "Dr. Parul Consulting", placeholder: "Consultation" },
  { id: 4, category: "Procedures", title: "Advanced Laser Treatment", placeholder: "Laser Procedure" },
  { id: 5, category: "Patient Setups", title: "Comfortable Dental Chair", placeholder: "Patient Comfort" },
  { id: 6, category: "Procedures", title: "Digital X-Ray", placeholder: "Diagnostics" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="flex w-full flex-col">
      {/* Page hero */}
      <section className="border-b border-border/40 bg-muted/20 pt-10 pb-5 sm:py-14 lg:py-16">
        <div className="container mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-10">
          <FadeIn direction="up">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">
              Inside Dental Theatre
            </p>
            <h1 className="mb-4 text-[2rem] font-bold tracking-tight md:text-5xl">Smile Gallery</h1>
            <p className="mx-auto max-w-xl text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
              A glimpse into our world of precision and care. Explore our facilities, procedures, and transformations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="pt-2 pb-12 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          {/* Category filters */}
          <FadeIn direction="up" delay={0.1}>
            <div 
              className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-2.5 sm:mx-0 sm:mb-10 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* For Webkit browsers (Chrome, Safari, Edge) */}
              <style dangerouslySetInnerHTML={{ __html: `
                .overflow-x-auto::-webkit-scrollbar {
                  display: none;
                }
              ` }} />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {filteredImages.map((image, i) => (
              <FadeIn key={image.id} direction="up" delay={i * 0.06}>
                <Dialog>
                  <DialogTrigger
                    nativeButton={false}
                    render={
                      <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-[20px] border border-border/50 bg-muted/30 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg sm:rounded-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-semibold uppercase tracking-widest text-xs text-center p-4">
                          {image.placeholder}
                        </div>
                        <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                          <Maximize2 className="size-8 mb-3 scale-75 group-hover:scale-100 transition-transform duration-300" />
                          <h3 className="text-base font-semibold text-center leading-snug">{image.title}</h3>
                          <p className="text-xs opacity-75 mt-1">{image.category}</p>
                        </div>
                      </div>
                    }
                  />
                  <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-transparent shadow-none">
                    <DialogTitle className="sr-only">{image.title}</DialogTitle>
                    <div className="aspect-video w-full bg-muted rounded-xl flex items-center justify-center relative overflow-hidden">
                      <div className="text-muted-foreground/30 font-semibold text-lg">{image.placeholder} · Full View</div>
                      <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-black/70 to-transparent text-white">
                        <h3 className="text-lg font-semibold">{image.title}</h3>
                        <p className="text-xs opacity-70 mt-0.5">{image.category}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border/40 bg-muted/10 py-12 sm:py-14">
        <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-8">
            <FadeIn direction="right" className="text-center lg:text-left">
              <h2 className="mb-3 text-[1.65rem] font-bold tracking-tight md:text-3xl">
                See the Theatre in Action
              </h2>
              <p className="max-w-md text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                Follow us on Instagram for daily updates, patient transformations, and a peek behind the scenes.
              </p>
            </FadeIn>
            <FadeIn direction="left">
              <Button
                nativeButton={false}
                size="lg"
                variant="outline"
                className="h-11 w-full rounded-xl px-8 text-sm font-semibold hover:border-primary/50 sm:w-auto"
                render={<a href="https://www.instagram.com/dentaltheatrepanipat?igsh=MWYxY3p3Y2dobTNzaA%3D%3D&utm_source=qr" target="_blank" />}
              >
                Follow @dentaltheatre
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
