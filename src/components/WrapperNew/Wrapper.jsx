import PropTypes from "prop-types";

import { wrapperClass, config } from "./Wrapper.config";

const Wrapper = ({
  size = "md",
  padding = "md",
  pad = "md",
  className = "",
  children,
  ...rest
}) => {
  return (
    <div
      className={`${wrapperClass({ size, padding, pad })} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
export default Wrapper;

Wrapper.propTypes = {
  size: PropTypes.oneOf(Object.keys(config.variants.size)).isRequired,
  padding: PropTypes.oneOf(Object.keys(config.variants.padding)).isRequired,
  pad: PropTypes.oneOf(Object.keys(config.variants.pad)).isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};
