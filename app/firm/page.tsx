import Firm from "@/components/Home/newabout";
import UnlistedMarket from "@/components/Home/unlist";
import Pagegoer from "@/components/ui/heropages";

export default function WhoWeAreFirmPage() {
  return (
    <main className="w-full bg-white pb-6 sm:pb-8 md:pb-10">
      <Pagegoer
        title={["Independent Capital. Enduring Partnerships."]}
        description="Genesis Ventures partners with ambitious founders and long-term investors through disciplined capital allocation, transparent communication, and execution-focused support."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Firm" },
        ]}
        backgroundImage="/gif/no.png"
        backgroundImageClassName="object-cover opacity-30"
        heightClassName="h-[80vh]"
        overlayClassName="bg-transparent"
        contentOffsetClassName="mt-6 md:mt-10"
        baseClassName="bg-transparent"
        showVideoFallback={false}
      />
    
      <Firm />
   
      <UnlistedMarket />
    </main>
  );
}
