import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisWrapper";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import Loader from "@/components/ui/Preloader";
import { PreLoaderProvider } from "@/context/PreLoaderContext";

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

export const metadata: Metadata = {
  title: "Genesis Ventures",
  description:
    "Early-stage venture capital firm investing in transformative companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>
          <PreLoaderProvider>
            <Loader />
            {/* <InvestmentRiskFlyer></InvestmentRiskFlyer> */}
            <NavBar />
            {children}
            <Footer />
          </PreLoaderProvider>

        </LenisProvider>
      </body>
    </html>
  );
}
