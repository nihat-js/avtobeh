import { carColors, colors, cylindersCount, seatsCount } from "@/src/data/auto"
import { Button } from "@material-tailwind/react"
import { Radio } from "@material-tailwind/react"
// import { Input } from "@material-tailwind/react"
import { Select } from "@material-tailwind/react"

import { Select as Select2, Input } from "antd"
import Image from "next/image"

export default function Step2({ form, handleChange, setForm, setActiveStep, }) {

    async function goNextStep() {
        console.log({ form })
        return setActiveStep(2)
        if (
            form.colorId && form.horsePower && form.cylindersCount && form.seatsCount) {
            setActiveStep(2)
        } else {
            alert("Məlumatların tam olması lazımdır")
        }
    }


    return (
        <section>
            {/* <h4 className="text-2xl font-semibold text-gray-800 mb-5"> Digər Məlumatlar </h4> */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Select2 size="md" placeholder="Rəng *"
                    onChange={(value) => { setForm({ ...form, colorId: value }) }}
                    suffixIcon={
                        <Image src="/icons/arrow-down-up.svg" width={12} height={12} alt="ox" />
                    }
                    options={
                        colors.map(color => ({
                            value: color.id,
                            label: color.name
                        }))
                    }
                />

                <Input placeholder="At gücü (HP)" type="number" name="horsePower" onChange={(e) => { setForm({ ...form, horsePower: parseInt(e.target.value) }) }} />
            </div>

            <div className="mt-6 flex items-center ">
                <p className="text-sm text-gray-700 font-semibold mr-6">
                    Silindr sayı
                </p>
                <Select2 size="md" placeholder="Silindr sayı"
                    onChange={(value) => { setForm({ ...form, cylindersCount: value }) }}
                    showSearch
                    filterOption={(input, option) =>
                        (typeof option?.label === 'string' && option?.label.toLowerCase().includes(input.toLowerCase()))
                    }
                    suffixIcon={
                        // <Image src="/icons/arrow-down-up.svg" width={12} height={12} alt="ox" />
                        null
                    }
                    options={
                        cylindersCount.map(c => ({
                            value: c,
                            label: c
                        }))
                    }
                />
            </div>

            <div className="mt-6 flex items-center ">
                <p className="text-sm text-gray-700 font-semibold mr-6">
                    VIN Kod
                </p>
                <Input style={{ width: "150px" }} placeholder="İstəyə uyğun" type="text" name="vin"
                    onChange={(value) => { setForm({ ...form, VIN: value }) }} />
            </div>

            <div className="mt-6 flex items-center ">
                <p className="text-sm text-gray-700 font-semibold mr-6">
                    Oturacaq sayı
                </p>
                <Select2 size="md"
                    // placeholder="Oturacaq sayı"
                    style={{ width: "100px" }}
                    suffixIcon={null}
                    showSearch
                    filterOption={(input, option) =>
                        (typeof option?.label === 'string' && option?.label.toLowerCase().includes(input.toLowerCase()))
                    }
                    onChange={(value) => { setForm({ ...form, seatsCount: value }) }}
                    options={
                        seatsCount.map(s => ({
                            value: s,
                            label: s
                        }))
                    }
                />
            </div>



            <div className="w-full flex justify-between mt-8 gap-5">
                <button onClick={() => setActiveStep(0)}
                    className="group relative overflow-hidden rounded-md bg-secondary px-4 py-2 text-xs font-medium text-green-600 transition-all duration-150 hover:border-green-500 active:scale-95 w-full">
                    <span className="absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t from-green-700 to-green-500 transition-all duration-500 group-hover:h-full"></span>
                    <span className="relative z-10 transition-all duration-500 group-hover:text-white w-full flex justify-center">
                        <div className="flex flex-col items-center">
                            <p>Geri</p>
                        </div>
                    </span>
                </button>

                <button className="group relative overflow-hidden rounded-md bg-secondary px-4 py-2 text-xs font-medium text-blue-600 transition-all duration-150 hover:border-blue-500 active:scale-95 w-full"
                    onClick={goNextStep}
                >
                    <span className="absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t from-blue-700 to-blue-500 transition-all duration-500 group-hover:h-full"></span>
                    <span className="relative z-10 transition-all duration-500 group-hover:text-white w-full flex justify-center">
                        <div className="flex flex-col items-center">
                            <p>İrəli</p>
                        </div>
                    </span>
                </button>
            </div>


        </section >
    )
}