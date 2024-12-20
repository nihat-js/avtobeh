'use client'; // Ensure this component is rendered on the client side

import { useState } from "react";
import { FiFilter } from "react-icons/fi"; // Importing filter icon from react-icons
import CustomSelect from "../atoms/CustomSelect";
import { engineSize, years } from "@/config/data";

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

    const features = [
        "Kasko"
    ]

    const textarea = [
        `
        Təkərlərin vəziyyəti : 
        Masinin xususi ozellikleri : 
        Masinin vəziyyəti :
        Masinin xususi ozellikleri :

        Salonun veziyyeti : 
        Salonun xususi ozellikleri :


        `
    ]
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











                {/* Apply Filter Button */}
                <div className="flex justify-end mt-3">
                    <button className="py-2 px-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 flex items-center justify-center">
                        <FiFilter size={18} className="mr-2" />
                        Tətbiq et
                    </button>

                </div>
            </div>
        </div >
    );
};

export default CarFilter;
