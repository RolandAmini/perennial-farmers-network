"use client";

import { useEffect, useState } from "react";


export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simule un écran de chargement pendant 3 secondes
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Splash Screen avec logo
    return (
      <main className="flex min-h-screen items-center justify-center bg-green-700">
        <div className="flex flex-col items-center space-y-4 animate-fadeIn">
          {/* Logo en texte (tu peux remplacer par une image dans /public/logo.png) */}
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-lg">
            <span className="text-green-700 text-3xl font-bold">PFN</span>
          </div>
          <p className="text-white text-lg font-medium">
            Perennial Farmers Network
          </p>
        </div>
        
      </main>
      
    );
  }

  // Page d'accueil après le splash screen
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-green-100 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
        🌿 Empowering African Farmers
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
        Grants, training, and market access to help farmers grow sustainably.
      </p>
      <button className="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800 transition">
        Apply for Support
      </button>
       
     
    </main>
     
  );
}
