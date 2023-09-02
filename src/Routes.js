import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Landing from "./components/Landing/Landing";
import Homepage from "./components/Homepage/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/africare",
    element: <Homepage />
  }
]);

export default router;