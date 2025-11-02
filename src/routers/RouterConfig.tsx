import { createBrowserRouter, RouterProvider } from "react-router";
import HomePageMain from "../pages/HomePage/HomePageMain";
import BlogPage from "../pages/blogpage/BlogPage";
import DetailPage from "../pages/DetailPage/DetailPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePageMain />,
    },
    {
        path: "/blog",
        element: <BlogPage />,
    },
    {
        path: "/detail",
        element: <DetailPage />,
    },
]);
    
const RouterConfig = () => {
    return <RouterProvider router={router} />;
};

export default RouterConfig;
