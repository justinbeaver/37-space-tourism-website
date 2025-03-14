import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";

import config from "./Btn.config";

import s from "./Btn.module.scss";

const btnClass = cva(s.btn, config);

const Btn = ({
  to,
  variant,
  size,
  isPending = false,
  className = "",
  children,
  ...rest
}) => {
  const ElementType = to ? Link : "button";

  return (
    <ElementType
      to={to}
      className={`${btnClass({
        variant,
        size,
        pending: isPending,
      })} ${className}`}
      {...rest}
    >
      {children}
    </ElementType>
  );
};
export default Btn;

Btn.propTypes = {
  to: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(config.variants.variant)),
  size: PropTypes.oneOf(Object.keys(config.variants.size)),
  isPending: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};
