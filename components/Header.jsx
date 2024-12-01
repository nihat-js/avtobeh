// components/Header.tsx
import Link from 'next/link';
import { useState } from 'react';

const Header = ({ user }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">AvtoBeh</Link>
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          {[
            { href: "/", label: "Ana səhifə" },
            { href: "/axtar", label: "Axtar" },
            { href: "/sell", label: "Sat" },
            { href: "/elaqe", label: "Əlaqə" },
            { href: "/faq", label: "FAQ" },
            { href: "/recommendations", label: "Tövsiyələr" },
            { href: "/bonus", label: "Bonus" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Profile and Actions (Desktop) */}
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
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={toggleProfileDropdown}
              >
                <img
                  src={'https://placehold.co/100x100'}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-sm text-gray-600">{user.name}</span>
              </div>

              {/* Profile Dropdown */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2">
                  <Link
                    href="/bonus"
                    className="block px-4 py-2 text-gray-600 hover:text-blue-500 transition"
                  >
                    Bonus: {user.bonus}₼
                  </Link>
                  <Link
                    href="/wallet"
                    className="block px-4 py-2 text-gray-600 hover:text-blue-500 transition"
                  >
                    Balance: {user.balance}₼
                  </Link>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-gray-600 hover:text-blue-500 transition"
                  >
                    Profil
                  </Link>
                  <Link
                    href="/logout"
                    className="block px-4 py-2 text-gray-600 hover:text-red-500 transition"
                  >
                    Çıxış
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-600 focus:outline-none">
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-white shadow-md`}
      >
        <nav className="flex flex-col px-4 py-4 space-y-2">
          {[
            { href: "/", label: "Ev" },
            { href: "/axtar", label: "Axtar" },
            { href: "/sell", label: "Sat" },
            { href: "/contact", label: "Əlaqə" },
            { href: "/faq", label: "FAQ" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              {item.label}
            </Link>
          ))}
          <div className="border-t mt-4 pt-4">
            {!user ? (
              <>
                <Link
                  href="/login"
                  className="block py-2 px-4 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 transition"
                >
                  Daxil ol
                </Link>
                <Link
                  href="/register"
                  className="block py-2 px-4 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
                >
                  Qeydiyyat
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/bonus"
                  className="block text-gray-600 hover:text-blue-500 transition"
                >
                  Bonus: {user.bonus}₼
                </Link>
                <Link
                  href="/wallet"
                  className="block text-gray-600 hover:text-blue-500 transition"
                >
                  Balance: {user.balance}₼
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
