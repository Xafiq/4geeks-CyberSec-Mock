import React, { useState, useEffect } from 'react';
import { Badge } from 'react-bootstrap';

interface TimerProps {
  duration: number; // Duration in seconds
  onTimeUp: () => void;
  label: string;
}

const translations = {
  en: {
    timeLeft: "Time Remaining",
    minutes: "minutes",
    seconds: "seconds"
  },
  es: {
    timeLeft: "Tiempo Restante",
    minutes: "minutos",
    seconds: "segundos"
  }
};

const Timer: React.FC<TimerProps> = ({ duration, onTimeUp, label }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  // const { language } = useLanguage();
  // const t = translations[language];

  useEffect(() => {
    // Reset timer when duration changes
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    // Don't start if no time
    if (timeLeft <= 0) return;

    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        onTimeUp();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);

  // Format time as MM:SS
  const formatTime = (): string => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const getColorClass = (): string => {
    if (timeLeft < 60) return 'danger';  // Less than 1 minute
    if (timeLeft < 180) return 'warning';  // Less than 3 minutes
    return 'primary';
  };

  return (
    <div className="timer-container d-flex align-items-center">
      <span className="me-2">{label}:</span>
      <Badge bg={getColorClass()} className="timer-badge">
        {formatTime()}
      </Badge>
    </div>
  );
};

export default Timer;
