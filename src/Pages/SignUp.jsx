import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../Firebase/Firebase.config";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const SignUp = () => {
const [show, setShow] = useState(false);


  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Sign Up submitted", { email, password });

    if(password.length < 6){
        toast.error("Password must be at least 6 characters long");
        return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if(!passwordRegex.test(password)){
        toast.error("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character");
        return;
    }


    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("User signed up:", res.user);
        toast.success("User signed up successfully");
      })
      .catch((error) => {
        console.error("Error signing up:", error);
        toast.error("Error signing up: " + error.message);
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white shadow-2xl rounded-2xl mt-10 border border-gray-700">
      <h2 className="text-3xl font-bold mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="mb-4">
          <label className="block text-gray-300">Email</label>
          <input
            type="email"
            name="email"
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
          <span onClick={() => setShow(!show)} className="absolute right-[8px] top-[36px] cursor-pointer">
            {show ? <FaEye /> : <IoEyeOff />}
          </span>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-black font-semibold rounded-md hover:bg-green-400 cursor-pointer"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-4 text-center">
        <button className="w-full py-2 border border-gray-600 rounded-md hover:bg-gray-800">
          Sign up with Google
        </button>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default SignUp;
