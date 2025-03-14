import { useEffect, useRef, useState } from "react";
import useDebounce from "@/hooks/useDebounce";

// Split into useElementWidth and useElementHeight will be more efficient

/**
 * Gets element's width and height
 */
const useElementSize = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const updateSize = () => {
    if (!ref.current) return;

    setSize((prev) => {
      const newWidth = ref.current.offsetWidth;
      const newHeight = ref.current.offsetHeight;

      if (prev.width !== newWidth || prev.height !== newHeight) {
        return { width: newWidth, height: newHeight };
      } else {
        return prev;
      }
    });
  };

  const debouncedUpdateSize = useDebounce(updateSize, 100);

  useEffect(() => {
    updateSize(); // Set initial size after element mounts

    window.addEventListener("resize", debouncedUpdateSize);

    return () => window.removeEventListener("resize", debouncedUpdateSize);
  }, [debouncedUpdateSize]);

  return { ref, size };
};
export default useElementSize;
