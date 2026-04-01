import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script"; // Import nécessaire pour Google Analytics
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        {/* Intégration Google Analytics */}
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