import { autoBodyStyles, autoEngineSizes, fuelTypes, mileageUnits, transmissionType, transmissionTypes, wheelDriveType, wheelDriveTypes, years } from "@/src/data/auto"
import { useGlobalContext } from "@/src/lib/GlobalContext"
import { Button } from "@material-tailwind/react"
import { Option, Select } from "@material-tailwind/react"
import { useState } from "react"
import { InputNumber, Select as Select2 } from "antd"
import axios from "axios"
import Image from "next/image"

export default function Step1({ form, setForm, setActiveStep }) {

	const [models, setModels] = useState([])
	const { brands } = useGlobalContext()

	async function onBrandChange(value) {
		if (!value) {
			setForm({ ...form, brandId: null })
		}
		setForm({ ...form, brandId: value })
		let res = await axios.post(`/api/auto-models/${value}`)
		setModels(res.data.data)
	}

	async function goNextStep() {
		console.log({ form })
		return setActiveStep(1)
		if (
			form.brandId && form.modelId && form.year && form.bodyStyleId && form.engineSize && form.transmissionTypeId && form.wheelDriveTypeId
			&& form.mileage && form.mileageUnitId) {
			setActiveStep(1)
		} else {
			alert("Məlumatların tam olması lazımdır")
		}
	}

	const mileageAddonAfter = <Select2 size="middle"
		value={form.mileageUnitId}
		style={{ width: "100px" }}
		className="rounded-full"
		// suffixIcon={
		// 	<Image src="/icons/arrow-down-up.svg" width={12} height={12} alt="ox" />
		// }
		onChange={(value) => { setForm({ ...form, mileageUnitId: value }) }}
		options={mileageUnits.map(m => ({
			label: m.name,
			value: m.id,
		}))}
	/>


	return (
		<section>

			{/* <h4 className="text-2xl font-semibold text-gray-800 mb-4"> Ümumi məlumatlar </h4> */}
			<div className="grid sm:grid-cols-3 md:grid-cols-3 gap-6">
				<Select2
					value={form.brandId}
					showSearch
					placeholder="Marka "
					size="middle"
					className="w-full"
					onChange={onBrandChange}
					allowClear
					filterOption={(input, option) =>
						(typeof option?.label === 'string' && option?.label.toLowerCase().includes(input.toLowerCase()))
					}
					suffixIcon={
						<Image src="/icons/arrow-down-up.svg" width={12} height={12} alt="ox" />
					}
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
					notFoundContent={<span>Nəticə yoxdur</span>}
				/>

				<Select2 size="middle" placeholder="Model  *"
					value={form.modelId}
					disabled={models.length == 0}
					allowClear
					showSearch
					filterOption={(input, option) =>
						(typeof option?.label === 'string' && option?.label.toLowerCase().includes(input.toLowerCase()))
					}
					// loading={componentsState.model == "loading"}
					onChange={(value) => { setForm({ ...form, modelId: value }) }}
					suffixIcon={
						<Image src="/icons/arrow-down-up.svg" width={12} height={12} alt="ox" />
					}
					options={models.map(model => ({
						label: model.name,
						value: model.id,
					}))}
				/>

				<InputNumber value={form.year} placeholder="İli * (məsələn: 2020)" onChange={(value) => { setForm({ ...form, year: value }) }}
					style={{ width: '100%' }}
					min={1960} max={2025} />
				<Select2 size="middle" placeholder="BAN (Kuza növü) *"
					showSearch
					filterOption={(input, option) =>
						(typeof option?.label === 'string' && option?.label.toLowerCase().includes(input.toLowerCase()))
					}
					suffixIcon={
						// <Image src="/icons/arrow-down-up.svg" width={12} height={12} alt="ox" />
						null
					}
					value={form.bodyStyleId}
					onChange={(value) => { setForm({ ...form, bodyStyleId: value }) }}
					options={
						autoBodyStyles.map(type => ({
							label: type.name,
							value: type.id,
						}))
					}
				/>

				<Select2 size="middle" placeholder="Mühərrik həcmi *" value={form.engineSize}
					onChange={(value) => { setForm({ ...form, engineSize: value }) }}
					options={
						autoEngineSizes.map(c => ({
							label: `${c} L`,
							value: c,
						}))
					}
				/>
				<Select2
					showSearch
					size="middle" placeholder="Sürətlər qutusu"
					filterOption={(input, option) =>
						(typeof option?.label === 'string' && option?.label.toLowerCase().includes(input.toLowerCase()))
					}
					onChange={(value) => { setForm({ ...form, transmissionTypeId: value }) }}
					value={form.transmissionTypeId}
					className="w-full"
					// suffixIcon={
					// 	<Image src="/icons/arrow-down-up.svg" width={12} height={12} alt="ox" />
					// }
					suffixIcon={null}
					options={
						transmissionTypes.map(t => ({
							label: t.name,
							value: t.id
						}))
					}
				/>


				<Select2 size="middle" placeholder="Yanacaq tipi"
					value={form.fuelTypeId}
					showSearch
					filterOption={(input, option) =>
						(typeof option?.label === 'string' && option?.label.toLowerCase().includes(input.toLowerCase()))
					}
					// suffixIcon={
					// 	<Image src="/icons/arrow-down-up.svg" width={12} height={12} alt="ox" />
					// }
					suffixIcon={null}
					onChange={(value) => { setForm({ ...form, fuelTypeId: value }) }}
					options={
						fuelTypes.map(f => ({
							label: f.name,
							value: f.id
						}))
					}
				/>
				<Select2 size="middle" placeholder="Ötürücü"
					suffixIcon={null}
					// suffixIcon={
					// 	<Image src="/icons/arrow-down-up.svg" width={12} height={12} alt="ox" />
					// }
					value={form.wheelDriveTypeId}
					onChange={(value) => { setForm({ ...form, wheelDriveTypeId: value }) }}
					options={wheelDriveTypes.map(w => ({
						value: w.id,
						label: w.name,
					}))}
				/>


			</div>


			<div className="mt-6 flex items-center ">
				<p className="text-sm text-gray-700 font-semibold mr-6">
					Yürüyüş
				</p>
				<InputNumber placeholder="Yürüyüş " value={form.mileage} onChange={(value) => { setForm({ ...form, mileage: value }) }}
					// style={{ width: '100%' }}
					addonAfter={mileageAddonAfter}
					min={0} />

			</div>


			{/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4"> */}
			<div className="flex gap-2 items-center">
				{/* <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 hover:bg-green-500">
						Next
					</button> */}
				<div className="w-full flex justify-between mt-8 gap-5">
					<button disabled
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



				{/* <Button color="red" disabled={true}>
						Geri
					</Button>
					<Button onClick={goNextStep} >
						İrəli
					</Button> */}
			</div>

			{/* </div> */}
		</section >
	)
}