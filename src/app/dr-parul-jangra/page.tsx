import { FadeIn, StaggerContainer } from "@/components/ui-custom/animations";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, FileCheck, ScanLine, Smile, Sparkles, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Dr. Parul Jangra — Implantologist & Aligner Specialist | Dental Theatre, Panipat",
  description:
    "Meet Dr. Parul Jangra, BDS (M.I.D.A), Diploma in Oral Surgery. Implantologist and Aligner Specialist with 7+ years of clinical excellence at Dental Theatre, Panipat. Expert in dental implants, smile design, and clear aligners.",
};

const specializations = [
  {
    icon: ScanLine,
    title: "Dental Implants",
    description:
      "UV and Non-UV implant systems for permanent tooth replacement — engineered for longevity, designed to look completely natural.",
  },
  {
    icon: Smile,
    title: "Clear Aligners & Braces",
    description:
      "Discreet orthodontic correction using the latest aligner technology. Straighter teeth, minimal disruption to your daily life.",
  },
  {
    icon: Sparkles,
    title: "Smile Design & Veneers",
    description:
      "Composite and porcelain veneers, teeth whitening, and smile remodelling tailored to your natural facial features.",
  },
  {
    icon: ShieldCheck,
    title: "Oral Surgery",
    description:
      "Surgical extractions, apicoectomy, and gum surgery — complex procedures performed with precision and minimal discomfort.",
  },
];

