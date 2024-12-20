"use client"
import Announcement from '@/components/user/Announcement';
import { useState, useEffect } from 'react'
import FilterHeader from './FilterHeader';
import Banner from '@/components/common/Banner';
import CarFilter from '@/components/user/CarFilter';
import CarCard from '@/components/common/CarCard';
import LicensePlateFilter from './LicensePlateFilter';
export function Client({ cars: cars_ }) {

  const [cars, setCars] = useState(cars_)

  useEffect(() => {
    setCars([
      ...cars,
      ...cars_,
      ...cars,
      ...cars,
      ...cars,
      ...cars,
    ])
  }, [])

  const [filterType, setFilterType] = useState('car'); // Default active button


  return (


    <main>
      <div className="container mx-auto" style={{ maxWidth: "1000px" }}>
        {/* <Announcement /> */}

        <div className="flex flex-row space-x-4 items-center">
          <p className="text-sm text-gray-600 hover:text-gray-800 transition duration-200 cursor-pointer">
            Elektrik
          </p>
          <p className="text-sm text-gray-600 hover:text-gray-800 transition duration-200 cursor-pointer">
            Antikvar
          </p>
        </div>


        <section>
          <FilterHeader filterType={filterType} setFilterType={setFilterType} />
        </section>

        <section className="mb-6 mx-auto" style={{ maxWidth: "1000px" }}>
          {
            filterType === 'car' ? (
              <CarFilter />
            ) : (
              <LicensePlateFilter />
            )
          }
        </section>

        <section className="container mx-auto px-4" >
          <div className="grid sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-4">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </section>


      </div>





      {/* Hero Section */}
      {/* <section className=" bg-cover bg-center h-96 text-white flex flex-col justify-center items-center text-center bg-[url('/hero-bg.jpg')]">
      <h1 className="text-5xl font-extrabold mb-4">Find Your Dream Car</h1>
      <p className="text-lg mb-6">Browse through the best second-hand cars in town.</p>
      <Link
        href="/axtar"
        className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full text-lg"
      >
        Start Browsing
      </Link>
    </section> */}

      {/* <section>
      <FeaturedBrands brands={featuredBrands} />
    </section> */}

      {/* <section>
      <BeCareful />
    </section> */}

      {/* Featured Cars Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Featured Cars
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
          {/* Example Car Card */}
          {/* {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105"
          >
            <img
              src="https://via.placeholder.com/300x200"
              alt="Car Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">
                2015 BMW X5
              </h3>
              <p className="text-gray-600 mt-2">Price: 30,000₼</p>
              <Link
                href="/car/1"
                className="mt-4 inline-block text-red-600 hover:text-red-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))} */}
        </div>
      </section>

      {/* Why Choose Us Section */}
      {/* <section className="py-16 bg-red-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Why Choose AvtoX?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-full shadow-xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25l7.5 7.5-7.5 7.5M21 5.25l-7.5 7.5 7.5 7.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Trusted Listings
            </h3>
            <p className="text-gray-600">
              All cars are verified and inspected before being listed.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-full shadow-xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25l7.5 7.5-7.5 7.5M21 5.25l-7.5 7.5 7.5 7.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Best Prices
            </h3>
            <p className="text-gray-600">
              We ensure you get the best deals in the market.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-full shadow-xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25l7.5 7.5-7.5 7.5M21 5.25l-7.5 7.5 7.5 7.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Easy Financing
            </h3>
            <p className="text-gray-600">
              Flexible payment options for all buyers.
            </p>
          </div>
        </div>
      </div>
    </section> */}

      {/* Testimonials Section */}
      {/* <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          What Our Customers Say
        </h2>
        <div className="flex justify-center space-x-8">
          <div className="w-1/3">
            <p className="text-lg italic text-gray-600 mb-4">
              "AvtoX helped me find the perfect car at an unbeatable price! I'm so happy with my purchase."
            </p>
            <p className="font-semibold text-gray-800">John Doe</p>
            <p className="text-gray-500">Car Buyer</p>
          </div>
          <div className="w-1/3">
            <p className="text-lg italic text-gray-600 mb-4">
              "The buying process was so simple, and I was able to get my dream car quickly!"
            </p>
            <p className="font-semibold text-gray-800">Sarah Smith</p>
            <p className="text-gray-500">Car Buyer</p>
          </div>
        </div>
      </div>
    </section> */}

      <Banner text="Artıq saytda maşın qeydiyyat nişanlarını da sata bilərsiniz " href="/car/add-license-plate" />


    </main>
  )
}