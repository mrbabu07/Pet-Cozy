import React, { useContext } from "react";
import { Gem, UserCircle } from "lucide-react";
import { Link, NavLink } from "react-router";
import MyLink from "./MyLink";
import { AuthContext } from "../Context/AuthContext";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase/Firebase.config";

const Navbar = () => {

  const {user, setUser} = useContext(AuthContext);
  console.log(user);
  const handleSignout = () => {
      signOut(auth)
        .then(() => {
          toast.success("User signed out successfully");
          setUser(null);
        })
        .catch((error) => {
          toast.error("Error signing out: " + error.message);
        });
    };
  
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


          {
            user ? <div className="text-center">
          <h3 className="text-xl mb-4">
            {user.email} <br />
          </h3>
          <h3 className="text-xl mb-4">
            {user.displayName ? user.displayName : "No Name Available"} <br />
          </h3>

          {/* User Photo Section */}
          <div className="text-center space-y-3 mb-4">
            <img
              src={
                user?.photoURL ||
                "https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
              }
              alt="User"
              className="w-24 h-24 rounded-full mx-auto border border-gray-600"
            />
          </div>

          <button
            onClick={handleSignout}
            className="w-full py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 cursor-pointer"
          >
            Sign Out
          </button>
        </div> : (
          <button className="flex items-center space-x-4">
              <Link to={"/signin"}> </Link>
              
            
              Sign In
            </button>
        )
          }

          <div className="flex items-center space-x-4">
            
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