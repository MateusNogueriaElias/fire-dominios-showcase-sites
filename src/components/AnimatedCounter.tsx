
import React from "react";

interface AnimatedCounterProps {
  to: number;
  duration?: number; // ms
}
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ to, duration = 1300 }) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    let start: number | null = null;
    let frameId: number;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * to));
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setValue(to);
      }
    };
    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [to, duration]);

  return (
    <span className="animated-counter tabular-nums">{value}</span>
  );
};

export default AnimatedCounter;
