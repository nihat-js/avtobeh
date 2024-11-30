// components/Header.tsx
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">AvtoX</Link>
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="/browse" className="text-gray-600 hover:text-blue-500 transition">
            Browse Cars
          </Link>
          <Link href="/sell" className="text-gray-600 hover:text-blue-500 transition">
            Sell a Car
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-500 transition">
            Contact Us
          </Link>
        </nav>

        {/* Actions (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="/login"
            className="py-2 px-4 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="py-2 px-4 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-md absolute w-full top-16 left-0 py-4`}
      >
        <nav className="flex flex-col items-center space-y-4">
          <Link href="/" className="text-gray-600 hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="/browse" className="text-gray-600 hover:text-blue-500 transition">
            Browse Cars
          </Link>
          <Link href="/sell" className="text-gray-600 hover:text-blue-500 transition">
            Sell a Car
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-500 transition">
            Contact Us
          </Link>

          {/* Actions (Mobile) - Only visible when the mobile menu is open */}
          <div className="space-x-4 mt-4">
            <Link
              href="/login"
              className="py-2 px-4 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="py-2 px-4 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
            >
              Register
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
