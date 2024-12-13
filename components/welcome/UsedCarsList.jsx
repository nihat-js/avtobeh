import Image from 'next/image';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function UsedCarList() {
  // Array of cars (you can fetch this data from an API or a database)
  const cars = [
    {
      id: 1,
      brand: 'BMW',
      model: '320i',
      price: '30,000',
      currency : "₼",
      isFavorite: false,
      images: ['https://media.istockphoto.com/id/1435226078/photo/front-of-a-white-bmw-m4-parked-on-a-street-with-trees-in-the-background.jpg?s=612x612&w=0&k=20&c=l1IupUrh-_Zbcse-hDkaUAh-qMD82hJspXjnN0IBZlg=',
        'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg',
      ]
    },
    {
      id: 1,
      brand: 'BMW',
      model: '320i',
      price: '₼30,000',
      images: ['https://media.istockphoto.com/id/1435226078/photo/front-of-a-white-bmw-m4-parked-on-a-street-with-trees-in-the-background.jpg?s=612x612&w=0&k=20&c=l1IupUrh-_Zbcse-hDkaUAh-qMD82hJspXjnN0IBZlg=',], // Example images
    },

  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {cars.map((car) => (
        <Card key={car.id} car={car} />
      ))}
    </div>
  );
}


function Card({ car }) {

  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(car.isFavorite)
  function nextImage() {
    setActiveImageIndex((prev) => (prev + 1) % car.images.length)
  }
  function previousImage() {
    setActiveImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length)
  }

  function toggleFavorite() {

  }

  return (
    <div key={car.id} className="max-w-sm bg-white rounded-lg shadow-xl overflow-hidden">
      {/* Car images carousel */}
      <div className="relative">
        <div className="h-64">
          <img
            src={car.images[activeImageIndex]}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Favorite  */}
        <div className="absolute right-2 top-2  rounded-full bg-white pointer py-2 px-4
        cursor-pointer hover:bg-slate-100 ">
          <p className="text-sm">
            <Image src={"/icons/save.svg"} alt="View" width={16} height={16} onClick={toggleFavorite} />
          </p>
        </div>

        {/* Navigation Icons */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          {/* Left Icon */}
          <button className="text-white bg-black p-1 rounded-full hover:bg-gray-700">
            <FaChevronLeft onClick={nextImage} />
          </button>

          {/* Right Icon */}
          <button className="text-white bg-black p-1 rounded-full hover:bg-gray-700">
            <FaChevronRight onClick={previousImage} />
          </button>
        </div>
      </div>

      {/* Car Details */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{car.brand} {car.model}</h2>
        <p className="text-gray-600 text-xl mt-2"><span className="text-orange-500">{car.price} {car.currency} </span></p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">
            <Image src="/icons/fuel.svg" alt="Mileage" width={16} height={16} />
            Benzin
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">
            <Image src="/icons/fuel.svg" alt="Mileage" width={16} height={16} />
            Sedan
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">
            <Image src="/icons/road.svg" alt="Mileage" width={16} height={16} />
            200,000 km
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">
            <Image src="/icons/engine.svg" alt="Mileage" width={16} height={16} />
            4.4 L
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 mt-3 bg-gray-200 rounded-full text-sm font-medium text-gray-700">
          VIN: 428981232189
          <Image src="/icons/search-colored.svg" alt="Mileage" width={16} height={16} />
        </div>
      </div>
    </div>

  )
}

function Tags() {
  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">
      <Image src="/icons/fuel.svg" alt="Mileage" width={16} height={16} />
      Benzin
    </div>
  )
}