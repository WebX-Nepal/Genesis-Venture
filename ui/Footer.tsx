import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full min-h-screen lg:h-screen flex flex-col lg:flex-row justify-center items-start md:items-center px-5 py-4 bg-primary text-neutral-base">

      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center border-b border-neutral-base lg:border-0 lg:h-full">

        <div className="w-full max-w-[350px] lg:max-w-[35vw] aspect-square">
          <Image
            src="/logo.png"
            alt="logo"
            width={400}
            height={400}
            className="object-contain w-full h-full"
          />
        </div>

        <p className="text-sm lg:text-[0.9vw] font-[PPFONT] px-6 md:px-10 pb-6 md:pb-10 text-center hidden lg:block">
          &copy; 2024 Genesis Venture, Inc. All rights reserved
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 
        auto-rows-min lg:grid-rows-[2fr_1fr_1fr] 
        items-start lg:items-stretch 
        gap-y-6
        w-full flex-1 
        py-4 lg:p-0
        lg:h-full
      ">

        {/* COLUMN 1 */}
        <div className="uppercase font-[GT50] text-sm lg:text-[0.9vw] flex flex-col lg:border-l border-neutral-base lg:pl-5 lg:pt-4 gap-y-1">
          <Link href="/about">About</Link>
          <Link href="/contact">Services</Link>
          <Link href="/privacy">Projects</Link>
          <Link href="/terms">Clients</Link>
        </div>

        {/* COLUMN 2 */}
        <div className="uppercase font-[GT50] text-sm lg:text-[0.9vw] flex flex-col lg:border-l border-neutral-base lg:pl-5 lg:pt-4 gap-y-1">
          <Link href="/about">Culture & Career</Link>
          <Link href="/contact">Blogs</Link>
          <Link href="/terms">Contacts</Link>
        </div>

        {/* FAQ */}
        <h1 className="text-sm lg:text-[0.9vw] lg:pl-4">FAQ</h1>

        {/* STAY IN TOUCH */}
        <div className="flex flex-col justify-start bg-primary z-10 w-full h-fit order-last lg:order-0 pr-4">
          <div className="flex font-[GT50] text-sm lg:text-[0.9vw] gap-x-4 uppercase pb-3">
            <p>Stay In Touch</p> | <span className="pt-2">1-22-333-444</span>
          </div>
          <input
            className="w-full px-5 py-4 outline-none border border-neutral-base"
            placeholder="Enter your email"
          />
        </div>

        {/* SOCIAL */}
        <div className="uppercase font-[GT50] text-sm lg:text-[0.9vw] flex flex-col lg:justify-end lg:border-l border-neutral-base lg:pl-5 gap-y-1">
          <Link href="/about">Facebook</Link>
          <Link href="/contact">Instagram</Link>
          <Link href="/terms">LinkedIn</Link>
          <Link href="/terms">X</Link>
        </div>

        {/* LEGAL */}
        <div className="uppercase font-[GT50] text-sm lg:text-[0.9vw] flex flex-col lg:justify-end lg:border-l border-neutral-base lg:pl-5 gap-y-1">
          <Link href="/about">Privacy policy</Link>
          <Link href="/contact">Terms and conditions</Link>

          <Link className="mt-5" href="/terms">
            Made By webX Nepal.
          </Link>
        </div>

      </div>
    </div>
  );
}
