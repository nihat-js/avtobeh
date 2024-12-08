import "../styles/globals.css"
export const metadata = {
  title: 'AvtoBeh',
  description: 'AvtoBeh is a car dealership that sells new and used cars.',
}

import Footer from '@/components/Footer';
import Header from '@/components/Header.jsx';
// import Header from './Header.jsx';
// import Footer from './Footer.jsx';
// import { useEffect, useState } from 'react';
// "use client"

const Layout = ({ children }) => {
  const user = null
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await fetch('/api/getUser');
  //     if (res.ok) {
  //       const data = await res.json();
  //       setUser(data);
  //     } else {
  //       console.error('Error fetching user data');
  //     }
  //   };

  //   fetchUser();
  // }, []);

  return (
    <html lang="en">
      <div className="min-h-screen flex flex-col"
        style={{
          // backgroundImage: "url('/icons/bg-squares.svg')",
          // backgroundSize: '100%',
          // backgroundAttachment: 'fixed',
        }}
      >
        <body>
          <Header user={user} />
          <div className='bg-slate-100'>
            <main className="flex-1 container mx-auto py-6 px-4 ">{children}</main>
          </div>
          <Footer />
        </body>
      </div>

    </html>
  );
};

export default Layout;
