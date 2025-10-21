import React from "react";
import { Gem, UserCircle } from "lucide-react";
import { NavLink } from "react-router";
import MyLink from "./MyLink";

const Navbar = () => {
  const linkClass =
    "px-3 py-2 text-base font-normal text-white hover:text-yellow-400";

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg border-b border-gray-700">
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

          <div className="flex items-center space-x-4">
            <NavLink
              to="/signin"
              className="px-4 py-2 text-white hover:text-yellow-400 transition-colors"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className="px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors font-medium"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;