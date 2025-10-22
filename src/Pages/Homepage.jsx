// src/Pages/Homepage.jsx
import React from "react";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext"; // ✅ Use default import (recommended)

const Homepage = () => {
  const { user, loading } = useContext(AuthContext);

  // Optional: Handle loading state gracefully
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto text-center py-10">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome to Simple Brand
        </h1>
        <p className="text-gray-300">
          {user
            ? `Hello, ${
                user.displayName || user.email || "User"
              }! You're all set.`
            : "Sign in or sign up to get started."}
        </p>
      </div>

      {/* ✅ Extra Section: Quick Actions */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
            <h3 className="font-medium text-yellow-400">View Profile</h3>
            <p className="text-gray-400 text-sm mt-1">
              Manage your personal info and photo
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
            <h3 className="font-medium text-yellow-400">Security</h3>
            <p className="text-gray-400 text-sm mt-1">
              Change password or enable 2FA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
