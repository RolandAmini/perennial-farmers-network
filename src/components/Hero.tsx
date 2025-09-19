"use client";

import Link from "next/link";
import Image from "next/image";
import { FaTractor, FaFish, FaChalkboardTeacher, FaCheckCircle } from "react-icons/fa";

export default function Hero() {
  // Eligibility list items
  const eligibilityCriteria = [
    "Valid national identification (ID or Passport).",
    "Proof of land ownership or an active lease agreement.",
    "Minimum of 2 years of active farming or fishing experience.",
    "Commitment to implementing sustainable practices.",
    "An active bank account in the applicant's name.",
  ];

  return (
    <section className="relative bg-green-800 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-banner.jpg" // Place your image in /public/hero-banner.jpg
          alt="African farmers and fishers"
          fill
          className="object-cover object-center opacity-20"
          priority
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
            Our Programs
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-100 md:text-xl">
            Discover our funding and development programs designed specifically
            for African farmers and fishers.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Card 1: Funding */}
          <div className="flex flex-col rounded-lg bg-white p-6 text-gray-800 shadow-lg transition-transform hover:-translate-y-1">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <FaTractor className="text-2xl text-green-700" />
            </div>
            <h2 className="mb-3 text-xl font-bold">Agriculture Funding</h2>
            <p className="flex-grow text-gray-600">
              Access grants and low-interest loans to expand your operations and invest in equipment.
            </p>
          </div>

          {/* Card 2: Fishing */}
          <div className="flex flex-col rounded-lg bg-white p-6 text-gray-800 shadow-lg transition-transform hover:-translate-y-1">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <FaFish className="text-2xl text-blue-700" />
            </div>
            <h2 className="mb-3 text-xl font-bold">Fishing Program</h2>
            <p className="flex-grow text-gray-600">
              Support for sustainable aquaculture and modern fishing gear for coastal communities.
            </p>
          </div>

          {/* Card 3: Training */}
          <div className="flex flex-col rounded-lg bg-white p-6 text-gray-800 shadow-lg transition-transform hover:-translate-y-1">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
              <FaChalkboardTeacher className="text-2xl text-yellow-700" />
            </div>
            <h2 className="mb-3 text-xl font-bold">Training & Development</h2>
            <p className="flex-grow text-gray-600">
              Workshops on modern techniques, business management, and climate resilience.
            </p>
          </div>
        </div>

        {/* Eligibility Section */}
        <div className="mt-20 rounded-lg bg-white/10 p-8 backdrop-blur-sm">
          <h3 className="mb-4 text-3xl font-bold">Eligibility</h3>
          <p className="mb-6 text-lg text-gray-200">
            Open to African farmers and fishers with active operations. To qualify, you must meet the following criteria:
          </p>

          <ul className="mb-8 space-y-3 text-lg">
            {eligibilityCriteria.map((item, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="mr-3 mt-1 flex-shrink-0 text-green-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Final Apply Button */}
          <div className="flex justify-center md:justify-start">
            <Link
              href="/apply"
              className="inline-flex items-center rounded-lg bg-yellow-500 px-8 py-4 text-lg font-bold text-gray-900 shadow-lg transition hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-green-800"
            >
              Apply Now
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
}