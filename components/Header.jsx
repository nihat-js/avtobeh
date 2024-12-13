// components/Header.tsx
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = ({ user }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  return (
    <header className="bg-amber-600 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Image src="/icons/logo.jpg" width={150} height={80} alt="Logo" />
          {/* <Link href="/">AvtoBeh</Link> */}
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex ">
          {[
            { href: "/axtar", label: "Axtar" },
            { href: "/elek", label: "Elektromobillər" },
            { href: "/", label: "İcarə" },
            // { href: "/kataloq", label: "Kataloq" },
            // { href: "/elaqe", label: "Əlaqə" },
            // { href: "/faq", label: "FAQ" },
            // { href: "/bonus", label: "Bonus" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white py-2 px-4 rounded-md hover:bg-red-600 hover:text-white transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Profile and Actions (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {!user ? (
            <>
              
              <div className="flex justify-center items-center w-12 h-12 bg-amber-500 rounded-full shadow-lg hover:bg-amber-600 cursor-pointer transition-all duration-300 ease-in-out">
                <Link href="/sat" className="text-white text-2xl font-bold">+</Link>
              </div>

              <Link
                href="/daxil-ol"
                className="py-2 px-4 text-sm font-medium text-white border border-white rounded-md hover:bg-white hover:text-red-500 transition"
              >
                Daxil ol
              </Link>
              <Link
                href="/qeydiyyat"
                className="py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition"
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
                <span className="text-sm text-white">{user.name}</span>
              </div>

              {/* Profile Dropdown */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2">
                  <Link
                    href="/bonus"
                    className="block px-4 py-2 text-gray-600 hover:text-red-500 transition"
                  >
                    Bonus: {user.bonus}₼
                  </Link>
                  <Link
                    href="/wallet"
                    className="block px-4 py-2 text-gray-600 hover:text-red-500 transition"
                  >
                    Balance: {user.balance}₼
                  </Link>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-gray-600 hover:text-red-500 transition"
                  >
                    Profil
                  </Link>
                  <Link
                    href="/logout"
                    className="block px-4 py-2 text-gray-600 hover:text-red-500 transition"
                  >
                    <Image href="/icons/logout.svg" width={20} height={20} alt="Logout" />
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
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
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-red-500 shadow-md`}
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
              className="text-white py-2 px-4 rounded-md hover:bg-red-600 hover:text-white transition-all"
            >
              {item.label}
            </Link>
          ))}
          <div className="border-t mt-4 pt-4">
            {!user ? (
              <>
                <Link
                  href="/login"
                  className="block py-2 px-4 text-sm text-white border border-white rounded-md hover:bg-white hover:text-red-500 transition"
                >
                  Daxil ol
                </Link>
                <Link
                  href="/register"
                  className="block py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition"
                >
                  Qeydiyyat
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/bonus"
                  className="block text-white py-2 px-4 rounded-md hover:bg-red-600 hover:text-white transition-all"
                >
                  Bonus: {user.bonus}₼
                </Link>
                <Link
                  href="/wallet"
                  className="block text-white py-2 px-4 rounded-md hover:bg-red-600 hover:text-white transition-all"
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
