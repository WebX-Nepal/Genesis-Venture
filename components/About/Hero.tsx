import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full min-h-screen gap-16">
      <div className="w-full min-h-[30vh] lg:min-h-[60vh] flex flex-col justify-end">
        <h1 className=" font-[PPFONT] text-[14vw] md:text-[12vw] flex items-end justify-end px-5 py-6 lg:py-2 tracking-tight">
          <span className="text-primary leading-none">A Collective</span>
        </h1>
      </div>
      <div className="w-full relative">
        <Image
          src="/image3.png"
          alt="About Hero Image"
          fill
          className="w-full h-full top-0 left-0 right-0 absolute object-cover"
        />
        <div className="w-full h-full absolute bg-primary/60 z-1" />
        <div className="flex flex-col gap-y-32 py-4 lg:py-48 px-3 lg:px-5 h-[60vh] md:h-full">
          <h1 className="font-[PPFONT] text-[13vw] lg:text-[11vw] tracking-tight text-neutral-base leading-none lg:leading-[10vw] z-1">
            of Unique <br />
            Perspectives
          </h1>
          <div className="w-full flex justify-end md:pr-[10vw]">
            <p className="font-[PPFONT] text-neutral-base text-lg z-1 lg:text-[1.8vw] max-w-lg ">
              What began in 1993 as a bold vision for a full-service, minority-owned
              expediting firm has grown into one of New York City’s largest
              expediting companies. As the city has changed, Outsource Consultants,
              Inc. has continued to evolve—stronger, smarter, and more impactful
              than ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
