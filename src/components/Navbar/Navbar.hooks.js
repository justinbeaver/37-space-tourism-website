import { useEffect } from "react";

import useElementSize from "@/hooks/useElementSize";
import { setCssCustomProperty } from "./Navbar.utils";

/**
 * Gets navbar's height and sets it as css custom property on the root element
 */
export const useNavbarHeight = () => {
  const { ref, size } = useElementSize();

  useEffect(() => {
    setCssCustomProperty("--navbar-height", `${size.height}px`);
  }, [size.height]);

  return { navbarRef: ref };
};
