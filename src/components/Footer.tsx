import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
              <span className="text-green-700 font-bold text-lg">PFN</span>
            </div>
            <span className="font-semibold text-xl">Perennial Farmers</span>
          </div>
          <p className="text-gray-200 text-sm">
            Growing Africa Sustainably 🌿 — supporting farmers and fishers with
            training, grants, and market access.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/grants" className="hover:text-white transition">
                Grants
              </Link>
            </li>
            <li>
              <Link href="/membership" className="hover:text-white transition">
                Membership
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-white transition">
                News
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <p className="text-gray-200 text-sm">
            📧 regional@pfnfarmers.org
            <br />
            📞 +254 775 538 394
            <br />
            🌍 Serving all of Africa
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-900 py-4">
        <p className="text-center text-xs text-gray-300">
          © {new Date().getFullYear()} Perennial Farmers Network. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
