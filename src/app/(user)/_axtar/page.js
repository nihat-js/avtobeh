import Link from 'next/link';
// import Layout from '../components/Layout';
// import CustomSelect from '@/components/atoms/CustomSelect';
// import SidebarFilter from '@/components/browse/SidebarFilter';
import CustomButton from '@/components/atoms/PrimaryButton';
import Image from 'next/image';
import CarCard from '@/components/common/CarCard';
import Ad from '@/src/database/sequelize/models/Ad';


const Browse = async () => {

  let cars = await prisma.car.findMany();

  let autos = await Ad.findAll({where : { categoryId : 1 } })
  // })
  // console.log(autos)

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-1/4 bg-white p-4 shadow-md rounded-md">
        {/* <SidebarFilter /> */}
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
          {
            cars.map((car, index) => (
              <CarCard key={index} car={car} />
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default Browse;
