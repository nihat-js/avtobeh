// Header.jsx
const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white p-4 border-b border-gray-200 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Admin Panel</h1>
      </div>

      {/* Right-side Header Items */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            className="border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <span className="material-icons">search</span>
          </span>
        </div>

        {/* Notifications Icon */}
        <div className="relative">
          <button className="p-2 rounded-full hover:bg-gray-200">
            <span className="material-icons">notifications</span>
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-800">Admin</span>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <span className="material-icons">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
