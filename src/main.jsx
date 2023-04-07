import React from "react";
import ReactDOM from "react-dom/client";
import { BeakerIcon } from '@heroicons/react/24/solid'
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Books from "./Books";
import Headers from "./Headers";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,                
      },
      {
        path: "Header",
        element: <Headers></Headers>
        
      },
      {
        path: "Books",
        element: <Books></Books>,
        loader: ()=> fetch ('https://api.itbook.store/1.0/new')
      },
      {
        path: "About",
        element: <About></About>
      },
      {
        path: "Login",
        element: <Login></Login>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <RouterProvider router={router} />
);
