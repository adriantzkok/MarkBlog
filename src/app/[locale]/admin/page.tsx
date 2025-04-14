import React from "react";

const DashboardPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100">
      {/* Navigation Bar */}
      <nav className="h-16 bg-white shadow-md flex items-center px-6">
        <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-6">
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="text-gray-700 font-medium hover:text-blue-500 transition"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 font-medium hover:text-blue-500 transition"
              >
                Users
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 font-medium hover:text-blue-500 transition"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 font-medium hover:text-blue-500 transition"
              >
                Logout
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Welcome, Admin!
          </h2>

          {/* Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800">Total Users</h3>
              <p className="text-2xl font-bold text-blue-500 mt-4">1,234</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800">
                Active Sessions
              </h3>
              <p className="text-2xl font-bold text-green-500 mt-4">567</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800">Pending Tasks</h3>
              <p className="text-2xl font-bold text-red-500 mt-4">42</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Recent Activity
            </h3>
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-700">
                  <span className="font-bold">John Doe</span> updated their
                  profile.
                </p>
                <p className="text-sm text-gray-500">5 minutes ago</p>
              </li>
              <li className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-700">
                  <span className="font-bold">Jane Smith</span> added a new
                  post.
                </p>
                <p className="text-sm text-gray-500">10 minutes ago</p>
              </li>
              <li className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-700">
                  <span className="font-bold">Admin</span> updated site
                  settings.
                </p>
                <p className="text-sm text-gray-500">30 minutes ago</p>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
