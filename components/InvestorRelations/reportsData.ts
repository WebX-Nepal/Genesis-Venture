export const investorTabs = [
  "FINANCIAL REPORTING",
  "SHAREHOLDERS' INFORMATION",
  "INVESTOR SERVICE CENTRE",
] as const;

export const investorStats = [
  { label: "NAV", value: "$24.99", sub: "as of May 14, 2026", bg: "bg-[#eef3f9]" },
  { label: "1-Day Change", value: "$-0.01", extra: "(-0.04%)", sub: "as of May 14, 2026", bg: "bg-[#f8eef1]" },
  { label: "ITD Return", value: "3.64%", sub: "as of May 14, 2026", bg: "bg-[#edf4f6]" },
] as const;

export const financialReports = [
  {
    type: "quarterly",
    year: "2024",
    month: "October",
    title: "Quarterly Results",
    file: "Q4-2024-Quarterly-Results.pdf",
  },
  {
    type: "annual",
    year: "2025",
    month: "July",
    title: "ITC Report and Accounts",
    file: "ITC-Report-and-Accounts-2025.pdf",
  },
  {
    type: "annual",
    year: "2025",
    month: "January",
    title: "Annual Financial Statement",
    file: "Annual-Financial-Statement-2025.pdf",
  },
  {
    type: "others",
    year: "2025",
    month: "April",
    title: "Half-Year Performance Summary",
    file: "Half-Year-Performance-Summary-2025.pdf",
  },
  {
    type: "others",
    year: "2025",
    month: "November",
    title: "Investor Update Bulletin",
    file: "Investor-Update-Bulletin-2025.pdf",
  },
  {
    type: "quarterly",
    year: "2025",
    month: "December",
    title: "Quarterly Disclosure Pack",
    file: "Q4-2025-Disclosure-Pack.pdf",
  },
  {
    type: "annual",
    year: "2026",
    month: "March",
    title: "Annual Governance Report",
    file: "Annual-Governance-Report-2026.pdf",
  },
  {
    type: "others",
    year: "2026",
    month: "June",
    title: "Investor Communication Circular",
    file: "Investor-Communication-Circular-2026.pdf",
  },
  {
    type: "quarterly",
    year: "2026",
    month: "September",
    title: "Quarterly Portfolio Update",
    file: "Quarterly-Portfolio-Update-2026.pdf",
  },
] as const;

