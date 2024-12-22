"use client"

import axios from "axios";
import Image from "next/image";
import { useRef, useState } from "react";
// import VIN from "./components/VIN";
// import Category from "./components/Category";
// import Year from "./components/Year";
// import Mileage from "./components/Mileage";
// import Price from "./components/Price";
// import Brand from "./components/Brand";
import Model from "./components/Model";
import { fuelTypes } from "@/lib/data";
import ImagePreview from "./components/ImagePreview";
import CustomSelect from "@/components/atoms/CustomSelect";
import { Option, Select } from "@material-tailwind/react";
import { carColors, carFeatures, cylindersCount, engineSize, seatsCount, transmissionType, vehicleTypes, years } from "@/config/data";
import { Input } from "@material-tailwind/react";
import { Radio } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";



export default function Index({ brands }) {
  const [formData, setFormData] = useState({
    bodyType: "",
    brand: "",
    model: "",
    year: "",
    price: "",
    horsePower: "",
    transmissionType: "",
    engineSize: "",
    cylindersCount: "",
    seatsCount: "",
    features: [],
    color: "",
    interiorColor: "",
    interiorMaterial: "",
    interiorTrim: "",
    interiorTrimColor: "",
    city: "",
    phone: "",
    name: "",
    email: "",

    category: "",
    vin: "",
    mileage: "",
    description: "",
    fuelType: "",
    images: [],
  });
  const [models, setModels] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([])


  async function handleTailwindElementChange(name, value) {
    setFormData({ ...formData, [name]: value });
  }


  async function handleImageChange(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    let response = await axios.post("/api/upload-image", formData);

    if (response.data["status"] == "ok") {
      setUploadedImages([...uploadedImages, response.data["imageURL"]])
    }

  };

  async function removeImage(imageUrl) {
    // console.log({imageUrl})


    let response = await axios.post("/api/remove-image", { imageURL: imageUrl.replace("/temporary-uploads/", "") });
    // console.log(response.data)
    if (response.data["status"] == "ok") {
      setUploadedImages(uploadedImages.filter(image => image != imageUrl))
    }
  }


  async function getModels(brandId) {
    setModels([]);
    let response = await axios.get(`/api/car-models?brandId=${brandId}`);
    console.log(response.data)
    setModels(response.data.data);
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  function handleAddImage() {
    // const input = document.getElementById(inputs[uploadedImageCount]);
    const input = document.querySelector(`input[type="file"]`)
    input.click();
  }

  async function handleBrandChange(value) {
    let brand = value
    let response = await axios.get(`/api/car-models/${brand}`);
    if (response.data["status"] == "ok") {
      setModels(response.data["data"]);
    }
    setFormData({ ...formData, brand: value });
    // setFormData({ ...formData, model: "" });
    console.log("brand changed")
  }


  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 shadow-lg rounded-xl">
      <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-6">Maşınınızı Satın</h1>

      <form onSubmit={handleSubmit} className="space-y-6">


        <h4 className="text-2xl font-semibold text-gray-800 mb-4"> Ümumi məlumatlar </h4>
        <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-6">
          <Select size="md" label="Marka seçin *" value={formData.brand} onChange={handleBrandChange} >
            {
              brands.map(brand => (
                <Option key={brand.id} value={brand.id}>{brand.name}</Option>
              ))
            }
          </Select>
          <Select size="md" label="Model seçin *" disabled={models.length == 0} value={formData.model}
            onChange={(value) => { setFormData({ ...formData, model: value }) }} >
            {
              models.map(model => (
                <Option key={model.id} value={model.id}>{model.name}</Option>
              ))
            }
          </Select>
          <Select size="md" label="Ilini seçin *" required
            value={formData.year} onChange={(value) => { setFormData({ ...formData, year: value }) }}
          >
            {
              years.map(year => (
                <Option key={year} value={year}>{year}</Option>
              ))
            }
          </Select>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          <Select size="md" label="Gövdə tipi *"
            value={formData.bodyType} onChange={(value) => { setFormData({ ...formData, bodyType: value }) }}
          >

            {
              vehicleTypes.map(vehicleType => (
                <Option key={vehicleType.key} value={vehicleType.key}>{vehicleType.value}</Option>
              ))
            }
          </Select>
          <Select size="md" label="Mühərrik həcmi *"
            value={formData.engineSize} onChange={(value) => { setFormData({ ...formData, engineSize: value }) }}

          >
            {
              engineSize.map(c => (
                <Option key={c} value={c} onchange={handleChange} >{c} L</Option>
              ))
            }
          </Select>
          <Select size="md" label="Sürətlər qutusu *"
            value={formData.transmissionType} onChange={(value) => { setFormData({ ...formData, transmissionType: value }) }}

          >
            {
              transmissionType.map(t => (
                <Option key={t.key} value={t.key} onchange={handleChange} >{t.value} </Option>
              ))
            }
          </Select>

        </div>
        <div>

        </div>



        <h4 className="text-2xl font-semibold text-gray-800 mt-6"> Digər Məlumatlar </h4>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Select size="md" label="Rəng *"
            value={formData.color} onChange={(value) => { setFormData({ ...formData, color: value }) }}
          >
            {
              carColors.map(color => (
                <Option key={color.key} value={color.key}>{color.value}</Option>
              ))
            }
          </Select>
          <Input label="At gücü (HP)" type="text" name="horsePower" value={formData.horsePower} onChange={handleChange} />
          <Select size="md" label="Silindr sayı" >
            {
              cylindersCount.map(c => (
                <Option key={c} value={c}>{c}</Option>
              ))
            }
          </Select>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 ">
          <Input label="VIN (Avtomobilin identifikasiya nömrəsi)" type="text" name="vin" value={formData.vin} onChange={handleChange} />
          <Select size="md" label="Oturacaq sayı" >
            {
              seatsCount.map(s => (
                <Option key={s} value={s}>{s}</Option>
              ))
            }
          </Select>
        </div>

        <div className="flex flex-row flex-wrap gap-1">
          {
            fuelTypes.map(fuelType => (
              <Radio name="fuelType" label={fuelType.value} value={fuelType.key} formData={formData} handleChange={handleChange} />
            ))
          }
        </div>

        <h4 className="text-2xl font-semibold text-gray-800 mt-6"> Özəlliklər </h4>

        <div className="flex flex-row flex-wrap gap-2">
          {
            carFeatures.map(carFeature => (
              <Checkbox color="purple" name="carFeature" label={carFeature.value} value={carFeature.key} formData={formData} handleChange={handleChange} />
            ))
          }
          <Checkbox
            label={
              <div>
                <Typography color="blue-gray" className="font-medium">
                  Təcili
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  Qırmızı işarəylə göstərilir
                </Typography>
              </div>
            }
            containerProps={{
              className: "-mt-5",
            }}
          />
        </div>


        <h4 className="text-2xl font-semibold text-gray-800 mt-6"> Qeyd </h4>
        <Textarea label="Sərfiyyat" value={formData.description} onChange={handleChange} />
        <div>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            label="Təkərlərin vəziyyəti, Salonun veziyyeti, xususi ozellikleri :"
          />
        </div>
        {/* <Price value={formData.price} onChange={handleChange} /> */}
        <div>
        </div>

        <input type="file" id="images" className="hidden" onChange={handleImageChange} />
        <div className="grid grid-cols-5 gap-2">
          {
            uploadedImages.map((image, index) => (
              <ImagePreview key={index} image={image} removeImage={() => removeImage(image)} rotateImage={() => rotateImage(image)} />
            ))
          }
          <div className="w-40 h-40 border-2 border-dashed flex justify-center items-center cursor-pointer rounded-full hover:bg-slate-200 " onClick={handleAddImage}  >
            <label htmlFor="images" className="block text-lg font-medium text-gray-700 cursor-pointer">
              <Image src="/icons/photo.svg" width={40} height={40} alt="Add Image" />
            </label>
          </div>
        </div>
        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-3 px-4 bg-gray-700 text-white font-semibold rounded-lg
             hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Paylaş
          </button>
        </div>
      </form>
    </div>
  );
}



