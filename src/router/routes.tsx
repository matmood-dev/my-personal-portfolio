import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";

import Home from "../pages/Home";
import Projects from "../pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/projects",
    element: <Layout><Projects /></Layout>,
  }
]);

export default router;
