export const sectorTabs = [
  { key: "All", title: "All" },
  { key: "Manufacturing & Processing", title: "Manufacturing" },
  { key: "Hydropower & Clean Energy", title: "Hydropower & Clean Energy" },
  { key: "Hospitality & Tourism", title: "Hospitality" },
  { key: "Healthcare & Pharma", title: "Healthcare" },
  { key: "Agro & Aquaculture", title: "Agro" },
  { key: "Others", title: "Others" },
] as const;

export type Sector = (typeof sectorTabs)[number]["key"];

export interface PortfolioItem {
  id: string;
  name: string;
  shortName: string;
  sector: Sector;
  description: string;
  badge: string;
  badgeType:
    | "growth"
    | "est"
    | "preipo"
    | "listed"
    | "ipo"
    | "operational"
    | "construction";
  tags: string[];
  progress?: number;
  isFeatured?: boolean;
  stats?: { label: string; value: string }[];
  subs?: { label: string; name: string; note?: string }[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "divine-healthcare",
    name: "Divine Healthcare Pvt. Ltd.",
    shortName: "DIVINE Healthcare",
    sector: "Healthcare & Pharma",
    description:
      "WHO GMP and National GMP certified pharmaceutical manufacturer in Bharatpur, Chitwan. Rapidly growing with the highest standards of quality and integrity in medicine manufacturing.",
    badge: "Growth Stage",
    badgeType: "growth",
    tags: ["WHO GMP Certified", "Chitwan", "ISO 9001 & 14001"],
  },
  {
    id: "florid-labs",
    name: "Florid Laboratories Pvt. Ltd.",
    shortName: "FLORID Laboratories",
    sector: "Healthcare & Pharma",
    description:
      "WHO GMP certified pharmaceutical company founded in 2001, Dhapakhel, Lalitpur. Manufacturing quality drugs at affordable prices with a mission of enhancing healthcare access across Nepal.",
    badge: "Est. 2001",
    badgeType: "est",
    tags: ["WHO GMP Certified", "Lalitpur", "Est. 2001"],
  },
  {
    id: "frontline-hospital",
    name: "Frontline Hospital",
    shortName: "FRONTLINE Hospital",
    sector: "Healthcare & Pharma",
    description:
      "200-bed multi-specialty hospital in Old Baneshwor, Kathmandu. SSF and ECHS accredited. World-class tertiary care covering oncology, nephrology, urology, and emergency services at affordable prices.",
    badge: "Pre-IPO",
    badgeType: "preipo",
    tags: ["200 Beds", "SSF Accredited", "ECHS Accredited", "Kathmandu"],
  },
  {
    id: "annapurna-cable-car",
    name: "Annapurna Cable Car Pvt. Ltd.",
    shortName: "Annapurna Cable Car",
    sector: "Hospitality & Tourism",
    description:
      "Nepal's first gondola cable car in Pokhara - 2.3 km from Sedi Bagar to Sarangkot in 10 minutes. Panoramic views of the Annapurna range and Machhapuchhre. Rs 2 billion investment, operational since Feb 2022.",
    badge: "Growth Stage",
    badgeType: "growth",
    tags: ["Pokhara", "2.3 km Ropeway", "17 Gondolas", "Est. 2022"],
  },
  {
    id: "bandipur-cable-car",
    name: "Bandipur Cable Car & Tourism Ltd.",
    shortName: "Bandipur Cable Car",
    sector: "Hospitality & Tourism",
    description:
      "Nepal's first TUV-certified cable car in Tanahu - 2nd most visited attraction in Gandaki Province in its first year. 23 cabins, 500 passengers/hour. Includes a five-star hilltop hotel. NEPSE listed.",
    badge: "NEPSE · BANDIPUR",
    badgeType: "listed",
    tags: ["BANDIPUR", "TUV Certified", "5-Star Hotel", "Tanahu"],
  },
  {
    id: "hotel-forest-inn",
    name: "Hotel Forest Inn Limited",
    shortName: "Hotel Forest Inn",
    sector: "Hospitality & Tourism",
    description:
      "One of Genesis Ventures' 3 IPO exits. Listed on NEPSE March 2026 (ticker: HFIN) with 20 million shares. Paid-up capital Rs 2 Arba. A milestone demonstrating the firm's ability to invest early and exit at listing.",
    badge: "IPO Exit · HFIN",
    badgeType: "ipo",
    tags: ["HFIN - Listed Mar 2026", "IPO Exit", "Hotels & Tourism"],
  },
  {
    id: "hotel-garima",
    name: "Hotel Garima Limited",
    shortName: "Hotel Garima",
    sector: "Hospitality & Tourism",
    description:
      "Five-star Soaltee Westend Itahari in Koshi Province. 82 rooms including Royal Suite, Thai spa, 2 banquet halls, 3 seminar halls. Pre-IPO with Laxmi Sunrise Capital as issue manager.",
    badge: "Pre-IPO",
    badgeType: "preipo",
    tags: ["5-Star", "82 Rooms", "Itahari, Koshi", "Soaltee Group"],
  },
  {
    id: "kbnr-isuwa",
    name: "K.B.N.R. Isuwa Power Ltd.",
    shortName: "KBNR Isuwa Power",
    sector: "Hydropower & Clean Energy",
    description:
      "97.2 MW Peaking Run-of-River on Isuwa Khola, Sankhuwasabha. 30-year PPA with NEA. 674 GWh annual output. 6.9 km headrace pipe, 940m gross head. COD targeted Feb 2027.",
    badge: "65% Complete",
    badgeType: "construction",
    progress: 65,
    tags: ["97.2 MW", "30-yr PPA", "674 GWh/year"],
  },
  {
    id: "ayu-malum",
    name: "Ayu Malum Hydro",
    shortName: "Ayu Malum Hydro",
    sector: "Hydropower & Clean Energy",
    description:
      "21 MW run-of-river on Aayu Malun Khola, Okhaldhunga. Currently under construction with 25% completion. Total project cost of Rs 17.5 Cr/MW (total ~Rs 367 Cr).",
    badge: "25% Complete",
    badgeType: "construction",
    progress: 25,
    tags: ["21 MW", "Rs 17.5 Cr/MW", "Okhaldhunga"],
  },
  {
    id: "abiral-hydro",
    name: "Abiral Hydro Pvt. Ltd.",
    shortName: "Abiral Hydro",
    sector: "Hydropower & Clean Energy",
    description:
      "Commissioned run-of-river hydropower project now operational and supplying clean energy to Nepal's national grid via NEA. Genesis Ventures holds an unlisted equity position.",
    badge: "Commissioned",
    badgeType: "operational",
    progress: 100,
    tags: ["Commissioned", "NEA Grid", "Unlisted Equity"],
  },
  {
    id: "idi-hydro",
    name: "Idi Hydropower Co. Pvt. Ltd.",
    shortName: "Idi Hydro",
    sector: "Hydropower & Clean Energy",
    description:
      "0.975 MW operational small hydro on Idi Khola, NEA grid-connected. IPPAN member. Small run-of-river plants provide stable base-load generation with high uptime.",
    badge: "Operational",
    badgeType: "operational",
    progress: 100,
    tags: ["0.975 MW · Live", "IPPAN Member", "NEA Grid"],
  },
  {
    id: "maruti-cements",
    name: "Maruti Cements Ltd.",
    shortName: "MARUTI Cements",
    sector: "Manufacturing & Processing",
    description:
      "Nepal's first private sector Greenfield cement plant using Rotary Technology, Chandraudaipur, Siraha. ISO 9001:2015 and 14001:2015 certified. First producer of 53-grade OPC cement.",
    badge: "NEPSE · MARUTI",
    badgeType: "listed",
    tags: ["MARUTI", "First Greenfield", "Siraha", "ISO 9001 & 14001"],
  },
  {
    id: "shubhshree-agni",
    name: "Shubhshree Agni Cement Udhyog Ltd.",
    shortName: "Shubhshree Agni Cement",
    sector: "Manufacturing & Processing",
    description:
      "Part of the Agni Group. Integrated clinker and cement manufacturer using German VRM technology, 1,200 TPD grinding capacity. Produces OPC and PPC cement from own limestone mines.",
    badge: "Growth Stage",
    badgeType: "growth",
    tags: ["Agni Group", "German VRM Tech", "1,200 TPD", "Own Mines"],
  },
  {
    id: "mahashakti-cement",
    name: "Mahashakti Cement Limited",
    shortName: "MAHASHAKTI Cement",
    sector: "Manufacturing & Processing",
    description:
      "Quality-focused cement manufacturer in Shivaraj, Kapilvastu. SEBON application filed to issue 1.785 crore public shares worth Rs 1.78 Arba. Laxmi Sunrise Capital as issue manager.",
    badge: "IPO Filed",
    badgeType: "preipo",
    tags: ["IPO Pending · SEBON", "Kapilvastu", "Rs 1.78 Arba Issue"],
  },
  {
    id: "premier-distillery",
    name: "Premier Distillery Ltd.",
    shortName: "PREMIER Distillery",
    sector: "Manufacturing & Processing",
    description:
      "Premium spirits and liquor manufacturer operating in Nepal. Producing high-quality distilled beverages with a focus on domestic market penetration and import substitution.",
    badge: "Growth Stage",
    badgeType: "growth",
    tags: ["Spirits & Liquor", "Consumer Goods", "Import Substitution"],
  },
  {
    id: "premier-steel",
    name: "Premier Steel Ltd.",
    shortName: "PREMIER Steel",
    sector: "Manufacturing & Processing",
    description:
      "Steel products manufacturer supplying structural and construction-grade steel across Nepal. Serving infrastructure and real-estate demand with domestic production.",
    badge: "Growth Stage",
    badgeType: "growth",
    tags: ["TMT Bars & Steel", "Infrastructure", "Import Substitution"],
  },
  {
    id: "sopan-multiple",
    name: "Sopan Multiple Company Limited",
    shortName: "SOPAN Multiple Company",
    sector: "Others",
    description:
      "A diversified holding company founded in 2008 by NRN entrepreneurs and professionals of the Mahato Group. Strategic equity stakes across education, healthcare, hydropower, real estate, and infrastructure.",
    badge: "Pre-IPO · SMCL",
    badgeType: "preipo",
    isFeatured: true,
    tags: ["Mahato Group", "NRN Founded", "IPO at Premium", "NMB Capital", "SMCL"],
    stats: [
      { label: "Paid-up capital", value: "Rs 116.6 Cr" },
      { label: "Shares planned", value: "29.15 Lakh" },
      { label: "Established", value: "2008" },
      { label: "Sectors", value: "5+" },
    ],
    subs: [
      { label: "Education", name: "Kantipur Engineering College" },
      { label: "Education", name: "Acme Engineering College" },
      {
        label: "Healthcare · 49% stake",
        name: "Sopan Pharmaceuticals Ltd.",
        note: "IPO approved · cGMP · 190+ formulations",
      },
      { label: "Hydropower", name: "Molnia Power Limited" },
    ],
  },
  {
    id: "mero-kisan",
    name: "Mero Kisan Ltd.",
    shortName: "MERO KISAN",
    sector: "Agro & Aquaculture",
    description:
      "Agricultural enterprise supporting Nepal's farming communities through modern input supply, technical advisory, and market linkage.",
    badge: "Growth Stage",
    badgeType: "growth",
    tags: ["Agri Services", "Market Linkage", "Rural Development"],
  },
  {
    id: "annapurna-maccha",
    name: "Annapurna Maccha Udyog Ltd.",
    shortName: "Annapurna Maccha Udyog",
    sector: "Agro & Aquaculture",
    description:
      "Nepal's leading fish feed manufacturer based in Khairahani, Chitwan. Produces floating feeds under the brand Matsya Raja. Plant equipped with Austrian ANDRITZ technology.",
    badge: "Pre-IPO",
    badgeType: "preipo",
    tags: [
      "33,500 MT/year",
      "ANDRITZ Technology",
      "Khairahani, Chitwan",
      "Pre-IPO · AMDU",
    ],
  },
];
