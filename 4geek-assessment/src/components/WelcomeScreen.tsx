import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import '../App.css';

interface WelcomeScreenProps {
  onStart: () => void;
}

const translations = {
  en: {
    welcome: "Welcome to the Cybersecurity Assessment",
    description: "This assessment will help determine which cybersecurity field best matches your skills and knowledge.",
    instructions: "Instructions:",
    point1: "You will have 10 minutes to complete each section of the assessment.",
    point2: "Each question has one correct answer.",
    point3: "Your results will show which cybersecurity domain is the best fit for you.",
    point4: "The assessment consists of different sections with multiple-choice questions.",
    start: "Start Assessment",
    domains: "Cybersecurity Domains:",
    domain1: "Security Operations",
    domain2: "Incident Response",
    domain3: "Network Security",
    domain4: "Application Security",
    domain5: "Cloud Security",
  },
  es: {
    welcome: "Bienvenido a la Evaluación de Ciberseguridad",
    description: "Esta evaluación te ayudará a determinar qué campo de ciberseguridad se adapta mejor a tus habilidades y conocimientos.",
    instructions: "Instrucciones:",
    point1: "Tendrás 10 minutos para completar cada sección de la evaluación.",
    point2: "Cada pregunta tiene una respuesta correcta.",
    point3: "Tus resultados mostrarán qué dominio de ciberseguridad es el más adecuado para ti.",
    point4: "La evaluación consta de diferentes secciones con preguntas de opción múltiple.",
    start: "Iniciar Evaluación",
    domains: "Dominios de Ciberseguridad:",
    domain1: "Operaciones de Seguridad",
    domain2: "Respuesta a Incidentes",
    domain3: "Seguridad de Redes",
    domain4: "Seguridad de Aplicaciones",
    domain5: "Seguridad en la Nube",
  }
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <Container className="welcome-screen p-5">
      <Row className="justify-content-center mb-5">
        <Col md={10} className="text-center">
          <h1 className="mb-4">{t.welcome}</h1>
          <p className="lead mb-5">{t.description}</p>
          
          <div className="instructions-container bg-light p-4 rounded mb-5 text-start">
            <h3 className="mb-3">{t.instructions}</h3>
            <ul className="instruction-list">
              <li>{t.point1}</li>
              <li>{t.point2}</li>
              <li>{t.point3}</li>
              <li>{t.point4}</li>
            </ul>
          </div>

          <div className="domains-container mb-5">
            <h3 className="mb-3">{t.domains}</h3>
            <div className="domain-badges d-flex flex-wrap justify-content-center gap-2">
              <span className="domain-badge badge bg-primary">{t.domain1}</span>
              <span className="domain-badge badge bg-success">{t.domain2}</span>
              <span className="domain-badge badge bg-info">{t.domain3}</span>
              <span className="domain-badge badge bg-warning">{t.domain4}</span>
              <span className="domain-badge badge bg-danger">{t.domain5}</span>
            </div>
          </div>
          
          <Button 
            variant="primary" 
            size="lg" 
            onClick={onStart}
            className="start-button"
          >
            {t.start}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeScreen;