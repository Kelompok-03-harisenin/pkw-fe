import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "../pages/profile/profile.jsx";
import Homepage from "../pages/index/index.jsx";
import UploadPage from "../pages/uploadPhoto/uploadPhoto.jsx";
import DeletePage from "../pages/editPhoto/editPhoto.jsx";
import PreviewPage from "../pages/previewPhoto/previewPhoto.jsx";

import MoreCategory from "../pages/category/category.jsx"
const routers = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage/>
        },
        {
            path: "",
            element: <></>
        },
        {
            path: "/upload",
            element: <UploadPage/>
        }
        ,
        {
            path: "/delete",
            element: <DeletePage/>
        }
        ,
        {
            path: "/preview",
            element: <PreviewPage/>
        },

        {
            path: "/userProfile",
            element: <ProfilePage/>
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