// src/Pages/Profile.jsx
import React from "react";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="text-center mt-10 text-xl text-white">
        Loading your profile...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  // ✅ Clean, working fallback image from Postimages.org (no spaces, permanent link)
  const fallbackPhoto = "https://i.postimg.cc/7Zk0qR2v/dog-winter-coat.jpg";

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-2xl mt-10 border border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-center">My Profile</h2>
      <div className="text-center mb-6">
        <img
          src={user?.photoURL || fallbackPhoto}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto border-2 border-gray-600 object-cover"
          onError={(e) => {
            e.target.src = fallbackPhoto; // Fallback if photoURL is broken
          }}
        />
      </div>
      <div className="space-y-3 text-left">
        <p>
          <span className="text-gray-400">Name:</span>{" "}
          <span className="ml-2 font-medium">
            {user?.displayName || "Not set"}
          </span>
        </p>
        <p>
          <span className="text-gray-400">Email:</span>{" "}
          <span className="ml-2 font-medium">{user?.email || "No email"}</span>
        </p>
      </div>
      <button
        onClick={() => alert("Update Profile feature coming soon!")}
        className="w-full mt-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
      >
        Update Profile
      </button>
    </div>
  );
};

export default Profile;