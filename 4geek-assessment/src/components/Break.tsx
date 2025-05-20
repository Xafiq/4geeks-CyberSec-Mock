import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

interface BreakProps {
  breakDuration: number; // in seconds
  nextSectionName: {
    en: string;
    es: string;
  };
  onBreakComplete: () => void;
  onSkipBreak: () => void;
}

const translations = {
  en: {
    breakTime: "Break Time",
    nextSection: "Next Section",
    skip: "Skip Break",
    continue: "Continue to",
    remainingTime: "Time remaining",
    message: "Take a moment to relax before continuing to the next section."
  },
  es: {
    breakTime: "Tiempo de Descanso",
    nextSection: "Próxima Sección",
    skip: "Omitir Descanso",
    continue: "Continuar a",
    remainingTime: "Tiempo restante",
    message: "Tómate un momento para relajarte antes de continuar con la siguiente sección."
  }
};

const Break: React.FC<BreakProps> = ({ breakDuration, nextSectionName, onBreakComplete, onSkipBreak }) => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [timeLeft, setTimeLeft] = useState(breakDuration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onBreakComplete();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onBreakComplete]);

  // Format time as MM:SS
  const formatTime = (): string => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Container className="break-container">
      <Card className="break-card text-center">
        <Card.Body>
          <h2>{t.breakTime}</h2>
          <p className="lead">{t.message}</p>
          
          <div className="break-timer">
            {formatTime()}
          </div>
          
          <p>{t.remainingTime}</p>
          
          <div className="mt-4">
            <h4>{t.continue}:</h4>
            <h3 className="mb-4">{nextSectionName[language as keyof typeof nextSectionName]}</h3>
            
            <Button variant="primary" onClick={onBreakComplete}>
              {t.nextSection}
            </Button>
            <Button variant="link" onClick={onSkipBreak} className="ms-3">
              {t.skip}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Break;