import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "KasperLift MMC | Lift və Eskalator Sistemləri",
  description: "KasperLift MMC - Azərbaycanın aparıcı lift və eskalator şirkəti. 13+ illik təcrübə ilə satış, quraşdırma və xidmət.",
  keywords: "lift, eskalator, avtomatik qapı, Bakı, Azərbaycan, KasperLift, lift quraşdırma, lift xidmət",
  openGraph: {
    title: "KasperLift MMC | Lift və Eskalator Sistemləri",
    description: "13+ illik təcrübə ilə professional lift və eskalator həlləri",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
