import { useState } from 'react'
import { useRouter } from 'next/router'
import Sidebar from '../../components/admin/Sidebar'
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const router = useRouter()

  // Handle menu item click to navigate to other pages
  const handleMenuClick = (route) => {
    router.push(`/admin${route}`)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 ml-0 lg:ml-64 p-6">
        <div className="flex justify-between items-center">
          {/* Toggle Button for Sidebar */}
          <button
            className="text-gray-500 lg:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>

        {/* Dashboard Content */}
        <div className="mt-6 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to the Admin Panel</h2>
          <p>
            Here, you can manage car brands, car models, user posts, and users.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
