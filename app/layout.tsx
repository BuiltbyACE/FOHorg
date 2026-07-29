import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

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
  title: "Fountain of Hope Foundation | Empowering Communities, Transforming Lives",
  description: "Fountain of Hope is a global non-profit organization dedicated to empowering African communities through education, clean water, healthcare, women empowerment, and youth development.",
  keywords: ["Fountain of Hope", "Nonprofit", "NGO", "Charity", "Community Empowerment", "Clean Water", "Education", "Africa"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
<<<<<<< HEAD
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased scroll-smooth`}
=======
      data-scroll-behavior="smooth"
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}
>>>>>>> 1c0ffee (Merge remote changes and restore stashed work)
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-pink-500 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
