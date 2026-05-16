import Firm from "@/components/Home/newabout";
import UnlistedMarket from "@/components/Home/unlist";
import HeroPage from "@/components/ui/HeroPage";

export default function WhoWeAreFirmPage() {
  return (
    <main className="w-full bg-white pb-6 sm:pb-8 md:pb-10">
      <HeroPage
        titleClassName="font-agatho text-[clamp(1.75rem,7vw,4.5rem)] leading-tight tracking-[0.015em]"
        backgroundVideo="/videos/newfirm.mp4"
        heightClassName="h-[60vh] md:h-screen"
      />
      <div className="pt-8 sm:pt-10 md:pt-12">
        <Firm />
      </div>
      <UnlistedMarket />
    </main>
  );
}
