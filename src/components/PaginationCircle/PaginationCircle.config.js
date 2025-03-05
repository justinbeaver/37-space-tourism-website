import s from "./PaginationCircle.module.scss";

const config = {
  variants: {
    active: {
      true: s.paginationCircle__active,
    },
    pending: {
      true: s.paginationCircle__pending,
    },
    size: {
      sm: s.paginationCircle__sm,
      md: s.paginationCircle__md,
    },
  },
};
export default config;
