import React from 'react'

export default function BoringInput({value,onChange,placeholder}) {


  return (
    <div>
      <input placeholder={placeholder} value={value} onChange={onChange}
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-amber-200 focus:shadow-outline' type="text" placeholder="Jane Doe" />
    </div>
  )
}
