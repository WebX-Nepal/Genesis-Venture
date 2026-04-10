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
import Image from "next/image";
import HeroSectionTitle from "./ui/HeroSectionTitle";

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
      className="w-full min-h-screen bg-neutral-50 px-4 py-8 xs:px-6 sm:px-8 sm:py-12 md:px-16 md:py-24"
    >
      <div className="flex w-full flex-1 flex-col gap-4 sm:gap-6">
        <div className="flex items-start justify-between border-b border-gray-200 pb-3 sm:pb-4 md:pb-6">
          <span className="faq-heading text-xs uppercase tracking-widest text-gray-500 font-poppins">
            FAQs
          </span>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-8 pt-5 sm:pt-6 md:grid-cols-5 md:gap-10 md:pt-10">
          <div className="md:col-span-3 flex flex-col gap-4 sm:gap-6 md:pt-16 lg:pt-20">
            <div className="flex flex-col gap-2 sm:gap-3">
              <HeroSectionTitle
                as="h2"
                className="faq-heading text-[clamp(1.5rem,4.6vw,3rem)] text-genesis-navy leading-[1.12] font-[PPFONT]"
                prefix="Frequently Asked"
                highlight="Questions"
              />
              <p
                id="animated-paragraph"
                className="max-w-2xl text-sm sm:text-base text-gray-600 font-poppins leading-8"
              >
                Discover quick and comprehensive answers to common questions
                about our platform, services, and features.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full py-3">
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

          <div className="relative h-80 sm:h-100 md:col-span-2 md:h-full md:min-h-135 lg:min-h-150">
            <Image
              src="/images/upp.png"
              alt="Frequently Asked Questions"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
