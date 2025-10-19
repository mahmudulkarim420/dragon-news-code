import { createBrowserRouter } from "react-router";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../LayOut/AuthLayout";
import NewDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Pages/Loading";


const router = createBrowserRouter([
  {
    path: "/",
    Component: LayOut,
    children: [
      {
        path: "/home",
        Component: Home
      },
      {
      path: "/about",
      Component: About
      },
      {
        path: "/career",
        Component: Career
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>
      }
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login
      },
      {
        path: "/auth/register",
        Component: Register
      }
    ]
  },
  {
    path: "/newsDetails/:id",
    element: <PrivateRoute>
      <NewDetails></NewDetails>
    </PrivateRoute>,
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>
  }
]);


export default router;