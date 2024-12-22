'use client'; // Ensure this component is rendered on the client side

import { useState } from "react";
import { FiFilter } from "react-icons/fi"; // Importing filter icon from react-icons
import CustomSelect from "../atoms/CustomSelect";
import { carFeatures, cylindersCount, engineSize, years } from "@/config/data";
import { cities } from "@/config/cities";
import Colors from "./CarFilter/Colors";
import Price from "./CarFilter/Price";
import Condition from "./CarFilter/Condition";

const CarFilter = ({ brands }) => {
    const [filters, setFilters] = useState({
        minYear: "",
        maxYear: "",
        minPrice: "",
        maxPrice: "",
        city: "",
        minEngine: "",
        maxEngine: "",
        minHorsepower: "",
        maxHorsepower: "",
        brand: "",
        model: "",

    });
    const [isCollapsed, setIsCollapsed] = useState(false); // State for toggling visibility



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        });
    };



    // Toggle collapsibility
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">





            <div className="flex justify-end mb-6">
                <button
                    onClick={toggleCollapse}
                    className="text-gray-600 hover:text-red-600 transition duration-300">
                    <FiFilter size={20} />
                </button>
            </div>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out 
                ${isCollapsed ? "h-0 opacity-0" : "h-auto opacity-100"}`}>




                <div className="flex flex-wrap gap-5">
                    <div>
                        <h1 className=" text-gray-600 mb-4">Marka </h1>
                        <CustomSelect data={brands} valueField="id" textField="name" state={filters.brand} onChange={handleChange} placeholder="Avtomobilin markasını seçin" />
                    </div>
                    <div>
                        <h1 className=" text-gray-600 mb-4">Model </h1>
                        <CustomSelect data={brands} valueField="id" textField="name" state={filters.brand} onChange={handleChange} placeholder="Avtomobilin markasını seçin" />
                    </div>

                    <Price />
                    <Condition />
                    <div>
                        <label htmlFor="minYear" className="text-sm">
                            İl
                        </label>
                        <div className="flex">
                            <CustomSelect data={years} valueField="value" textField="text" />
                            <CustomSelect data={years} valueField="value" textField="text" />

                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className="text-sm">Şəhər</label>
                        <CustomSelect data={cities} valueField="id" textField="name" />
                    </div>
                    <div>
                        <label htmlFor=""> Mühərrik həcmi (min,max) </label>
                        <div className="flex">
                            <CustomSelect data={engineSize} valueField="value" textField="text" />
                            <CustomSelect data={engineSize} valueField="value" textField="text" />

                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Silindirlərin sayı</label>
                        {
                            <CustomSelect data={cylindersCount} valueField="value" textField="text" />
                        }
                    </div>

                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1">Hover</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-md">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-row flex-wrap gap-2">
                        {
                            carFeatures.map((feature, index) => (
                                <div key={index} className="flex gap-2  ">
                                    <input type="checkbox" id={feature.value} value={feature.value} />
                                    <label htmlFor={feature.value} className="text-sm text-gray-500" >{feature.key}  </label>
                                </div>
                            ))
                        }
                    </div>


                    {/* <Colors /> */}

                    {/* 
                    <div>
                        <label htmlFor="">Vəziyyəti</label>
                        <div>
                        <label htmlFor="">Yeni </label>
                        <input type="checkbox"/> 

                        <label htmlFor="">Salon </label>
                        <input type="checkbox"/> 

                        <label htmlFor="">Antikvar </label>
                        <input type="checkbox"/> 

                        </div>
                    </div> */}
                </div>












                {/* Apply Filter Button */}
                <div className="flex justify-end mt-3">
                    <button className="py-2 px-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 flex items-center justify-center">
                        <FiFilter size={18} className="mr-2" />
                        Tətbiq et
                    </button>

                </div>
            </div >
        </div >
    );
};

export default CarFilter;
