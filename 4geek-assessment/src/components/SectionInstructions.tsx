import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import { Section } from '../data/questions';

interface SectionInstructionsProps {
  section: Section;
  onContinue: () => void;
}

const translations = {
  en: {
    instructions: "Section Instructions",
    duration: "Duration",
    questions: "Questions",
    minutes: "minutes",
    continue: "Start Section",
    timer: "There will be a timer to track your progress",
    response: "Choose the best answer for each question",
    navigate: "You can navigate between questions"
  },
  es: {
    instructions: "Instrucciones de la Sección",
    duration: "Duración",
    questions: "Preguntas",
    minutes: "minutos",
    continue: "Comenzar Sección",
    timer: "Habrá un temporizador para seguir tu progreso",
    response: "Elige la mejor respuesta para cada pregunta",
    navigate: "Puedes navegar entre preguntas"
  }
};

const SectionInstructions: React.FC<SectionInstructionsProps> = ({ section, onContinue }) => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  
  // Convert duration from seconds to minutes
  const durationMinutes = Math.floor(section.duration / 60);
  
  return (
    <Container className="section-instructions-container">
      <h2 className="section-title">
        {section.name[language as keyof typeof section.name]}
      </h2>
      
      <p className="section-description">
        {t.instructions}
      </p>
      
      <div className="section-details">
        <div className="section-item">
          <div className="section-item-icon">
            <i className="bi bi-clock"></i>
          </div>
          <div>
            <strong>{t.duration}:</strong> {durationMinutes} {t.minutes}
          </div>
        </div>
        
        <div className="section-item">
          <div className="section-item-icon">
            <i className="bi bi-list-check"></i>
          </div>
          <div>
            <strong>{t.questions}:</strong> {section.questions.length}
          </div>
        </div>
      </div>
      
      <ul className="instruction-list mb-5">
        <li>{t.timer}</li>
        <li>{t.response}</li>
        <li>{t.navigate}</li>
      </ul>
      
      <div className="text-center">
        <Button 
          variant="primary" 
          size="lg" 
          onClick={onContinue}
        >
          {t.continue}
        </Button>
      </div>
    </Container>
  );
};

export default SectionInstructions;