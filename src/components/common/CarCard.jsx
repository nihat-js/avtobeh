"use client"

// import formatDate from "@/src/lib/formatDate"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
// import {Tooltip} from "@nextui-org/tooltip";

export default function CarCard({ data }) {
  // console.log(data.Auto)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(data.isLiked)


  function nextImage() {
    setActiveImageIndex((prev) => (prev + 1) % data.images.length)
  }
  function previousImage() {
    setActiveImageIndex((prev) => (prev - 1 + data.images.length) % data.images.length)
  }

  function handleVINClick() {
    // window.open(`https://vindecoder.eu/check-vin/${car.vin}`, '_blank')
    window.open("https://google.com/search?q=" + car.vin, "_blank",)
  }

  function toggleFavorite() {
    setIsFavorite((prev) => !prev)
  }

  // car.engineSize = "1.5"
  // car.fuelType = "Benzin"
  // car.transmissionType = "Avtomat"
  // car.mileage = "100.000"

  return (
    <div key={data.id} className="bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer  hover:bg-neutral-100 relative  transition-all duration-300  ">
      <Link href={`/masinlar/${data.slug}`} className="" >

        <div>
          <div className="relative" >
            <img
              src={ data.Media?.length > 0 ?  "/uploads/autos/"+data.Media[0] : "/placeholder.jpg" }
              alt={`${data.Auto.brandName} ${data.Auto.modelName}`}
              className="h-[150px] md:h-[250px]"
              style={{ width: '100%', obectFit: 'cover' }}
              height={300}
            />
            {
              [1, 2, 3, 4].map(index => {
                return <div key={index}
                  style={{ right: `${(index + 1) * 15}px`, bottom: "10px" }}
                  // onMouseEnter={}
                  className="absolute  hover:bg-orange-600 hover:scale-110 transition-all duration-300  w-1 h-1 rounded-full  pointer p-2  bg-gray-300 cursor-pointer" >
                </div>
              })
            }

            <div className={`absolute right-2 top-2  rounded-full  pointer p-2 ${isFavorite ? 'bg-orange-600' : 'bg-white'}
              cursor-pointer 4  hover:opacity-60  `} onClick={toggleFavorite} >
              <div className="relative">
                <Image src="/icons/heart-outlined.svg" alt="View" width={16} height={16} />
              </div>
            </div>

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
            {/* 
            <div
              class="absolute transform rotate-45 bg-green-600 text-center text-white font-semibold py-1 right-[-20px] top-[20px] w-[100px]">
              20% off
            </div> */}


          </div>

          {/* <div class="flex items-center justify-center col-span-2">
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
          </div> */}
        </div>

        {/* Car Details */}
        <div className="py-2 px-4 ">
          <div className="flex flex-col justify-between items-center">
            <h2 className=" text-gray-600 text-sm flex gap-2">
              {data.Auto.brandName}  {data.Auto.modelName}    {data.Auto.year}
              {/* <Image src="/icons/verified.svg" alt="Verified" width={16} height={16} /> */}
              {/* <Tooltip content="VIN kod" placement="top"> */}
              {/* <Image className='hover:bg-slate-100 p-2 cursor-default' src="/icons/search-colored.svg" alt="VIN kod"
                data-tooltip="VIN kod"
                onClick={handleVINClick}
                width={32} height={32} /> */}
              {/* </Tooltip> */}
            </h2>
            <p className="text-gray-600 text-2xl mt-2"><span className="text-indigo-600 font-bold">{data.price} {data.currency} ₼  </span></p>
          </div>


          <div className="mt-2">
            {/* <p className="text-gray-600 text-sm" > Konum: {car.country} {car.city}  </p> */}
            <div className="text-gray-600 text-sm text-center">
              <u className="cursor-default">{data.Auto.engineSize} L • </u>  
              <u> {data.Auto.transmissionType} • </u>  
              <u> {data.Auto.bodyStyle} • </u>  
              <p> {data.Auto.fuelType}  </p>
            </div>
            <div className="text-gray-600 text-sm text-center">
              {data?.Auto?.mileage}  {data.Auto.mileageUnit} *  {data.Auto?.horsePower} 
            </div>
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
      </Link >
    </div >


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