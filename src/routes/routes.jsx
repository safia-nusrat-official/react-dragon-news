import Root from "../layout/Root";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { About } from "../pages/about/About";
import Career from "../pages/career/Career"
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      }
    ]
  },
]);
