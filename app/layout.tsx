import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { CONFIG } from "@/lib/config";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(CONFIG.siteUrl),
  title: {
    default: "N S Vishnu Vamsi Pilla — Full Stack Developer",
    template: "%s · Vishnu Vamsi",
  },
  description:
    "Full Stack Developer with 4+ years in React, Next.js and Node. I own the drag-and-drop Builder and Storefront engine behind CommerceEdge at SellersCommerce. Open to roles and freelance work.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer India",
    "Module Federation",
    "Micro-frontends",
    "N S Vishnu Vamsi Pilla",
  ],
  authors: [{ name: "N S Vishnu Vamsi Pilla", url: CONFIG.siteUrl }],
  creator: "N S Vishnu Vamsi Pilla",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: CONFIG.siteUrl,
    siteName: "N S Vishnu Vamsi Pilla",
    title: "N S Vishnu Vamsi Pilla — Full Stack Developer",
    description:
      "I build the tools other people build websites with. React, Next.js, Node — and the Builder + Storefront modules behind CommerceEdge.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "N S Vishnu Vamsi Pilla — Full Stack Developer",
    description: "I build the tools other people build websites with. React, Next.js, Node.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "N S Vishnu Vamsi Pilla",
  jobTitle: "Full Stack Developer",
  url: CONFIG.siteUrl,
  image: `${CONFIG.siteUrl}/vishnu.jpg`,
  worksFor: { "@type": "Organization", name: "SellersCommerce LLC" },
  address: {
    "@type": "PostalAddress",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  knowsAbout: ["React.js", "Next.js", "Node.js", "Module Federation", "Web Performance"],
  sameAs: [CONFIG.linkedin, CONFIG.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
