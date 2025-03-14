import { useEffect } from "react";

const keysMap = {
  esc: "Escape",
};

const getKeyName = (key) => {
  return keysMap[key] || null;
};

const useOnKeyPress = (key, callback) => {
  const keyName = getKeyName(key);

  if (keyName === null) {
    throw new Error(`Key "${key}" not found`);
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === keyName) {
        callback();
      }
    };

    window.addEventListener("keyup", handleKeyPress);

    return () => window.removeEventListener("keyup", handleKeyPress);
  }, [keyName, callback]);
};
export default useOnKeyPress;
