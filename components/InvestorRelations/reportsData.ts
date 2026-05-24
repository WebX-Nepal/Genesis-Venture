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

export type ReportCardItem = {
  slug: string;
  title: string;
  file: string;
  section: "Financial Reporting" | "Shareholders' Information" | "Investor Service Centre";
  summary: string;
};

export const financialReportingCards: readonly ReportCardItem[] = [
  {
    slug: "genesis-report-and-accounts",
    title: "Annual Report and Accounts",
    file: "Genesis-Ventures-Report-and-Accounts-2025.pdf",
    section: "Financial Reporting",
    summary: "Comprehensive annual report with governance, strategy, and audited financial statements.",
  },
  {
    slug: "quarterly-results",
    title: "Quarterly Results",
    file: "Q4-2024-Quarterly-Results.pdf",
    section: "Financial Reporting",
    summary: "Quarterly performance highlights, portfolio movement, and key operational updates.",
  },

  {
    slug: "press-releases",
    title: "Press Releases",
    file: "Press-Releases-2026.pdf",
    section: "Financial Reporting",
    summary: "Official company announcements covering milestones, investments, and leadership updates.",
  },
  {
    slug: "investor-presentations",
    title: "Investor Presentations",
    file: "Investor-Presentations-2026.pdf",
    section: "Financial Reporting",
    summary: "Investor deck materials outlining portfolio positioning and long-term investment outlook.",
  },
] as const;

export const shareholderCards: readonly ReportCardItem[] = [
  {
    slug: "shareholder-agm-information",
    title: "Shareholder & AGM Information",
    file: "Shareholder-AGM-Information-2026.pdf",
    section: "Shareholders' Information",
    summary: "Meeting schedules, notices, participation guidance, and post-AGM outcome disclosures.",
  },
  {
    slug: "unclaimed-unpaid-dividend",
    title: "Unclaimed & Unpaid Dividend",
    file: "Unclaimed-Unpaid-Dividend-Details-2026.pdf",
    section: "Shareholders' Information",
    summary: "Details of unclaimed dividends and the process for shareholder claim requests.",
  },
  {
    slug: "disclosures-regulation-46",
    title: "Disclosures under SEBON Listing Regulations",
    file: "Disclosures-Under-Regulation-46-2026.pdf",
    section: "Shareholders' Information",
    summary: "Central repository of mandated public disclosures for investor transparency and compliance.",
  },


  {
    slug: "genesis-shareholding-pattern",
    title: "Genesis Shareholding Pattern",
    file: "Genesis-Shareholding-Pattern-2026.pdf",
    section: "Shareholders' Information",
    summary: "Updated distribution of share ownership across promoter, institutional, and other categories.",
  },

] as const;

export const investorServiceCards: readonly ReportCardItem[] = [
  {
    slug: "service-request-form",
    title: "Service Request Form",
    file: "Investor-Service-Request-Form.pdf",
    section: "Investor Service Centre",
    summary: "Standard form for account updates, document requests, and investor support actions.",
  },
  {
    slug: "contact-escalation",
    title: "Contact & Escalation",
    file: "Investor-Contact-Escalation-Guide.pdf",
    section: "Investor Service Centre",
    summary: "Contact matrix and escalation path for service requests and grievance handling.",
  },
  {
    slug: "kyc-checklist",
    title: "KYC Checklist",
    file: "KYC-Account-Update-Checklist.pdf",
    section: "Investor Service Centre",
    summary: "Checklist of required KYC and account-update documents for investors.",
  },
  {
    slug: "investor-helpdesk",
    title: "Investor Helpdesk",
    file: "Investor-Communication-Circular-2026.pdf",
    section: "Investor Service Centre",
    summary: "Helpdesk process note covering response timelines and communication guidelines.",
  },
] as const;

export const allInvestorReportCards: readonly ReportCardItem[] = [
  ...financialReportingCards,
  ...shareholderCards,
  ...investorServiceCards,
];

export const financialReports = financialReportingCards;
