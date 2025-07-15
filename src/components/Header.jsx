import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    // { path: "/portfolio", label: "Portfolio" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const navLink = (path, label) => (
    <Link
      to={path}
      onClick={() => setMenuOpen(false)}
      className={`block px-4 py-2 rounded transition duration-200 uppercase tracking-wider text-sm ${
        location.pathname === path
          ? "text-yellow-500 font-semibold border-b border-yellow-400"
          : "text-gray-300 hover:text-yellow-300"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="bg-black backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl md:text-4xl font-bold tracking-wide flex items-center font-cinzel space-x-2 group"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent group-hover:brightness-110 transition duration-300">
            Lunawat
          </span>
          <span className="text-white group-hover:text-yellow-200 transition duration-300">
            Gems
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => navLink(item.path, item.label))}
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <X
              size={28}
              className="text-white hover:text-yellow-400 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <Menu
              size={28}
              className="text-white hover:text-yellow-400 cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden px-4 pb-4 space-y-2 bg-black/95"
          >
            {navItems.map((item) => navLink(item.path, item.label))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
