import { createBrowserRouter, RouterProvider } from "react-router";
import HomePageMain from "../pages/HomePage/HomePageMain";
import BlogPage from "../pages/blogpage/BlogPage";
import DetailPage from "../pages/DetailPage/DetailPage";
import ContactPage from "../pages/ContactPage/ContactPage";

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
    {   
        path: "/contact",
        element: <ContactPage/>
    },
]);
    
const RouterConfig = () => {
    return <RouterProvider router={router} />;
};

export default RouterConfig;
