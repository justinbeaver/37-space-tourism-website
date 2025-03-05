import s from "./PaginationDot.module.scss";

const config = {
  variants: {
    active: {
      true: s.paginationDot__active,
    },
    pending: {
      true: s.paginationDot__pending,
    },
    size: {
      sm: s.paginationDot__sm,
      md: s.paginationDot__md,
    },
  },
};
export default config;
