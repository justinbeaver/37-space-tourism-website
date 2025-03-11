import { useEffect, useRef } from "react";

const useClickAway = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickAway = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [callback]);

  return [ref];
};
export default useClickAway;
