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
    question: "How often should I visit the dentist for a checkup?",
    answer:
      "We recommend visiting us every 6 months for a routine checkup and professional cleaning. Regular visits help us catch potential issues early and maintain your oral health. However, some patients with specific conditions may need to visit more frequently.",
  },
  {
    question: "Is professional teeth whitening safe for my enamel?",
    answer:
      "Yes, professional teeth whitening performed at our clinic is completely safe. We use advanced, carefully formulated whitening agents and lasers that effectively remove stains without damaging your tooth enamel.",
  },
  {
    question: "Are dental implants a painful procedure?",
    answer:
      "Most patients report that getting a dental implant is much less painful than they expected, often less uncomfortable than a tooth extraction. We use local anesthesia to ensure you feel no pain during the procedure, and post-operative discomfort is usually manageable with over-the-counter pain relievers.",
  },
  {
    question: "What should I do if I have a dental emergency?",
    answer:
      "If you experience a dental emergency, such as a knocked-out tooth, severe pain, or bleeding, please contact us immediately. We keep time available in our daily schedule for emergency appointments to provide prompt relief and care.",
  },
  {
    question: "How long does a root canal treatment usually take?",
    answer:
      "Modern root canal treatments are highly efficient and virtually painless. Most procedures can be completed in one or two visits, depending on the complexity of the tooth. Each appointment typically lasts between 60 to 90 minutes.",
  },
  {
    question: "Do you offer treatments for children (pediatric dentistry)?",
    answer:
      "Yes, we love treating our younger patients! We offer comprehensive pediatric dentistry services in a gentle, reassuring environment to help children build positive associations with dental visits from an early age.",
  },
];

export function FaqSection() {
  return (
    <section className="relative overflow-hidden pt-16 bg-slate-50/50 ">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-200/20 blur-[100px]" />
      </div>
      
      <div className="container mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mb-8 text-center">
          <FadeIn direction="up">
            <p className="mb-3 text-[11px] font-bold tracking-[0.3em] text-primary uppercase">
              Common Questions
            </p>
            <h2 className="mb-4 font-heading text-4xl leading-none md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-[15px] leading-[1.85] text-muted-foreground">
              We understand you may have questions about your dental care. Here are some of the most common inquiries we receive to help you prepare for your visit.
            </p>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.2}>
          <div className="rounded-[28px] border border-border/60 bg-white/70 p-6 shadow-xl shadow-primary/5 backdrop-blur-sm sm:p-10">
            <Accordion className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-base font-semibold py-4 hover:no-underline hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
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
