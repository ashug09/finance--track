import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("user"));
    setUser({
      name: userInfo?.fullName,
      email: userInfo?.email,
      profilePicture:
        userInfo?.profilePicture ||
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg",
    });
  }, []);
  const handleLogout = () => {
    // Implement logout logic here
    window.location.href = "/login";
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-semibold mb-8">User Profile</h1>
        <div className="mb-8">
          <div className="flex justify-center">
            <img
              src={user.profilePicture}
              alt="Profile"
              className="w-24 h-24 rounded-full mr-4"
            />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                readOnly
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                readOnly
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
