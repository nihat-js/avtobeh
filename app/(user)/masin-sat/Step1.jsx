import { engineSize, transmissionType, vehicleTypes, years } from "@/config/data"
import { useGlobalContext } from "@/lib/GlobalContext"
import { Button } from "@material-tailwind/react"
import { Option, Select } from "@material-tailwind/react"
import { useState } from "react"
import {Select as Select2} from "antd"

export default function Step1({ form, setForm, handleBrandChange,
    handleChange,
    models,
    setActiveStep,
}) {

    const { brands } = useGlobalContext()
    const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);

    const [enabledStatus, setEnabledStatus] = useState({
        brand: false,
        model: false,
        year: false,
        bodyType: false,
        engineSize: false,
        transmissionType: false
    })

    function validateNextButton() {
        return form.brand && form.model && form.year && form.bodyType && form.engineSize && form.transmissionType
    }

    return (
        <section>
            <h4 className="text-2xl font-semibold text-gray-800 mb-4"> Ümumi məlumatlar </h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
                <Select2
                    showSearch
                    placeholder="Marka "
                    size="middle"
                    className="w-full"
                    // style={{backgroundColor : "red"}}
                    // onChange={(value) => { handleBrandChange(value) }}
                    // value={
                    allowClear
                    // mode="multiple"
                    // filterOption={(input, option) =>
                    //     (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    // }
                    // filterOption={(input, option) =>
                    //     (typeof option?.label === 'string' && option?.label.toLowerCase().includes(input.toLowerCase()))
                    // }
                    // suffixIcon={<svg fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M620.6 562.3l36.2 36.2L512 743.3 367.2 598.5l36.2-36.2L512 670.9l108.6-108.6zM512 353.1l108.6 108.6 36.2-36.2L512 280.7 367.2 425.5l36.2 36.2L512 353.1z"></path></g></svg>}
                    options={[
                        {
                            label: <span> Populyar </span>,
                            title: 'Populyar',
                            options: [
                                ...brands.filter(brand => brand.groupName == "popular").map(brand => ({
                                    label: brand.name,
                                    value: brand.id,
                                }))
                            ]
                        },
                        {
                            label: <span> Hamısı </span>,
                            title: 'Hamısı',
                            options: [
                                ...brands.filter(brand => brand.groupName == null).map(brand => ({
                                    label: brand.name,
                                    value: brand.id,
                                }))
                            ]
                        }
                    ]}
                    notFoundContent={<span>Nəticə yoxdur</span>} />

                <Select2 size="middle" placeholder="Model  *" disabled={models.length == 0} value={form.model}
                    onChange={(value) => { setForm({ ...form, model: value }) }}

                    options={models.map(model => ({
                        label: model.name,
                        value: model.id,
                    }))}
                />
                <Select size="md" label="İl *" required
                    disabled={!enabledStatus.year}
                    value={form.year} onChange={(value) => { setForm({ ...form, year: value }) }}
                >
                    {
                        years.map(year => (
                            <Option key={year} value={year}>{year}</Option>
                        ))
                    }
                </Select>
                <Select2 size="middle" placeholder="Gövdə tipi *"  
                    options={
                        vehicleTypes.map(vehicleType => ({
                            label: vehicleType.value,
                            value: vehicleType.key,
                        }))
                    } 
                    />

                <Select size="md" label="Mühərrik həcmi *"
                    value={form.engineSize} onChange={(value) => { setForm({ ...form, engineSize: value }) }}
                    disabled={!enabledStatus.engineSize} >
                    {
                        engineSize.map(c => (
                            <Option key={c} value={c} onchange={handleChange} >{c} L</Option>
                        ))
                    }
                </Select>
                <Select2 
                // mode="multiple"
                        placeholder="Sürətlər qutusu"
                        className="w-full"
                        allowClear
                        options={
                            transmissionType.map(t => ({
                                label: t.name,
                                value: t.value
                            }))
                        }
                    />

            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">


                <div className="flex gap-2 items-center">
                    <Button disabled={true}>
                        Geri
                    </Button>
                    <Button onClick={() => setActiveStep(1)} disabled={() => !isNextButtonEnabled()}>
                        İrəli
                    </Button>
                </div>

            </div>
        </section>
    )
}