import { createBrowserRouter } from "react-router";
import Nav from "../Component/Nav";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
]);