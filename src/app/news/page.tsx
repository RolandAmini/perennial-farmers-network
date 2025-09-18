"use client";

import { FaCalendarAlt, FaNewspaper, FaUsers } from "react-icons/fa";

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "📢 Grant Extension Announced",
      date: "22nd August 2025",
      description:
        "The deadline for the 2025 IFAD grant program has been extended. Farmers now have more time to apply.",
      icon: <FaNewspaper className="text-green-700 text-3xl" />,
    },
    {
      id: 2,
      title: "🌍 Success Stories: Uganda Farmers",
      date: "5th July 2025",
      description:
        "PFN supported farmers in Uganda have scaled up their agribusinesses, improving incomes and food security.",
      icon: <FaUsers className="text-green-700 text-3xl" />,
    },
    {
      id: 3,
      title: "📅 Training Calendar 2025",
      date: "1st June 2025",
      description:
        "Workshops and training sessions for African farmers are scheduled throughout the year. Don’t miss out!",
      icon: <FaCalendarAlt className="text-green-700 text-3xl" />,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <section className="relative bg-green-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-lg md:text-xl text-green-100">
            Stay updated with the latest announcements, stories, and training
            opportunities.
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

