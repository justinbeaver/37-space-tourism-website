import { createContext, useContext } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import useWrapperPadding from "@/hooks/useWrapperPadding";

const WrapperPaddingContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useWrapperPaddingContext = () => {
  return useContext(WrapperPaddingContext);
};

export const WrapperPaddingProvider = ({ children }) => {
  const { wrapperRef, bodyRef, wrapperPadding } = useWrapperPadding();

  return (
    <>
      <WrapperPaddingContext.Provider value={{ wrapperPadding }}>
        {children}
      </WrapperPaddingContext.Provider>
      {createPortal(
        <div ref={bodyRef}>
          <div ref={wrapperRef} className="wrapper"></div>
        </div>,
        document.getElementById("use-wrapper-padding-portal")
      )}
    </>
  );
};

WrapperPaddingProvider.propTypes = {
  children: PropTypes.node,
};
