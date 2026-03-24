"use client";


import { useStaggeredCharacterRise } from "@/hooks/useStaggeredCharacterRise";
import gsap from "gsap";
import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function OurServices() {
  const services = [
    {
      title: "Construction Expediting",
      description:
        "We accelerate approvals, keep agencies moving, and eliminate delays from start to finish.",
      image: "/image1.png",
    },
    {
      title: "Sign-Offs & Project Closeouts",
      description:
        "Lingering open applications can stall your construction project and complicate refinancing. At Outsource Consultants, we prioritize project completion, preparing for closeout even before the DOB issues the permits.",
      image: "/image2.png",
    },
    {
      title: "Code & Zoning Consulting",
      description:
        "Our team of over 50 in-house consultants in New York City helps clients navigate even the toughest building code and zoning challenges. With 33 years of experience across construction regulations, our team supports feasibility reviews, CCD1s, amendments, fire safety, land use matters, landmark coordination, violation resolution, and all the permits, approvals, and sign-offs your project needs.",
      image: "/image3.png",
    },
    {
      title: "Sign-Offs & Project Closeouts",
      description:
        "Lingering open applications can stall your construction project and complicate refinancing. At Outsource Consultants, we prioritize project completion, preparing for closeout even before the DOB issues the permits.",
      image: "/image2.png",
    },
    {
      title: "Sign-Offs & Project Closeouts",
      description:
        "Lingering open applications can stall your construction project and complicate refinancing. At Outsource Consultants, we prioritize project completion, preparing for closeout even before the DOB issues the permits.",
      image: "/image1.png",
    },
    {
      title: "Sign-Offs & Project Closeouts",
      description:
        "Lingering open applications can stall your construction project and complicate refinancing. At Outsource Consultants, we prioritize project completion, preparing for closeout even before the DOB issues the permits.",
      image: "/image3.png",
    },

  ];
  const [currService, setCurrService] = useState<number | null>(null);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleServiceClick = (index: number) => {
    setCurrService(index);
    setExpandedService(expandedService === index ? null : index);
  };

  useStaggeredCharacterRise(headerRef, {
    stagger: 0.08,
    duration: 0.5,
  });

  useEffect(() => {
    if (currService !== null && imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [currService]);

  return (
    <div className="w-full md:min-h-screen border-b border-primary">
      <h1
        ref={headerRef}
        className="
        w-full
        text-[55px] sm:text-[80px] md:text-[80px] lg:text-[10vw]
        leading-none font-[PPFONT] text-left text-primary font-semibold
        static md:absolute bg-neutral-dark flex justify-center md:justify-between
        mt-0 md:mt-8 lg:mt-10 gap-4 px-5 pt-4 pr-[10vw]"
      >
        <span>Our</span> <span>Services</span>
      </h1>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:min-h-screen hidden md:flex items-center justify-center border-b md:border-b-0 md:border-r border-primary">
          {currService !== null && (
            <div ref={imageRef} key={currService}>
              <Image
                src={services[currService].image}
                alt={services[currService].title}
                width={400}
                height={400}
                className="grayscale mt-30 md:mt-40 lg:mt-50 md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
              />
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 font-[PPFONT] mt-0 md:mt-50 lg:mt-70 flex flex-col justify-center px-2 md:px-3 lg:px-4 py-5 md:py-8 lg:py-10">
          {services.map((service, index) => {
            const isExpanded = expandedService === index;
            return (
              <div
                key={index}
                className="w-full border-t relative cursor-pointer border-primary text-primary"
                onClick={() => handleServiceClick(index)}
              >
                <div className="flex justify-between items-center px-4 md:px-6 lg:px-10 py-3 md:py-4 lg:py-5 text-xl sm:text-2xl md:text-2xl lg:text-4xl group">
                  {service.title}
                  <Plus className={`transition-transform duration-500 group-hover:rotate-90 w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 ${isExpanded ? 'rotate-45' : ''}`} />
                </div>
                <div
                  className="overflow-hidden transition-all duration-700 ease-in-out"
                  style={{
                    maxHeight: isExpanded ? '500px' : '0px',
                    opacity: isExpanded ? 1 : 0
                  }}
                >
                  <div className="py-2">
                    <p className="pl-4 md:pl-10 lg:pl-100 pb-5 text-xs md:text-xs lg:text-sm font-[GT50] uppercase flex justify-end text-left">
                      {service.description}
                    </p>
                    <div className="flex justify-end pr-4 md:pr-6 lg:pr-10">
                      <div className="flex font-[GT50] gap-2 md:gap-2 lg:gap-3 items-center py-3 md:py-4 lg:py-5 text-xs md:text-xs lg:text-sm">
                        [ Learn more <ArrowRight size={12} className="md:w-[13px] md:h-[13px] lg:w-[15px] lg:h-[15px]" /> ]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="pt-3 md:pt-4 lg:pt-5 font-[GT50] border-t border-primary ">
            <div className="relative h-14 md:h-16 lg:h-20 overflow-hidden group w-full">
              <div className="absolute inset-0 bg-primary text-neutral-base uppercase flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:-translate-y-full group-hover:scale-0 text-xs md:text-sm lg:text-base">
                View All Services
              </div>
              <div className="absolute inset-0 bg-neutral-base text-primary border border-primary uppercase flex items-center justify-center cursor-pointer transition-all duration-700 translate-y-full scale-0 group-hover:translate-y-0 group-hover:scale-100 text-xs md:text-sm lg:text-base">
                View All Services
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
