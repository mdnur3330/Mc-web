import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Service from "../Pages/Service";
import About from "../Pages/About";
import Portfolio from "../Pages/Portfolio";
import PortfolioDetails from "../Component/PortfolioDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {path: "/",
        element:<Home />
      },
      {path: "/about",
        element: <About />
      },
      {path: "/service",
        element: <Service />
      },
      {path: "/portfolio",
        element: <Portfolio />
      },
      {path: "/portfolio-details",
        element: <PortfolioDetails/>
      },
    ]
  },
]);