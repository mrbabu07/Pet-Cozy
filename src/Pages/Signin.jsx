import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
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
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please enter your email address first");
      return;
    }
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

  const handleSignIn = (e) => {
    e.preventDefault();
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
      
      <form onSubmit={handleSignIn}>
        <div className="mb-4">
          <label className="block text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            ref={emailRef}
            className="w-full border p-2 rounded bg-gray-800 text-white"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-300">Password</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            className="w-full border p-2 rounded bg-gray-800 text-white"
            placeholder="Enter your password"
          />
          <span
            onClick={() => setShow(!show)}
            className="absolute right-[8px] top-[36px] cursor-pointer"
          >
            {show ? <FaEye /> : <IoEyeOff />}
          </span>
        </div>
        <button
          className="hover:underline cursor-pointer py-2 text-left"
          onClick={handleForgetPassword}
          type="button"
        >
          Forget Password?
        </button>
        <button
          type="submit"
          className="w-full py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 cursor-pointer"
        >
          Sign In
        </button>
      </form>

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