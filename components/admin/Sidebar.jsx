// Sidebar.jsx
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-gray-800 text-white h-screen">
      {/* Sidebar Header */}
      <div className="px-6 py-4 border-b border-gray-700">
        <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
      </div>
      
      {/* Sidebar Links */}
      <div className="flex-1 p-4">
        <ul>
          <li>
            <Link href="/car-brands" className="flex items-center py-2 px-4 rounded-md hover:bg-blue-600">
                <span className="material-icons">car_repair</span>
                <span className="ml-4">Car Brands</span>
            </Link>
          </li>
          <li>
            <Link href="/car-models">
              <p className="flex items-center py-2 px-4 rounded-md hover:bg-blue-600">
                <span className="material-icons">directions_car</span>
                <span className="ml-4">Car Models</span>
              </p>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <p className="flex items-center py-2 px-4 rounded-md hover:bg-blue-600">
                <span className="material-icons">people</span>
                <span className="ml-4">Users</span>
              </p>
            </Link>
          </li>
          <li>
            <Link href="/user-posts">
              <p className="flex items-center py-2 px-4 rounded-md hover:bg-blue-600">
                <span className="material-icons">post_add</span>
                <span className="ml-4">User Posts</span>
              </p>
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <p className="flex items-center py-2 px-4 rounded-md hover:bg-blue-600">
                <span className="material-icons">settings</span>
                <span className="ml-4">Settings</span>
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
