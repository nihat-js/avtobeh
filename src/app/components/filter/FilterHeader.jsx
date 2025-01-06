"use client"
import { useState } from "react";
import Image from "next/image";
import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";

export default function FilterHeader({ filterType, setFilterType }) {

  function generateClassName(name) {
    return `icon-btn bg-white border-2 p-3 rounded-lg flex justify-center items-center transition-transform 
    transform hover:scale-110 hover:shadow-md ${filterType === name ? 'border-blue-500 scale-110' : 'border-gray-300'}`

  }

  const size = 20

  const data = [
    {
      label: "Avto Satış",
      value: "car",
      // desc: `It really matters and then like it really doesn't matter.
      // What matters is the people who are sparked by it. And the people 
      // who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Nömrə satışı",
      value: "license-plate",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "İcarə",
      value: "rent-car",
      // desc: `Because it's about motivating the doers. Because I'm here
      // to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];

  return (
    <main>
      <Tabs value={filterType} >
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} onClick={() => setFilterType(value)} >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        {/* <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody> */}
      </Tabs>
    </main>
    // <div className="filter-header flex  items-center gap-3 p-4 bg-gray-100 rounded-lg">
    //   <button
    //     className={generateClassName('car')}
    //     onClick={() => setFilterType('car')}
    //   >
    //     <Image src="/icons/car.svg" width={size} height={size} alt="Car" />
    //   </button>

    //   <button
    //     className={generateClassName('rent')}
    //     onClick={() => setFilterType('rent')}
    //   >
    //     <Image src="/icons/rent.svg" width={size} height={size} alt="License Plate" />
    //   </button>

    //   <button
    //     className={generateClassName('license-plate')}
    //     onClick={() => setFilterType('license-plate')}
    //   >
    //     <Image src="/icons/license-plate.svg" width={size} height={size} alt="License Plate" />
    //   </button>



    // </div>
  );
}
