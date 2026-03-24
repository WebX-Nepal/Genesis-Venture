"use client";

import { useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  type:
  | "Commercial"
  | "Hospital"
  | "Hotels"
  | "Residential"
  | "Institutions"
  | "Retail"
  | "Resturants";
  imageUrl: string;
}

const projectsData: Project[] = [
  {
    title: "Tiffany Flagship",
    type: "Retail",
    imageUrl: "/image5.png",
  },
  {
    title: "Dolce & Gabbana Boutique",
    type: "Retail",
    imageUrl: "/image5.png",
  },
  {
    title: "Chick-Fil-A",
    type: "Resturants",
    imageUrl: "/image5.png",
  },
  {
    title: "Dream Hotel",
    type: "Hotels",
    imageUrl: "/image4.png",
  },
  {
    title: "Terrace Pergola",
    type: "Residential",
    imageUrl: "/image1.png",
  },
  {
    title: "Le Soleil",
    type: "Hotels",
    imageUrl: "/image2.png",
  },
  {
    title: "Project 1",
    type: "Resturants",
    imageUrl: "/image3.png",
  },
  {
    title: "Project 1",
    type: "Commercial",
    imageUrl: "/image4.png",
  },
  {
    title: "Project 1",
    type: "Hospital",
    imageUrl: "/image5.png",
  },
];

const projectTypes: Project["type"][] = [
  "Commercial",
  "Hospital",
  "Hotels",
  "Residential",
  "Institutions",
  "Retail",
  "Resturants",
];

// function to filter projects by type
function filterProjectsByType(type: Project["type"]): Project[] {
  return projectsData.filter((project) => project.type === type);
}

export default function OurProject() {
  const [selectedType, setSelectedType] = useState<Project["type"] | null>(
    null,
  );
  const displayedProjects =
    selectedType === null ? projectsData : filterProjectsByType(selectedType);

  return (
    <div className="w-full min-h-screen px-4 bg-neutral-dark">
      {/* header */}
      <div className="
        w-full min-h-[18vh] lg:min-h-[60vh] pt-7 flex flex-col justify-end
        text-[13vw] sm:text-[24vw] lg:text-[11vw]
        leading-tight font-[PPFONT] text-primary tracking-tight
        border-b border-primary
      ">
        Our Projects
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[2fr_4fr] lg:grid-cols-[1fr_6fr] gap-4 pt-8 relative">
        {/* filters */}
        <div className="flex flex-col gap-4 lg:sticky top-25 left-0 h-fit lg:pb-12">
          <nav className="flex flex-col text-xl leading-tight font-[PPFONT] text-primary gap-y-2">
            <button
              onClick={() => setSelectedType(null)}
              className={`text-left transition ${selectedType === null
                ? "opacity-30"
                : "hover:cursor-pointer hover:opacity-50"
                }`}
            >
              All
            </button>
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type as Project["type"])}
                className={`text-left transition ${selectedType === type
                  ? "opacity-50"
                  : "hover:cursor-pointer hover:opacity-50"
                  }`}
              >
                {type}
              </button>
            ))}
          </nav>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-8 gap-x-4 mb-20 pt-8 lg:pt-0">
          {displayedProjects.map((project, index) => {
            const row = Math.floor(index / 3);
            const pos = index % 3;

            const isBig =
              (row % 2 === 0 && pos === 0) ||
              (row % 2 === 1 && pos === 2);

            return (
              <div
                key={index}
                className={`font-[PPFONT] text-primary space-y-4 ${isBig ? "lg:col-span-2" : "lg:col-span-1"}`}
              >
                <div
                  className={`relative w-full h-[200px] ${isBig ? "lg:h-[26vw]" : "lg:-[14vw]"}`}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="h-full w-full absolute bg-primary opacity-50 inset-0 hover:opacity-0 duration-300 ease-in-out" />
                </div>

                <div className="space-y-1">
                  <h2 className="text-3xl leading-none">{project.title}</h2>
                  <p className="uppercase">{project.type}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
