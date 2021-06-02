import { useEffect, useState } from "react";

const useDebounce = (value, timeout = 1000) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, timeout);

    return () => clearTimeout(handler);
    // eslint-disable-next-line
  }, [value]);

  return debounceValue;
};

export default useDebounce;
