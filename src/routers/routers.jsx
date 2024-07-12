import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "../pages/index";
import UserProfile from "../pages/index/UserProfile/userProfile";
import Homepage from "../pages/index/homepage";
import Upload from "../pages/upload/upload";
import Delete from "../pages/delete/delete";
import Preview from "../pages/preview/preview";

import MoreCategory from "../pages/moreCategory/moreCategory.jsx"
const routers = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage/>
        }
        ,
        {
            path: "/upload",
            element: <Upload/>
        }
        ,
        {
            path: "/delete",
            element: <Delete/>
        }
        ,
        {
            path: "/preview",
            element: <Preview/>
        },

        {
            path: "/userProfile",
            element: <UserProfile/>
        },  
        {
            path: "/moreCategory",
            element: <MoreCategory/>
        },
       
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default routers