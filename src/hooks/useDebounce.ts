import { useEffect, useState } from "react";

const useDebounce = (value: string, delay: number) => {
  const [currValue, setCurrValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setCurrValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return currValue;
};

export default useDebounce;
