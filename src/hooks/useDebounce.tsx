import { useEffect, useState } from "react";

const useDebounce = (value: any, delay: number) => {
  const [data, setData] = useState(value);
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
