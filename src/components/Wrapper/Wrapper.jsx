import PropTypes from "prop-types";
import { cva } from "class-variance-authority";

import config from "./Wrapper.config";

import s from "./Wrapper.module.scss";

const wrapperClass = cva(s.wrapper, config);

const Wrapper = ({ size = "md", padding = "md", className = "", ...rest }) => {
  return (
    <div
      className={`${wrapperClass({ size, padding })} ${className}`}
      {...rest}
    />
  );
};
export default Wrapper;

Wrapper.propTypes = {
  size: PropTypes.oneOf(Object.keys(config.variants.size)),
  padding: PropTypes.oneOf(Object.keys(config.variants.padding)),
  className: PropTypes.string,
};
