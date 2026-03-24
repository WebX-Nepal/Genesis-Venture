import Image from "next/image";

const milestones = [
  {
    year: "1993",
    title: "Outsource Established",
    image: "/image1.png",
  },
  {
    year: "1995",
    title: "First Major Project",
    image: "/image2.png",
  },
  {
    year: "2000",
    title: "Global Expansion",
    image: "/image3.png",
  },
  {
    year: "2005",
    title: "Award-Winning Innovation",
    image: "/image4.png",
  },
  {
    year: "2010",
    title: "New Headquarters Opened",
    image: "/image5.png",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    image: "/image6.png",
  },
  {
    year: "2005",
    title: "Award-Winning Innovation",
    image: "/image4.png",
  },
];

function MilestoneItem({
  year,
  title,
  image,
}: {
  year: string;
  title: string;
  image: string;
}) {
  return (
    <div className="flex flex-col lg:w-[26vw] overflow-hidden pb-6 lg:pl-8 lg:pb-0">
      <div className="relative w-[70vw] lg:w-full h-60 sm:h-72 md:h-80 lg:h-[15vw]">
        <Image src={image} alt={title} fill className="h-auto w-auto object-cover" />
        <div className="absolute inset-0 bg-primary opacity-50" /> {/* Blue overlay */}
      </div>
      <div className="mt-4 font-[PPFONT] text-primary">
        <h1 className="text-[24vw] sm:text-4xl md:text-6xl lg:text-[5vw] leading-none font-bold">{year}</h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-[1vw] uppercase font-[GT50]">{title}</p>
      </div>
    </div>
  );
}

export default function Milestone() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-5 px-5 pt-7 overflow-hidden">
      <div className="flex justify-between">
        <p className="uppercase text-primary">Milestones</p>
        <p className="uppercase text-primary">[OCI.2]</p>
      </div>
      <div className="grid w-full min-h-[150vh] grid-cols-1 lg:grid-cols-3 lg:gap-32">
        {milestones.map((milestone, index) => {
          const isLastItem = index === milestones.length - 1;
          const isOdd = index % 2 !== 0;
          const randomOffset = index % 2 === 0 ? "lg:mt-10" : "lg:-mt-10"; // Add random vertical offset
          return (
            <div
              key={index}
              className={`w-full h-full flex flex-col py-10 justify-between border-b lg:border-b-0 lg:border-l border-primary 
                ${isLastItem ? "lg:col-span-3 lg:place-items-center border-b-0" : randomOffset}
                ${isOdd ? "place-items-end lg:place-items-start" : ""}
                `}
            >
              <MilestoneItem
                year={milestone.year}
                title={milestone.title}
                image={milestone.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
