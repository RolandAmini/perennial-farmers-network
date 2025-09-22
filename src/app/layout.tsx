import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "PFN | %s",
    default: "Perennial Farmers Network (PFN)",
  },
  description:
    "The Perennial Farmers Network is a social enterprise providing financing, training, and market access to empower African farmers and ensure food security.",
  keywords: [
    "Perennial Farmers Network",
    "PFN",
    "African farmers",
    "farming grants",
    "agricultural training",
    "food security Africa",
    "smallholder farmers",
  ],
  openGraph: {
    title: "Perennial Farmers Network (PFN)",
    description:
      "Empowering African farmers through grants, training, and market access.",
    url: "https://perennial-farmers-network.vercel.app/", // IMPORTANT: Change this to https://www.pfnfarmers.org/ when your domain is live
    siteName: "Perennial Farmers Network",
    images: [
      {
        url: "/farmer.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
// =======================================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* We merge the font class with your existing bg-white class */}
      <body className={`${inter.className} bg-white`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
