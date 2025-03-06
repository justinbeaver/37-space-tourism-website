import { useEffect } from "react";

import useElementSize from "@/hooks/useElementSize";
import setRootCssProperty from "@/utils/setRootCssProperty";

const useWrapperPadding = () => {
  const { ref: wrapperRef, size: wrapperSize } = useElementSize();
  const { ref: bodyRef, size: bodySize } = useElementSize();

  const wrapperPadding = (bodySize.width - wrapperSize.width) / 2;

  useEffect(() => {
    setRootCssProperty("--wrapper-current-padding", `${wrapperPadding}px`);
  }, [wrapperPadding]);

  return { wrapperRef, bodyRef, wrapperPadding };
};
export default useWrapperPadding;
