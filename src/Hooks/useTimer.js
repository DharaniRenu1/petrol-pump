import { useCallback, useState } from "react";
import { use1Second } from "./use1Second";

export const useTimer = ({
  litre: initiallitre = 1,
  running: initiallyRunning = false
} = {}) => {
  const [litre, setlitre] = useState(initiallitre);
  const [running, setRunning] = useState(initiallyRunning);

  const tick = useCallback(
    () => (running ? setlitre((litre) => litre + 1) : undefined),
    [running]
  );

  const start = () => {
    setRunning(true);
    
  }
  const pause = () => setRunning(false);
  const stop = () => {
    pause();

  };
  use1Second(tick);
  return { litre, start, stop };
};
