"use client";
import Image from "next/image";
import { useState } from "react";

const Question = () => {
  return (
    <>
      <form
        className="flex flex-col gap-10 py-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col text-xs gap-y-1">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="flex-1 py-2 border-b border-primary text-xl appearance-none bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex flex-col text-xs gap-y-1">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="flex-1 py-2 border-b border-primary text-xl appearance-none bg-transparent focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col text-xs gap-y-1">
          <label htmlFor="company">Email</label>
          <input
            type="email"
            placeholder="johndoe@company.com"
            className="py-2 border-b border-primary text-xl appearance-none bg-transparent focus:outline-none"
          />
        </div>

        <div className="flex flex-col text-xs gap-y-1">
          <label htmlFor="message">Message</label>
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Message..."
            className="py-2 border-b border-primary text-xl appearance-none bg-transparent focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="py-4 bg-primary text-neutral-base font-[GT50] text-xl max-w-[150px] hover:bg-neutral-base hover:text-primary border border-primary transition-colors duration-300"
        >
          Send
        </button>
      </form>
    </>
  );
};

const Proposal = () => {
  return (
    <>
      <form className="flex flex-col gap-10 py-2 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col text-xs gap-y-1">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className=" py-2 border-b border-primary text-xl appearance-none bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex flex-col text-xs gap-y-1">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className=" py-2 border-b border-primary text-xl appearance-none bg-transparent focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col text-xs gap-y-1">
          <label htmlFor="company">Email</label>
          <input
            type="email"
            placeholder="johndoe@company.com"
            className=" py-2 border-b border-primary text-xl appearance-none bg-transparent focus:outline-none"
          />
        </div>
        <div className="flex flex-col text-xs gap-y-1">
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="1-212-732-0050"
            className=" py-2 border-b border-primary text-xl appearance-none bg-transparent focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="productDetails">Product Details</label>
          <input
            type="text"
            id="productDetails"
            placeholder="Product description..."
            className="flex-1 py-2 border-b border-primary text-xl appearance-none bg-transparent focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="py-4 bg-primary text-neutral-base font-[GT50] text-xl max-w-[150px] hover:bg-neutral-base hover:text-primary border border-primary transition-colors duration-300"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default function Connect() {
  const [showQuestion, setShowQuestion] = useState(true);

  return (
    <div className="w-full min-h-screen bg-neutral-dark px-4 pb-24 relative">
      <div className="text-primary">

        <div className="absolute top-0 left-0 w-full flex justify-between items-start">
          <p className="p-5 text-xs text-primary uppercase w-full">Contact Us</p>
          <p className=" flex f w-full font-[GT50] justify-end p-5 text-xs text-primary">[OCI.1]</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_6fr] lg:border-b border-primary">
          {/* left section */}
          <div className="flex flex-col w-full h-full gap-y-28 mr-46 pt-[15vw]">
            <p className="
            text-[7.2vw] lg:text-[2vw] leading-none
            font-[PPFONT] w-full
            lg:max-w-sm pt-6 lg:pt-0
            ">
              Let&apos;s connect on your next building project.
            </p>
            <div className="flex-col gap-5 text-xs md:text-base hidden lg:flex">
              <p>
                237 West 35th Street, Suite 12A <br />
                New York, New York 10001
              </p>
              <p>
                10001 1-212-732-0555 <br />
                contact@outsourceconsultants.com
              </p>
            </div>
          </div>

          {/* right section */}
          <div className="flex flex-col h-full justify-between lg:border-l border-primary text-primary lg:pb-20 lg:pl-24 pt-[14vw]">
            <div className="flex flex-col gap-y-10 lg:gap-y-26">
              <div className="flex gap-4 w-full justify-center lg:justify-start">
                <button
                  onClick={() => setShowQuestion(true)}
                  className={`px-4 py-2 font-[GT50] text-3xl md:text-4xl lg:text-[2.8vw] tracking-tighter 
                    ${showQuestion ? "text-primary border-b border-primary" : "text-neutral-muted opacity-30"}`}
                >
                  Question
                </button>
                <button
                  onClick={() => setShowQuestion(false)}
                  className={`px-4 py-2 font-[GT50] text-3xl md:text-4xl lg:text-[2.8vw] 
                    ${!showQuestion ? "text-primary border-b border-primary" : "text-neutral-muted opacity-30"}`}
                >
                  Proposal
                </button>
              </div>
              <div className="max-w-[700px]">
                {showQuestion ? <Question /> : <Proposal />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
