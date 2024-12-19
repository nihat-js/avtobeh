"use server"
import prisma from "@/prisma";
import Link from "next/link";


export default async function CarDetails() {

  const car = await prisma.car.findUnique({ where: { id: 1 } });
  console.log(car)

  function goBack(){
    return window.history.back();
  }

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 shadow-md rounded-md">
      {/* Car Image and Info */}

      <button>
        Geri
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Car Image */}
        <div>
          <img
            src="https://via.placeholder.com/600x400"
            alt="Car Image"
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Car Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{car.brandName} {car.modelName} </h1>
          <p className="text-lg text-gray-600"> Konum: {car.country} {car.city}  </p>
          <p className="text-lg text-gray-600">Qiymət:  {car.price}  {car.currency} </p>
          <p className="text-gray-700">
            {car.description}
          </p>

          <button
            className="py-2 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
          >
            Contact Seller
          </button>
        </div>
      </div>

      {/* Additional Details */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Car Specifications</h2>
        <ul className="space-y-2">
          <li className="text-gray-600">Mühərriki: 1.8L I4</li>
          <li className="text-gray-600">Vəziyyəti: Yeni</li>



          <li className="text-gray-600">Transmission: Automatic</li>
          <li className="text-gray-600">Fuel Type: Gasoline</li>
          <li className="text-gray-600">Seats: 5</li>
          <li className="text-gray-600">Color: Black</li>
        </ul>
      </div>
    </div>
  );
};

