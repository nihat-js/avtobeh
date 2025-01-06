import Image from "next/image";

export default function FeaturedBrands({ brands }) {

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Ən çox istifadə olunan markalar
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Loop through the brands array and render each image */}
          {brands.map((brand, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={brand.src}  // Image source
                alt={brand.name}  // Alt text for accessibility
                width={100}  // Set the width of the image
                height={100} // Set the height of the image
                className="w-24 h-24 object-contain" // Tailwind CSS for image styling
              />
              <span className="mt-4 text-lg text-gray-700">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}