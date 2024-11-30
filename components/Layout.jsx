// components/Layout.tsx
import { ReactNode } from 'react';
import Header from './Header.jsx';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-6 px-4">{children}</main>
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2024 AvtoX. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
