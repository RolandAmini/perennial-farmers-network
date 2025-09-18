"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
              <span className="text-green-700 font-bold text-lg">PFN</span>
            </div>
            <span className="font-semibold text-xl">Perennial Farmers</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-200 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-200 transition">
              About
            </Link>
            <Link href="/grants" className="hover:text-gray-200 transition">
              Grants
            </Link>
            <Link href="/membership" className="hover:text-gray-200 transition">
              Membership
            </Link>
            <Link href="/news" className="hover:text-gray-200 transition">
              News
            </Link>
            <Link href="/contact" className="hover:text-gray-200 transition">
              Contact
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-600">
          <div className="px-2 pt-2 pb-3 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md hover:bg-green-500"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md hover:bg-green-500"
            >
              About
            </Link>
            <Link
              href="/grants"
              className="block px-3 py-2 rounded-md hover:bg-green-500"
            >
              Grants
            </Link>
            <Link
              href="/membership"
              className="block px-3 py-2 rounded-md hover:bg-green-500"
            >
              Membership
            </Link>
            <Link
              href="/news"
              className="block px-3 py-2 rounded-md hover:bg-green-500"
            >
              News
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md hover:bg-green-500"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
