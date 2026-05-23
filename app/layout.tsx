import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
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
    "7-bedroom mountain estate on 25 private acres near Mt. Baker, WA. Treehouse sauna, Steinway piano, stone fireplace. Sleeps 14. 52 min to Baker, 15 min to Canada.",
  keywords: "vacation rental, Mt Baker, Maple Falls, group retreat, Washington state, mountain lodge",
  openGraph: {
    title: "Red Mountain Retreat",
    description: "25 acres. Treehouse sauna. Steinway piano. Sleeps 14.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[var(--color-cream)]">
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1640740380525421');
          fbq('track', 'PageView');
        `}</Script>
        <noscript><img height="1" width="1" style={{display:"none"}} src="https://www.facebook.com/tr?id=1640740380525421&ev=PageView&noscript=1" alt="" /></noscript>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-32WYJ50M9X" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-32WYJ50M9X');
        `}</Script>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
