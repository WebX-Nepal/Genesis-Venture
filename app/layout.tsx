import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import LenisProvider from "@/components/LenisWrapper";
import FooterFixed from "@/components/layout/FooterFixed";
import NavBar from "@/components/layout/NavBar";
import { PreLoaderProvider } from "@/context/PreLoaderContext";
import { HeroVideoLoadProvider } from "@/context/HeroVideoLoadContext";
import Preloader from "@/components/ui/Preloader";
  
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
  metadataBase: new URL("https://genesisventures.com.np"),
  title: "Genesis Ventures | Investment Company",
  description:
    "Genesis Ventures is a modern venture capital and investment company focused on backing visionary businesses, innovation, and long-term growth.",
  icons: {
    icon: "/favicon.ico",
  },
  alternates:{
    canonical:"https://genesisventures.com.np"
  }
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
        style={{ backgroundColor: "#0a1634" }}
      >
        <LenisProvider>
          <PreLoaderProvider>
            <HeroVideoLoadProvider>
              <Preloader />
              <NavBar />
              {children}
              <FooterFixed />
            </HeroVideoLoadProvider>
          </PreLoaderProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
