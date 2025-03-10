import { useState } from "react";

const useBoolean = (initial = false) => {
  const [value, setValue] = useState(initial);

  const on = () => setValue(true);

  const off = () => setValue(false);

  const toggle = () => setValue((prev) => !prev);

  return [value, { on, off, toggle }];
};
export default useBoolean;
