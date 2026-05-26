import UnlistedMarket from "@/components/Home/unlist";
import Pagegoer from "@/components/ui/heropages";
import FirmWhoWeAreSection from "./components/FirmWhoWeAreSection";
export default function WhoWeAreFirmPage() {
  return (
    <main className="w-full bg-white pb-6 sm:pb-8 md:pb-10">
      <Pagegoer
        title={["At Genesis, you are more than just an investor. you are an owner."]}
        description="A forward-thinking investment firm focused on strategic growth and sustainable partnerships."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Firm" },
        ]}
        backgroundImage="/pageimage/firm.png"
        
        // backgroundVideo="/videos/newfirm.mp4"
        backgroundImageClassName="object-cover "
        heightClassName="h-screen"
        overlayClassName="bg-[#001D3F]/50"
        titleClassName="font-agatho text-white capitalize "
        baseClassName="bg-genesis-navy"
        showVideoFallback={false}
      />
      <FirmWhoWeAreSection />
      <UnlistedMarket />
    </main>
  );
}
