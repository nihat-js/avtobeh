// components/Header.tsx
import Link from 'next/link';
import { useState } from 'react';

const Header = ({ user }) => {
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
        <div className="hidden md:flex space-x-4">
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
              <div className="flex items-center">
                <img
                  src={user.avatar || '/default-avatar.png'} // Replace with user avatar URL
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <span className="ml-2 text-sm text-gray-600">{user.email}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span>Bonus: {user.bonus} </span>
                <span className="mx-2">|</span>
                <span>Balance: {user.balance}₼</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
