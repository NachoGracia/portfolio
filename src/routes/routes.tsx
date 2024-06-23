import React from "react";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Cv from "../pages/Cv";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Project",
        element: <Projects />,
      },
      {
        path: "/Resume",
        element: <Cv />,
      },
    ],
  },
]);
