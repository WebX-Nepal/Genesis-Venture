"use client";

import { ClipboardCheck, Handshake, Leaf, ShieldCheck } from "lucide-react";

const principles = [
  {
    title: "Integrity",
    icon: ShieldCheck,
    description:
      "Our business is built on the pillars of honesty and transparency. These values are at the core of everything we do, and we believe they are essential to our success.",
  },
  {
    title: "Accountability",
    icon: ClipboardCheck,
    description:
      "We take complete ownership of our actions, decisions and outcomes in all aspects of our operations, ensuring that we consistently exceed expectations.",
  },
  {
    title: "Respect",
    icon: Handshake,
    description:
      "We value everyone and treat people with dignity and professionalism. It promotes cooperation and makes it easier for us to achieve our common goals.",
  },
  {
    title: "Ethical investing",
    icon: Leaf,
    description:
      "We are committed to integrating financial goals with responsible and sustainable practices that deliver long term value to our clients and society at large.",
  },
] as const;

export default function Principle() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="layout-7xl">
        <div className="mb-10 text-center">
          <h2 className="font-agatho text-4xl leading-[1.05] text-[#173053] sm:text-5xl">
            The Core Principles that Drives Genesis
          </h2>
          <p className="mx-auto mt-3 max-w-4xl text-[14px] leading-relaxed text-[#173053]/75 sm:text-[15px]">
            We value everyone and treat people with dignity and professionalism. It promotes
            cooperation and makes it easier for us to achieve our common goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item, index) => {
            const Icon = item.icon;
            const isBlue = index % 2 === 0;
            return (
              <article
                key={item.title}
                className={`min-h-[380px] border border-[#8D1E39] p-6 text-center shadow-[0_10px_24px_rgba(22,46,84,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8D1E39] hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] sm:min-h-[410px] sm:p-7 ${
                  isBlue ? "bg-[#001D3F]" : "bg-white"
                }`}
              >
                <Icon
                  className={`mx-auto mb-5 h-12 w-12 transition-colors duration-300 group-hover:text-[#8D1E39] ${
                    isBlue ? "text-white/90" : "text-[#173053]"
                  }`}
                  strokeWidth={1.8}
                />
                <h3
                  className={`font-agatho text-[1.5rem] leading-[1.15] ${
                    isBlue ? "text-white" : "text-[#173053]"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-3 text-[12px] leading-[1.75] sm:text-[15px] ${
                    isBlue ? "text-white/85" : "text-[#2a4363]"
                  }`}
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
