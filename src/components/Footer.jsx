import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-transparent text-gray-400 text-sm py-4 mt-0 border-t border-blue-600/10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Branding */}
        <p className="text-white font-semibold tracking-wide">
          © {new Date().getFullYear()} Kothari Gems. All rights reserved.
        </p>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-white transition hover:underline ">
            Home
          </Link>
          <Link
            to="/products"
            className="hover:text-white transition hover:underline "
          >
            Products
          </Link>
          <Link
            to="/terms-and-conditions"
            className="hover:text-white transition hover:underline "
          >
            Terms & Conditions
          </Link>
          <Link
            to="/privacy-policy"
            className="hover:text-white transition hover:underline "
          >
            Privacy Policy
          </Link>
          <Link
            to="/contact"
            className="hover:text-white transition hover:underline "
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
