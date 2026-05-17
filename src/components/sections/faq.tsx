"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/ui-custom/animations";

const faqs = [
  {
    question: "How often should I visit for a checkup?",
    answer:
      "For most patients, a specialist checkup and professional cleaning every 6 months is the gold standard for prevention. If you are undergoing orthodontic or implant treatment, we may recommend a more frequent schedule tailored to your recovery.",
  },
  {
    question: "Is professional teeth whitening safe for my enamel?",
    answer:
      "Completely. Unlike over-the-counter kits, our clinical whitening uses controlled, pH-balanced agents and laser technology. It’s designed to lift deep stains while keeping your enamel fully protected.",
  },
  {
    question: "How painful are dental implants?",
    answer:
      "Most patients find the procedure surprisingly manageable—often less uncomfortable than a simple extraction. We use advanced local anesthesia and precise surgical techniques to ensure you feel nothing during the treatment.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer:
      "Call us immediately. We prioritize dental emergencies—whether it's severe pain, a broken tooth, or an injury—and aim to see you on the same day to provide immediate relief.",
  },
  {
    question: "How long does a root canal take?",
    answer:
      "Most root canals can be completed in just one or two sittings. Each session typically takes 60-90 minutes, depending on the complexity of the tooth. Our goal is to save your natural tooth as efficiently as possible.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes. We believe early dental experiences shape a lifetime of oral health. Our team uses a gentle, descriptive approach to help children feel curious and comfortable rather than anxious.",
  },
];

export function FaqSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50/50 pt-12 sm:pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-200/20 blur-[100px]" />
      </div>
      
      <div className="container mx-auto max-w-5xl px-5 sm:px-6 lg:px-10">
        <div className="mb-8 text-center">
          <FadeIn direction="up">
            <p className="mb-3 text-[11px] font-bold tracking-[0.3em] text-primary uppercase">
              Common Questions
            </p>
            <h2 className="mb-4 font-heading text-[2rem] leading-tight sm:text-4xl md:text-5xl md:leading-none">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-[14px] leading-[1.75] text-muted-foreground sm:text-[15px] sm:leading-[1.85]">
              We understand you may have questions about your dental care. Here are some of the most common inquiries we receive to help you prepare for your visit.
            </p>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.2}>
          <div className="rounded-[24px] border border-border/60 bg-white/70 p-4 shadow-xl shadow-primary/5 backdrop-blur-sm sm:rounded-[28px] sm:p-10">
            <Accordion className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="py-4 text-left text-[0.96rem] font-semibold leading-snug transition-colors hover:text-primary hover:no-underline sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
