"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaTractor,
  FaFish,
  FaChalkboardTeacher,
  FaCheckCircle,
} from "react-icons/fa";

// Helper pour découper un tableau en N sous-tableaux
function chunkArray<T>(arr: T[], chunks: number): T[][] {
  const size = Math.ceil(arr.length / chunks);
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export default function Hero() {
  const programCards = [
    {
      title: "Agriculture Funding",
      description: "Open to African farmers with active PFN membershp",
      icon: FaTractor,
      bgColor: "bg-green-100",
      iconColor: "text-green-700",
    },
    {
      title: "Fishing Program",
      description: "Open to African farmers with active PFN membershp",
      icon: FaFish,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-700",
    },
    {
      title: "Training & Development",
      description: "Open to African farmers with active PFN membershp",
      icon: FaChalkboardTeacher,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-700",
    },
  ];

  // 2. Eligibility List
  const eligibilityCriteria = [
    "Grants up to UDS 50000",
    "Preferetial rate loans",
    "Agricultural equipment financing",
    "Start-up capital for new farmers",
    "Custom technical support",
    "Float and net financing",
    "Preservation technologies",
    "Modern technologies training",
    "Access to international markets",
    "Marine insurance",
    "Monthly technical workshops",
    "Sustainable agricultural certification",
    "Business management training",
    "Access to new technologies",
    "Expert mentorship",
  ];

  const eligibilityChunks = chunkArray(eligibilityCriteria, 3);

  return (
    <section className="relative bg-green-800 text-white">
    

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Our Programs
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-100 md:text-xl">
            Discover our funding and development programs designed specifically
            for African farmers and fishers.
          </p>

          {/* Header Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/grants"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-green-700 shadow transition hover:bg-gray-100"
            >
              View All Grants
            </Link>
            <Link
              href="/membership"
              className="rounded-lg bg-green-900 px-6 py-3 font-semibold text-white shadow transition hover:bg-green-700"
            >
              Join Network
            </Link>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {programCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="flex flex-col rounded-lg bg-white p-6 text-gray-800 shadow-lg transition-transform hover:-translate-y-1"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${card.bgColor}`}
                >
                  <Icon className={`text-2xl ${card.iconColor}`} />
                </div>
                <h2 className="mb-3 text-xl font-bold">{card.title}</h2>
                <p className="flex-grow text-gray-600">{card.description}</p>
              </div>
            );
          })}
        </div>

        {/* Eligibility Section tout en 3 cartes */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {eligibilityChunks.map((chunk, idx) => (
            <div
              key={idx}
              className="rounded-lg bg-white/10 p-6 backdrop-blur-sm"
            >
              <h3 className="mb-4 text-2xl font-semibold">Eligibility :</h3>
              <ul className="space-y-3 text-lg">
                {chunk.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheckCircle className="mr-3 mt-1 flex-shrink-0 text-green-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Final Apply Button */}
        <div className="mt-12 flex justify-center md:justify-start">
          <Link
            href="/apply"
            className="inline-flex items-center rounded-lg bg-yellow-500 px-8 py-4 text-lg font-bold text-gray-900 shadow-lg transition hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-green-800"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
