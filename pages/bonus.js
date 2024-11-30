// pages/bonus.tsx
import { useState, useEffect } from 'react';
// import { useSession } from 'next-auth/react'; // If you're using NextAuth.js for user sessions
import Link from 'next/link';
import Layout from '@/components/Layout';

const BonusPage = () => {
  // const { data: session } = useSession(); // Assuming you're using session management
  const [stars, setStars] = useState(0);
  const [lastCollected, setLastCollected] = useState(null);
  const [isBonusCollected, setIsBonusCollected] = useState(false);

  // useEffect(() => {
  // Fetch user stars and last collected date (replace this with an API call)
  //   if (session) {
  //     // Example: fetching user data, replace with actual API call
  //     setStars(230); // Example of fetched data
  //     setLastCollected('2024-11-30'); // Example of last collected date
  //   }
  // }, [session]);

  const handleCollectBonus = () => {
    if (!session) {
      alert('Please log in to collect stars.');
      return;
    }

    // Logic to collect bonus and update star count (replace with actual API call)
    const today = new Date().toISOString().split('T')[0]; // Get today's date

    if (lastCollected === today) {
      alert('You have already collected your bonus today!');
      return;
    }

    // Update the user's star count and last collected date
    setStars(stars + 25);
    setLastCollected(today);
    setIsBonusCollected(true);

    // Update user data on backend (replace with your API)
    // updateUserStars(session.user.id, stars + 25); 
  };

  const handlePromoteListing = () => {
    if (stars < 280) {
      alert('You need 280 stars to promote a listing!');
      return;
    }

    // Logic to promote a listing (replace with actual API call)
    alert('Your listing has been promoted!');

    // Deduct the stars for promotion
    setStars(stars - 280);
  };

  return (

    <Layout>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Bonus Page</h1>

        <div className="flex flex-col items-center space-y-6">
          {/* Display Current Stars */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-xl font-medium text-gray-700">
              Your Current Stars: <span className="font-bold text-blue-500">{stars}</span>
            </p>
          </div>

          {/* Collect Daily Bonus */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <button
              onClick={handleCollectBonus}
              className="text-white bg-blue-500 py-2 px-6 rounded-md hover:bg-blue-600"
            >
              Collect 25 Stars
            </button>
            {isBonusCollected && <p className="text-sm text-green-500 mt-2">Bonus collected successfully!</p>}
          </div>

          {/* Promote Listing */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <button
              onClick={handlePromoteListing}
              className="text-white bg-green-500 py-2 px-6 rounded-md hover:bg-green-600"
            >
              Use 280 Stars to Promote Listing
            </button>
          </div>

          {/* Display Bonus Collection Info */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Collect <strong>25 stars</strong> every day to use them for promoting your listing!
            </p>
            <p className="text-sm text-gray-600 mt-2">
              You need <strong>280 stars</strong> to promote one listing.
            </p>
          </div>
        </div>
      </div>
    </Layout>

  );
};

export default BonusPage;
