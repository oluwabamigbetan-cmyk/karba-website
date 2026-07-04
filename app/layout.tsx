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

export const metadata: Metadata = {
  title: {
    default: "KARBA Financial Consultant Ltd",
    template: "%s | KARBA Financial Consultant Ltd",
  },
  description:
    "KARBA Financial Consultant Ltd provides professional Insurance Advisory and Real Estate Consultancy services across Nigeria. We help individuals, families, business owners and investors achieve financial protection, wealth creation and legacy planning.",
  keywords: [
    "KARBA Financial Consultant",
    "Insurance Advisory",
    "Life Insurance",
    "Family Protection Planning",
    "Children Education Planning",
    "Retirement Planning",
    "Annuity Planning",
    "Real Estate Consultancy",
    "Property Investment",
    "Property Sales",
    "Wealth Building",
    "Financial Planning",
    "Nigeria",
    "Lagos",
  ],
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
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}