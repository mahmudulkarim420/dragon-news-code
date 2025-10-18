import { createBrowserRouter } from "react-router";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import CategoryNews from "../Pages/CategoryNews";


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
        loader: () => fetch("/news.json")
      }
    ]
  },
]);


export default router;