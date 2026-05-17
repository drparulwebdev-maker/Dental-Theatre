import Image from "next/image";
import { FadeIn, StaggerContainer } from "@/components/ui-custom/animations";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, Stethoscope, Bone, BrainCircuit, ShieldPlus, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Dr. Bijender Duhan — Dental Surgeon & Implantology Expert | Dental Theatre, Panipat",
  description:
    "Dr. Bijender Duhan, BDS (M.I.D.A), Dental Surgeon with Diploma in Ortho & Oral Surgery and 12+ years of surgical experience. Specialist in Implantology, Orthodontics, and complex oral procedures at Dental Theatre, Panipat.",
};

const expertise = [
  {
    icon: Stethoscope,
    title: "Implantology",
    description:
      "Over a decade of hands-on implant placements — single units, full-arch, and immediate-load protocols — with outcomes built to last a lifetime.",
  },
  {
    icon: Bone,
    title: "Facial Fracture Management",
    description:
      "Specialist-level care for jaw and facial fractures, including complex maxillofacial trauma. Surgical precision that restores both function and form.",
  },
  {
    icon: BrainCircuit,
    title: "Orthodontics",
    description:
      "Braces, aligners, and post-surgical orthodontic planning. A holistic view of occlusion and facial balance that goes beyond straightening teeth.",
  },
  {
    icon: ShieldPlus,
    title: "Complex Oral Surgery",
    description:
      "TMJ pain management, oro-antral fistula treatment, biopsy for oral cancer screening, and surgical wisdom tooth removals.",
  },
];

export default function DrBijenderPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* Hero — Image RIGHT on desktop (opposite to Dr. Parul) */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-bl from-slate-50/70 via-white to-white">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-50" />
        <div className="absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full bg-slate-100/70 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 left-0 h-[500px] w-[500px] rounded-full bg-sky-50/80 blur-[100px] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left — Photo Placeholder (image first on desktop here, unlike Dr. Parul) */}
            <FadeIn direction="right" className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-tl from-slate-200/60 to-primary/8 blur-sm" />
                <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto overflow-hidden rounded-[28px] bg-white border border-border/50 shadow-2xl">
                  <Image 
                    src="/Dr duhan.jpeg" 
                    alt="Dr. Bijender Duhan" 
                    fill 
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Right — Text */}
            <FadeIn direction="left" delay={0.15} className="order-1 lg:order-2">
              <Badge variant="outline" className="mb-5 text-primary bg-primary/5 border-primary/20 px-3 py-1 text-xs font-semibold tracking-widest uppercase">
                12+ Years of Surgical Expertise
              </Badge>
              <h1 className="mb-4 text-[2.2rem] whitespace-nowrap font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl sm:whitespace-normal">
                Dr. Bijender<span className="hidden sm:inline"><br /></span><span className="inline sm:hidden"> </span><span className="text-primary">Duhan</span>
              </h1>
              <p className="mb-6 whitespace-nowrap text-[11px] min-[375px]:text-[12px] font-medium text-muted-foreground sm:text-xl sm:whitespace-normal">
                BDS (M.I.D.A) · Dental Surgeon · Implantology & Orthodontics
              </p>
              <div className="h-px w-12 bg-primary/30 rounded-full mb-8" />
              <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                With a clinical track record spanning over twelve years, Dr. Bijender Duhan is established as one of Haryana&apos;s most capable oral surgeons. His dual specialty in orthodontics and oral surgery allows him to manage complex cases that require both surgical reconstruction and precise occlusal alignment—from routine extractions to advanced maxillofacial trauma.
              </p>

              <div className="mt-8 hidden sm:flex flex-wrap gap-3">
                {["BDS (M.I.D.A)", "Diploma in Ortho & Oral Surgery", "Reg. no. 6196"].map((c) => (
                  <span key={c} className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/70 bg-white border border-border/60 rounded-full px-3 py-1.5 shadow-sm">
                    <FileCheck className="size-3 text-primary" />
                    {c}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>



      {/* Expertise */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        <div className="container relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <FadeIn direction="up" className="text-center mb-14">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">Clinical Expertise</p>
            <h2 className="text-[1.4rem] min-[375px]:text-2xl whitespace-nowrap sm:whitespace-normal sm:text-4xl font-bold tracking-tight">Surgical Experience at Scale</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              Dr. Bijender&apos;s dual training provides a significant clinical advantage: the ability to plan surgical interventions while simultaneously accounting for long-term orthodontic stability.
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {expertise.map((e, i) => (
              <FadeIn key={e.title} direction="up" delay={i * 0.1}>
                <Card className="h-full rounded-2xl border border-border/60 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:gap-5 sm:p-7">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-primary/8 text-primary sm:size-12">
                      <e.icon className="size-4 sm:size-5" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-bold sm:mb-2 sm:text-lg">{e.title}</h3>
                      <p className="text-[13px] leading-5 text-muted-foreground sm:text-sm sm:leading-relaxed">{e.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Philosophy — text-first layout (reversed vs Dr. Parul) */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-slate-50/50 to-white overflow-hidden">
        <div className="absolute -left-48 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-slate-100/70 blur-[100px] pointer-events-none" />
        <div className="container relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeIn direction="right" className="order-2 lg:order-1">
              <div className="space-y-4">
                {[
                  { label: "Surgical Depth", detail: "Expertise in hospital-grade procedures spanning routine extractions to complex maxillofacial trauma." },
                  { label: "Predictable Outcomes", detail: "A focus on biologically-driven results and long-term stability in every clinical case." },
                  { label: "Advanced Trauma Care", detail: "Extensive experience in jaw and facial fracture management with functional reconstruction." },
                  { label: "Clinical Communication", detail: "Specialist consultations defined by clear, evidence-based explanations of treatment options." },
                  { label: "Technology-First Practice", detail: "Utilizing high-resolution digital infrastructure for precise diagnostic planning." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-white border border-border/50 shadow-sm">
                    <div className="mt-1 size-2 rounded-full bg-primary shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.label}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15} className="order-1 lg:order-2">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">Practice Standards</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">A Track Record of Surgical Precision</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px]">
                <p>
                  Dr. Bijender Duhan&apos;s practice is built on a decade of specialized clinical experience. He provides the surgical foundation for the practice, managing the high-stakes cases that require deep anatomical knowledge and hospital-grade protocols.
                </p>
                <p>
                  His dual expertise in orthodontics and oral surgery represents a significant advantage for the patient. It means he doesn&apos;t just treat a symptom—he plans the entire structural rehabilitation of the face and jaw, ensuring that function and aesthetics work in tandem.
                </p>
                <p>
                  Specializing in maxillofacial trauma and complex implantology, Dr. Bijender is the lead clinician for patients requiring reconstructive care that restores confidence through predictable, clinical excellence.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Credentials bar */}
      <section className="hidden sm:block border-t border-border/40 bg-muted/30 py-10">
        <div className="container mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border/50 text-center">
            {[
              { label: "Degree", value: "BDS (M.I.D.A)" },
              { label: "Post-Graduate", value: "Diploma in Ortho & Oral Surgery" },
              { label: "Registration", value: "No. 6196" },
              { label: "Contact", value: "bijendersingh196@gmail.com" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1 px-4 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{item.label}</p>
                <p className="text-sm font-bold text-foreground text-center break-all">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
