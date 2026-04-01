import Image from "next/image";

interface OurServicesProps {
  title: string;
  description: string;
  imageUrl: string;
}

const servicesData: OurServicesProps[] = [
  {
    title: "Code & Zoning Consultation",
    description:
      "Our experienced consultants provide in-depth guidance on building, zoning, plumbing, and mechanical codes. We help you navigate complex regulations, ensure compliance, and streamline approvals for projects across New York City.",
    imageUrl: "/image1.jpg",
  },
  {
    title: "Permit Expediting Services",
    description:
      "We simplify the permitting process by managing applications, filings, and agency coordination on your behalf. Our team ensures faster approvals and minimizes delays so your project stays on schedule.",
    imageUrl: "/image2.jpg",
  },
  {
    title: "Project Compliance & Filing",
    description:
      "From initial documentation to final approvals, we handle all compliance requirements with precision. Our experts prepare and submit accurate filings to ensure your project meets all regulatory standards.",
    imageUrl: "/image3.jpg",
  },
];

export function OurServices() {
  return (
    <div className="min-h-screen bg-neutral-dark w-full pt-7 px-4 relative">
      <div className="border-y border-primary text-primary">
        {/* our services */}
        <div className="flex flex-col lg:flex-row lg:h-screen">
          <div className="absolute top-5 left-0 w-full flex justify-between items-start">
            <p className="p-4 text-sm text-primary uppercase w-full">
              Our Services
            </p>
            <p className=" flex w-full font-poppins justify-end p-4 text-sm text-primary">
              [OCI.2]
            </p>
          </div>

          {/* only desktop mode */}
          <div className="uppercase lg:w-200 relative font-poppins text-primary lg:border-r border-primary hidden lg:block">
            <h1 className="absolute font-[PPFONT] bg-neutral-dark whitespace-nowrap top-1/2 -translate-y-1/2 text-[11vw]">
              A Versatile
            </h1>
          </div>

          <div className="flex flex-col h-full items-start justify-end lg:justify-between gap-y-6 py-12 lg:pl-10 w-full uppercase lg:normal-case">
            <h1 className="font-[PPFONT] text-[19vw] lg:text-[11vw] text-start w-full text-primary lg:hidden py-6 font-bold normal-case leading-none">
              A versatile range of services
            </h1>
            <p className="tracking-normal text-primary font-poppins md:max-w-md lg:max-w-[20vw] text-xs lg:text-[1vw] leading-4 lg:leading-[1.2vw]">
              Navigating city regulatory agencies can seem like an
              insurmountabley task for architects, engineers, owners and
              contractors.
            </p>
            <div className="lg:hidden w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/50" />
              <Image
                src="/images/range.avif"
                alt="Range"
                width={800}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="tracking-normal text-primary font-poppins md:max-w-md lg:max-w-[20vw] text-xs lg:text-[1vw] leading-4 lg:leading-[1.2vw]">
              From concept to construction, Outsource guides every step—turning
              blueprints into shovel-ready projects
            </p>
          </div>
        </div>

        {/* range of services */}
        <div className="flex flex-col lg:flex-row lg:min-h-screen lg:border-t border-primary relative overflow-hidden">
          {/* left text */}
          <div className="hidden lg:block lg:w-[20vw] border-r border-primary relative">
            <h1 className="absolute left-[6vw] top-40 font-[PPFONT] text-[11vw] leading-none text-primary z-5 whitespace-nowrap">
              <span className="bg-neutral-dark">Ra</span>
              <span className="bg-transparent">nge of</span>
            </h1>
          </div>

          {/* right side */}
          <div className="flex flex-col w-full relative lg:py-12 items-center lg:items-start">
            <div className="flex flex-col lg:flex-row items-center gap-10 pb-12 lg:py-20 lg:pl-[6vw] ">
              {/* image */}
              <div className="hidden lg:block w-full relative h-[55vw] overflow-hidden">
                <div className="inset-0 absolute bg-primary/50" />
                <Image
                  src="/images/range.avif"
                  alt="Range"
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* text */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6 text-primary">
                <ul className="uppercase tracking-normal font-poppins text-xs lg:text-[0.8vw]">
                  <li>Code</li>
                  <li>Zoning</li>
                  <li>Permits</li>
                  <li>Sign-offs</li>
                </ul>
              </div>
            </div>

            {/* service */}
            <h1 className="hidden lg:block absolute bottom-[10vw] right-5 font-[PPFONT] text-[11vw] leading-none text-primary">
              Services
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center pb-32">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="group w-full flex flex-col md:flex-row py-5 text-primary items-start border-t border-primary
            md:items-center hover:text-neutral-base transition-colors duration-150 gap-y-2 relative overflow-hidden"
          >
            {/* hover element */}
            <div
              className={`
              absolute inset-0 bg-primary 
              group-hover:translate-y-0 transition-all duration-500 z-0
              -translate-y-full
            `}
            />

            {/* mobile only title */}
            <div className="w-full flex justify-between items-center md:hidden leading-none text-[8vw] z-1">
              <h2 className="font-[PPFONT]">{service.title}</h2>
              <h1 className="font-[PPFONT]">{index + 1}</h1>
            </div>

            {/* desktop only number */}
            <div className="hidden md:block md:w-1/4 z-1">
              <h1 className="text-4xl font-[PPFONT]">{index + 1}</h1>
            </div>

            {/* desktop only img */}
            <div className="hidden md:block md:w-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-1">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* content */}
            <div className="w-full md:w-2/4 mt-4 md:mt-0 z-1">
              <h2 className="hidden md:block text-2xl font-[PPFONT] mb-3">
                {service.title}
              </h2>
              <p className="text-xs uppercase font-poppins mb-4">
                {service.description}
              </p>
              <button className="p-9 bg-neutral-dark text-primary text-xs font-[PPFONT] md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 uppercase">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
