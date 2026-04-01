"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimated() {
  const data = [
    {
      title: "Strategy",
      number: "01",
      description:
        "Experts in Building and Zoning Code, guiding your project with confidence.",
    },
    {
      title: "Communication",
      number: "02",
      description:
        "Trustworthy, quick, accountable, and fluent in all things related to the Department of Buildings.",
    },
    {
      title: "Navigation",
      number: "03",
      description:
        "Turning city agency hurdles into on-time project milestones.",
    },
    {
      title: "Results",
      number: "04",
      description:
        "Fast, compliant, and precise—powered by our proprietary technologies",
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="text-primary font-[PPFONT] py-5 bg-neutral-base flex flex-col lg:w-150 px-2"
        >
          <div className="flex justify-between px-5 py-2 ld:text-5xl text-2xl border-b border-primary">
            <h1>{item.title}</h1>
            <p>{item.number}</p>
          </div>
          <p className="py-10 px-5 pr-30 border-b border-primary font-poppins w-full text-sm">
            {item.description.toUpperCase()}
          </p>
        </div>
      ))}
    </div>
  );
}
