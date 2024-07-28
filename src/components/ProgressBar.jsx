import { useState, useEffect } from "react";
export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const timerInterVal = setInterval(() => {
      console.log("Set Interval");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(timerInterVal);
    };
  }, []);

  return <progress value={remainingTime} max={timer}  />;
}
