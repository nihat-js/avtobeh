"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Trigger the logout API route
    const logout = async () => {
      await fetch('/api/logout', {
        method: 'POST',
      });

      // Redirect user after logging out
      router.push('/login'); // Redirect to the login page or homepage
    };

    logout();
  }, [router]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default LogoutPage;
