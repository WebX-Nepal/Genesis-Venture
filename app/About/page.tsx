import Hero from "@/components/About/Hero";
import LeadershipPage from "@/components/About/Leadership";
import Milestone from "@/components/About/Milestone";
import { Mission } from "@/components/About/Mission";

export default function About() {
  return (
    <div className="min-h-screen bg-neutral-dark">
      <Hero />
      <Mission />
      <Milestone />
      <LeadershipPage />
    </div>
  );
}
