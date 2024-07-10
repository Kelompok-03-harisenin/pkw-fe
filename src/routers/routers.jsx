import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/index/homepage";
import moreCategory from "../pages/moreCategory/moreCategory.jsx"
const routers = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage/>
        },
        {
            path: "/moreCategory",
            element: <moreCategory/>
        },
       
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default routers