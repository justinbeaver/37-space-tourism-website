import { RouterProvider } from "react-router-dom";

import router from "@/routes";
import { MediaQueriesProvider } from "./context/mediaQueriesContext";
import { WrapperPaddingProvider } from "./context/wrapperPaddingContext";

function App() {
  return (
    <MediaQueriesProvider>
      <WrapperPaddingProvider>
        <RouterProvider router={router} />
      </WrapperPaddingProvider>
    </MediaQueriesProvider>
  );
}

export default App;
