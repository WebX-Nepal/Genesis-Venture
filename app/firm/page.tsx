import Firm from "@/components/Home/newabout";
import UnlistedMarket from "@/components/Home/unlist";
import Pagegoer from "@/components/ui/heropages";

export default function WhoWeAreFirmPage() {
  return (
    <main className="w-full bg-white pb-6 sm:pb-8 md:pb-10">
      <Pagegoer
        title={["Investing in Vision.", "Building Long-Term Value."]}
        description="A forward-thinking investment firm focused on strategic growth and sustainable partnerships."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Firm" },
        ]}
        backgroundImage="/gif/firm.gif"
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
