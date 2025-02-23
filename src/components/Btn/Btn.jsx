import PropTypes from "prop-types";
import { cva } from "class-variance-authority";

import config from "./Btn.config";

import s from "./Btn.module.scss";

const btnClass = cva(s.btn, config);

const Btn = ({
  variant,
  size,
  href,
  // className,
  children,
  // onClick,
  ...rest
}) => {
  const ElementType = href ? "a" : "button";

  return (
    <ElementType
      className={btnClass({ variant, size })}
      href={href}
      // onClick={onClick}
      {...rest}
    >
      {children}
    </ElementType>
  );
};
export default Btn;

Btn.propTypes = {
  variant: PropTypes.oneOf(Object.keys(config.variants.variant)),
  size: PropTypes.oneOf(Object.keys(config.variants.size)),
  href: PropTypes.string,
  // className: PropTypes.string,
  children: PropTypes.node,
  // onClick: PropTypes.func,
};
