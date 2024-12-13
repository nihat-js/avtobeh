"use client"

import formatDate from "@/lib/formateDate"
import Image from "next/image"
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
    window.open(`https://vindecoder.eu/check-vin/${car.vin}`, '_blank')
  }

  function toggleFavorite() {
    setIsFavorite((prev) => !prev)
  }

  return (
    <div key={car.id} className="max-w-sm bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer ">

      <div className="relative">
        <div className="h-64">
          <img
            src={car?.images && car.images[activeImageIndex]?.path}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-full object-cover"
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
            <Image src="/icons/save.svg" alt="View" width={16} height={16} />
          </p>
        </div>

        {/* Navigation Icons */}
        <div className="absolute bottom-4 right-4 flex space-x-2">

          <button className="text-white bg-black p-1 rounded-sm hover:bg-gray-700">
            <FaChevronLeft size={12} onClick={previousImage} />
          </button>
          <p className="text-white font-bold text-md">
            <span className="text-indigo-400"> {activeImageIndex + 1} </span> / {car.images?.length}
          </p>


          <button className="text-white bg-black p-1 rounded-sm hover:bg-gray-700">
            <FaChevronRight size={12} onClick={nextImage} />
          </button>
        </div>
      </div>

      {/* Car Details */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 flex gap-2">
          {car.brandName} {car.modelName}  ({car.year})
          {/* <Image src="/icons/verified.svg" alt="Verified" width={16} height={16} /> */}
          {/* <Tooltip content="VIN kod" placement="top"> */}
          <Image className='hover:bg-slate-100 p-2 cursor-pointer' src="/icons/search-colored.svg" alt="VIN kod"
            data-tooltip="VIN kod"
            onClick={handleVINClick}
            width={32} height={32} />
          {/* </Tooltip> */}
        </h2>
        <p className="text-gray-600 text-xl mt-2"><span className="text-orange-400">{car.price} {car.currency} </span></p>
        
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Tag src="/icons/engine.svg" text={` ${car.engineDisplacement/1000} L`} />
          <Tag src="/icons/fuel.svg" text="Benzin" />
          <Tag src="/icons/road.svg" text={` ${car.mileage} km`} />
          {/* <Tag src="/icons/calendar.svg" text="2018" /> */}
          <Tag src="/icons/gearbox.svg" text={` ${car.gearbox}`} />
          {/* <Tag src="/icons/seat.svg" text="4" /> */}
          {/* <Tag src="/icons/color.svg" text={` ${car.color}`} /> */}
        </div>
        <div className="mt-4">
          <Tag src="/icons/city.svg" text={`Baku, ${formatDate(car.createdAt)} `} />
        </div>
        <div className="mt-2">
          <p className="text-gray-600 text-sm" > Yas asfalt • Tecili </p>
        </div>


      </div>
    </div>

  )
}

function Tag({ src, text }) {

  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-gray-200 
    rounded-full text-sm font-medium text-gray-700
    hover:bg-gray-300 cursor-pointer
    ">
      <Image src={src} alt="Mileage" width={16} height={16} />
      {text}
    </div>
  )
}