export default function DrParulPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50/60 via-white to-white py-14 sm:py-28">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#bfdbfe_1px,transparent_1px)] [background-size:28px_28px] opacity-50" />
        <div className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full bg-sky-100/60 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 right-0 h-[500px] w-[500px] rounded-full bg-blue-50/80 blur-[100px] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <FadeIn direction="right">
              <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-primary uppercase sm:mb-5 sm:text-xs sm:tracking-widest">
                7+ Years of Clinical Excellence
              </Badge>
              <h1 className="mb-3 text-[2.2rem] whitespace-nowrap font-bold leading-[0.97] tracking-tight text-foreground sm:mb-4 sm:text-6xl sm:leading-[1.1] sm:whitespace-normal">
                Dr. Parul<span className="hidden sm:inline"><br /></span><span className="inline sm:hidden"> </span><span className="text-primary">Jangra</span>
              </h1>
              <p className="mb-5 whitespace-nowrap text-[12px] min-[375px]:text-[13px] font-semibold leading-6 text-muted-foreground sm:mb-6 sm:max-w-none sm:text-xl sm:font-medium sm:whitespace-normal">
                BDS (M.I.D.A) · Implantologist · Aligner Specialist
              </p>
              <div className="mb-6 h-px w-12 rounded-full bg-primary/30 sm:mb-8" />
              <p className="max-w-xl text-[15px] leading-7 text-muted-foreground sm:text-base sm:leading-relaxed">
                Dr. Parul Jangra brings a rare blend of surgical precision and an eye for natural aesthetics. Trained in oral surgery and implantology, she has spent over seven years transforming smiles across Panipat — from single-tooth implants to complete smile makeovers — always with the belief that confidence begins at the corners of your mouth.
              </p>
              <div className="mt-7 hidden sm:flex flex-row flex-wrap gap-3 sm:mt-8">
                {["BDS (M.I.D.A)", "Diploma in Oral Surgery", "Reg. no. 009857"].map((c) => (
                  <span key={c} className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-white px-3 py-1.5 text-xs font-semibold text-foreground/70 shadow-sm">
                    <FileCheck className="size-3 text-primary" />
                    {c}
                  </span>
                ))}
              </div>
              
              {/* Mobile photo placeholder replacing pills */}
              <div className="mt-8 relative block lg:hidden">
                <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-primary/10 to-sky-200/40 blur-sm" />
                <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto overflow-hidden rounded-[28px] bg-white border border-border/50 shadow-2xl flex flex-col items-center justify-center gap-3">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(186,230,255,0.3),transparent_60%)]" />
                  <GraduationCap className="size-10 text-primary/20" />
                  <span className="text-muted-foreground/40 font-medium text-sm uppercase tracking-widest">Photo Placeholder</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="relative hidden lg:block">
                <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-primary/10 to-sky-200/40 blur-sm" />
                <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto overflow-hidden rounded-[28px] bg-white border border-border/50 shadow-2xl flex flex-col items-center justify-center gap-3">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(186,230,255,0.3),transparent_60%)]" />
                  <GraduationCap className="size-10 text-primary/20" />
                  <span className="text-muted-foreground/40 font-medium text-sm uppercase tracking-widest">Photo Placeholder</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative overflow-hidden bg-primary py-12 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_80%_50%,rgba(255,255,255,0.06),transparent)]" />
        <div className="container relative z-10 mx-auto max-w-4xl px-5 sm:px-6 lg:px-10 text-center">
          <FadeIn direction="up">
            <span className="mb-2 block select-none font-serif text-6xl leading-none text-white/10 sm:mb-4 sm:text-8xl">&ldquo;</span>
            <blockquote className="-mt-6 text-[1.1rem] leading-8 text-white/90 italic sm:-mt-10 sm:text-2xl sm:leading-relaxed sm:font-light">
              Dentistry, at its finest, is the art of giving people the courage to smile without hesitation. Every procedure I perform is a commitment to that goal.
            </blockquote>
            <p className="mt-5 text-[11px] font-semibold tracking-[0.18em] text-white/50 uppercase sm:mt-6 sm:text-sm sm:tracking-widest">— Dr. Parul Jangra</p>
          </FadeIn>
        </div>
      </section>

      {/* Specializations */}
      <section className="relative bg-white py-14 sm:py-28">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        <div className="container relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <FadeIn direction="up" className="mb-10 text-left sm:mb-14 sm:text-center">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">Areas of Focus</p>
            <h2 className="text-[1.4rem] min-[375px]:text-2xl whitespace-nowrap sm:whitespace-normal sm:text-4xl font-bold tracking-tight">What Dr. Parul Specialises In</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:mx-auto sm:leading-relaxed">
              Her clinical approach combines advanced techniques with a patient-centric sensibility — results that look and feel effortlessly natural.
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {specializations.map((s, i) => (
              <FadeIn key={s.title} direction="up" delay={i * 0.1}>
                <Card className="h-full rounded-2xl border border-border/60 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:gap-5 sm:p-7">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-primary/8 text-primary sm:size-12">
                      <s.icon className="size-4 sm:size-5" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-bold sm:mb-2 sm:text-lg">{s.title}</h3>
                      <p className="text-[13px] leading-5 text-muted-foreground sm:text-sm sm:leading-relaxed">{s.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/40 to-white py-14 sm:py-28">
        <div className="absolute -right-48 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-sky-100/60 blur-[100px] pointer-events-none" />
        <div className="container relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <FadeIn direction="right">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">Her Approach</p>
              <h2 className="mb-5 text-[1.9rem] font-bold tracking-tight sm:mb-6 sm:text-4xl">Precision Meets Patient-Centred Care</h2>
              <div className="space-y-4 text-[15px] leading-7 text-muted-foreground sm:space-y-5 sm:leading-relaxed">
                <p>
                  Dr. Parul believes the best dental outcomes begin with listening carefully — understanding not just the clinical picture, but the patient&apos;s lifestyle, anxieties, and aspirations.
                </p>
                <p>
                  Whether it&apos;s a subtle veneer correction or a full-arch implant restoration, she approaches every case with meticulous attention. Her use of digital oral scanners ensures accurate impressions, and her preference for single-sitting RCT where appropriate means fewer visits and faster recovery.
                </p>
                <p>
                  Patients consistently describe her consultations as thorough and reassuring — she takes time to walk you through every step, every option, so you&apos;re never left with unanswered questions.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.15}>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { label: "Aligner-Led Orthodontics", detail: "Advanced clear aligner protocols for predictable, aesthetic outcomes." },
                  { label: "Minimally Invasive Surgery", detail: "Conservative approach — preserving healthy tissue wherever possible." },
                  { label: "Continuous Learning", detail: "Stays current with the latest in global implantology and aesthetics." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-border/50 bg-white p-4 shadow-sm sm:gap-4">
                    <div className="mt-1 size-2 shrink-0 rounded-full bg-primary" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.label}</p>
                      <p className="mt-1 text-[14px] leading-6 text-muted-foreground sm:mt-0.5 sm:text-sm">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Credentials bar */}
      <section className="hidden sm:block border-t border-border/40 bg-muted/30 py-8 sm:py-10">
        <div className="container mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-0 divide-y divide-border/50 rounded-2xl border border-border/50 bg-white/70 text-left sm:grid-cols-4 sm:divide-x sm:divide-y-0 sm:rounded-none sm:border-0 sm:bg-transparent sm:text-center">
            {[
              { label: "Degree", value: "BDS (M.I.D.A)" },
              { label: "Post-Graduate", value: "Diploma, Oral Surgery" },
              { label: "Registration", value: "No. 009857" },
              { label: "Contact", value: "pearljangra160794@gmail.com" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1 px-4 py-4 sm:items-center">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{item.label}</p>
                <p className="text-sm font-bold text-foreground break-all sm:text-center">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
