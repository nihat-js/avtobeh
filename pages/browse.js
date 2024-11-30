import Link from 'next/link';
import Layout from '../components/Layout';

const Browse = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/4 bg-white p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Filters</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="make" className="block text-sm font-medium text-gray-600">
                Make
              </label>
              <select
                id="make"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All</option>
                <option value="toyota">Toyota</option>
                <option value="honda">Honda</option>
                <option value="bmw">BMW</option>
              </select>
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
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-600">
                Year
              </label>
              <select
                id="year"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-600">
                Price Range
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
            >
              Apply Filters
            </button>
          </form>
        </aside>

        {/* Car Listings */}
        <section className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Available Cars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Car Card Example */}
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md overflow-hidden border border-gray-200"
              >
                <img
                  src="https://via.placeholder.com/300"
                  alt="Car Image"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">Toyota Corolla</h3>
                  <p className="text-gray-600 text-sm">2020 • 50,000 miles</p>
                  <p className="text-blue-500 font-bold text-lg mt-2">$15,000</p>
                  <Link href="/cars/1" passHref
                    className="mt-4 w-full py-2 px-4 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Browse;
