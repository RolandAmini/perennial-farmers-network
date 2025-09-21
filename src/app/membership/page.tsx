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

      {/* Bouton WhatsApp */}
    <Button variant="secondary">
  <a
    href="https://wa.me/254775538394"
    target="_blank"
    rel="noopener noreferrer"
  >
    Contact Us
  </a>
</Button>

    </div>
  </div>
</section>

      {/* Call to Action */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
          🌍 Become Part of the PFN Community
        </h2>
<p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto text-center">
  Therefore you are welcomed. The membership fee breakdown is as follows:
</p>

<ul className="mt-10 max-w-2xl mx-auto grid gap-4 md:grid-cols-2">
  <li className="flex items-center justify-between p-5 bg-green-700 text-yellow-100 rounded-xl shadow-md hover:shadow-lg transition">
    <span className="font-medium">Individuals Membership</span>
    <span className="font-bold text-yellow-400">USD 100</span>
  </li>

  <li className="flex items-center justify-between p-5 bg-green-700 text-yellow-100 rounded-xl shadow-md hover:shadow-lg transition">
    <span className="font-medium">Group Membership</span>
    <span className="font-bold text-yellow-400">USD 200</span>
  </li>

  <li className="flex items-center justify-between p-5 bg-green-700 text-yellow-100 rounded-xl shadow-md hover:shadow-lg transition">
    <span className="font-medium">Company Membership</span>
    <span className="font-bold text-yellow-400">USD 280</span>
  </li>

  <li className="flex items-center justify-between p-5 bg-green-700 text-yellow-100 rounded-xl shadow-md hover:shadow-lg transition">
    <span className="font-medium">Cooperative Membership</span>
    <span className="font-bold text-yellow-400">USD 250</span>
  </li>
</ul>

<div className="mt-10 text-center">
  <Button variant="primary">
    <a
      href="https://wa.me/254775538394"
      target="_blank"
      rel="noopener noreferrer"
    >
      Join Now
    </a>
  </Button>
</div>

      </section>
    </main>
  );
}
