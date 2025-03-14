import PropTypes from "prop-types";

import s from "./PagePadding.module.scss";

const PagePadding = ({ children }) => {
  return <section className={s.section}>{children}</section>;
};
export default PagePadding;

PagePadding.propTypes = {
  children: PropTypes.node,
};
