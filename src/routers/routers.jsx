import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "../pages/profile/profile.jsx";
import Homepage from "../pages/index/index.jsx";
import UploadPage from "../pages/uploadPhoto/uploadPhoto.jsx";
import DeletePage from "../pages/editPhoto/editPhoto.jsx";
import PreviewPage from "../pages/previewPhoto/previewPhoto.jsx";
import Category from "../pages/category/category.jsx"

const routers = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />
    },
    {
      path: "",
      element: <></>
    },
    {
      path: "/upload",
      element: <UploadPage />
    }
    ,
    {
      path: "/delete",
      element: <DeletePage />
    }
    ,
    {
      path: "/preview/:photoID",
      element: <PreviewPage />
    },

    {
      path: "/userProfile",
      element: <ProfilePage />
    },
    {
      path: "/category/:categoryID",
      element: <Category />
    },

  ])

  return (
    <RouterProvider router={router} />
  )
}

export default routers
