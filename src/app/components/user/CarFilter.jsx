'use client'; // Ensure this component is rendered on the client side

import { useState } from "react";
import { FiFilter } from "react-icons/fi"; // Importing filter icon from react-icons
import CustomSelect from "../atoms/CustomSelect";
import { carFeatures, cylindersCount, engineSize, transmissionTypes, vehicleTypes, years } from "@/src/data/auto";
// import Colors from "./CarFilter/Colors";
import Price from "./CarFilter/Price";
import Condition from "./CarFilter/Condition";
import { Option, Select } from "@material-tailwind/react";
import { useGlobalContext } from "@/src/lib/GlobalContext";
import { ButtonGroup } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
// import { colors, fuelTypes } from "@/lib/data";

import { Select as Select2, OptGroup, InputNumber, Slider } from "antd";
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

    const marks = {
        // 100: 'Mühərrik həcmi (minimum)',
        // 10000: 'Mühərrik həcmi (maksimum)',
        100: {
            style: {
                // color: '#f50',
            },
            label: <strong>Minimum</strong>,
        },
        10000: {
            style: {
                // color : "#f40"
            },
            label: <strong>Maksimum</strong>
        }
        // 26: '26°C',
        // 37: '37°C',
        // 100: {
        //   style: {
        //     color: '#f50',
        //   },
        //   label: <strong>100°C</strong>,
        // },
    };




    return (
        <div className="p-4  bg-gray-100 rounded-2xl shadow-sm " >



            <div className="flex justify-end mb-10">
                <button
                    onClick={toggleCollapse}
                    className="text-gray-600 hover:bg-red-600 hover:text-white transition duration-300">
                    <FiFilter size={20} />
                </button>
            </div>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isCollapsed ? "h-0 opacity-0" : "h-auto opacity-100"}`}>


                <div className="bir flex flex-row gap-2 ">

                    <Select2
                        showSearch
                        placeholder="Marka"
                        size="md"
                        className="w-1/3 bg-slate-50"
                        allowClear={true}
                        // mode="multiple"
                        // filterOption={(input, option) =>
                        //     (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        // }
                        filterOption={(input, option) =>
                            (typeof option?.label === 'string' && option?.label.toLowerCase().includes(input.toLowerCase()))
                        }
                        // suffixIcon={<svg fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M620.6 562.3l36.2 36.2L512 743.3 367.2 598.5l36.2-36.2L512 670.9l108.6-108.6zM512 353.1l108.6 108.6 36.2-36.2L512 280.7 367.2 425.5l36.2 36.2L512 353.1z"></path></g></svg>}
                        options={[
                            {
                                label: <span> Populyar </span>,
                                title: 'Populyar',
                                options: [
                                    ...brands?.filter(brand => brand.groupName == "popular").map(brand => ({
                                        label: brand.name,
                                        value: brand.id,
                                    }))
                                ]
                            },
                            {
                                label: <span> Hamısı </span>,
                                title: 'Hamısı',
                                options: [
                                    ...brands?.filter(brand => brand.groupName == null).map(brand => ({
                                        label: brand.name,
                                        value: brand.id,
                                    }))
                                ]
                            }
                        ]}
                        notFoundContent={<span>Nəticə yoxdur</span>} />

                    <Select2 showSearch
                        placeholder="Model"
                        size="middle"
                        className="w-1/3 bg-transparent"
                        // mode="multiple"
                        // filterOption={(input, option) =>
                        //     (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        // }
                        filterOption={(input, option) =>
                            (typeof option?.label === 'string' && option?.label.toLowerCase().includes(input.toLowerCase()))
                        }
                        notFoundContent={<span>Nəticə yoxdur</span>} />

                    {/* <Select2 label="Model" size="md">
                        <Option value="1">Model 1</Option>
                        <Option value="2">Model 2</Option>
                        <Option value="3">Model 3</Option> */}

                    <div className="flex flex-row">
                    
                        <InputNumber placeholder="İl(min)" min={1960} max={2025}
                            //   onChange={onChange} 
                            changeOnWheel />
                        <InputNumber placeholder="İl(max)" min={1960} max={2025} defaultValue={2025}
                            //   onChange={onChange} 
                            changeOnWheel />
                        {/* 
                        <Select size="md" label="Buraxlış ili(max)"
                            value={filters.year} onChange={(value) => { setFilters({ ...filters, year: value }) }}>
                            {
                                years.map(year => (
                                    <Option key={year} value={year}>{year}</Option>
                                ))
                            }
                        </Select> */}
                    </div>
                </div>


                <div className="mt-6 flex items-center gap-2">
                    {/* <Slider step={100} marks={marks} defaultValue={[0, 10000]} max={10000} tooltip={{ open: true }} /> */}
                    <label className="block text-xs font-medium text-gray-700" htmlFor=""> Mühərrik həcmi L (min,max)</label>
                    <InputNumber  min={0} max={10000}
                        //   onChange={onChange} 
                        changeOnWheel />
                    <InputNumber  min={0} max={10000} defaultValue={10000}
                        //   onChange={onChange} 
                        changeOnWheel />
               

                    <Select2 placeholder="Şəhər"
                        showSearch={true}
                        size="middle"
                        className="bg-transparent"
                        allowClear
                        // mode="multiple"
                        // filterOption={(input, option) =>
                        //     (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        // }
                        filterOption={(input, option) =>
                            (typeof option?.label === 'string' && option?.label.toLowerCase().includes(input.toLowerCase()))
                        }
                        options={cities?.map(city => ({
                            label: city.name,
                            value: city.id,
                        }))}
                        notFoundContent={<span>Nəticə yoxdur</span>} />

                </div>
                <div className="my-5 flex gap-3">
                    <Select2
                        mode="multiple"
                        placeholder="Yanacaq növü"
                        className="w-1/4"
                        allowClear
                        options={
                            [].map(fuel => ({
                                label: fuel.name,
                                value: fuel.value,
                            }))
                        }
                    />
                    <Select2 mode="multiple"
                        placeholder="Sürətlər qutusu"
                        className="w-1/4"
                        allowClear
                        options={
                            transmissionTypes.map(t => ({
                                label: t.name,
                                value: t.value
                            }))
                        }
                    />
                    <Select2 mode="multiple"
                        placeholder="Rəng"
                        className="w-1/4"
                        allowClear
                        options={
                            [].map(item => ({
                                label: item.name,
                                value: item.value
                            }))
                        } />
                </div>
                {/* <Price /> */}
                {/* <Condition /> */}
                <div>

                </div>

                <label className="text-gray-600 mb-2 text-sm "  htmlFor="">Seçimlər</label>
                <div className="flex flex-row flex-wrap gap-3 my-5 ">
                    {
                        [].map((feature, index) => (
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
