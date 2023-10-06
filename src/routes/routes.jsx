import Root from "../layout/Root";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { About } from "../pages/about/About";
import Career from "../pages/career/Career"
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { CardDetails } from "../pages/CardDetails";
import PrivateRoute from "./PrivateRoute";
import { Profile } from "../pages/profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader:() => fetch("/public/data/news.json")
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
      },
      {
        path:"/details/:id",
        element:<CardDetails></CardDetails>,
        loader: (params)=>fetch("/public/data/news.json")
      },
      {
        path:"/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
]);
