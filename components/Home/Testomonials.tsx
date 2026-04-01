"use client";
import { image } from "framer-motion/client";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Testomonials() {
  const testomonials = [
    {
      name: "John Doe",
      company: "ABC Corporation",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/walmart.png",
    },
    {
      name: "Jane Smith",
      company: "XYZ Inc.",
      feedback:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/gensler.png",
    },
    {
      name: "Michael Johnson",
      company: "123 Solutions",
      feedback:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/sakanska.png",
    },
  ];
  const [currTestomonial, setCurrTestomonial] = useState(0);
  const handleNext = () => {
    setCurrTestomonial((prev) => (prev + 1) % testomonials.length);
  };
  const handlePrev = () => {
    setCurrTestomonial(
      (prev) => (prev - 1 + testomonials.length) % testomonials.length,
    );
  };

  return (
    <div className="w-full lg:min-h-screen text-primary pt-14 font-[PPFONT] px-4 bg-neutral-base space-y-12 relative">
      <div className="absolute inset-y-0 left-0 border-r" />
      {/* only desktop */}
      <div className="absolute top-0 left-[-8vw] border-r h-full hidden lg:block ">
        <div className="flex items-center justify-between gap-70 lg:flex-col translate-x-50 translate-y-[8vw]">
          {/* Image */}
          <div className="w-[300px] md:w-[400px] h-[120px] bg-neutral-base">
            <Image
              src={testomonials[currTestomonial].image}
              alt={testomonials[currTestomonial].company}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          {/* buttons */}
          <div className="flex gap-6 lg:flex-col bg-neutral-base">
            <button
              className="border border-primary rounded-full p-2"
              onClick={handlePrev}
            >
              <ArrowLeft
                strokeWidth={1}
                size={24}
                className="lg:rotate-90 lg:w-[2vw] lg:h-[2vw]"
              />
            </button>

            <button
              className="border border-primary rounded-full p-2"
              onClick={handleNext}
            >
              <ArrowRight
                strokeWidth={1}
                size={24}
                className="lg:rotate-90 lg:w-[2vw] lg:h-[2vw]"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between uppercase text-sm lg:text-[1vw]">
        <h1>Testimonials</h1>
        <h1>[ 09. oci ]</h1>
      </div>

      {/* Main Layout */}
      <div className="w-full flex lg:flex-row-reverse flex-col lg:min-h-screen items-center lg:gap-[8vw] lg:h-screen relative">
        {/* Testimonials */}
        <div className="h-full flex items-center">
          <div className="space-y-24 md:space-y-32">
            <h3 className="font-poppins text-2xl md:text-[4vw] lg:text-[3vw] text-start leading-none tracking-tighter">
              "{testomonials[currTestomonial].feedback}"
            </h3>
            <div className="font-poppins uppercase text-sm flex justify-between md:grid grid-cols-6">
              <p>
                0{currTestomonial + 1}/0{testomonials.length}
              </p>
              <p>
                {testomonials[currTestomonial].name},{" "}
                {testomonials[currTestomonial].company}
              </p>
            </div>
          </div>
        </div>

        {/* btn and company */}
        <div className="py-8 block relative w-full">
          <div className="flex items-center justify-between gap-8 lg:flex-col lg:hidden">
            {/* Image */}
            <div className="w-[300px] md:w-[400px] h-[120px]">
              <Image
                src={testomonials[currTestomonial].image}
                alt={testomonials[currTestomonial].company}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            {/* buttons */}
            <div className="flex gap-6 lg:flex-col">
              <button
                className="border border-primary rounded-full p-2"
                onClick={handlePrev}
              >
                <ArrowLeft strokeWidth={1} size={24} className="lg:rotate-90" />
              </button>

              <button
                className="border border-primary rounded-full p-2"
                onClick={handleNext}
              >
                <ArrowRight
                  strokeWidth={1}
                  size={24}
                  className="lg:rotate-90"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
