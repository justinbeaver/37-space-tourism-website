import { createBrowserRouter } from "react-router-dom";

import Layout from "@/components/Layout/Layout";
import Home from "@/pages/Home/Home";
import Destination, {
  Content as DestinationContent,
  loader as destinationLoader,
} from "@/pages/Destination/Destination";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "destination",
        element: <Destination />,
        loader: destinationLoader,
        children: [
          // { index: true, element: <DestinationContent /> },
          // { index: true, element: <Navigate to="Moon" replace /> },
          {
            path: ":planetName",
            element: <DestinationContent />,
          },
        ],
      },
    ],
  },
]);
export default router;
