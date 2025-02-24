const debounce = (callback, delay = 500) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
};
export default debounce;
