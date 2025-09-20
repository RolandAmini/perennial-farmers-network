"use client";

import Button from "@/components/Button";

export default function GrantsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <section className="relative bg-green-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Grants & Opportunities
          </h1>
          <p className="text-lg md:text-xl text-green-100">
            Access funding, inputs, and resources to grow your agribusiness.
          </p>
        </div>
      </section>

      {/* Current Open Call */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
          🌍 2025 Grant Program
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Apply for our 2025 Grant Program in partnership with IFAD and local
          ministries. This funding supports farmers and fishers across Africa
          with equipment, seeds, and business expansion.
        </p>
        <Button variant="primary">Apply Now</Button>
      </section>

      {/* What We Fund */}
      <section className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-10">
            🌱 What We Fund
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Equipment
              </h3>
              <p className="text-gray-600">
                Tractors, irrigation systems, and storage facilities to
                modernize your farm.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Seeds & Inputs
              </h3>
              <p className="text-gray-600">
                Quality seeds, fertilizers, and pesticides to increase yields.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Agribusiness Expansion
              </h3>
              <p className="text-gray-600">
                Support for scaling up operations and reaching new markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
          ✅ Eligibility
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Open to African farmers & fishers who are active PFN members. Apply
          today and take the next step toward sustainable growth.
        </p>
        <Button variant="secondary">Become a Member</Button>
      </section>
    </main>
  );
}
