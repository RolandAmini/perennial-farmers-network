import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import './globals.css';

// 1. Ajout des métadonnées (Titre, Description et Icône)
export const metadata = {
  title: "PFN Farmers - Perennial Farmers Network",
  description: "Empowering African Farmers through Grants, Training, and Access to Markets. Join PFN Farmers to Transform Agriculture and Improve Livelihoods .",
  icons: {
    icon: "/icon.png", 
   apple: '/icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JHK6WP0JKX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JHK6WP0JKX');
          `}
        </Script>

        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}