import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
    default: "KARBA Financial Consultant Ltd | Insurance, Real Estate & Financial Advisory",
    template: "%s | KARBA Financial Consultant Ltd",
  },

    description:
"Professional insurance, financial planning and real estate advisory services in Nigeria. KARBA Financial Consultant Ltd helps individuals, families and businesses build financial security, protect their future, grow wealth and make informed property investment decisions.",

  applicationName: "KARBA Financial Consultant Ltd",

  keywords: [
  "KARBA",
  "KARBA Financial Consultant",
  "KARBA Financial Consultant Ltd",
  "Financial Consultant Nigeria",
  "Insurance Advisory",
  "Life Insurance",
  "Children Education Planning",
  "Family Protection Plan",
  "Retirement Planning",
  "Annuity",
  "Retirement and Annuity",
  "Insurance Advisory Nigeria",
  "Family Protection",
  "Estate Planning",
  "Financial Planning",
  "Investment Planning",
  "Real Estate Advisory",
  "Property Investment",
  "Land Sales",
  "House Sales",
  "Apartment Sales",
  "Apartment Rentals",
  "Property Leasing",
  "Commercial Property",
  "Property Due Diligence",
  "Real Estate Consultancy",
  "Property Rental",
  "Property Sales",
  "Property Purchase",
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
      "Professional Insurance Advisory, Financial Planning and Real Estate Consultancy in Nigeria. Helping individuals, families and businesses protect wealth, grow investments and secure their future.",

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
      "Real Estate Consultancy • Insurance Advisory • Financial Planning",

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

        <GoogleAnalytics />
        
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <FloatingWhatsApp />

        <Footer />
        
        <script
        id="karba-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FinancialService", 

       "@id": "https://www.karbafinancialconsultant.com/#organization",

      name: "KARBA Financial Consultant Ltd",

      url: "https://karbafinancialconsultant.com",

      logo: "https://karbafinancialconsultant.com/images/logo.png",

      image: "https://karbafinancialconsultant.com/images/og-image.jpg",

      description:
    "Professional insurance advisory, financial planning and real estate consultancy helping individuals, families and businesses build financial security and long-term wealth.",

      email: "info@karbafinancialconsultant.com",

      telephone: "+2349162631205",

      founder: {
        "@type": "Person",
        name: "Babatunde Bamigbetan",
      },

       foundingLocation: {
    "@type": "Country",
    name: "Nigeria"
  },

      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "Nigeria",
      },

      areaServed: {
    "@type": "Country",
    name: "Nigeria"
  },

  priceRange: "$$",

  knowsAbout: [
    "Life Insurance",
    "Children Education Planning",
    "Family Protection",
    "Retirement Planning",
    "Annuity",
    "Financial Planning",
    "Estate Planning",
    "Property Investment",
    "Real Estate Advisory",
    "Property Sales",
    "Property Leasing"
  ],

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