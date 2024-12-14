"use client"
import React from 'react'

export default function VIN({value,onChange}) {
  return (
    <div>
      <label htmlFor="vin" className="block text-lg font-medium text-gray-700">VİN (Avtomobilin identifikasiya nömrəsi)</label>
      <input
        type="text"
        id="vin"
        name="vin"
        value={value}
        onChange={onChange}
        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
        placeholder="Məsələn: 1HGBH41JXMN109186"
      />
    </div>
  )
}
