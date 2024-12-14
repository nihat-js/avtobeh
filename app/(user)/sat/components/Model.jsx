import React from 'react'

export default function Model({models,value,onChange}) {
  return (
    <div>
      <label htmlFor="brand" className="block text-lg font-medium text-gray-700">Model</label>
      <select
        id="brand"
        name="brand"
        value={value}
        onChange={onChange}
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
  )
}
