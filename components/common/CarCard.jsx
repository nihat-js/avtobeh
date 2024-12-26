"use client"

import formatDate from "@/lib/formateDate"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
// import {Tooltip} from "@nextui-org/tooltip";

export default function CarCard({ car }) {

  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(car.isFavorite)


  function nextImage() {
    setActiveImageIndex((prev) => (prev + 1) % car.images.length)
  }
  function previousImage() {
    setActiveImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length)
  }

  function handleVINClick() {
    // window.open(`https://vindecoder.eu/check-vin/${car.vin}`, '_blank')
    window.open("https://google.com/search?q=" + car.vin, "_blank",)
  }

  function toggleFavorite() {
    setIsFavorite((prev) => !prev)
  }

  car.engineSize = "1.5"
  car.fuelType = "Benzin"
  car.transmissionType = "Avtomat"
  car.mileage = "100.000"

  return (
    <div key={car.id} className="bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer  hover:bg-neutral-100 relative  transition-all duration-300  ">
      <Link href={`/masinlar/${car.slug}`} className="" >

        <div>
          <div>
            <img
              src={car.images?.length ? car.images[activeImageIndex]?.path : "https://placehold.co/600x400"}
              alt={`${car.brand} ${car.model}`}
              className=""
              style={{ width: '100%', height: '250px', obectFit: 'cover' }}
              height={300}
            />
          </div>

          {/* <Tooltip content="Təcili" placement="top">
          <div className="absolute top-2 left-2   p-2 w-10 h-10 rounded-full hover:bg-slate-100  text-white text-xs font-bold">
            <Image src="/icons/urgent.svg" alt="Urgent" width={24} height={24} />
          </div>
        </Tooltip> */}


          {/* Favorite  */}
          <div className={`absolute right-2 top-2  rounded-full  pointer p-2 ${isFavorite ? 'bg-orange-600' : 'bg-white'}
        cursor-pointer 4  hover:opacity-60  `} onClick={toggleFavorite} >
            <p className="text-sm">
              <Image src="/icons/heart-outlined.svg" alt="View" width={16} height={16} />

            </p>
          </div>

          {/* Navigation Icons */}
          {/* <div className="absolute bottom-4 right-4 flex space-x-2">

            <button className="text-white bg-black p-1 rounded-sm hover:bg-gray-700">
              <FaChevronLeft size={12} onClick={previousImage} />
            </button>
            <p className="text-white font-bold text-md">
              <span className="text-indigo-400"> {activeImageIndex + 1} </span> / {car.images?.length}
            </p>


            <button className="text-white bg-black p-1 rounded-sm hover:bg-gray-700">
              <FaChevronRight size={12} onClick={nextImage} />
            </button>
          </div> */}

          <div class="flex items-center justify-center col-span-2">
            <div class="flex items-center justify-between w-full text-gray-600 dark:text-gray-400 bg-gray-100 rounded-lg dark:bg-gray-600 max-w-[128px] mx-2">
              <button type="button" class="inline-flex items-center justify-center h-8 px-1 w-6 bg-gray-100 rounded-s-lg dark:bg-gray-600 hover:bg-gray-200
               dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800">
                <svg class="w-2 h-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                </svg>
                <span class="sr-only">Previous page</span>
              </button>
              <span class="flex-shrink-0 mx-1 text-sm font-medium space-x-0.5 rtl:space-x-reverse"> 1 / 10 </span>
              <button type="button" class="inline-flex items-center justify-center h-8 px-1 w-6 bg-gray-100 rounded-e-lg dark:bg-gray-600 
              hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800">
                <svg class="w-2 h-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <span class="sr-only">Next page</span>
              </button>
            </div>
          </div>
        </div>

        {/* Car Details */}
        <div className="py-2 px-4 ">
          <div className="flex flex-col justify-between items-center">
            <h2 className=" text-gray-600 text-sm flex gap-2">
              {car.brandName} {car.modelName}  {car.year}
              {/* <Image src="/icons/verified.svg" alt="Verified" width={16} height={16} /> */}
              {/* <Tooltip content="VIN kod" placement="top"> */}
              {/* <Image className='hover:bg-slate-100 p-2 cursor-default' src="/icons/search-colored.svg" alt="VIN kod"
                data-tooltip="VIN kod"
                onClick={handleVINClick}
                width={32} height={32} /> */}
              {/* </Tooltip> */}
            </h2>
            <p className="text-gray-600 text-2xl mt-2"><span className="text-indigo-600 font-bold">{car.price} {car.currency} ₼  </span></p>
          </div>


          <div className="mt-2">
            {/* <p className="text-gray-600 text-sm" > Konum: {car.country} {car.city}  </p> */}
            <p className="text-gray-600 text-sm text-center">
              <u className="cursor-default">{car.engineSize} L </u>  •
              <u> {car.transmissionType} </u>  •
              <u> {car.fuelType} </u>
            </p>
            <p className="text-gray-600 text-sm text-center">
              100,000km * 140 HP
            </p>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {/* <Tag src="/icons/engine.svg" text={` ${car.engineDisplacement / 1000} L`} />
            <Tag src="/icons/fuel.svg" text="Benzin" />
            <Tag src="/icons/gearbox.svg" text={` ${car.gearbox}`} /> */}

            {/* <Tag src="/icons/seat.svg" text="4" /> */}
            {/* <Tag src="/icons/calendar.svg" text="2018" /> */}
            {/* <Tag src="/icons/color.svg" text={` ${car.color}`} /> */}
          </div>
          {/* <Tag src="/icons/road.svg" text={` ${car.mileage} km`} />
            <Tag src="/icons/city.svg" text={`Baku, ${formatDate(car.createdAt)}  `} />
            <Tag src="/icons/power.svg" text="140 HP" /> */}
          {/* <p className="text-gray-600 text-sm" > Yas asfalt • Tecili </p> */}


        </div>
      </Link>
    </div>


  )
}

function Tag({ src, text }) {

  return (
    <div className="flex items-center  gap-2 px-3   bg-gray-200 
    rounded-full text-sm font-medium text-gray-700
    hover:bg-gray-300 cursor-pointer
    ">
      <Image src={src} alt="Mileage" width={16} height={16} />
      {text}
    </div>
  )
}