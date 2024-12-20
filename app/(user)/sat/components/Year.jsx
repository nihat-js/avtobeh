import React from 'react'

export default function Year({handleChange,value}) {
  return (
    <div className="year">
      <label htmlFor="year" className="block text-lg font-medium text-gray-700">Buraxılış ili</label>
      <select name="year" id="year" value={value} onChange={handleChange} className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm">
        <option value="">Buraxılış ili seçin</option>
        {
          Array.from({ length: 50 }, (_, i) => +(new Date().getFullYear() + 1) - i).map(year => (
            <option key={year} value={year}>{year}</option>
          ))
        }
      </select>
    </div>
  )
}
