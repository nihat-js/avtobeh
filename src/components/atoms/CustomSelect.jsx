import Image from "next/image";
export default function CustomSelect({ children, data, valueField, textField, state, onChange, placeholder }) {


  return (
    <div class="relative">
      <select onChange={onChange}
        class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border
         border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 
         hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
        <option value="" disabled selected={state === ""}>{placeholder || "Seçin"}</option>
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
      <Image src="/icons/up-down.svg" width={20} height={20} alt="up-down" />
    </div>
  )
}