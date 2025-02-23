import { useState, useEffect } from "react";

import breakpoints from "@/styles/0-settings/_breakpoints.module.scss";

const { sm, md, lg } = breakpoints;

const useMediaQuery = (query) => {
  const [match, setMatch] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const onResize = () => {
      setMatch(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", onResize);

    return () => {
      mediaQuery.removeEventListener("change", onResize);
    };
  }, [query]);

  return match;
};

const useMediaQueries = () => {
  const isSm = useMediaQuery(`(min-width: ${sm})`);
  const isMd = useMediaQuery(`(min-width: ${md})`);
  const isLg = useMediaQuery(`(min-width: ${lg})`);

  return { isSm, isMd, isLg };
};
export default useMediaQueries;
