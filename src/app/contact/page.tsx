"use client";

import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <section className="relative bg-green-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-green-100">
            We’d love to hear from you. Reach out to PFN for support, questions,
            or partnerships.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-6">📍 Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-green-700 text-xl" />
              <p className="text-gray-700">regional@pfnfarmers.org</p>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-green-700 text-xl" />
              <p className="text-gray-700">+254 775 538 394</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-green-700 text-xl" />
              <p className="text-gray-700">Serving all of Africa</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-6">✉️ Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 px-6 rounded-lg shadow hover:bg-green-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-6">🌍 Our Reach</h2>
          <p className="text-lg text-gray-700 mb-8">
            PFN is active across Africa, supporting farmers and fishers in all
            regions.
          </p>
          <img
            src="/africa-map.png"
            alt="PFN regions highlighted"
            className="mx-auto rounded-lg shadow-md max-w-lg"
          />
        </div>
      </section>
    </main>
  );
}
