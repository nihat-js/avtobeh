"use client"
export default function ImagePreview({ image, removeImage }) {
    // console.log({ image })
    return (
        <div
            className="w-40 h-40 border-2 border-dashed cursor-pointer flex justify-center items-center relative rounded-md"
        >
            <div className="w-full h-full flex justify-center items-center relative">
                <img
                    src={image}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-lg"
                />
                <button
                    onClick={removeImage}
                    className="absolute top-2 right-1 w-6 h-6 text-white bg-red-500 hover:bg-red-600 rounded-full p-2 flex justify-center items-center"
                >
                    &times;
                </button>
            </div>

        </div>
    )

}