import { useEffect, useRef } from "react";

import useDebounce from "@/hooks/useDebounce";
import { setCssCustomProperty } from "./Navbar.utils";

/**
 * Gets navbar's height and sets it as css custom property on the root element
 */
export const useNavbarHeight = () => {
  const navbarRef = useRef(null);

  // Wrap with callback
  const updateHeight = () => {
    if (!navbarRef.current) return;

    // console.log("updateHeight");

    const navbarHeight = navbarRef.current.offsetHeight;

    setCssCustomProperty("--navbar-height", `${navbarHeight}px`);
  };

  const debouncedUpdateHeight = useDebounce(updateHeight, 100);

  useEffect(() => {
    const handleResize = () => {
      debouncedUpdateHeight();
    };

    // Sets initial height when navbar mounts
    updateHeight();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [debouncedUpdateHeight]);

  return { navbarRef };
};
