'use client'; // Ensure this component is rendered on the client side

import { useState } from "react";
import { FiFilter } from "react-icons/fi"; // Importing filter icon from react-icons
import CustomSelect from "../atoms/CustomSelect";
import { carFeatures, cylindersCount, engineSize, transmissionType, vehicleTypes, years } from "@/config/data";
import Colors from "./CarFilter/Colors";
import Price from "./CarFilter/Price";
import Condition from "./CarFilter/Condition";
import { Option, Select } from "@material-tailwind/react";
import { useGlobalContext } from "@/lib/GlobalContext";
import { ButtonGroup } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { fuelTypes } from "@/lib/data";
// import MultiRangeSlider from "../common/MultiRangeSlider/MultiRangeSlider";

const CarFilter = () => {
    const [filters, setFilters] = useState({
        brand: "",
        model: "",
        bodyType: "",
        color: "",
        cylinderCount: "",
        engineSize: "",
        transmissionType: "",
        vehicleType: "",
        condition: "",

        fuelType: "",

        minYear: "",
        maxYear: "",
        minPrice: "",
        maxPrice: "",
        city: "",
        minEngine: "",
        maxEngine: "",
        minHorsepower: "",
        maxHorsepower: "",

    });
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { cities, brands } = useGlobalContext();
    function handleChange(e) {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        });
    };
    function toggleCollapse() {
        setIsCollapsed(!isCollapsed);
    }




    return (
        <div className="p-4 bg-neutral-50 rounded-lg shadow-md">


            <div className="flex justify-end mb-10">
                <button
                    onClick={toggleCollapse}
                    className="text-gray-600 hover:bg-red-600 hover:text-white transition duration-300">
                    <FiFilter size={20} />
                </button>
            </div>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isCollapsed ? "h-0 opacity-0" : "h-auto opacity-100"}`}>


                <div className="bir flex flex-row gap-2 ">
                    <Select label="Marka" size="md" >
                        {
                            brands.map(brand => (
                                <Option key={brand.id} value={brand.id}>{brand.name}</Option>
                            ))
                        }
                    </Select>
                    <Select label="Model" size="md">
                        <Option value="1">Model 1</Option>
                        <Option value="2">Model 2</Option>
                        <Option value="3">Model 3</Option>
                    </Select>

                    <div className="flex flex-row">
                        <Select size="md" label="Buraxlış ili(min)"
                            value={filters.year} onChange={(value) => { setFilters({ ...filters, year: value }) }}>
                            {
                                years.map(year => (
                                    <Option key={year} value={year}>{year}</Option>
                                ))
                            }
                        </Select>
                        <Select size="md" label="Buraxlış ili(max)"
                            value={filters.year} onChange={(value) => { setFilters({ ...filters, year: value }) }}>
                            {
                                years.map(year => (
                                    <Option key={year} value={year}>{year}</Option>
                                ))
                            }
                        </Select>
                    </div>
                </div>


                <div className="mt-6 grid  grid-cols-3 gap-5">
                    <Select size="md" label="Mühərrik həcmi (min)">
                        {
                            engineSize.map(size => (
                                <Option key={size} value={size}>{size}</Option>
                            ))
                        }
                    </Select>
                    <Select size="md" label="Max">
                        {
                            engineSize.map(size => (
                                <Option key={size} value={size}>{size}</Option>
                            ))
                        }
                    </Select>
                    <Select label="Şəhər" size="md">
                        {
                            cities.map(city => (
                                <Option key={city.id} value={city.id}> {city.name}</Option>
                            ))
                        }
                    </Select>

                </div>
                <div className="my-5">
                    <ButtonGroup variant="outlined" size="sm" color="teal" ripple={true} >
                        {
                            fuelTypes.map(fuel => (
                                <Button onClick={() => setFilters({ ...filters, fuelType: fuel.value })}
                                    className={` ${filters.fuelType === fuel.value ? "bg-teal-500 text-white" : "bg-white text-teal-500"}`}
                                    key={fuel.value} value={fuel.value}>
                                    {fuel.name}
                                </Button>
                            ))
                        }
                    </ButtonGroup>
                </div>
                {/* <Price /> */}
                {/* <Condition /> */}
                <div>
                    <Select label="Sürətlər qutusu" size="md">
                        {
                            transmissionType.map((type,index) => (
                                <Option key={index} value={type.value}>{type.name}</Option>
                            ))
                        }
                    </Select>
                </div>
                <div className="flex flex-row flex-wrap gap-3 my-5 ">
                    {
                        carFeatures.map((feature, index) => (
                            <div key={index} className="flex gap-2  ">
                                <input type="checkbox" id={feature.value} value={feature.value} />
                                <label htmlFor={feature.value} className="text-sm text-gray-500" >{feature.key}  </label>
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-row flex-wrap gap-2">

                </div>




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
