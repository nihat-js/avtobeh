import React from 'react'

export default function Mileage({value,onChange}) {
  return (
    <div>
      <div>
        <label htmlFor="mileage" className="block text-lg font-medium text-gray-700">Yürüyüş Məsafə (km)</label>
        <input
          type="number"
          id="mileage"
          name="mileage"
          value={value}
          onChange={onChange}
          className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          placeholder="Məsələn: 150000"
        />
      </div>
    </div>
  )
}
