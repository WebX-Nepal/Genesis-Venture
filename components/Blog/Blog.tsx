"use client";

import { useState } from "react";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  type: "Architects" | "Building Owners" | "Contractors";
  imageUrl: string;
}
const blogData: BlogPost[] = [
  {
    id: "02.12",
    title:
      "Building Inclusivity: Celebrating Black History in Construction, Architecture, & Engineering",
    type: "Contractors",
    imageUrl: "/image6.png",
  },
  {
    id: "02.08",
    title: "Outsource Consultants Inc becomes SCA Certified MBE",
    type: "Architects",
    imageUrl: "/image5.png",
  },
  {
    id: "02.08",
    title: "Leaving Lead Behind: How NYC Plans to Replace Lead Pipes",
    type: "Building Owners",
    imageUrl: "/image4.png",
  },
  {
    id: "02.08",
    title: "Powering Up: Applications Open for E-Bike Charging Cabinets",
    type: "Building Owners",
    imageUrl: "/project1.jpg",
  },
];

// function to filter projects by type
function filterProjectsByType(type: BlogPost["type"]): BlogPost[] {
  return blogData.filter((blog) => blog.type === type);
}

export default function Blogs() {
  const [selectedType, setSelectedType] = useState<BlogPost["type"] | null>(
    null,
  );
  const displayedProjects =
    selectedType === null ? blogData : filterProjectsByType(selectedType);

  return (
    <div className="w-full min-h-screen pt-7 px-5">
      <div className="text-[220px] leading-tight font-[PPFONT] my-10  sm:text-[80px] md:text-[120px] lg:text-[170px] text-blue-900 tracking-tight pl-3 md:pl-5 border-b border-blue-900">
        Blog
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_6fr] gap-4 mb-20">
        <div className="flex flex-col gap-4">
          <nav className="flex flex-col text-xl leading-tight font-[PPFONT] text-blue-900">
            <button
              onClick={() => setSelectedType(null)}
              className={`text-left px-4 py-2 transition ${
                selectedType === null
                  ? "opacity-30"
                  : "hover:cursor-pointer hover:opacity-50"
              }`}
            >
              All
            </button>
            {["Architects", "Building Owners", "Contractors"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type as BlogPost["type"])}
                className={`text-left px-4 py-2 rounded-md transition ${
                  selectedType === type
                    ? "opacity-30"
                    : "hover:cursor-pointer hover:opacity-50"
                }`}
              >
                {type}
              </button>
            ))}
          </nav>
        </div>

        <div className="w-full flex flex-col items-center">
          {displayedProjects.map((blog, index) => (
            <div
              key={index}
              className="group w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-5 border-b border-blue-900 py-10 text-blue-900 items-center hover:bg-[#1925aa] hover:text-white hover:transition-colors hover:duration-300"
            >
              <div>
                <h1 className="text-4xl font-[PPFONT]">{blog.id}</h1>
                <p className="text-lg font-[PPFONT] uppercase">{blog.type}</p>
              </div>

              <div className="flex flex-col gap-20">
                <h2 className="text-2xl font-[PPFONT] mb-3">{blog.title}</h2>
                <button className="px-5 py-4 bg-white max-w-40 text-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-white hover:bg-[#1925aa] hover:border hover:border-white">
                  Read More
                </button>
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="relative w-full h-64">
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
