import { engineSize, transmissionType, vehicleTypes, years } from "@/config/data"
import { useGlobalContext } from "@/lib/GlobalContext"
import { Button } from "@material-tailwind/react"
import { Option, Select } from "@material-tailwind/react"
import { useState } from "react"

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
                <Select size="md" label="Marka  *" value={form.brand} onChange={handleBrandChange} >
                    {
                        brands.map(brand => (
                            <Option key={brand.id} value={brand.id}>{brand.name}</Option>
                        ))
                    }
                </Select>
                <Select size="md" label="Model  *" disabled={models.length == 0} value={form.model}
                    onChange={(value) => { setForm({ ...form, model: value }) }}
                >
                    {
                        models.map(model => (
                            <Option key={model.id} value={model.id}>{model.name}</Option>
                        ))
                    }
                </Select>
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
                <Select size="md" label="Gövdə tipi *" required disabled={!enabledStatus.bodyType}
                    value={form.bodyType}
                    onChange={(value) => { setForm({ ...form, bodyType: value }) }}>

                    {
                        vehicleTypes.map(vehicleType => (
                            <Option key={vehicleType.key} value={vehicleType.key}>{vehicleType.value}</Option>
                        ))
                    }
                </Select>
                <Select size="md" label="Mühərrik həcmi *"
                    value={form.engineSize} onChange={(value) => { setForm({ ...form, engineSize: value }) }}
                    disabled={!enabledStatus.engineSize} >
                    {
                        engineSize.map(c => (
                            <Option key={c} value={c} onchange={handleChange} >{c} L</Option>
                        ))
                    }
                </Select>
                <Select size="md" label="Sürətlər qutusu *"
                    value={form.transmissionType} onChange={(value) => { setForm({ ...form, transmissionType: value }) }}
                    disabled={!enabledStatus.transmissionType} >
                    {
                        transmissionType.map(t => (
                            <Option key={t.key} value={t.key} onchange={handleChange} >{t.value} </Option>
                        ))
                    }
                </Select>

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