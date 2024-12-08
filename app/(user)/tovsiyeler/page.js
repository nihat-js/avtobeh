"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

// interface Car {
//   id: number;
//   title: string;
//   make: string;
//   model: string;
//   year: number;
//   price: number;
//   image: string;
// }

const Recommendations = () => {
  const [recommendedCars, setRecommendedCars] = useState([]);

  useEffect(() => {
    // Here you can fetch user-specific recommendations, for example, from an API or database.
    // For now, we'll use a hardcoded list of cars as an example.
    setRecommendedCars([
      {
        id: 1,
        title: '2020 Toyota Camry',
        make: 'Toyota',
        model: 'Camry',
        year: 2020,
        price: 24000,
        image: '/images/toyota-camry.jpg',
      },
      {
        id: 2,
        title: '2018 Honda Accord',
        make: 'Honda',
        model: 'Accord',
        year: 2018,
        price: 18000,
        image: '/images/honda-accord.jpg',
      },
      {
        id: 3,
        title: '2019 Ford Mustang',
        make: 'Ford',
        model: 'Mustang',
        year: 2019,
        price: 27000,
        image: '/images/ford-mustang.jpg',
      },
      {
        id: 4,
        title: '2021 BMW 3 Series',
        make: 'BMW',
        model: '3 Series',
        year: 2021,
        price: 35000,
        image: '/images/bmw-3series.jpg',
      },
    ]);
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Recommended Cars for You
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recommendedCars.map((car) => (
          <div key={car.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{car.title}</h3>
              <p className="text-gray-600">
                {car.make} {car.model} ({car.year})
              </p>
              <p className="text-gray-800 font-bold mt-2">${car.price.toLocaleString()}</p>
              <Link
                href={`/cars/${car.id}`}
                className="mt-4 block text-center py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
