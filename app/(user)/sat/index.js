"use client"

import axios from "axios";
import { useState } from "react";

const fuelTypes = [
  { name: "Benzin", value: "benzin" },
  { name: "Dizel", value: "dizel" },
  { name: "Elektrik", value: "elektrik" },
  { name: "Hibrid", value: "hibrid" },
  { name: "Qaz", value: "qaz" },
  { name: "Benzin/Qaz", value: "benzin/qaz" },


]

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

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 shadow-lg rounded-xl">
      <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-6">Maşınınızı Satın</h1>

      <form onSubmit={handleSubmit} className="space-y-6">



        {/* Brand */}
        <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
          <div className="w-1/2">
            <label htmlFor="brand" className="block text-lg font-medium text-gray-700">Marka</label>
            <select
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={
                (e) => {
                  handleChange(e);
                  getModels();
                }}
              className="mt-2 block w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2
               focus:ring-indigo-500 shadow-sm rounded-xl"
            >
              <option value="">Marka Seçin</option>
              {
                brands.map(brand => (
                  <option key={brand.id} value={brand.id}>{brand.name}</option>
                ))
              }
            </select>
          </div>
          <div className="w-1/2">
            <label htmlFor="brand" className="block text-lg font-medium text-gray-700">Model</label>
            <select
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              disabled={models.length == 0}
              className={`mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm  ${models.length == 0 ? 'cursor-not-allowed' : ''} `}
            >
              {
                models.map(model => (
                  <option key={model.id} value={model.id}>{model.name}</option>
                ))
              }
            </select>
          </div>
        </div>


        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-lg font-medium text-gray-700">Kateqoriya</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          >
            <option value="">Kateqoriya Seçin</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="truck">Pick-up</option>
            <option value="hatchback">Hatchback</option>
          </select>
        </div>

        <div className="year">
          <label htmlFor="year" className="block text-lg font-medium text-gray-700">Buraxılış ili</label>
          <select name="year" id="year" value={formData.year} onChange={handleChange} className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm">
            <option value="">Buraxılış ili seçin</option>
            {
              Array.from({ length: 50 }, (_, i) => +(new Date().getFullYear() + 1) - i).map(year => (
                <option key={year} value={year}>{year}</option>
              ))
            }
          </select>
        </div>


        <div className="gap-2 grid grid-cols-2  ">

          <div>
            <label htmlFor="vin" className="block text-lg font-medium text-gray-700">VİN (Avtomobilin identifikasiya nömrəsi)</label>
            <input
              type="text"
              id="vin"
              name="vin"
              value={formData.vin}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              placeholder="Məsələn: 1HGBH41JXMN109186"
            />
          </div>

          {/* Mileage */}
          <div>
            <label htmlFor="mileage" className="block text-lg font-medium text-gray-700">Yürüyüş Məsafə (km)</label>
            <input
              type="number"
              id="mileage"
              name="mileage"
              value={formData.mileage}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              placeholder="Məsələn: 150000"
            />
          </div>
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

      

        <div class="flex">
          <div class="flex items-center h-5">
            <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          </div>
          <div class="ms-2 text-lg">
            <label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">Barter maraqlıdır</label>
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


        {/* Description */}
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

        {/* {{price}} */}
        <div>
          <label htmlFor="mileage" className="block text-lg font-medium text-gray-700">Qiymət</label>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              id="mileage"
              name="mileage"
              value={formData.mileage}
              onChange={handleChange}
              className="mt-2 block  px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              placeholder="Məsələn: 23000"
            />
            <div>
              <select name="currency" className="px-4 py-2">
                <option value="azn">AZN</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
              </select>

            </div>
          </div>
        </div>
        <div>
        </div>

        {/* Image Upload */}
        <div>
          <label htmlFor="images" className="block text-lg font-medium text-gray-700">Şəkilləri Yükləyin</label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            onChange={handleFileChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>

        {formData?.images?.length < 4 && (
          <label htmlFor="image-upload" className="relative cursor-pointer w-full h-32 border-2 border-dashed border-gray-400 rounded-lg flex justify-center items-center text-gray-500">
            <input
              type="file"
              id="image-upload"
              name="images"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0"
            />
            <span className="text-2xl">+</span>
          </label>

        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gray-700 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Paylaş
          </button>
        </div>
      </form>
    </div>
  );
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
    <div class="flex">
      <button id="states-button" data-dropdown-toggle="dropdown-states" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
        Azərbaycan
      </button>
      <div id="dropdown-states" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-button">
          <li>
            <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
              <div class="inline-flex items-center">
                <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fill-rule="evenodd"><g stroke-width="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" /><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" /></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" /><path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)" /></g></svg>
                United States
              </div>
            </button>
          </li>
          <li>
            <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
              <div class="inline-flex items-center">
                <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512"><path fill="#ffce00" d="M0 341.3h512V512H0z" /><path d="M0 0h512v170.7H0z" /><path fill="#d00" d="M0 170.7h512v170.6H0z" /></svg>
                Germany
              </div>
            </button>
          </li>
          <li>
            <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
              <div class="inline-flex items-center">
                <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h512v512H0z" /><path fill="#009246" d="M0 0h170.7v512H0z" /><path fill="#ce2b37" d="M341.3 0H512v512H341.3z" /></g></svg>
                Italy
              </div>
            </button>
          </li>
          <li>
            <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
              <div class="inline-flex items-center">

                China
              </div>
            </button>
          </li>
        </ul>
      </div>
      <label for="states" class="sr-only">Şəhər seçin</label>
      <select id="states" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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