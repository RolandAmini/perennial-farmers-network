"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  // --- FORM STATE & LOGIC IS NOW ACTIVE ---
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus(
          "✅ Message sent successfully! We will get back to you soon."
        );
        setForm({ name: "", email: "", message: "" });
      } else {
        const errorData = await res.json();
        setStatus(`❌ Error: ${errorData.error || "Please try again."}`);
      }
    } catch (error) {
      setStatus(
        "⚠️ Could not connect to the server. Please check your connection."
      );
    } finally {
      setLoading(false);
    }
  };

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
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            📍 Get in Touch
          </h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-green-700 text-xl" />
              <Link
                href="mailto:regional@pfnfarmers.org"
                className="text-gray-700 hover:text-green-700 transition-colors duration-300 underline"
              >
                regional@pfnfarmers.org
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-green-700 text-xl" />
              <Link
                href="https://wa.me/254775538394"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-700 transition-colors duration-300 underline"
              >
                +254 775 538 394
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-green-700 text-xl" />
              <p className="text-gray-700">Serving all of Africa</p>
            </div>
          </div>
        </div>

        {/* --- THE LIVE CONTACT FORM --- */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            ✉️ Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                name="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-green-800 transition disabled:bg-green-400 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status && (
            <p
              className={`mt-4 text-center text-sm ${
                status.includes("Error") || status.includes("error")
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            🌍 Our Reach
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            PFN is active across Africa, supporting farmers and fishers in all
            regions.
          </p>
        </div>
      </section>
    </main>
  );
}
