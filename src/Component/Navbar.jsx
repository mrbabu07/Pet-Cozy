// src/components/Navbar.jsx
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { toast } from "react-toastify";
import { PawPrint, LogOut } from "lucide-react";

const Navbar = () => {
  const { user, loading } = useContext(AuthContext);

  const handleSignout = () => {
    signOut(auth)
      .then(() => toast.success("You've been signed out. See you soon!"))
      .catch((error) => toast.error("Sign-out failed: " + error.message));
  };

  const navLinkClass =
    "px-3 py-2 text-white hover:text-yellow-400 font-medium transition";

  if (loading) return <div className="h-16 bg-gray-900"></div>;

  return (
    <nav className="bg-gray-900 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <PawPrint className="w-6 h-6 text-yellow-400" />
            <span className="text-xl font-bold text-white">PetWinterCare</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              All Services
            </NavLink>
            {user && (
              <NavLink to="/profile" className={navLinkClass}>
                My Profile
              </NavLink>
            )}
          </div>

          {/* Right Side: Auth Area */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                {/* Avatar with Hover Tooltip */}
                <div className="relative group">
                  <img
                    src={
                      user.photoURL ||
                      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    alt="Avatar"
                    className="w-10 h-10 rounded-full border-2 border-yellow-500 cursor-pointer hover:scale-105 transition"
                  />
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:flex bg-gray-800 text-white text-xs rounded py-1 px-3 shadow-lg z-10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {user.displayName || user.email}
                  </div>
                </div>

                {/* Logout Button */}
                <button
                  onClick={handleSignout}
                  className="flex items-center space-x-1 px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-500 transition"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Link
                  to="/signin"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded hover:bg-yellow-500 hover:text-gray-900 transition"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
