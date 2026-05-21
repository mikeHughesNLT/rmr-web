import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Red Mountain Retreat — Restore · Reconnect · Rise",
  description:
    "7-bedroom mountain estate on 20 private acres near Mt. Baker, WA. Treehouse sauna, Steinway piano, stone fireplace. Sleeps 14. 52 min to Baker, 15 min to Canada.",
  keywords: "vacation rental, Mt Baker, Maple Falls, group retreat, Washington state, mountain lodge",
  openGraph: {
    title: "Red Mountain Retreat",
    description: "20 acres. Treehouse sauna. Steinway piano. Sleeps 14.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[var(--color-cream)]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
