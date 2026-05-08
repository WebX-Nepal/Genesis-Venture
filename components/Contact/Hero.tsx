import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full p-4 overflow-hidden">
      <Image
        src="/contact/contact.png"
        alt="Contact Genesis Ventures"
        fill
        priority
        className="object-cover"
      />
    </section>
  );
}
