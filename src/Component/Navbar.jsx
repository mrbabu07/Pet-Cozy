import React, { useState } from "react";
import { Gem, UserCircle } from "lucide-react";
import { NavLink } from "react-router";
import MyLink from "./MyLink";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const linkClass =
    "px-3 py-2 text-base font-normal text-white hover:text-yellow-400";

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg border-b border-gray-700 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <Gem className="w-5 h-5 text-white" />
              <span className="text-lg font-medium text-white">
                Simple Brand
              </span>
            </a>
          </div>

          <div className="flex justify-center">
            <div className="flex space-x-6">
              <MyLink to="/" className={linkClass}>
                Home
              </MyLink>
              <MyLink to="/about" className={linkClass}>
                About
              </MyLink>
              <MyLink to="/profile" className={linkClass}>
                Profile
              </MyLink>
            </div>
          </div>

          <div className="flex items-center relative">
            <button
              onClick={() => setDropdown(!dropdown)}
              className="p-1 text-gray-700 hover:text-yellow-400"
            >
              <UserCircle className="w-6 h-6" />
            </button>

            {dropdown && (
              <div className="absolute right-0 mt-50 w-48 bg-gray-900 shadow-2xl rounded-xl p-4 space-y-2 border border-gray-700">
                <NavLink
                  to="/signin"
                  className="block px-3 py-2 hover:bg-gray-700 rounded"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/signup"
                  className="block px-3 py-2 hover:bg-gray-700 rounded"
                >
                  Sign Up
                </NavLink>
                <NavLink
                  to="/signup"
                  className="block px-3 py-2 hover:bg-gray-700 rounded"
                >
                  Sign Up with Google
                </NavLink>
                <button className="w-full text-left px-3 py-2 hover:bg-gray-700 rounded">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
