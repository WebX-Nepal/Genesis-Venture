import Firm from "@/components/Home/firm";
import UnlistedMarket from "@/components/Home/unlistedmarket";
import HeroPage from "@/components/ui/HeroPage";

export default function WhoWeAreFirmPage() {
  return (
    <main className="w-full bg-white pb-6 sm:pb-8 md:pb-10">
      <HeroPage
        title={
          <>
            Independent Capital.
            <br />
            Enduring Partnerships.
          </>
        }
        titleClassName="text-[clamp(1.75rem,7vw,4.5rem)] leading-tight tracking-[0.015em]"
        backgroundVideo="/videos/projects.mp4"
      />
      <div className="pt-8 sm:pt-10 md:pt-12">
        <Firm />
      </div>
      <UnlistedMarket />
    </main>
  );
}
