import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import '../App.css';

interface LanguageSelectorProps {
  onLanguageSelect: () => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onLanguageSelect }) => {
  const { setLanguage } = useLanguage();

  const handleLanguageSelect = (lang: 'en' | 'es') => {
    setLanguage(lang);
    onLanguageSelect();
  };

  return (
    <Container className="language-selector-container d-flex align-items-center justify-content-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col md={10} lg={8} className="text-center">
          <h1 className="mb-5">Select Your Language / Seleccione Su Idioma</h1>
          <Row className="justify-content-center">
            <Col xs={12} sm={6} md={5} className="mb-4">
              <Card 
                className="language-card" 
                onClick={() => handleLanguageSelect('en')}
              >
                <Card.Body className="d-flex flex-column align-items-center">
                  <div className="flag-icon mb-3">🇺🇸</div>
                  <h2>English</h2>
                  <p>Take the assessment in English</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={5}>
              <Card 
                className="language-card" 
                onClick={() => handleLanguageSelect('es')}
              >
                <Card.Body className="d-flex flex-column align-items-center">
                  <div className="flag-icon mb-3">🇪🇸</div>
                  <h2>Español</h2>
                  <p>Realizar la evaluación en Español</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LanguageSelector;