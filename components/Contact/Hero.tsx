import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <Image
        src="/contact/kath.png"
        alt="Contact Genesis Ventures"
        fill
        priority
        className="object-cover"
      />
    </section>
  );
}
