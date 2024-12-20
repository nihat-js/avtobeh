'use client'; // Ensure this component is rendered on the client side

import { useState } from "react";
import { FiFilter } from "react-icons/fi"; // Importing filter icon from react-icons
import CustomSelect from "../atoms/CustomSelect";

const CarFilter = () => {
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
    const cities = [
        {
            "id": 1,
            "name": "Baku"
        },
        {
            "id": 2,
            "name": "Gence"
        }
    ]

    const [isCollapsed, setIsCollapsed] = useState(false); // State for toggling visibility

    const years = new Array(40).fill(1).map((item, index) => {
        return {
            value: (new Date().getFullYear() - index),
            text: (new Date().getFullYear() - index)
        }
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        });
    };

    const engineSize = new Array(100).fill(1).map((item, index) => {
        return {
            value: index * .1,
            text: index * .1 + "L"
        }
    })

    // Toggle collapsibility
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">




            <div className="flex items-end justify-between mb-4">
                <button
                    onClick={toggleCollapse}
                    className="text-gray-600 hover:text-red-600 transition duration-300">
                    <FiFilter size={24} />
                </button>
            </div>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out 
                ${isCollapsed ? "h-0 opacity-0" : "h-auto opacity-100"}`}>

                <div className="grid grid-cols-3">
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









                {/* Engine Volume and Horsepower */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                        <label htmlFor="minHorsepower" className="block text-sm font-medium text-gray-700">
                            Min Horsepower (hp)
                            
                        </label>
                        <input
                            type="number"
                            id="minHorsepower"
                            name="minHorsepower"
                            value={filters.minHorsepower}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="100"
                        />
                        <input
                            type="number"
                            id="maxHorsepower"
                            name="maxHorsepower"
                            value={filters.maxHorsepower}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="400"
                        />
                    </div>
                </div>

                {/* Apply Filter Button */}
                <button className="w-full py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 flex items-center justify-center">
                    <FiFilter size={18} className="mr-2" />
                    Tətbiq et
                </button>
            </div>
        </div >
    );
};

export default CarFilter;
