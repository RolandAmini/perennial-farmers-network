"use client";

import { useEffect, useState } from "react";
import Image from "next/image"; // Import for optimized images
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import { FaStore, FaGraduationCap, FaHandHoldingUsd } from "react-icons/fa";

export default function Home() {
    const [showLoader, setShowLoader] = useState(true); // on démarre avec le loader actif

  useEffect(() => {
    // timer pour masquer le loader après 2 secondes
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-green-700">
        <div className="flex flex-col items-center justify-center space-y-4 animate-fadeIn">
          {/* Logo Container */}
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">
            <span className="text-3xl font-bold text-green-700">PFN</span>
          </div>
          <h2 className="text-xl font-semibold text-white">
            Perennial Farmers Network
          </h2>
        </div>
      </main>
    );
  }
  // --- Main Page Content ---
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      

      {/* Main Call to Action Section */}
      <section className="bg-white px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold text-green-800 md:text-5xl">
            <span className="mr-2">🌿</span>
            Empowering African Farmers
          </h1>
          <p className="mb-8 text-lg text-gray-600 md:text-xl">
            Grants, training, and market access to help farmers grow sustainably
            and build resilience.
          </p>
          <button
            className="rounded-lg bg-green-700 px-8 py-3 text-lg font-medium text-white shadow-md transition-colors hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Apply for farming support"
          >
            <a  href="https://wa.me/254775538394"
    target="_blank"
    rel="noopener noreferrer">
 Apply for Support
    </a>
           
          </button>
        </div>
      </section>
      <Hero />

      {/* Features / Services Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-800">
          How We Help You Grow
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          <Card
            icon={<FaStore className="text-green-600" size={32} />}
            title="Market Access"
            description="Connect with regional and global markets to sell your produce at fair prices."
          />

          {/* Example of additional cards you could add */}
          <Card
            icon={<FaGraduationCap className="text-blue-600" size={32} />}
            title="Training & Workshops"
            description="Learn modern, sustainable agricultural techniques from industry experts."
          />

          <Card
            icon={<FaHandHoldingUsd className="text-yellow-600" size={32} />}
            title="Financial Grants"
            description="Access funding and micro-grants to invest in your farm's future."
          />

        </div>
      </section>
    </main>
  );
}