import Snowfall from "@/components/common/Snowfall";
import "../../styles/globals.css"

import Footer from '@/components/user/Footer';
import Header from '@/components/user/Header.jsx';
import { AuthProvider } from "@/components/providers/AuthProvider";
// import Header from './Header.jsx';
// import Footer from './Footer.jsx';
// import { useEffect, useState } from 'react';
// "use client"



export const metadata = {
  title: 'AvtoBeh',
  description: 'AvtoBeh - yeni ve işlənmiş avtomobillər, avtomobil aksesuarları, avtomobil xidmətləri və s.',
}


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
    <AuthProvider>
      <html>
        <body style={{
          //  backgroundImage: "url('/backgrounds/1.png')", backgroundSize: "cover" 
        }}>

          <Snowfall />
          <div>
            <Header user={user} />
            <div className='bg-slate-100'>
              <main className="flex-1 container mx-auto py-6 px-4 ">{children}</main>
            </div>
            <Footer />
          </div>
        </body>
      </html>
    </AuthProvider>
  );
};

export default Layout;
