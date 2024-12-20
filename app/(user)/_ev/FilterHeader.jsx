"use client"
import { useState } from "react";
import Image from "next/image";

export default function FilterHeader({ filterType, setFilterType }) {

  function generateClassName(name) {
    return `icon-btn bg-white border-2 p-3 rounded-lg flex justify-center items-center transition-transform 
    transform hover:scale-110 hover:shadow-md ${filterType === name ? 'border-blue-500 scale-110' : 'border-gray-300'}`

  }

  const size = 20

  return (
    <div className="filter-header flex  items-center gap-3 p-4 bg-gray-100 rounded-lg">
      <button
        className={generateClassName('car')}
        onClick={() => setFilterType('car')}
      >
        <Image src="/icons/car.svg" width={size} height={size} alt="Car" />
      </button>

      <button
        className={generateClassName('rent')}
        onClick={() => setFilterType('rent')}
      >
        <Image src="/icons/rent.svg" width={size} height={size} alt="License Plate" />
      </button>

      <button
        className={generateClassName('license-plate')}
        onClick={() => setFilterType('license-plate')}
      >
        <Image src="/icons/license-plate.svg" width={size} height={size} alt="License Plate" />
      </button>



    </div>
  );
}
