"use client";

import Button from "@/components/Button";

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <section className="relative bg-green-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Membership</h1>
          <p className="text-lg md:text-xl text-green-100">
            Join the Perennial Farmers Network and unlock exclusive benefits.
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-10">
          🌱 Why Join PFN?
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Funding Access
            </h3>
            <p className="text-gray-600">
              Access exclusive grants and financial support for your farming
              projects.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Training & Workshops
            </h3>
            <p className="text-gray-600">
              Participate in capacity-building programs to strengthen your
              skills and knowledge.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Networking
            </h3>
            <p className="text-gray-600">
              Connect with farmers, fishers, and partners across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="bg-green-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
            📝 How to Join
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Download the PFN Membership Certificate Application and submit it to
            our regional office.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button variant="primary">Download Form</Button>
            <Button variant="secondary">Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
          🌍 Become Part of the PFN Community
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Membership is your gateway to funding, training, and networking across
          Africa. Join us and help shape a sustainable farming future.
        </p>
        <Button variant="primary">Join Now</Button>
      </section>
    </main>
  );
}
