import { cva } from "class-variance-authority";

import { generateSizeRanges } from "./Wrapper.utils";

import s from "./Wrapper.module.scss";

const BASE_CLASS = "wrapper";

const sizes = ["sm", "md", "lg", "full"];

const sizeRanges = generateSizeRanges(BASE_CLASS, sizes);

export const config = {
  variants: {
    size: {
      sm: [s[`${BASE_CLASS}__start--sm`], s[`${BASE_CLASS}__end--sm`]],
      md: [s[`${BASE_CLASS}__start--md`], s[`${BASE_CLASS}__end--md`]],
      lg: [s[`${BASE_CLASS}__start--lg`], s[`${BASE_CLASS}__end--lg`]],
      full: [s[`${BASE_CLASS}__start--full`], s[`${BASE_CLASS}__end--full`]],
      ...sizeRanges,
    },
    pad: {
      none: s[`${BASE_CLASS}__pad--none`],
      sm: null,
      md: s[`${BASE_CLASS}__pad--md`],
      lg: s[`${BASE_CLASS}__pad--lg`],
    },
  },
};

export const wrapperClass = cva(s[BASE_CLASS], config);
