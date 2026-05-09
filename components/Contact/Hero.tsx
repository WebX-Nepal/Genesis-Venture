import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[50vh] w-full overflow-hidden bg-white">
      <Image
        src="/contact/cut.png"
        alt="Contact Genesis Ventures"
        fill
        priority
        className="object-contain md:object-cover object-bottom"
      />
    </section>
  );
}
