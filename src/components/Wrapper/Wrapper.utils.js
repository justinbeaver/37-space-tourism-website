import s from "./Wrapper.module.scss";

export const generateSizeRanges = (baseClass, sizes) => {
  const sizeRanges = {};

  sizes.forEach((start) => {
    sizes.forEach((end) => {
      const sizeOption = `${start}-${end}`;
      const startClass = s[`${baseClass}__start--${start}`];
      const endClass = s[`${baseClass}__end--${end}`];

      sizeRanges[sizeOption] = [startClass, endClass];
    });
  });

  return sizeRanges;
};
