export default function CustomSelect({ children, data, valueField, textField, state, onChange }) {

  console.log({ data })

  return (
    <div class="relative">
      <select onChange={onChange}
        class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border
         border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 
         hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">

        {
          !children && data.map(item =>
            <option
              value={item[valueField]} {...state == item[valueField] ? "selected" : ""}
            >
              {item[textField]}
            </option>
          )
        }
      </select>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
      </svg>
    </div>
  )
}