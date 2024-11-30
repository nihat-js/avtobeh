// pages/sell.tsx
import Layout from '../components/Layout';

const Sell = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Sell Your Car</h1>
        <form className="space-y-6">
          {/* Car Details */}
          <div>
            <label htmlFor="make" className="block text-sm font-medium text-gray-600">
              Make
            </label>
            <input
              id="make"
              type="text"
              placeholder="e.g., Toyota"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="model" className="block text-sm font-medium text-gray-600">
              Model
            </label>
            <input
              id="model"
              type="text"
              placeholder="e.g., Corolla"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="year" className="block text-sm font-medium text-gray-600">
                Year
              </label>
              <input
                id="year"
                type="number"
                placeholder="e.g., 2020"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="price" className="block text-sm font-medium text-gray-600">
                Price ($)
              </label>
              <input
                id="price"
                type="number"
                placeholder="e.g., 15000"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="mileage" className="block text-sm font-medium text-gray-600">
              Mileage (miles)
            </label>
            <input
              id="mileage"
              type="number"
              placeholder="e.g., 50000"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Provide a brief description of your car..."
              rows={4}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Upload Images</label>
            <div className="mt-2 flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-md p-6 text-gray-600 hover:border-blue-500 transition">
              <input type="file" multiple className="hidden" id="file-upload" />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="text-center">
                  <p className="text-sm">Drag and drop or click to upload images</p>
                  <p className="text-xs text-gray-400">JPEG, PNG, up to 5MB each</p>
                </div>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
          >
            List Your Car
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Sell;
