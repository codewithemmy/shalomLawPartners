import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-sky-500 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center">
          <img
            src="/assets/images/common/11.jpg"
            alt="Chris Okeke & Co. Logo"
            className="h-12 rounded-full border-2 border-pink-300"
          />
          <span className="ml-3 text-xl font-bold text-white">
            Chris Okeke & Co.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-pink-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-pink-300 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-pink-300 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="hover:text-pink-300 transition-colors"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-pink-300 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl focus:outline-none hover:text-pink-300 transition"
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-3">
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-pink-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-pink-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-pink-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-pink-300"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-pink-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
