import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <Image
        src="/contact/contactng.png"
        alt="Contact Genesis Ventures"
        fill
        priority
        className="mt-14 scale-90 object-contain object-bottom opacity-60 sm:mt-12 sm:scale-100"
      />
    </section>
  );
}
