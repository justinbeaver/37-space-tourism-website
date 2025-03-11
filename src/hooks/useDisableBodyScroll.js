import { useEffect } from "react";

const useDisableBodyScroll = (isOpen) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);
};
export default useDisableBodyScroll;
