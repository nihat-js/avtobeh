// components/Layout.tsx
import { ReactNode } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-6 px-4">{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
