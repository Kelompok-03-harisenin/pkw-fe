import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "../pages/profile/profile.jsx";
import Homepage from "../pages/index/index.jsx";
import UploadPage from "../pages/uploadPhoto/uploadPhoto.jsx";
import DeletePage from "../pages/editPhoto/editPhoto.jsx";
import PreviewPage from "../pages/previewPhoto/previewPhoto.jsx";
import Category from "../pages/category/category.jsx"
import Login from "../pages/login/login.jsx"
import Register from "../pages/register/register.jsx";

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
    {
      path: "/register",
      element: <Register></Register>
    },
    {
      path: "/login",
      element: <Login></Login>
    }

  ])

  return (
    <RouterProvider router={router} />
  )
}

export default routers
