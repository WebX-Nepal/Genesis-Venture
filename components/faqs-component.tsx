"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function FAQs() {
  const faqItems = [
    {
      id: "item-1",
      question: "What stage companies does Genesis Ventures invest in?",
      answer:
        "We primarily invest at the earliest stages — from pre-seed to Series A. Our focus is on backing founders at the beginning of their journey, where conviction and partnership matter most.",
    },
    {
      id: "item-2",
      question: "Which sectors do you focus on?",
      answer:
        "We invest across high-growth sectors including technology, artificial intelligence, healthcare, fintech, and infrastructure — where innovation creates lasting competitive advantage.",
    },
    {
      id: "item-3",
      question: "What do you look for in a founder?",
      answer:
        "We look for exceptional founders with clarity of vision, strong execution ability, and the resilience to navigate uncertainty. We prioritize people as much as the idea.",
    },
    {
      id: "item-4",
      question: "How involved are you after investing?",
      answer:
        "We take a hands-on approach, working closely with founders on strategy, hiring, and growth. We view ourselves as long-term partners, not just capital providers.",
    },
    {
      id: "item-5",
      question: "How can I pitch my startup to Genesis Ventures?",
      answer:
        "Founders can reach out through our contact page or via warm introductions. We review every opportunity carefully and aim to respond promptly to promising teams.",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitTitle = new SplitText(".faq-heading", { type: "words" });

    gsap.from(splitTitle.words, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom 80%",
        scrub: true,
      },
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });

    if (!containerRef.current) return;

    const paragraph = containerRef.current.querySelector<HTMLParagraphElement>(
      "#animated-paragraph",
    );
    if (!paragraph) return;

    const words = paragraph.textContent
      ?.split(" ")
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");
    if (words) paragraph.innerHTML = words;

    const wordEls = paragraph.querySelectorAll(".word");

    gsap.fromTo(
      wordEls,
      { opacity: 0.1 },
      {
        opacity: 1,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "top top",
          scrub: true,
        },
      },
    );

    return () => {
      splitTitle.revert();
    };
  });

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen bg-neutral-50 flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 px-4 xs:px-6 sm:px-8 md:px-16 py-8 sm:py-12 md:py-24"
    >
      <div className="w-full flex flex-col gap-4 sm:gap-6 flex-1">
        <div className="flex items-start justify-between border-b border-gray-200 pb-3 sm:pb-4 md:pb-6">
          <span className="faq-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
            FAQs
          </span>
          <span className="faq-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
            05
          </span>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 flex-1 pt-5 sm:pt-6 md:pt-10 overflow-hidden">
          <div className="w-full md:w-1/3 flex flex-col gap-2 sm:gap-3">
            <h2 className="faq-heading text-[clamp(1.25rem,4vw,2rem)] text-genesis-navy font-[PPFONT] leading-snug">
              Frequently Asked Questions
            </h2>
            <p
              id="animated-paragraph"
              className="text-xs sm:text-sm text-gray-600 font-poppins leading-relaxed max-w-xs hidden md:block"
            >
              Discover quick and comprehensive answers to common questions about
              our platform, services, and features.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <Accordion type="single" collapsible className="w-full py-3 ">
                {faqItems.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border-dotted"
                  >
                    <AccordionTrigger className="cursor-pointer font-[PPFONT] text-sm sm:text-lg md:text-lg hover:no-underline text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-xs md:text-sm font-poppins">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="relative w-full h-full md:w-1/3">
              <Image
                src="/images/hero/faq-image.jpg"
                alt="Frequently Asked Questions"
                fill
                className="object-cover brightness-150"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
