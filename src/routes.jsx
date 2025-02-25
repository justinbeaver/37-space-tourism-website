import { createBrowserRouter } from "react-router-dom";

import Layout from "@/components/Layout/Layout";
import Home from "@/pages/Home/Home";
import Destination from "@/pages/Destination/Destination";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "destination", element: <Destination /> },
    ],
  },
]);
export default router;
