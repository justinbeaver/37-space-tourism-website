import s from "./ImageSlider.module.scss";

const config = {
  variants: {
    direction: {
      horizontal: s.imageSlider__horizontal,
      vertical: s.imageSlider__vertical,
    },
    transition: {
      none: s.imageSlider__transitionNone,
      slow: s.imageSlider__transitionSlow,
    },
  },
};
export default config;
