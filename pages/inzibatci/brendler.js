import Layout from '@/components/admin/Layout'
import { useState } from 'react'
import { useRouter } from 'next/router'
import prisma from '@/prisma'
import BoringInput from '@/components/atoms/BoringInput'
import PrimaryButton from '@/components/atoms/PrimaryButton'
import Modal from '@/components/common/Modal'


// Fetch car brands data using Prisma in getServerSideProps
export async function getServerSideProps() {
  // Fetch car brands from the database
  const carBrands = await prisma.vehicleBrand.findMany()

  return {
    props: {
      carBrands, // Passing car brands data to the component
    }
  }
}

const CarBrands = ({ carBrands }) => {
  const router = useRouter()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [newBrand, setNewBrand] = useState('')

  const [addFormData, setAddFormData] = useState({

    name: "",
    logo: "",
    is_visible: true

  })

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
      <div className="p-5 bg-gray-50">
        <h2 className="text-3xl font-bold  text-gray-800">Brendləri idarə et</h2>
        <div className="flex justify-end mb-4 mr-10">
          <PrimaryButton onClick={toggleModal}> + </PrimaryButton>
        </div>

        {/* Car Brands Table */}
        <div className="overflow-x-auto mt-4 bg-white shadow rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-amber-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Id</th>
                <th className="px-6 py-3 text-left font-semibold">Ad</th>
                <th className="px-6 py-3 text-left font-semibold">Logo</th>
                <th className="px-6 py-3 text-left font-semibold">Aktivdir ?</th>

                <th className="px-6 py-3 text-left font-semibold">Əməliyyatlar</th>
              </tr>
            </thead>
            <tbody>
              {carBrands.map((brand) => (
                <tr key={brand.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-800">{brand.id}</td>
                  <td className="px-6 py-4 text-gray-800">{brand.name}</td>
                  <td className="px-6 py-4 text-gray-800">{brand.logo}</td>
                  <td className="px-6 py-4 text-gray-800">{brand.is_visible}</td>

                  <td className="px-6 py-4">
                    <button
                      className="text-blue-500 hover:text-blue-700 mx-2"
                      onClick={() => router.push(`/admin/car-brands/edit/${brand.id}`)}
                    >
                      Redaktə
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => deleteCarBrand(brand.id)}
                    >
                      Sil
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

        <Modal isOpen={isModalVisible} onClose={ ()=>toggleModal() }>
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-xl font-bold mb-4">Add New Car Brand</h3>

            <BoringInput
              type="text"
              value={newBrand}
              onChange={handleBrandChange}
              placeholder="Marka adını daxil edin"
            />

            <BoringInput
              type="text"
              value={newBrand}
              onChange={handleBrandChange}
              className="border p-2 rounded-md w-full mb-4"
              placeholder="Logo URL"
            />

            <div className="flex justify-between">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                onClick={toggleModal}
              >
                Ləğv
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={addCarBrand}
              >
                Əlavə et
              </button>
            </div>
          </div>
        </Modal>

      )}
    </Layout>
  )
}



export default CarBrands