// function RadioButton({ name, value, formData, handleChange }) {
//   return (
//     <div className="flex items-center">
//       <input
//         type="radio"
//         id={value}
//         name="fuelType"
//         value={value}
//         // checked={formData.fuelType === value}
//         onChange={handleChange}
//         className="h-5 w-5 text-indigo-600 border-gray-300 focus:ring-indigo-500"
//       />
//       <label htmlFor={value} className="ml-2 text-lg font-medium text-gray-700">{name}</label>
//     </div>
//   )
// }

function PhoneNumber() {
  return (
    <div className="flex">
      <button id="states-button" data-dropdown-toggle="dropdown-states" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
        Azərbaycan
      </button>
      <div id="dropdown-states" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-button">
          <li>
            <button type="button" className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
              <div className="inline-flex items-center">
                <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fill-rule="evenodd"><g stroke-width="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" /><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" /></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" /><path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)" /></g></svg>
                United States
              </div>
            </button>
          </li>
          <li>
            <button type="button" className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
              <div className="inline-flex items-center">
                <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512"><path fill="#ffce00" d="M0 341.3h512V512H0z" /><path d="M0 0h512v170.7H0z" /><path fill="#d00" d="M0 170.7h512v170.6H0z" /></svg>
                Germany
              </div>
            </button>
          </li>
          <li>
            <button type="button" className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
              <div className="inline-flex items-center">
                <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h512v512H0z" /><path fill="#009246" d="M0 0h170.7v512H0z" /><path fill="#ce2b37" d="M341.3 0H512v512H341.3z" /></g></svg>
                Italy
              </div>
            </button>
          </li>
          <li>
            <button type="button" className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
              <div className="inline-flex items-center">

                China
              </div>
            </button>
          </li>
        </ul>
      </div>
      <label for="states" className="sr-only">Şəhər seçin</label>
      <select id="states" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Şəhər seçin</option>
        <option value="CA">California</option>
        <option value="TX">Texas</option>
        <option value="WH">Washinghton</option>
        <option value="FL">Florida</option>
        <option value="VG">Virginia</option>
        <option value="GE">Georgia</option>
        <option value="MI">Michigan</option>
      </select>
    </div>
  )
}