import { useEffect, useState } from "react";

const useDebounce = <T = unknown,>(value: T, delay = 300) => {
  const [data, setData] = useState<T>(value);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setData(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return data;
};

export default useDebounce;
