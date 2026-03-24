export function Mission() {
  return (
    <div className="w-full pt-7 px-5 relative">
      <div className="border-t border-b border-primary flex flex-col lg:flex-row lg:h-screen">

        {/* mission statement */}
        <div className="absolute top-5 left-0 w-full flex justify-between items-start">
          <p className="p-5 text-sm text-primary uppercase w-full">Mission Statement</p>
          <p className=" flex w-full font-[GT50] justify-end p-5 text-sm text-primary">[OCI.1]</p>
        </div>

        {/* only desktop mode */}
        <div className="uppercase lg:w-200 relative font-[GT50] text-primary lg:border-r border-primary hidden lg:block">
          <h1 className="absolute font-[PPFONT] bg-neutral-dark whitespace-nowrap top-1/2 -translate-y-1/2 text-[11vw]">
            Our Vision
          </h1>
        </div>

        <div className="flex flex-col h-full items-start justify-end lg:justify-between gap-y-10 py-20 lg:pl-10 w-full uppercase lg:normal-case">
          <h1 className="uppercase font-[PPFONT] whitespace-nowrap text-[15vw] lg:text-[11vw] text-center w-full text-primary lg:hidden pt-8 font-bold">
            Our Vision
          </h1>
          <p className="tracking-normal text-primary font-[GT50] max-w-xs md:max-w-md lg:max-w-[20vw] text-base lg:text-[1vw] leading-5 lg:leading-[1.2vw]">
            To lead as the most trusted advocate for designers and builders across New York City and beyond, setting the standard for expertise, partnership, and excellence in every project we support.
          </p>
          <p className="tracking-normal text-primary font-[GT50] max-w-xs md:max-w-md lg:max-w-[20vw] text-base lg:text-[1vw] leading-5 lg:leading-[1vw]">
            Our vision is to help shape the landscape and skyline of our never-resting city while respecting and supporting the laws that govern and regulate construction.
          </p>
        </div>
      </div>
    </div>
  );
}
