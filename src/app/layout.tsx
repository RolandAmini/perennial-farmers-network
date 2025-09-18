import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import { FaStore } from "react-icons/fa";
import './globals.css'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <main className="pt-16">{children}</main>
         <Hero  />
           <Card
            icon={<FaStore />}
            title="Market Access Support"
            description="Connect with regional and global markets to sell your produce."
          />
      </body>
    </html>
  );
}
