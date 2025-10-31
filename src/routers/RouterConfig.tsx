import { createBrowserRouter, RouterProvider } from "react-router";
import HomePageMain from "../pages/HomePage/HomePageMain";
import BlogPage from "../pages/blogpage/BlogPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePageMain />,
    },
    {
        path: "/blog",
        element: <BlogPage />,
    }
]);
    
const RouterConfig = () => {
    return <RouterProvider router={router} />;
};

export default RouterConfig;
