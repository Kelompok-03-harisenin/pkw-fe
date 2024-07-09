import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/index/homepage";

const routers = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage/>
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default routers