import { carColors, colors, cylindersCount, seatsCount } from "@/src/data/auto"
import { Button } from "@material-tailwind/react"
import { Radio } from "@material-tailwind/react"
// import { Input } from "@material-tailwind/react"
import { Select } from "@material-tailwind/react"

import { Select as Select2, Input } from "antd"
import Image from "next/image"

export default function Step2({
    form,
    handleChange,
    setForm,
    setActiveStep,
}) {
    return (
        <section>
            {/* <h4 className="text-2xl font-semibold text-gray-800 mb-5"> Digər Məlumatlar </h4> */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Select2 size="md" placeholder="Rəng *"
                    onChange={(value) => { setForm({ ...form, color: value }) }}
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

                <Input placeholder="At gücü (HP)" type="number" name="horsePower" onChange={handleChange} />
                <Select2 size="md" placeholder="Silindr sayı"
                    onChange={(value) => { setForm({ ...form, cylinders: value }) }}
                    suffixIcon={
                        <Image src="/icons/arrow-down-up.svg" width={12} height={12} alt="ox" />
                    }
                    options={
                        cylindersCount.map(c => ({
                            value: c,
                            label: c
                        }))
                    }
                />
                <Input placeholder="VIN (Avtomobilin identifikasiya nömrəsi)" type="text" name="vin" onChange={handleChange} />
                <Select2 size="md" placeholder="Oturacaq sayı"
                    options={
                        seatsCount.map(s => ({
                            value: s,
                            label: s
                        }))
                    }
                />

            </div>


            <div className="flex mt-5 gap-3">
                <Button onClick={() => setActiveStep(0)}  >
                    Geri
                </Button>
                <Button onClick={() => setActiveStep(2)} >
                    İrəli
                </Button>
            </div>
        </section >
    )
}