import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Row, Col, ProgressBar, Form } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import Timer from './Timer';
import { Question as QuestionType } from '../data/questions';
import '../App.css';

interface QuestionProps {
  question: QuestionType;
  currentQuestion: number;
  totalQuestions: number;
  sectionName: {
    en: string;
    es: string;
  };
  selectedAnswer: number | undefined;
  onSelectAnswer: (index: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  duration: number;
  onTimeUp: () => void;
}

const translations = {
  en: {
    question: "Question",
    next: "Next",
    previous: "Previous",
    finish: "Finish",
    section: "Section",
    timeLeft: "Time Left",
    selectOption: "Please select an option to continue"
  },
  es: {
    question: "Pregunta",
    next: "Siguiente",
    previous: "Anterior",
    finish: "Finalizar",
    section: "Sección",
    timeLeft: "Tiempo Restante",
    selectOption: "Por favor seleccione una opción para continuar"
  }
};

const Question: React.FC<QuestionProps> = ({ 
  question, 
  currentQuestion, 
  totalQuestions, 
  sectionName,
  selectedAnswer, 
  onSelectAnswer, 
  onNext, 
  onPrevious, 
  isFirstQuestion, 
  isLastQuestion,
  duration,
  onTimeUp
}) => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [error, setError] = useState<string | null>(null);
  
  // Calculate progress percentage
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  const handleNext = () => {
    if (selectedAnswer === undefined) {
      setError(t.selectOption);
      return;
    }
    setError(null);
    onNext();
  };

  return (
    <Container className="question-container p-4">
      <Row className="mb-4">
        <Col md={8}>
          <h3>{t.section}: {sectionName[language as keyof typeof sectionName]}</h3>
          <p className="lead">
            {t.question} {currentQuestion} / {totalQuestions}
          </p>
          <ProgressBar now={progressPercentage} className="mb-4" />
        </Col>
        <Col md={4} className="text-md-end">
          <Timer 
            duration={duration} 
            onTimeUp={onTimeUp} 
            label={t.timeLeft}
          />
        </Col>
      </Row>
      
      <Card className="question-card mb-4">
        <Card.Body>
          <Card.Title as="h4" className="mb-4">
            {question.question[language as keyof typeof question.question]}
          </Card.Title>
          
          <Form>
            {question.options[language as keyof typeof question.options].map((option, index) => (
              <Form.Check
                key={index}
                type="radio"
                id={`option-${index}`}
                className="mb-3 option-item"
              >
                <Form.Check.Input 
                  type="radio" 
                  checked={selectedAnswer === index}
                  onChange={() => onSelectAnswer(index)}
                />
                <Form.Check.Label className="w-100">{option}</Form.Check.Label>
              </Form.Check>
            ))}
          </Form>
          
          {error && <p className="text-danger mt-3">{error}</p>}
        </Card.Body>
      </Card>

      <div className="d-flex justify-content-between">
        <Button 
          variant="outline-secondary" 
          onClick={onPrevious}
          disabled={isFirstQuestion}
        >
          {t.previous}
        </Button>

        <Button 
          variant="primary" 
          onClick={handleNext}
        >
          {isLastQuestion ? t.finish : t.next}
        </Button>
      </div>
    </Container>
  );
};

export default Question;