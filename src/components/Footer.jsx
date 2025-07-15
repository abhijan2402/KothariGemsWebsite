import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm py-4 mt-0 border-t border-yellow-600/10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Branding */}
        <p className="text-white font-semibold tracking-wide">
          © {new Date().getFullYear()} Kothari Gems. All rights reserved.
        </p>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-yellow-400 transition">
            Products
          </Link>
          <Link
            to="/terms-and-conditions"
            className="hover:text-yellow-400 transition"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/privacy-policy"
            className="hover:text-yellow-400 transition"
          >
            Privacy Policy
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
