``import { useRouter } from 'next/router'

const UserDetails = () => {
  const router = useRouter()
  const { id } = router.query

  // Sample data for user (replace with actual API call)
  const user = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    phone: '123-456-7890',
    address: '123 Main Street, Cityville',
  }

  // Check if the user exists
  if (!user || user.id !== parseInt(id)) {
    return <p>User not found</p>
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          <div>
            <span className="font-semibold">Name: </span>
            <span>{user.name}</span>
          </div>
          <div>
            <span className="font-semibold">Email: </span>
            <span>{user.email}</span>
          </div>
          <div>
            <span className="font-semibold">Role: </span>
            <span>{user.role}</span>
          </div>
          <div>
            <span className="font-semibold">Phone: </span>
            <span>{user.phone}</span>
          </div>
          <div>
            <span className="font-semibold">Address: </span>
            <span>{user.address}</span>
          </div>
        </div>
        {/* Back Button */}
        <button
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          onClick={() => router.push('/admin/users')}
        >
          Back to Users List
        </button>
      </div>
    </div>
  )
}

export default UserDetails
