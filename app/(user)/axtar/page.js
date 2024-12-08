import Link from 'next/link';
// import Layout from '../components/Layout';
// import CustomSelect from '@/components/atoms/CustomSelect';
import SidebarFilter from '@/components/browse/SidebarFilter';
import CustomButton from '@/components/atoms/PrimaryButton';
import Image from 'next/image';

const Browse = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-1/4 bg-white p-4 shadow-md rounded-md">
        <SidebarFilter />
      </aside>

      {/* Car Listings */}
      <section className="flex-1">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Available Cars</h2>

        {/* Search Bar */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="#id, Marka,model,  və ya qiymət üzrə axtar"
            className="flex-1 w-full p-4 text-lg border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          <CustomButton> <Image href="/icons/search.svg" width={16} height={16} />  </CustomButton>
          {/* <OutlinedInput/> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Car Card Example */}
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-md overflow-hidden border border-gray-200 group hover:shadow-xl transition duration-300"
            >
              <div className="relative">
                {/* Car Status Badge */}
                <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  For Sale
                </div>
                <img
                  src="https://via.placeholder.com/300"
                  alt="Car Image"
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition duration-200">Toyota Corolla</h3>
                <p className="text-gray-600 text-sm">2020 • 50,000 miles</p>
                <p className="text-blue-500 font-bold text-lg mt-2">$15,000</p>
                <Link
                  href="/cars/1"
                  passHref
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
  );
};

export default Browse;
