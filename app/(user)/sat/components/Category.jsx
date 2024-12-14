import React from 'react'

export default function Category({value,onChange}) {
  return (
    <div>
      <label htmlFor="category" className="block text-lg font-medium text-gray-700">Kateqoriya</label>
      <select
        id="category"
        name="category"
        value={value}
        onChange={onChange}
        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
      >
        <option value="">Kateqoriya Seçin</option>
        <option value="sedan">Sedan</option>
        <option value="suv">SUV</option>
        <option value="truck">Pick-up</option>
        <option value="hatchback">Hatchback</option>
      </select>
    </div>
  )
}
