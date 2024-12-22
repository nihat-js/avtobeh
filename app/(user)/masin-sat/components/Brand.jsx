import React from 'react'

export default function Brand({brands,value,onChange}) {
  return (
    <div>
      <label htmlFor="brand" className="block text-lg font-medium text-gray-700">Marka</label>
      <select
        id="brand"
        name="brand"
        value={value}
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
  )
}
