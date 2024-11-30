// components/Header.tsx
import Link from 'next/link';
import { useState } from 'react';

const Header = ({ user }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle profile dropdown visibility
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">AvtoBeh</Link>
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-blue-500 transition">Ana səhifə</Link>
          <Link href="/axtar" className="text-gray-600 hover:text-blue-500 transition">Axtar</Link>
          <Link href="/sell" className="text-gray-600 hover:text-blue-500 transition">Sat</Link>
          <Link href="/elaqe" className="text-gray-600 hover:text-blue-500 transition">Əlaqə</Link>
          <Link href="/faq" className="text-gray-600 hover:text-blue-500 transition">FAQ</Link>
          <Link href="/recommendations" className="text-gray-600 hover:text-blue-500 transition">Tövsiyələr</Link>
          <Link href="/bonus" className="text-gray-600 hover:text-blue-500 transition">Bonus</Link>
        </nav>

        {/* Actions (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {!user ? (
            <>
              <Link
                href="/login"
                className="py-2 px-4 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 transition"
              >
                Daxil ol
              </Link>
              <Link
                href="/register"
                className="py-2 px-4 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
              >
                Qeydiyyat
              </Link>
            </>
          ) : (
            <div className="relative">
              {/* Profile Info (Avatar + Email) */}
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={toggleProfileDropdown} // Toggle dropdown on click
              >
                <img
                  src={'https://placehold.co/100x100'}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <span className="ml-2 text-sm text-gray-600">{user.name || "N"}</span>
              </div>

              {/* Profile Dropdown */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 bg-white shadow-lg rounded-md mt-2 w-48 p-4">
                  <Link
                    href="/bonus"
                    className="block text-gray-600 hover:text-blue-500 transition py-2"
                  >
                    Bonus: {user.bonus}₼
                  </Link>
                  <Link
                    href="/wallet"
                    className="block text-gray-600 hover:text-blue-500 transition py-2"
                  >
                    Balance: {user.balance}₼
                  </Link>
                  <Link
                    href="/profile"
                    className="block text-gray-600 hover:text-blue-500 transition py-2"
                  >
                    Profil
                  </Link>
                  <Link
                    href="/logout"
                    className="block text-gray-600 hover:text-red-500 transition py-2"
                  >
                    Çıxış
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
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

      {/* Mobile Menu (Hidden by default) */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-md absolute w-full top-16 left-0 py-4`}
      >
        <nav className="flex flex-col items-center space-y-4">
          <Link href="/" className="text-gray-600 hover:text-blue-500 transition">
            Ev
          </Link>
          <Link href="/browse" className="text-gray-600 hover:text-blue-500 transition">
            Axtar
          </Link>
          <Link href="/sell" className="text-gray-600 hover:text-blue-500 transition">
            Sat
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-500 transition">
            Əlaqə
          </Link>
          <Link href="/faq" className="text-gray-600 hover:text-blue-500 transition">
            FAQ
          </Link>

          {/* Actions (Mobile) */}
          <div className="space-x-4 mt-4">
            {!user ? (
              <>
                <Link
                  href="/login"
                  className="py-2 px-4 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 transition"
                >
                  Daxil ol
                </Link>
                <Link
                  href="/register"
                  className="py-2 px-4 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
                >
                  Qeydiyyat
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <img
                  src={'https://placehold.co/100x100'}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm text-gray-600">{user.name}</span>
                <div className="text-sm text-gray-600 space-y-2">
                  <Link
                    href="/bonus"
                    className="block hover:text-blue-500 transition text-gray-600"
                  >
                    Bonus: {user.bonus}₼
                  </Link>
                  <Link
                    href="/wallet"
                    className="block hover:text-blue-500 transition text-gray-600"
                  >
                    Balance: {user.balance}₼
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
