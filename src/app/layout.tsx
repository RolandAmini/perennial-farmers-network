import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import './globals.css'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <main className="pt-16">{children}</main>
         <Hero  />
      </body>
    </html>
  );
}
