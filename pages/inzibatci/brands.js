import { useRouter } from 'next/router'

const CarBrands = () => {
  const router = useRouter()

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Car Brands</h2>
      <p>This is the page to manage car brands.</p>
      <button
        className="mt-4 text-blue-500"
        onClick={() => router.push('/admin/dashboard')}
      >
        Go back to Dashboard
      </button>
    </div>
  )
}

export default CarBrands
