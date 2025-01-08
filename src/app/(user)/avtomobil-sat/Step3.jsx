// import { autoFEatures2, carFeatures } from "@/data/auto";
// import { Textarea } from "@material-tailwind/react";
import Image from "next/image";
import { Checkbox, Input, InputNumber } from "antd";
import { autoFeatures, currencies } from "../../../data/auto";
import { Select } from "antd"
import runes from "runes2";
import ImagePreview from "./components/ImagePreview";
import axios from "axios";
import Draggable from "react-draggable";
import { DndContext } from "@dnd-kit/core";
import { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { Router, useRouter } from "next/router";
import { cities } from "@/src/data/cities";
export default function Step3({ form, setForm, handleChange, activeStep, setActiveStep }) {

    const router = useRouter()

    useEffect(() => {
        console.log({ form })
    }, [form])

    async function handleSubmit() {
        let response = await axios.post("/api/new/auto", form)
        if (response.data.error) {
            alert(response.data.error)
        } else {
            alert(response.data.message)
            // forward to home
            router.push("/")
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
        let images = form.images.filter(image => image != imageUrl)
        setForm({ ...form, images: images })
        let response = await axios.post("/api/remove-image", { imageURL: imageUrl.replace("/temporary-uploads/", "") });
        // console.log(response.data)
        // if (response.data["status"] == "ok") {
        // }
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
        <Select defaultValue="USD" style={{ width: 60 }} value={form.currencyId} onChange={(value) => setForm({ ...form, currencyId: value })} >
            {
                currencies.map(currency => (
                    <Option key={currency.id} value={currency.id}>{currency.name}</Option>
                ))
            }
        </Select>
    );



    return (
        <section>
            <input type="file" id="images" className="hidden" onChange={uploadImage} />


            <Button onClick={() => setActiveStep(1)}>Geri</Button> <br />
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
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
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

            <div className="flex items-center mb-6" >
                <span className="text-gray-500 font-semibold mr-4"> Ad </span>
                <Input
                    value={form.contactName}
                    onChange={(e) => setForm({ ...form, contactName:e.target.value })}
                    style={{ width: '200px' }}
                    // placeholder=""
                    // maxLength={9}
                    // type="number"
                />
            </div>

            <div className="flex items-center mb-6" >
                <span className="text-gray-500 font-semibold mr-4"> Email </span>
                <Input className=""
                    style={{ width: '200px' }}
                    value={form.contactEmail}
                    onChange={(e) => setForm({ ...form, contactEmail: e.target.value })}
                // placeholder=""
                />
            </div>

            <div className="flex items-center mb-6" >
                <span className="text-gray-500 font-semibold mr-4"> Telefon nömrəsi </span>
                <Input
                    value={form.contactPhoneNumber}
                    onChange={(e) => setForm({ ...form, contactPhoneNumber: e.target.value })}
                    style={{ width: '200px' }}
                    // placeholder=""
                    maxLength={9}
                    type="number"
                />
            </div>

            <div className="flex items-center mb-6" >
                <span className="text-gray-500 font-semibold mr-4 "> Şəhər </span>
                <Select defaultValue="add" style={{ width: 200 }} value={form.city} onChange={(value) => setForm({ ...form, cityId: value })}
                    options={cities.map(city => ({
                        value: city.id,
                        label: city.name
                    }))}
                />
            </div>

            <div className="flex items-center mb-6">
                <span className="text-gray-500 font-semibold  mr-4"> Qiymət </span>
                <InputNumber className="w-30" addonAfter={selectAfter} defaultValue={100} value={form.price}
                    onChange={(value) => setForm({ ...form, price: value })}
                />
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