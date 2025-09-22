"use client";

import Button from "@/components/Button";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Section Header */}
      <section className="relative bg-green-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-green-100">
            Learn more about the Perennial Farmers Network and our mission.
          </p>
        </div>
      </section>

      {/* Section Content */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Texte */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
            🌍 Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The Perennial Farmers Network is dedicated to empowering African
            farmers through grants, training, and access to markets. Our goal is
            to ensure sustainable agriculture and improve food security across
            the continent.
          </p>
          <Button variant="primary">Join the Movement</Button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/farmer.png"
            alt="African farmers working"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </section>

      {/* Values */}
      <section className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-10">
            🌱 Our Core Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600">
                Promoting eco-friendly farming practices that preserve the land
                for future generations.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Community
              </h3>
              <p className="text-gray-600">
                Building strong farmer networks and ensuring equal opportunities
                for all.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                Empowering farmers with modern tools, techniques, and
                technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
