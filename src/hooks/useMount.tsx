import { useEffect } from "react";

const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line
  }, []);
};

export default useMount;
