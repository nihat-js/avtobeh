"use client"

import axios from "axios";
import Image from "next/image";
import { useRef, useState } from "react";
import VIN from "./components/VIN";
import Category from "./components/Category";
import Year from "./components/Year";
import Mileage from "./components/Mileage";
import Price from "./components/Price";
import Brand from "./components/Brand";
import Model from "./components/Model";
import { fuelTypes } from "@/lib/data";



export default function Index({ brands }) {
  const [formData, setFormData] = useState({
    brand: "",
    category: "",
    vin: "",
    mileage: "",
    description: "",
    fuelType: "",
    images: [],
  });

  const [models, setModels] = useState([]);
  const inputs = [
    "images-1",
    "images-2",
    "images-3",
    "images-4",
    "images-5",
    "images-6",
    "images-7",
    "images-8",
    "images-9",
    "images-10",
  ]
  const [previewImages, setPreviewImages] = useState([]);
  const [uploadedImageCount, setUploadedImageCount] = useState(0);


  function handleImageChange(event) {
    const file = event.target.files[0];
    let url = URL.createObjectURL(file);
    if (file) {
      setUploadedImageCount(uploadedImageCount + 1);
      setPreviewImages([...previewImages, url]);
    }
  };


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
    const input = document.getElementById(inputs[uploadedImageCount]);
    input.click();
  }

  function handleRemoveImage(){

  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 shadow-lg rounded-xl">
      <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-6">Maşınınızı Satın</h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
          <div className="w-1/2">
            <Brand brands={brands} value={formData.brand} handleChange={handleChange} />
          </div>
          <div className="w-1/2">
            <Model models={models} value={formData.model} handleChange={handleChange} />
          </div>
        </div>


        <Category value={formData.category} onChange={handleChange} />
        <Year value={formData.year} handleChange={handleChange} />

        <div className="gap-2 grid grid-cols-2  ">

          <VIN value={formData.vin} onChange={handleChange} />
          <Mileage value={formData.mileage} onChange={handleChange} />
        </div>

        <PhoneNumber />

        {/* <div className="is-original">
          <input type="checkbox" id="is-original" name="isOriginal" value="true" onChange={handleChange} />
          <label htmlFor="is-original" className="ml-2 text-lg font-medium text-gray-700">Orjinal Yürüyüş Məsafəsi</label>

        </div> */}

        <div className="is-urgent">
          <input type="checkbox" id="is-urgent" name="isUrgent" value="true" onChange={handleChange} />
          <label htmlFor="is-urgent" className="ml-2 text-lg font-medium text-gray-700">Təcili - Qırmızı işarəylə göstərilir </label>
        </div>


        <div className="flex">
          <div className="flex items-center h-5">
            <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          </div>
          <div className="ms-2 text-lg">
            <label for="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">Barter maraqlıdır</label>
            {/* <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">For orders shipped from $25 in books or $29 in other categories</p> */}
          </div>
        </div>


        <div class="flex">
          <div class="flex items-center h-5">
            <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          </div>
          <div class="ms-2 text-lg">
            <label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">Təcili</label>
            <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">
              Siyahıda qırmızı işarə əlavə olunacaq </p>
          </div>
        </div>


        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">Təsvir</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            placeholder="Avtomobiliniz haqqında daha çox məlumat əlavə edin"
          />
        </div>



        {/* Fuel Type */}
        <div>
          <label className="block text-lg font-medium text-gray-700">Yanacaq Növü</label>
          <div className="mt-2 flex space-x-6">

            {
              fuelTypes.map(fuelType => (
                <RadioButton key={fuelType.value} onChange={handleChange} formData={formData} name={fuelType.name} value={fuelType.value} />
              ))
            }

          </div>
        </div>

        <Price value={formData.price} onChange={handleChange} />
        <div>
        </div>

        {
          inputs.map((input, index) => (
            <input
              key={index}
              type="file"
              id={input}
              className="hidden"
              onChange={handleImageChange}
            />
          ))
        }



        <div className="grid grid-cols-5 gap-2">

          {
            previewImages.map((image, index) => (
              <ImagePreview key={index} image={image} handleRemoveImage={handleRemoveImage} />
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

function ImagePreview({ image, handleRemoveImage }) {
  return (
    <div
      className="w-40 h-40 border-2 border-dashed cursor-pointer flex justify-center items-center relative rounded-md"
    >
      <div className="w-full h-full flex justify-center items-center relative">
        <img
          src={image}
          alt="Preview"
          className="w-full h-full object-cover rounded-lg"
        />
        <button
          onClick={handleRemoveImage}
          className="absolute top-2 right-1 w-6 h-6 text-white bg-red-500 hover:bg-red-600 rounded-full p-2 flex justify-center items-center"
        >
          &times;
        </button>
      </div>

    </div>
  )

}


function RadioButton({ name, value, formData, handleChange }) {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={value}
        name="fuelType"
        value={value}
        // checked={formData.fuelType === value}
        onChange={handleChange}
        className="h-5 w-5 text-indigo-600 border-gray-300 focus:ring-indigo-500"
      />
      <label htmlFor={value} className="ml-2 text-lg font-medium text-gray-700">{name}</label>
    </div>
  )
}

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