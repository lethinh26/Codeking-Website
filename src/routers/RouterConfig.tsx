import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePageMain from "../pages/HomePage/HomePageMain";


const router = createBrowserRouter([
    {
        path: "*",
        element: <HomePageMain/>
    }
]);
    
const RouterConfig = () => {
    return <RouterProvider router={router} />;
};

export default RouterConfig;
