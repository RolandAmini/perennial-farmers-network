import {
  FaUsers,
  FaGlobeAfrica,
  FaHandshake,
  FaPiggyBank,
  FaSeedling,
  FaChalkboardTeacher,
  FaStore,
} from "react-icons/fa";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the PFN story, our global impact, and our proven model for empowering millions of farmers across Africa, Asia, and Europe.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Section Header */}
      <section className="relative bg-green-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-3xl font-bold mb-4">
            Our Story: Sowing Seeds of Prosperity
          </h1>
          <p className="text-lg md:text-xl text-green-100">
            We are a social enterprise dedicated to helping farmers grow their
            way out of hunger and build lasting pathways to prosperity.
          </p>
        </div>
      </section>

      {/* Story & Image Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Narrative Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
              A Global Network with African Roots
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Perennial Farmers Network began with a simple mission: supply
              financing and training to help smallholder farmers succeed. With
              members from Europe and Asia, we are now deeply rooted in Africa,
              with our main office at Times Tower, Nairobi.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide African farmers with everything they need to grow more
              food, earn more money, and build thriving communities.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/farmer.png"
              alt="An African farmer proudly tending to their crops"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-2">
            Our Impact by the Numbers
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Our farmer-first model has delivered proven results at scale.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <FaUsers className="text-green-700 text-4xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-green-800">1.3M+</h3>
              <p className="text-gray-600 mt-1">Farmers Served Directly</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <FaHandshake className="text-green-700 text-4xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-green-800">2M+</h3>
              <p className="text-gray-600 mt-1">Reached via Partnerships</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md sm:col-span-2 lg:col-span-1">
              <FaGlobeAfrica className="text-green-700 text-4xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-green-800">Global</h3>
              <p className="text-gray-600 mt-1">Network across 3 Continents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Proven Model Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-2">
            Our Proven Model
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            We work directly with farmers year-round, providing a comprehensive
            bundle of services designed for success.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <FaPiggyBank className="text-green-700 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Financial Grants
              </h3>
              <p className="text-gray-600">
                We provide critical funding to help farmers invest in their land
                and their future.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <FaSeedling className="text-green-700 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Quality Farm Inputs
              </h3>
              <p className="text-gray-600">
                We deliver high-quality products on credit, right to farmers
                doorsteps.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <FaChalkboardTeacher className="text-green-700 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Expert Training
              </h3>
              <p className="text-gray-600">
                We train farmers on the latest agricultural practices to
                maximize their yields.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <FaStore className="text-green-700 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Market Access
              </h3>
              <p className="text-gray-600">
                We help farmers sell their harvest surplus, turning their hard
                work into profit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="bg-green-700">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow With Us?</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Become a part of a network that is transforming agriculture in
            Africa. Access funding, training, and a community dedicated to your
            success.
          </p>
          <Link
            href="/membership"
            className="bg-white text-green-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            Join the Movement
          </Link>
        </div>
      </section>
    </main>
  );
}
