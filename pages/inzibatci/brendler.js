import Layout from '@/components/admin/Layout'
import { useState } from 'react'
import { useRouter } from 'next/router'
import prisma from '@/prisma'

const CarBrands = ({ carBrands }) => {
  const router = useRouter()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [newBrand, setNewBrand] = useState('')

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  // Handle the input field for new brand
  const handleBrandChange = (e) => {
    setNewBrand(e.target.value)
  }

  // Add car brand to the database
  const addCarBrand = async () => {
    if (newBrand.trim()) {
      try {
        const res = await prisma.carBrand.create({
          data: {
            name: newBrand,
          },
        })

        if (res) {
          setNewBrand('')
          setIsModalVisible(false)  // Close modal on success
          router.replace(router.asPath)  // Re-fetch page to update the list
        } else {
          alert('Error adding brand')
        }
      } catch (err) {
        console.error(err)
        alert('Error adding brand')
      }
    } else {
      alert('Brand name cannot be empty')
    }
  }

  // Delete car brand from the database
  const deleteCarBrand = async (id) => {
    try {
      await prisma.carBrand.delete({
        where: { id },
      })
      router.replace(router.asPath)  // Re-fetch page to update the list
    } catch (err) {
      console.error(err)
      alert('Error deleting brand')
    }
  }

  return (
    <Layout>
      <div className="p-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Manage Car Brands</h2>
        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none"
            onClick={toggleModal}
          >
            <span className="text-xl">+</span> Add Car Brand
          </button>
        </div>

        {/* Car Brands Table */}
        <div className="overflow-x-auto mt-4 bg-white shadow rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Brand Name</th>
                <th className="px-6 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {carBrands.map((brand) => (
                <tr key={brand.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-800">{brand.name}</td>
                  <td className="px-6 py-4">
                    <button
                      className="text-blue-500 hover:text-blue-700 mx-2"
                      onClick={() => router.push(`/admin/car-brands/edit/${brand.id}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => deleteCarBrand(brand.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Adding Car Brand */}
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-xl font-bold mb-4">Add New Car Brand</h3>
            <input
              type="text"
              value={newBrand}
              onChange={handleBrandChange}
              className="border p-2 rounded-md w-full mb-4"
              placeholder="Enter new car brand name"
            />
            <div className="flex justify-between">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={addCarBrand}
              >
                Add Brand
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                onClick={toggleModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

// Fetch car brands data using Prisma in getServerSideProps
export async function getServerSideProps() {
  // Fetch car brands from the database
  const carBrands = await prisma.carBrand.findMany()

  return {
    props: {
      carBrands, // Passing car brands data to the component
    }
  }
}

export default CarBrands
