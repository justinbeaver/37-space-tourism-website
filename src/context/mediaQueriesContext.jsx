import { createContext, useContext } from "react";
import PropTypes from "prop-types";

import useMediaQueries from "@/hooks/useMediaQueries";

const MediaQueriesContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useMediaQueriesContext = () => {
  return useContext(MediaQueriesContext);
};

export const MediaQueriesProvider = ({ children }) => {
  const mediaQueries = useMediaQueries();

  return (
    <MediaQueriesContext.Provider value={mediaQueries}>
      {children}
    </MediaQueriesContext.Provider>
  );
};

MediaQueriesProvider.propTypes = {
  children: PropTypes.node,
};
