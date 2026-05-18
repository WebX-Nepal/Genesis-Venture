import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[60vh]  w-full overflow-hidden bg-white">
      <Image
        src="/contact/contactng.png"
        alt="Contact Genesis Ventures"
        fill
        priority
        className="object-contain mt-12 object-bottom opacity-60"
      />
    </section>
  );
}
