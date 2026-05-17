import Image from "next/image";
import { FadeIn, StaggerContainer } from "@/components/ui-custom/animations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Activity,
  Hospital,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Microscope,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const stats = [
    { title: "1L+", description: "Clinical Cases Handled", icon: Users },
    { title: "12K+", description: "Specialist Surgeries", icon: Activity },
    { title: "2", description: "State-of-the-Art Centers", icon: Hospital },
    { title: "19+", description: "Years Surgical Expertise", icon: Sparkles },
  ];

  const founders = [
    {
      name: "Dr. Parul Jangra",
      credentials: "BDS, M.I.D.A · Diploma in Oral Surgery",
      speciality: "Implantologist & Aligner Specialist",
      exp: "7+ Years Surgical Experience",
      href: "/dr-parul-jangra",
      image: "/Dr parul.jpeg",
      imagePos: "object-center",
      bio: "Dr. Parul focuses on the intersection of oral health and facial aesthetics. Specializing in advanced implantology and clear aligner therapy, she prioritizes biologically-driven results that restore both function and natural symmetry.",
      accentColor: "from-sky-50 to-blue-50/40",
    },
    {
      name: "Dr. Bijender Duhan",
      credentials: "BDS, M.I.D.A · Diploma in Ortho & Oral Surgery",
      speciality: "Oral Surgeon & Implantologist",
      exp: "12+ Years Surgical Experience",
      href: "/dr-bijender-duhan",
      image: "/Dr duhan.jpeg",
      imagePos: "object-[50%_25%]",
      bio: "With over a decade in maxillofacial surgery and complex trauma management, Dr. Bijender provides the clinical depth required for advanced implantology and oral rehabilitation. His practice is defined by surgical precision and predictable patient outcomes.",
      accentColor: "from-slate-50 to-zinc-50/40",
    },
  ];

  const values = [
    {
      icon: HeartHandshake,
      title: "Direct Specialist Access",
      description:
        "We eliminate the middleman. Every consultation and procedure is handled directly by our lead specialists, ensuring high-level clinical decision-making.",
    },
    {
      icon: Microscope,
      title: "Surgical-Grade Precision",
      description:
        "Our practice utilizes high-resolution digital imaging and hospital-grade sterilization to ensure every treatment is accurate, safe, and long-lasting.",
    },
    {
      icon: ShieldCheck,
      title: "Ethical Clinical Practice",
      description:
        "Transparency is our baseline. We provide evidence-based treatment plans with no hidden costs and a focus on conservative, necessary interventions.",
    },
    {
      icon: Sparkles,
      title: "Functional Aesthetics",
      description:
        "A beautiful smile is only as good as its underlying health. We merge aesthetic design with deep clinical knowledge for results that last a lifetime.",
    },
  ];

  const detailedHighlights = [
    {
      title: "Specialist Implantology",
      description: "Advanced UV and Non-UV implant systems for high-success oral rehabilitation.",
      icon: Sparkles,
    },
    {
      title: "Surgical Infrastructure",
      description: "Dedicated units for minor oral surgeries and trauma management in a controlled environment.",
      icon: Hospital,
    },
    {
      title: "Precision Therapeutics",
      description: "Laser-assisted procedures and single-sitting RCTs for faster, more comfortable recovery.",
      icon: Activity,
    },
    {
      title: "Elite Materials",
      description: "Utilizing Zirconia, Emax, and DMLS technology for durability and natural-looking restorations.",
      icon: Microscope,
    },
    {
      title: "Oral & Maxillofacial",
      description: "Expert management of facial fractures, jaw surgeries, and complex surgical extractions.",
      icon: ShieldCheck,
    },
    {
      title: "Preventive Protocols",
      description: "Clinical-grade oral cancer screenings and diagnostic protocols for long-term health.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* ─── Page Hero ─── */}
      <section className="relative border-b border-border/40 bg-muted/20 py-12 sm:py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(213,239,255,0.85),transparent)]" />

        <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-3xl flex-col items-start text-left sm:items-center sm:text-center">
            <FadeIn direction="up">
              <Badge className="mb-4 w-fit px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase sm:mb-5 sm:text-[11px] sm:tracking-wider">
                About The Clinic
              </Badge>
              <h1 className="max-w-[12ch] text-[2.2rem] font-bold leading-[1.02] tracking-tight sm:max-w-none sm:text-[2.5rem] md:text-[3.25rem]">
                Welcome to{" "}
                <span className="text-primary">Dental Theatre</span>
              </h1>
              <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted-foreground sm:mt-6 sm:max-w-2xl sm:text-lg sm:leading-relaxed sm:mx-auto">
                Dental Theatre is a specialist-led clinical center providing high-end oral surgery and advanced aesthetic dentistry in Panipat. We operate at the intersection of surgical precision and aesthetic excellence, ensuring world-class results without the need for metro-city travel.
              </p>
              <div className="mt-7 sm:mt-8">
                <div className="mb-5 h-px w-14 rounded-full bg-primary/30 sm:mx-auto sm:mb-7 sm:w-16" />
                <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-[15px] sm:leading-relaxed">
                  Founded on the principle of direct specialist access, our practice ensures that every patient is treated by a senior clinician. With a combined track record of over{" "}
                  <strong className="text-foreground font-semibold">
                    19 years in oral surgery and orthodontics
                  </strong>, 
                  Dr. Duhan and Dr. Parul provide a depth of expertise that spans from complex maxillofacial trauma to the most delicate cosmetic refinements — all within a single, hospital-grade facility.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Meet Our Doctors ─── */}
      <section className="relative py-14 sm:py-24 border-b border-border/30">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        <div className="absolute top-0 left-1/4 h-[400px] w-[500px] rounded-full bg-sky-100/50 blur-[100px] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-10 text-left sm:mb-16 sm:text-center">
            <FadeIn direction="up">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">
                The Specialists
              </p>
              <h2 className="text-[1.85rem] font-bold tracking-tight md:text-[2.25rem]">
                Meet Our Doctors
              </h2>
              <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:mx-auto sm:text-base">
                Two specialists. One shared commitment to clinical excellence
                and exceptional patient care.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-7 max-w-4xl mx-auto">
            {founders.map((founder, i) => (
              <FadeIn key={founder.name} direction="up" delay={i * 0.12}>
                <Link href={founder.href} className="block h-full group">
                  <div className={`relative flex flex-col h-full rounded-2xl border border-border/60 bg-gradient-to-br ${founder.accentColor} overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1`}>
                    {/* Top: photo */}
                    <div className="relative aspect-[16/9] w-full items-center justify-center overflow-hidden border-b border-border/40 bg-muted/30 flex">
                      <Image 
                        src={founder.image} 
                        alt={founder.name} 
                        fill 
                        className={`object-cover ${founder.imagePos} transition-transform duration-500 group-hover:scale-105`}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>

                    {/* Body */}
                    <div className="flex flex-col flex-1 p-5 sm:p-8">
                      <div className="mb-4 border-b border-border/40 pb-4 sm:mb-4 sm:border-b-0 sm:pb-0">
                        <h3 className="text-[1.15rem] font-bold tracking-tight text-foreground sm:text-2xl">
                          {founder.name}
                        </h3>
                        <p className="mt-1.5 text-[11px] font-semibold leading-snug text-primary sm:text-xs">
                          {founder.credentials}
                        </p>
                        <p className="mt-2 text-[13px] font-medium leading-5 text-muted-foreground sm:mt-0.5 sm:text-xs sm:font-normal">
                          {founder.speciality}
                          <span className="hidden sm:inline"> · </span>
                          <span className="block sm:inline">{founder.exp}</span>
                        </p>
                      </div>

                      <p className="flex-1 text-[14px] leading-6 text-muted-foreground sm:text-sm sm:leading-relaxed">
                        {founder.bio}
                      </p>

                      <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-4 sm:mt-6 sm:pt-5">
                        <span className="text-[11px] font-medium text-muted-foreground/60 sm:text-xs">
                          Click to view full profile
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-200">
                          Read Profile <ArrowRight className="size-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="relative py-14 sm:py-24">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        <div className="absolute -right-64 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-sky-100/60 blur-[90px] pointer-events-none" />
        <div className="absolute -left-64 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-100/50 blur-[90px] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-10 text-left sm:mb-16 sm:text-center">
            <FadeIn direction="up">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">
                Our Impact
              </p>
              <h2 className="text-[1.85rem] font-bold tracking-tight md:text-[2.25rem]">
                A Legacy of Smiles
              </h2>
              <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:mx-auto sm:text-base">
                Years of dedication to clinical excellence, reflected in the
                lives we have transformed — one smile at a time.
              </p>
            </FadeIn>
          </div>
          <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
            {stats.map((stat, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.08}>
                <Card className="h-full rounded-2xl border border-border/60 text-center shadow-sm transition-all hover:border-primary/25 hover:shadow-md">
                  <CardContent className="flex min-h-[11.25rem] flex-col items-center px-4 pb-5 pt-5 sm:min-h-0 sm:px-5 sm:pt-8 sm:pb-8">
                    <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-xl border border-primary/10 bg-primary/8 text-primary sm:mb-4 sm:size-12">
                      <stat.icon className="size-5" />
                    </div>
                    <h3 className="text-[1.75rem] font-bold tracking-tight sm:text-4xl">
                      {stat.title}
                    </h3>
                    <p className="mt-2 max-w-[9rem] text-[11px] font-semibold leading-snug text-muted-foreground sm:max-w-none sm:text-xs">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Our Values ─── */}
      <section className="relative py-14 sm:py-24 bg-muted/20 border-y border-border/30">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
        <div className="absolute top-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-50/80 blur-[80px] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-10 text-left sm:mb-16 sm:text-center">
            <FadeIn direction="up">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">
                Our Principles
              </p>
              <h2 className="text-[1.85rem] font-bold tracking-tight md:text-[2.25rem]">
                What Drives Us Every Day
              </h2>
              <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:mx-auto sm:text-base">
                Our clinical philosophy is guided by values that put your
                wellbeing, trust, and long-term health at the centre of
                everything we do.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} direction="up" delay={i * 0.1}>
                <Card className="h-full rounded-2xl border border-border/60 shadow-sm hover:border-primary/25 hover:shadow-md transition-all duration-300">
                  <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:gap-5 sm:p-8">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-primary/8 text-primary">
                      <v.icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-base font-bold text-foreground">
                        {v.title}
                      </h3>
                      <p className="text-[14px] leading-6 text-muted-foreground sm:text-sm sm:leading-relaxed">
                        {v.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground sm:py-24 lg:py-32">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_50%)]" />

        <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-20">
            <FadeIn direction="up">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 mb-4">
                The Theatre Experience
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Why Choose Dental Theatre?
              </h2>
              <div className="mt-6 mx-auto h-1 w-20 rounded-full bg-white/20" />
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {detailedHighlights.map((item, i) => {
              const isHiddenOnMobile = item.title === "Laser Procedures" || item.title === "Oral Surgery";
              return (
                <FadeIn key={i} direction="up" delay={i * 0.05}>
                  <div className={cn(
                    "group relative h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20",
                    isHiddenOnMobile && "hidden md:block"
                  )}>
                    <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-white/10 text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/15">
                      <item.icon className="size-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-white/70">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </StaggerContainer>

          <FadeIn direction="up" delay={0.4} className="mt-16 text-center">
            <Link href="/#locations">
              <Button
                size="lg"
                variant="secondary"
                className="inline-flex h-14 items-center justify-center gap-2 px-6 sm:px-10 text-base font-bold text-primary hover:bg-white transition-all duration-300 shadow-xl hover:shadow-white/10"
              >
                Book Your Consultation
                <ArrowRight className="size-5" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

