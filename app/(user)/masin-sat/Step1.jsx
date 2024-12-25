import { Select } from "@material-tailwind/react"

export default function Step1({ formData, setFormData, handleBrandChange,
    handleChange,
    brands, models, years, vehicleTypes,
    engineSize, transmissionType }) {
    return (
        <section>
            <h4 className="text-2xl font-semibold text-gray-800 mb-4"> Ümumi məlumatlar </h4>
            <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-6">
                <Select size="md" label="Marka seçin *" value={formData.brand} onChange={handleBrandChange} >
                    {
                        brands.map(brand => (
                            <Option key={brand.id} value={brand.id}>{brand.name}</Option>
                        ))
                    }
                </Select>
                <Select size="md" label="Model seçin *" disabled={models.length == 0} value={formData.model}
                    onChange={(value) => { setFormData({ ...formData, model: value }) }} >
                    {
                        models.map(model => (
                            <Option key={model.id} value={model.id}>{model.name}</Option>
                        ))
                    }
                </Select>
                <Select size="md" label="Ilini seçin *" required
                    value={formData.year} onChange={(value) => { setFormData({ ...formData, year: value }) }}
                >
                    {
                        years.map(year => (
                            <Option key={year} value={year}>{year}</Option>
                        ))
                    }
                </Select>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

                <Select size="md" label="Gövdə tipi *"
                    value={formData.bodyType} onChange={(value) => { setFormData({ ...formData, bodyType: value }) }}
                >

                    {
                        vehicleTypes.map(vehicleType => (
                            <Option key={vehicleType.key} value={vehicleType.key}>{vehicleType.value}</Option>
                        ))
                    }
                </Select>
                <Select size="md" label="Mühərrik həcmi *"
                    value={formData.engineSize} onChange={(value) => { setFormData({ ...formData, engineSize: value }) }}

                >
                    {
                        engineSize.map(c => (
                            <Option key={c} value={c} onchange={handleChange} >{c} L</Option>
                        ))
                    }
                </Select>
                <Select size="md" label="Sürətlər qutusu *"
                    value={formData.transmissionType} onChange={(value) => { setFormData({ ...formData, transmissionType: value }) }}

                >
                    {
                        transmissionType.map(t => (
                            <Option key={t.key} value={t.key} onchange={handleChange} >{t.value} </Option>
                        ))
                    }
                </Select>

            </div>
        </section>
    )
}