import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { PhotoGridSection } from "@/components/sections/photo-grid";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { LocationsSection } from "@/components/sections/locations";
import { FaqSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Hero />
      <ServicesPreview />
      <PhotoGridSection />
      <TestimonialsSection />
      <LocationsSection id="locations" />
      <FaqSection />
      <CTASection />
    </div>
  );
}
