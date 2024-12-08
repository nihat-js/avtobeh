import CustomInput from "@/components/atoms/OutlinedInput";
import CustomSelect from "@/components/atoms/CustomSelect";
import Layout from "@/components/Layout";
import UploadImages from "@/components/sell/UploadImages";
import React, { useState } from "react";

const CarForm = () => {

  const [formData,setFormData] = useState({
    "brand":"",
    "model":"",
    "year":"",
    "mileage":"",
    "price":"",
    "description":"",
    "images":[],



  }) 


  let brands = []
  const [models,setModels] = useState([])


  const carBrands = [
    "Toyota",
    "Honda",
    "Ford",
    "BMW",
    "Tesla",
    "Mercedes",
    "Audi",
    "Volkswagen",
    "Chevrolet",
  ];

  function carBrandOnChange(brand){
    setSelectedBrand(brand)
    // setFormData((prev)=> ..."Model1","Model2","Model3"])
  }


  return (
    <Layout>
      <div className=" mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Sell Your Car</h1>
        <form>

        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>

          <div className="grid grid-cols-2 gap-4">
            <CustomSelect
              label="Marka"
              options={carBrands}
              selectedValue={formData.selectedBrand}
              onChange={carBrandOnChange}
            />
            <CustomSelect
              label="Model"
              options={models}
              selectedValue={formData.selectedBrand}
              onChange={carBrandOnChange}
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        {/* // images */}
        <UploadImages />
        <CustomInput/>

      </div>
    </Layout>
  );
};



export default CarForm;
