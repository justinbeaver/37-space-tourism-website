import { useEffect, useRef } from "react";

const useFocusTrap = (isOpen) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const modalElement = elementRef.current;

    const focusableElements = modalElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement.focus();

    const handleTabKeyPress = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    modalElement.addEventListener("keydown", handleTabKeyPress);

    return () => modalElement.removeEventListener("keydown", handleTabKeyPress);
  }, [isOpen]);

  return [elementRef];
};
export default useFocusTrap;
