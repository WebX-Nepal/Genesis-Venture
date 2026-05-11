import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import LenisProvider from "@/components/LenisWrapper";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import Loader from "@/components/ui/Preloader";
import { PreLoaderProvider } from "@/context/PreLoaderContext";
import { HeroVideoLoadProvider } from "@/context/HeroVideoLoadContext";
// import { TransitionProvider } from "@/context/TransitionContext";
  
const agatho = localFont({
  variable: "--font-agatho",
  src: [
    { path: "../public/fonts/agatho/Agatho_Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/agatho/Agatho_ Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/agatho/Agatho_ Bold.otf", weight: "700", style: "normal" },
  ],
  display: "block",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "block",
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "block",
});

export const metadata: Metadata = {
  title: "Genesis Ventures",
  description:
    "Early-stage venture capital firm investing in transformative companies.",
    icons: {
      icon: "/favicon.ico",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} ${geistSans.variable} ${geistMono.variable} ${agatho.variable} antialiased`}
      >
        <LenisProvider>
          <PreLoaderProvider>
            <HeroVideoLoadProvider>
            {/* <TransitionProvider> */}
              {/* <Loader /> */}
              {/* <InvestmentRiskFlyer></InvestmentRiskFlyer> */}
              <NavBar />
              {children}
              <Footer />
            {/* </TransitionProvider> */}
            </HeroVideoLoadProvider>
          </PreLoaderProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
