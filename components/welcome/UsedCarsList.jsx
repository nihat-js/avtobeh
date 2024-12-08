import React from 'react';

export default function UsedCarList() {
  // Array of cars (you can fetch this data from an API or a database)
  const cars = [
    {
      id: 1,
      brand: 'BMW',
      model: '320i',
      price: '₼30,000',
      images: ['/images/car1.jpg', '/images/car2.jpg', '/images/car3.jpg'], // Example images
    },
    {
      id: 2,
      brand: 'Audi',
      model: 'A4',
      price: '₼25,000',
      images: ['/images/car4.jpg', '/images/car5.jpg', '/images/car6.jpg'], // Example images
    },
    {
      id: 3,
      brand: 'Mercedes-Benz',
      model: 'C-Class',
      price: '₼40,000',
      images: ['/images/car7.jpg', '/images/car8.jpg', '/images/car9.jpg'], // Example images
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {cars.map((car) => (
        <div key={car.id} className="max-w-sm bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Car images carousel */}
          <div className="relative">
            <div className="h-64">
              <img
                src={car.images[0]} // Show the first image from the array
                alt={`${car.brand} ${car.model}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded-md">
              <p className="text-sm">Click to See More Images</p>
            </div>
          </div>

          {/* Car Details */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">{car.brand} {car.model}</h2>
            <p className="text-gray-600 text-xl mt-2">Price: <span className="text-green-500">{car.price}</span></p>
            <p className="text-gray-500 mt-2">Model: {car.model}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
