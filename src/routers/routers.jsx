import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "../pages/index";
import UserProfile from "../pages/index/UserProfile/userProfile";

const routers = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Index/>
        },

        {
            path: "/userProfile",
            element: <UserProfile/>
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default routers