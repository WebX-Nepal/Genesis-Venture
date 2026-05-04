import AboutUs from "@/components/InvestorRelations/AboutUs";
import ReportsAndUpdates from "@/components/InvestorRelations/ReportsAndUpdates";
import PartnerCTA from "@/components/InvestorRelations/PartnerCTA";
import InvestorIntro from "@/components/InvestorRelations/InvestorIntro";


export default function InvestorRelationsPage() {
  return (
    <main className="w-full bg-white text-[#2c2c34] font-poppins overflow-x-hidden">
      <InvestorIntro />
      <AboutUs />
      <ReportsAndUpdates />
      <PartnerCTA />
      {/* <InvestorDocuments /> */}
    </main>
  );
}
