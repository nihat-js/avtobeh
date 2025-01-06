"use server"
import { useState } from 'react'
import { useRouter } from 'next/router'
import prisma from '@/prisma'
import Layout from '@/components/admin/Layout'


export async function getServerSideProps() {
  let usersData = await prisma.user.findMany({
    select: {
      name: true,
      email: true,
      // role : true,
    }
  })
  // console.log(usersData[0])
  // usersData = JSON.parse(usersData)

  // const usersDataWithSerializedDates = usersData.map((user) => ({
  //   ...user,
  //   createdAt: user.createdAt.toISOString(),  // Convert Date to string
  // }))
  return {

    props: { usersData },
  }

}


export default function Users({ usersData }) {


  console.log(usersData)
  // const usersData = await prisma.user.findMany()


  // Sample data for users (you can replace this with real data from an API or database)
  // const usersData = [
  //   { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  //   { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  //   { id: 3, name: 'Sam Wilson', email: 'sam@example.com', role: 'User' },
  //   { id: 4, name: 'Sarah Lee', email: 'sarah@example.com', role: 'Admin' },
  // ]

  // const router = useRouter()

  // Function to handle the click of 'View Details' button
  // const viewUserDetails = (id) => {
  //   router.push(`/admin/users/${id}`)
  // }

  // Function to handle deleting a user
  // const deleteUser = (id) => {
  //   // Normally you'd make an API call to delete the user
  //   alert(`User with ID ${id} deleted`)
  // }

  return (
    <Layout>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Users</h2>

        {/* Table displaying users */}
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full text-left table-auto">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2 space-x-2">
                    {/* View User Button */}
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                      onClick={() => viewUserDetails(user.id)}
                    >
                      View
                    </button>
                    {/* Delete User Button */}
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add User Button */}
        <div className="mt-4">
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
            onClick={() => router.push('/admin/users/add')}
          >
            Add New User
          </button>
        </div>
      </div>
    </Layout>
  )
}

