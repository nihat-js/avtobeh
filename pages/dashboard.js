// pages/dashboard.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';

const Dashboard = () => {
  const [userListings, setUserListings] = useState([]);

  useEffect(() => {
    // Fetch the user's active listings (this would typically come from an API)
    setUserListings([
      {
        id: 1,
        title: '2020 Toyota Camry',
        price: 24000,
        image: '/images/toyota-camry.jpg',
      },
      {
        id: 2,
        title: '2018 Honda Accord',
        price: 18000,
        image: '/images/honda-accord.jpg',
      },
    ]);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Your Dashboard</h1>

        <div className="mb-8">
          <Link href="/sell">
            <button className="text-white bg-blue-500 py-2 px-4 rounded-md hover:bg-blue-600">
              List a New Car
            </button>
          </Link>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Active Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {userListings.map((listing) => (
            <div key={listing.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{listing.title}</h3>
                <p className="text-gray-800 font-bold mt-2">${listing.price.toLocaleString()}</p>
                <Link href={`/cars/${listing.id}`} className="block mt-4 text-center py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                  Edit Listing
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
