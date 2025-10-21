import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { NavLink } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../Firebase/Firebase.config";

const googleProvider = new GoogleAuthProvider();



const Signin = () => {
  const emailRef = useRef(null);
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

  const handleForgetPassword = (e) => {
    // console.log(e.target.email.value);
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
    .then(() => {
      toast.success("Check your email to reset your password");
    })
    .catch((error) => {
      toast.error("Error sending password reset email: " + error.message);
    });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log("User signed in:", res.user);
        setUser(res.user);
        toast.success("User signed in successfully");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        toast.error("Error signing in: " + error.message);
      });
  };

  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    // toast.success("Sign In functionality is not implemented yet");
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Sign In submitted", { email, password });
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("User signed in:", res.user);
        setUser(res.user);
        toast.success("User signed in successfully");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        toast.error("Error signing in: " + error.message);
      });
  };

  console.log("Current user:", user);
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white shadow-2xl rounded-2xl mt-10 border border-gray-700">
      <h2 className="text-3xl font-bold mb-4 text-center">Sign In</h2>
      {user ? (
        <div className="text-center">
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
        </div>
      ) : (
        <form onSubmit={handleSignIn} className="relative">
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              ref ={emailRef}
              className="w-full border p-2 rounded bg-gray-800 text-white"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              className="w-full border p-2 rounded bg-gray-800 text-white"
              placeholder="Enter your password"
            />
          </div>
          <button
            className="hover:underline cursor-pointer py-2"
            onClick={handleForgetPassword}
            type="button"
          >
            Forget Password?
          </button>
          <button
            onClick={() => setShow(!show)}
            type="submit"
            className="w-full py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 cursor-pointer"
          >
            Sign In
            <span className="absolute right-[8px] top-[120px] cursor-pointer">
              {show ? <FaEye /> : <IoEyeOff />}
            </span>
          </button>
        </form>
      )}
      <div className="mt-4 text-center">
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-2 border border-gray-600 rounded-md hover:bg-gray-800 cursor-pointer"
        >
          Sign in with Google
        </button>
      </div>
      <div className="mt-4 text-center">
        <span>Don't have an account? </span>
        <NavLink to="/signup" className="text-yellow-400 hover:underline">
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Signin;
