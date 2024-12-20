'use client'; // Ensure this component is rendered on the client side

import CustomSelect from "@/components/atoms/CustomSelect";
import { years } from "@/config/data";
import { useState } from "react";
import { FiFilter } from "react-icons/fi"; // Importing filter icon from react-icons
// import CustomSelect from "../atoms/CustomSelect";
// import { licensePlateRegions, years } from "@/config/data"; // Assuming we have some predefined license plate regions and years

const LicensePlateFilter = () => {
    const [filters, setFilters] = useState({
        minYear: "",
        maxYear: "",
        licensePlate: "",
        region: "", // License plate region
        city: "", // City
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
    ];

    const regions = [
        {
            "id": 1,
            "name": "Baku Region"
        },
        {
            "id": 2,
            "name": "Gence Region"
        },
        // Add more regions as necessary
    ];

    const [isCollapsed, setIsCollapsed] = useState(false); // State for toggling visibility

    // Handle filter changes
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

                <div className="grid grid-cols-3 gap-4">
                    {/* License Plate */}
                    <div>
                        <label htmlFor="licensePlate" className="text-sm">Plaka Nömrəsi</label>
                        <input
                            type="text"
                            id="licensePlate"
                            name="licensePlate"
                            value={filters.licensePlate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md"
                            placeholder="Plaka nömrəsi"
                        />
                    </div>

                
                    {/* City Filter */}
                    <div>
                        <label htmlFor="city" className="text-sm">Şəhər</label>
                        <CustomSelect data={cities} valueField="id" textField="name" name="city" value={filters.city} onChange={handleChange} />
                    </div>

                    {/* Region Filter */}
                    {/* <div>
                        <label htmlFor="region" className="text-sm">Region</label>
                        <CustomSelect data={regions} valueField="id" textField="name" name="region" value={filters.region} onChange={handleChange} />
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
        </div>
    );
};

export default LicensePlateFilter;
