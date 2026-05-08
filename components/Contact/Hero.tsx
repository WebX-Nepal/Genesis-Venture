import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-white p-4">
      <Image
        src="/contact/contact.png"
        alt="Contact Genesis Ventures"
        fill
        priority
        className="object-contain md:object-cover"
      />
    </section>
  );
}
