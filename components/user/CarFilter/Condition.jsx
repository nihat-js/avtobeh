export default function Condition() {
    return (
        <div className="">
            <h1 className=" font-semibold text-gray-600 mb-4">Veziyyet </h1>
            <div className="flex flex-row justify-center  items-center gap-2">
                <label className="flex items-center text-gray-700">
                    <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600" />
                    <span className="text-sm">Yeni</span>
                </label>
                <label className="flex items-center text-gray-700">
                    <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600" />
                    <span className="text-sm">Salon</span>
                </label>
                <label className="flex items-center text-gray-700">
                    <input type="checkbox" className="mr-2 h-5 w-5 text-blue-600" />
                    <span className="text-sm">Antikvar</span>
                </label>
            </div>
        </div>
    );
}
