import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://karbafinancialconsultant.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "KARBA Financial Consultant Ltd",
    template: "%s | KARBA Financial Consultant Ltd",
  },

  description:
    "Professional Insurance Advisory, Financial Planning and Real Estate Consultancy in Nigeria. Helping individuals, families and businesses protect wealth, grow investments and leave a lasting legacy.",

  applicationName: "KARBA Financial Consultant Ltd",

  keywords: [
    "KARBA Financial Consultant Ltd",
    "Insurance Advisory Nigeria",
    "Life Insurance",
    "Children Education Planning",
    "Family Protection",
    "Retirement Planning",
    "Annuity",
    "Financial Planning",
    "Real Estate Consultancy",
    "Property Sales",
    "Property Purchase",
    "Property Rental",
    "Property Leasing",
    "Property Investment",
    "Lagos",
    "Nigeria",
  ],

  authors: [
    {
      name: "Babatunde Bamigbetan",
    },
  ],

  creator: "Babatunde Bamigbetan",

  publisher: "KARBA Financial Consultant Ltd",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
  type: "website",
  locale: "en_NG",
  url: siteUrl,
  siteName: "KARBA Financial Consultant Ltd",
  title: "KARBA Financial Consultant Ltd",
  description:
    "Professional Insurance Advisory, Financial Planning and Real Estate Consultancy helping individuals, families and businesses build financial confidence.",

  images: [
    {
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "KARBA Financial Consultant Ltd",
    },
  ],
},

  twitter: {
    card: "summary_large_image",
    title: "KARBA Financial Consultant Ltd",
    description:
      "Live Confidently. Invest Wisely. Leave a Legacy.",

    images: ["/images/logo.png"],
  },

  icons: {
  icon: "/images/favicon.ico",
  shortcut: "/images/favicon.ico",
  apple: "/apple-touch-icon.png",
},

  category: "Finance",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <FloatingWhatsApp />

        <Footer />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FinancialService",

      name: "KARBA Financial Consultant Ltd",

      url: "https://karbafinancialconsultant.com",

      logo: "https://karbafinancialconsultant.com/images/logo.png",

      image: "https://karbafinancialconsultant.com/images/og-image.jpg",

      description:
        "Professional Insurance Advisory, Financial Planning and Real Estate Consultancy in Nigeria.",

      email: "info@karbafinancialconsultant.com",

      telephone: "+2349162631205",

      founder: {
        "@type": "Person",
        name: "Babatunde Bamigbetan",
      },

      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "Nigeria",
      },

      areaServed: "Nigeria",

      sameAs: [
        "https://www.linkedin.com/",
        "https://facebook.com/",
        "https://instagram.com/",
      ],
    }),
  }}
/>
      </body>
    </html>
  );
}