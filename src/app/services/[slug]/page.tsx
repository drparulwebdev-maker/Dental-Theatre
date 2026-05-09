import { siteConfig } from "@/lib/data/site-data";
import { FadeIn } from "@/components/ui-custom/animations";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { MessageSquare, ArrowLeft, PhoneCall, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const iconMap = LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>;
  const Icon = (iconMap[service.icon] as LucideIcons.LucideIcon) || LucideIcons.Activity;

  return (
    <div className="flex w-full flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a192f] py-16 text-white sm:py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-[30%] left-[-10%] h-[500px] w-[500px] rounded-full bg-sky-500/20 blur-[100px]" />
          <div className="absolute -bottom-[20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-primary/30 blur-[120px]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-5xl px-5 sm:px-6 lg:px-10">
          <FadeIn direction="up">
            <Link
              href="/services"
              className="mb-8 inline-flex items-center text-sm font-medium text-sky-300 transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 size-4" />
              Back to Services
            </Link>
            
            <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-white/10 text-sky-300 backdrop-blur-md">
              <Icon className="size-8" />
            </div>
            
            <h1 className="mb-6 text-[2.4rem] font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-sky-500/20 px-4 py-1.5 text-xs font-bold tracking-wide text-sky-200 uppercase backdrop-blur-sm">
                {service.category}
              </span>
              <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-white/70 uppercase backdrop-blur-sm">
                Expert Care
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content Section - "The Blog Kind of Thing" */}
      <section className="bg-white py-12 sm:py-20">
        <div className="container mx-auto max-w-5xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <FadeIn direction="up">
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl">
                    About {service.title}
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                    <p className="text-lg leading-relaxed text-slate-600">
                      At Dental Theatre, we prioritize your comfort and oral health above all else. Our team of specialists, led by Dr. Parul Jangra, utilizes the latest technology and techniques to ensure that your treatment is both effective and painless.
                    </p>
                  </div>
                  
                  <div className="mt-10">
                    <h3 className="mb-6 text-xl font-bold text-slate-900">
                      Why choose this treatment?
                    </h3>
                    <div className="space-y-4">
                      {[
                        "Advanced diagnostic tools for precision planning",
                        "Minimally invasive techniques for faster recovery",
                        "Personalized care tailored to your specific needs",
                        "Premium quality materials for long-lasting results",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                          <span className="text-slate-600 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 rounded-2xl bg-sky-50 p-6 border border-sky-100/50">
                    <p className="text-slate-700 italic leading-relaxed">
                      "If you're considering {service.title.toLowerCase()}, we invite you to schedule a consultation with our experts. We'll walk you through the entire process, answer any questions you may have, and help you make an informed decision about your dental health."
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <FadeIn direction="up" delay={0.1}>
                <div className="sticky top-24 rounded-3xl bg-slate-50 p-6 shadow-sm border border-slate-100">
                  <h3 className="mb-4 text-xl font-bold text-slate-900">
                    Book a Consultation
                  </h3>
                  <p className="mb-6 text-sm text-slate-600">
                    Speak with Dr. Parul Jangra about {service.title.toLowerCase()} and get a personalized treatment plan.
                  </p>
                  
                  <div className="space-y-3">
                    <Button
                      nativeButton={false}
                      className="w-full h-12 rounded-xl bg-primary font-bold shadow-lg shadow-primary/20"
                      render={<Link href={siteConfig.links.whatsapp} target="_blank" />}
                    >
                      <MessageSquare className="mr-2 size-4" />
                      Chat on WhatsApp
                    </Button>
                    
                    <Button
                      nativeButton={false}
                      variant="outline"
                      className="w-full h-12 rounded-xl border-primary/20 text-primary font-bold hover:bg-primary/5"
                      render={<a href="tel:+918930244673" />}
                    >
                      <PhoneCall className="mr-2.5 size-4" />
                      Call Us Now
                    </Button>
                  </div>

                  <div className="mt-8 border-t border-slate-200 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                        <LucideIcons.Clock className="size-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Opening Hours</p>
                        <p className="text-xs text-slate-500">Mon-Sat: 9:30 AM - 7:30 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services - Quick Links */}
      <section className="bg-slate-50 py-12 border-t border-slate-100">
        <div className="container mx-auto max-w-5xl px-5 sm:px-6 lg:px-10">
          <FadeIn direction="up">
            <h2 className="mb-8 text-xl font-bold text-slate-900">Explore Other Services</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {siteConfig.services
                .filter((s) => s.slug !== slug)
                .slice(0, 3)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm border border-slate-100 transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                      {(() => {
                        const SIcon = (iconMap[s.icon] as LucideIcons.LucideIcon) || LucideIcons.Activity;
                        return <SIcon className="size-5" />;
                      })()}
                    </div>
                    <span className="font-bold text-sm text-slate-800 line-clamp-1">{s.title}</span>
                  </Link>
                ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}