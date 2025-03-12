import PropTypes from "prop-types";
import { cva } from "class-variance-authority";

import config from "./Wrapper.config";

import s from "./Wrapper.module.scss";

const wrapperClass = cva(s.wrapper, config);

const Wrapper = ({
  size = "md",
  padding = "default",
  className = "",
  children,
  ...rest
}) => {
  return (
    <div
      className={`${wrapperClass({ size, padding })} ${className}`}
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
  className: PropTypes.string,
  children: PropTypes.node,
};
