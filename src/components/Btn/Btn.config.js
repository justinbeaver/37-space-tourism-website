import s from "./Btn.module.scss";

const config = {
  variants: {
    variant: {
      primary: s.btn__primary,
    },
    size: {
      md: s.btn__md,
      lg: s.btn__lg,
    },
    pending: {
      true: s.btn__pending,
    },
  },
};
export default config;
