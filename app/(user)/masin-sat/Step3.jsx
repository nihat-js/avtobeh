// import { autoFEatures2, carFeatures } from "@/data/auto";
// import { Textarea } from "@material-tailwind/react";
import Image from "next/image";
import { Checkbox, Input, InputNumber } from "antd";
import { autoFeatures } from "../../../data/auto";
import { Select } from "antd"
import runes from "runes2";
export default function Step3({
    form,
    setForm,
    handleImageChange,
    uploadedImages,
    removeImage,
    rotateImage,
    handleAddImage,
    handleSubmit,
    handleChange,
}) {


    const selectBefore = (
        <Select defaultValue="add" style={{ width: 60 }}>
            <Option value="add">+</Option>
            <Option value="minus">-</Option>
        </Select>
    );
    const selectAfter = (
        <Select defaultValue="USD" style={{ width: 60 }}>
            <Option value="USD">$</Option>
            <Option value="EUR">€</Option>
            <Option value="GBP">£</Option>
            <Option value="CNY">¥</Option>
        </Select>
    );



    return (
        <section>
            <input type="file" id="images" className="hidden" onChange={handleImageChange} />


            <div className="flex flex-row flex-wrap gap-2">
                {
                    autoFeatures.map(f => (
                        <Checkbox name="carFeature" value={f.id} form={form} handleChange={handleChange} >
                            {f.name}
                        </Checkbox>
                    ))
                }

            </div>


            <div className="mt-6">
                <Input.TextArea
                    allowClear
                    count={{
                        show: true,
                        max: 250,
                        strategy: (txt) => runes(txt).length,
                        exceedFormatter: (txt, { max }) => runes(txt).slice(0, max).join(''),

                    }}
                    onChange={(value) => setForm({ ...form, description: value })}
                    rows="4"
                    placeholder="Sərfiyyat, Təkərlərin vəziyyəti, Salonun veziyyeti, xüsusiyyətlər :"
                />
            </div>

            <div className="grid grid-cols-5 gap-2 mt-10 mb-8 ">
                {
                    uploadedImages.map((image, index) => (
                        <ImagePreview key={index} image={image} removeImage={() => removeImage(image)} rotateImage={() => rotateImage(image)} />
                    ))
                }
                <div className="w-32 h-32 border-2 border-dashed flex justify-center items-center cursor-pointer rounded-lg hover:bg-slate-200 " onClick={handleAddImage}  >
                    <label htmlFor="images" className="block text-lg font-medium text-gray-700 cursor-pointer">
                        <Image src="/icons/photo.svg" width={40} height={40} alt="Add Image" />
                    </label>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '8px' }}>+994</span>
                <Input
                    style={{ width: '200px' }}
                    placeholder="Phone number"
                    maxLength={9}
                    type="number"
                />
            </div>
            <div>
                <InputNumber className="w-30" addonAfter={selectAfter} defaultValue={100} />
            </div>
            <div>
                <button
                    className="bg-white w-full border border-indigo-600 text-indigo-600 font-medium py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-indigo-600 hover:text-white"
                    onClick={handleSubmit}
                >
                    Paylaş
                </button>
            </div>




        </section>
    )
}