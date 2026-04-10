import InvestmentPhilosophy from "@/components/About/InvestmentPhilosophy";
import OurProjects from "@/components/Projects/OurProjects";
import ProjectsHero from "@/components/Projects/ProjectsHero";
import SectorStrip from "@/components/Projects/Sector";

export default function Projects() {
  return (
    <main className="w-full font-[PPFONT]">
      <ProjectsHero />
      <div className="sticky top-0 w-full z-9999 bg-white/90 backdrop-blur-md  border-b border-gray-200">
        <SectorStrip />
      </div>
      <OurProjects />
      <InvestmentPhilosophy />
    </main>
  );
}
