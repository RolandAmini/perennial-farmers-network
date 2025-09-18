import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-green-700 text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-banner.jpg" // 👉 Mets ton image dans /public/hero-banner.jpg
          alt="African farmers"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Empowering African Farmers
          <br />
          for a Sustainable Future 🌿
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8">
          Grants, training, and market access to help farmers grow sustainably
          and build resilient communities across Africa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/grants"
            className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Apply for Support
          </Link>
          <Link
            href="/membership"
            className="px-6 py-3 bg-green-900 text-white font-semibold rounded-lg shadow hover:bg-green-800 transition"
          >
            Join PFN
          </Link>
        </div>
      </div>
    </section>
  );
}
