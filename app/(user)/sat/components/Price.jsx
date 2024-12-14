import React from 'react'

export default function Price({ value,onChange }) {
  return (
    <div>
      <label htmlFor="mileage" className="block text-lg font-medium text-gray-700">Qiymət</label>
      <div className="flex gap-2 items-center">
        <input
          type="number"
          id="mileage"
          name="mileage"
          value={value}
          onChange={onChange}
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
  )
}
