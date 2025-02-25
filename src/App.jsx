import { RouterProvider } from "react-router-dom";

import router from "@/routes";
import { MediaQueriesProvider } from "./context/mediaQueriesContext";

function App() {
  return (
    <MediaQueriesProvider>
      <RouterProvider router={router} />
    </MediaQueriesProvider>
  );
}

export default App;
