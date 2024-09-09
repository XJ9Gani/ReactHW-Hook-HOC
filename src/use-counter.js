import { useCallback, useState } from "react";

export default function useCounter(initNum = 0) {
  const [count, setCount] = useState(initNum);
  const incrementHandler = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]);
  const decrementHandler = useCallback(() => {
    setCount((prev) => prev - 1);
  }, [setCount]);

  return [count, incrementHandler, decrementHandler];
}
