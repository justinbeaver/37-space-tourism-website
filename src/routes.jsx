import { createBrowserRouter } from "react-router-dom";

import Layout from "@/components/Layout/Layout";
import Home from "@/pages/Home/Home";
import Destination, {
  Content as DestinationContent,
  loader as destinationLoader,
} from "@/pages/Destination/Destination";
import Crew, {
  Content as CrewContent,
  loader as crewLoader,
} from "@/pages/Crew/Crew";
import Technology, {
  Content as TechnologyContent,
  loader as technologyLoader,
} from "@/pages/Technology/Technology";

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
      {
        path: "crew",
        element: <Crew />,
        loader: crewLoader,
        children: [{ path: ":memberName", element: <CrewContent /> }],
      },
      {
        path: "technology",
        element: <Technology />,
        loader: technologyLoader,
        children: [{ path: ":technologyType", element: <TechnologyContent /> }],
      },
    ],
  },
]);
export default router;
