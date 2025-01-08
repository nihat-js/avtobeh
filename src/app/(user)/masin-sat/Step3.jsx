// import { autoFEatures2, carFeatures } from "@/data/auto";
// import { Textarea } from "@material-tailwind/react";
import Image from "next/image";
import { Checkbox, Input, InputNumber } from "antd";
import { autoFeatures } from "../../../data/auto";
import { Select } from "antd"
import runes from "runes2";
import ImagePreview from "./components/ImagePreview";
import axios from "axios";
import Draggable from "react-draggable";
import { DndContext } from "@dnd-kit/core";
export default function Step3({ form, setForm, handleChange, }) {

    async function handleSubmit() {
        let response = await axios.post("/api/create-ad", form)
        if (response.data.error){
            alert(response.data.error)
        }else {
            alert(response.data.message)
        }

        console.log(response.data)
    }

    async function uploadImage(event) {
        const file = event.target.files[0];
        if (!file) return;
        const formData = new FormData();
        formData.append("image", file);


        if (file.size > 3 * 1024 * 1024) {
            return alert("Fayl ölçüsü 3MB-dan böyük olmamalıdır.");
        }

        let response = await axios.post("/api/upload-image", formData);

        if (response.data["status"] == "ok") {
            setForm({ ...form, images: [...form.images, response.data["imageName"]] })
        }

    };

    async function removeImage(imageUrl) {
        let response = await axios.post("/api/remove-image", { imageURL: imageUrl.replace("/temporary-uploads/", "") });
        // console.log(response.data)
        if (response.data["status"] == "ok") {
            images = form.images.filter(image => image != imageUrl)
            setForm({ ...form, images: images })
        }
    }

    async function rotateImage(imageUrl) {
        // console.log({imageUrl})
        let response = await axios.post("/api/rotate-image", { imageURL: imageUrl.replace("/temporary-uploads/", "") });
        // console.log(response.data)
        if (response.data["status"] == "ok") {
            setUploadedImages(uploadedImages.map(image => image == imageUrl ? response.data["imageURL"] : image))
        }
    }

    function onClickAddImage() {
        // const input = document.getElementById(inputs[uploadedImageCount]);
        const input = document.querySelector(`input[type="file"]`)
        input.click();
    }


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
            <input type="file" id="images" className="hidden" onChange={uploadImage} />


            <div className="flex flex-row flex-wrap gap-2">
                {
                    autoFeatures.map(f => (
                        <Checkbox key={f.id} name="carFeature" value={f.id} form={form} handleChange={handleChange} >
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
                {/* <Draggable> */}
                    {
                        form.images.map((image, index) => (
                            <ImagePreview key={index} image={"/temporary-uploads/" + image}
                                removeImage={() => removeImage(image)} rotateImage={() => rotateImage(image)} />
                        ))
                    }
                {/* </Draggable> */}
                <div
                    className="p-10 border-2 border-dashed border-indigo-500 flex justify-center items-center cursor-pointer rounded-lg transition-transform duration-300 ease-in-out hover:bg-slate-300 hover:scale-105"
                    onClick={onClickAddImage}
                >
                    <span className="text-4xl">➕</span>
                </div>
            </div>
            <div className="flex gap-2 mb-4" >
                <span className="text-gray-600"> Telefon nömrəsi </span>
                <Input
                    style={{ width: '200px' }}
                    // placeholder=""
                    maxLength={9}
                    type="number"
                />
            </div>
            <div className="flex gap-2 mb-8">
                <span className="text-gray-600"> Qiymət </span>
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