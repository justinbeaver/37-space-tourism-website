import PropTypes from "prop-types";
import { cva } from "class-variance-authority";

import config from "./PageBackground.config";

import s from "./PageBackground.module.scss";

const pageBackgroundClass = cva(s.page, config);

const PageBackground = ({ variant, children, ...rest }) => {
  return (
    <div className={pageBackgroundClass({ variant })} {...rest}>
      {children}
    </div>
  );
};
export default PageBackground;

PageBackground.propTypes = {
  variant: PropTypes.oneOf(Object.keys(config.variants.variant)),
  children: PropTypes.node,
};
