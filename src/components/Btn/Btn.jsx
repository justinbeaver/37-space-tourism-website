import PropTypes from "prop-types";

import s from "./Btn.module.scss";

const btnClassesMap = {
  primary: s["btn--primary"],
};

const getBtnClass = (variant) => {
  const baseClass = s.btn;
  const modifier = btnClassesMap[variant] || "";

  return `${baseClass} ${modifier}`;
};

export const Btn = ({
  variant = "primary",
  href,
  className,
  children,
  onClick,
  ...rest
}) => {
  const ElementType = href ? "a" : "button";

  return (
    <ElementType
      className={getBtnClass(variant)}
      href={href}
      onClick={onClick}
      {...rest}
    >
      {children}
    </ElementType>
  );
};

Btn.propTypes = {
  variant: PropTypes.oneOf(Object.keys(btnClassesMap)),
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
