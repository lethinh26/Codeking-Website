import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../pages/Layout/Layout";
import HomePageMain from "../pages/HomePage/HomePageMain";
import BlogPage from "../pages/blogpage/BlogPage";
import NewsEventPage from "../pages/NewsEventPage/NewsEventPage";

import DetailPage from "../pages/DetailPage/DetailPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePageMain />,
            },
            {
                path: "blog",
                element: <BlogPage />,
            },
            {
                path: "news",
                element: <NewsEventPage />,
            },
        ]
    }
]);
    
const RouterConfig = () => {
    return <RouterProvider router={router} />;
};

export default RouterConfig;
