import Image from "next/image";

interface leadershipProps {
  name: string;
  title: string;
  imageURL: string;
}

const Leadership: leadershipProps[] = [
  {
    name: "Anthony Roselli",
    title: "Principal",
    imageURL: "/images/leadership/anthony-roselli.avif",
  },
  {
    name: "Joseph Roselli",
    title: "Principal",
    imageURL: "/images/leadership/joseph-roselli.avif",
  },
  {
    name: "Diego Caballero",
    title: "Principal",
    imageURL: "/images/leadership/diego-caballero.avif",
  },
  {
    name: "Mithun Islam",
    title: "Principal",
    imageURL: "/images/leadership/mithun-islam.avif",
  },
  {
    name: "Scott Walker",
    title: "Associate Principal",
    imageURL: "/images/leadership/scott-walker.avif",
  },
  {
    name: "Adele Perrera, AIA, NCARB",
    title: "Code & Zoning Analyst",
    imageURL: "/images/leadership/adele-perrera.avif",
  },
  {
    name: "Alejandra Sepulveda",
    title: "Project Executive",
    imageURL: "/images/leadership/alejandra-sepulveda.avif",
  },
  {
    name: "Angie Silva",
    title: "Vice President",
    imageURL: "/images/leadership/angie-silva.avif",
  },
  {
    name: "Carlos Duque",
    title: "Vice President",
    imageURL: "/images/leadership/carlos-duque.avif",
  },
  {
    name: "David Burgos",
    title: "Manager of permit services",
    imageURL: "/images/leadership/david-burgos.avif",
  },
  {
    name: "Rafael Rolon",
    title: "Project Executive",
    imageURL: "/images/leadership/rafael-rolon.avif",
  },
  {
    name: "Kaela Fanning",
    title: "Director of Marketing",
    imageURL: "/images/leadership/kaela-fanning.avif",
  },
];

export default function LeadershipPage() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-12 lg:gap-16 bg-neutral-base">
      <h2 className="text-[18vw] lg:text-[11vw] text-primary leading-none lg:leading-[10.2vw] pt-14 lg:pt-32 tracking-tight font-bold px-4">
        Leadership <br /> Board
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 text-primary mb-10">
        {Leadership.map((member, index) => (
          <div key={index} className="flex flex-col gap-3 mb-10">
            <Image
              src={member.imageURL}
              alt={member.name}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="space-y-1">
              <h3 className="text-2xl">{member.name}</h3>
              <p className="uppercase text-lg">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
