import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import "./globals.css";

export const revalidate = 3600;

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Fountain of Hope | Community-Based Organization in Garissa, Kenya",
    template: "%s | Fountain of Hope",
  },
  description:
    "Fountain of Hope is a community-based organization with its roots in Garissa County, Kenya. We improve the health, education and livelihoods of vulnerable communities through strategic partnerships and sustainable programmes.",
  keywords: ["Fountain of Hope", "NGO", "Nonprofit", "Garissa", "Kenya", "Maternal Health", "RMNCAH", "Community Resilience", "Education", "Peace Building"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Fountain of Hope",
    title: "Fountain of Hope | Community-Based Organization in Garissa, Kenya",
    description:
      "Fountain of Hope is a community-based organization in Garissa County, Kenya, improving health, education and livelihoods through strategic partnerships and sustainable programmes.",
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
      data-scroll-behavior="smooth"
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-pink-500 selection:text-white" suppressHydrationWarning>
        <ScrollToTop />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
