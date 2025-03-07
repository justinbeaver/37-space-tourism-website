import PropTypes from "prop-types";

import s from "./PagePadding.module.scss";

const PagePadding = ({ children }) => {
  return (
    <div className="wrapper">
      <section className={s.section}>{children}</section>
    </div>
  );
};
export default PagePadding;

PagePadding.propTypes = {
  children: PropTypes.node,
};
