
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  initialHours = 23, 
  initialMinutes = 57, 
  initialSeconds = 38,
  className = ''
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      let { hours, minutes, seconds } = timeLeft;

      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        seconds = 59;
        minutes--;
      } else if (hours > 0) {
        seconds = 59;
        minutes = 59;
        hours--;
      }

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <span className={className}>
      {`${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`}
    </span>
  );
};

export default CountdownTimer;
