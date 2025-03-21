import { useEffect } from "react";

import useElementSize from "@/hooks/useElementSize";
import { useMediaQueriesContext } from "@/context/mediaQueriesContext";
import setRootCssProperty from "@/utils/setRootCssProperty";

/**
 * Gets navbar's height and sets it as css custom property on the root element
 */
export const useNavbarHeight = () => {
  // const { ref, size } = useElementSize({ width: false });
  const { ref, size } = useElementSize();

  useEffect(() => {
    setRootCssProperty("--navbar-height", `${size.height}px`);
  }, [size.height]);

  return { navbarRef: ref };
};

export const useCloseMenuOnLargerScreens = (onClose) => {
  const { isSm } = useMediaQueriesContext();

  useEffect(() => {
    if (isSm) {
      onClose();
    }
  }, [isSm, onClose]);
};
