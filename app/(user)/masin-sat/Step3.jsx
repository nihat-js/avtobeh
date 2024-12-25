export default function Step3({
    formData,
    setFormData,
    handleImageChange,
    uploadedImages,
    removeImage,
    rotateImage,
    handleAddImage,
    handleSubmit,
    handleChange,
    carFeatures
}) {
    return (
        <section>
            <h4 className="text-2xl font-semibold text-gray-800 mt-6"> Özəlliklər </h4>

            <div className="flex flex-row flex-wrap gap-2">
                {
                    carFeatures.map(carFeature => (
                        <Checkbox color="purple" name="carFeature" label={carFeature.value} value={carFeature.key} formData={formData} handleChange={handleChange} />
                    ))
                }
                <Checkbox
                    label={
                        <div>
                            <Typography color="blue-gray" className="font-medium">
                                Təcili
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                Qırmızı işarəylə göstərilir
                            </Typography>
                        </div>
                    }
                    containerProps={{
                        className: "-mt-5",
                    }}
                />
            </div>


            <h4 className="text-2xl font-semibold text-gray-800 mt-6"> Qeyd </h4>
            <Textarea label="Sərfiyyat" value={formData.description} onChange={handleChange} />
            <div>
                <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    label="Təkərlərin vəziyyəti, Salonun veziyyeti, xususi ozellikleri :"
                />
            </div>
            {/* <Price value={formData.price} onChange={handleChange} /> */}
            <div>
            </div>

            <input type="file" id="images" className="hidden" onChange={handleImageChange} />
            <div className="grid grid-cols-5 gap-2">
                {
                    uploadedImages.map((image, index) => (
                        <ImagePreview key={index} image={image} removeImage={() => removeImage(image)} rotateImage={() => rotateImage(image)} />
                    ))
                }
                <div className="w-40 h-40 border-2 border-dashed flex justify-center items-center cursor-pointer rounded-full hover:bg-slate-200 " onClick={handleAddImage}  >
                    <label htmlFor="images" className="block text-lg font-medium text-gray-700 cursor-pointer">
                        <Image src="/icons/photo.svg" width={40} height={40} alt="Add Image" />
                    </label>
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full py-3 px-4 bg-gray-700 text-white font-semibold rounded-lg
     hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Paylaş
                </button>
            </div>
        </section>
    )
}