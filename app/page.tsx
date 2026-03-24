import Description from "@/components/Home/Description";
import Hero from "@/components/Home/Hero";
import MostRecent from "@/components/Home/MostRecent";
import News from "@/components/Home/News";
import OurServices from "@/components/Home/OurServices";
import Process from "@/components/Home/Process";
import Testomonials from "@/components/Home/Testomonials";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden text-neutral-base bg-neutral-dark font-PPFONT">
      <Hero />
      <Description />
      <OurServices />
      <Process />
      <MostRecent />
      <Testomonials />
      <News />
    </div>
  )
}