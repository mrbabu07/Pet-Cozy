// src/Routes/Route.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../Pages/Homepage";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import Signin from "../Pages/Signin";
import SignUp from "../Pages/SignUp";
import ProtectedRoute from "../Routes/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/about", element: <About /> },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="text-white p-10 text-center text-xl">
        404 - Page Not Found
      </div>
    ),
  },
]);
