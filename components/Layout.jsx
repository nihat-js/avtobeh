import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { useEffect, useState } from 'react';

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('/api/getUser');
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      } else {
        console.error('Error fetching user data');
      }
    };

    fetchUser();
    console.log({user})
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header user={user} />
      <main className="flex-1 container mx-auto py-6 px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
