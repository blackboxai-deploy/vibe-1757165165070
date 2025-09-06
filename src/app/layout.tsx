import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pure Argan Oil | Premium Moroccan Oil from Agadir Ait Melloul",
  description: "Authentic argan oil from Agadir Ait Melloul, Morocco. Premium quality, traditionally extracted, pure and organic argan oil for beauty and culinary use.",
  keywords: "argan oil, Moroccan oil, Agadir, Ait Melloul, organic, beauty, skincare, hair care, culinary oil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}