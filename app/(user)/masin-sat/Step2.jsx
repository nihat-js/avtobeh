import { Select } from "@material-tailwind/react"

export default function Step2({
    setFormData,
}) {
    return (
        <section>
            <h4 className="text-2xl font-semibold text-gray-800 mt-6"> Digər Məlumatlar </h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Select size="md" label="Rəng *"
                    value={formData.color} onChange={(value) => { setFormData({ ...formData, color: value }) }}
                >
                    {
                        carColors.map(color => (
                            <Option key={color.key} value={color.key}>{color.value}</Option>
                        ))
                    }
                </Select>
                <Input label="At gücü (HP)" type="text" name="horsePower" value={formData.horsePower} onChange={handleChange} />
                <Select size="md" label="Silindr sayı" >
                    {
                        cylindersCount.map(c => (
                            <Option key={c} value={c}>{c}</Option>
                        ))
                    }
                </Select>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input label="VIN (Avtomobilin identifikasiya nömrəsi)" type="text" name="vin" value={formData.vin} onChange={handleChange} />
                <Select size="md" label="Oturacaq sayı" >
                    {
                        seatsCount.map(s => (
                            <Option key={s} value={s}>{s}</Option>
                        ))
                    }
                </Select>
            </div>

            <div className="flex flex-row flex-wrap gap-1">
                {
                    fuelTypes.map(fuelType => (
                        <Radio name="fuelType" label={fuelType.value} value={fuelType.key} formData={formData} handleChange={handleChange} />
                    ))
                }
            </div>
        </section>
    )
}