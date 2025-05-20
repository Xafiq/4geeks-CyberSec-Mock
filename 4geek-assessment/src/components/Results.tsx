import React from 'react';
import { Container, Button, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import { domainInfo, DOMAINS, DomainType } from '../data/domains';
import { jsPDF } from 'jspdf';
import '../styles/Results.css';

interface SectionScore {
  sectionName: string;
  correct: number;
  total: number;
  percentage: number;
}

interface DomainScore {
  domain: string;
  correct: number;
  total: number;
  percentage: number;
}

interface ResultsProps {
  correctAnswers: number;
  totalQuestions: number;
  sectionScores: SectionScore[];
  domainScores: DomainScore[];
  onRestart: () => void;
}

type LanguageKey = 'en' | 'es';

type TranslationType = {
  [key in LanguageKey]: {
    results: string;
    overall: string;
    sections: string;
    domains: string;
    career: string;
    skills: string;
    correct: string;
    questions: string;
    restart: string;
    download: string;
    excellent: string;
    good: string;
    needsImprovement: string;
    sectionScore: string;
    domainScore: string;
    careerPaths: string;
  }
};

const translations: TranslationType = {
  en: {
    results: "Assessment Results",
    overall: "Overall Score",
    sections: "Section Results",
    domains: "Domain Results",
    career: "Career Paths",
    skills: "Key Skills",
    correct: "Correct",
    questions: "Questions",
    restart: "Start New Assessment",
    download: "Download Results",
    excellent: "Excellent",
    good: "Good",
    needsImprovement: "Needs Improvement",
    sectionScore: "Section Score",
    domainScore: "Domain Score",
    careerPaths: "Recommended Career Paths"
  },
  es: {
    results: "Resultados de Evaluación",
    overall: "Puntuación General",
    sections: "Resultados por Sección",
    domains: "Resultados por Dominio",
    career: "Trayectorias Profesionales",
    skills: "Habilidades Clave",
    correct: "Correctas",
    questions: "Preguntas",
    restart: "Iniciar Nueva Evaluación",
    download: "Descargar Resultados",
    excellent: "Excelente",
    good: "Bueno",
    needsImprovement: "Necesita Mejorar",
    sectionScore: "Puntuación de Sección",
    domainScore: "Puntuación de Dominio",
    careerPaths: "Trayectorias Profesionales Recomendadas"
  }
};

const Results: React.FC<ResultsProps> = ({
  correctAnswers,
  totalQuestions,
  sectionScores,
  domainScores,
  onRestart
}) => {
  const { language } = useLanguage();
  const t = translations[language as LanguageKey];
  
  const overallPercentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  // Find the highest scoring domain(s)
  const topDomains = domainScores
    .filter(domain => domain.percentage >= 70)
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 2);
  
  // Get scoring category
  const getScoreCategory = (percentage: number): string => {
    if (percentage >= 80) return t.excellent;
    if (percentage >= 60) return t.good;
    return t.needsImprovement;
  };
  
  // Get CSS class based on score
  const getScoreClass = (percentage: number): string => {
    if (percentage >= 80) return 'score-circle-excellent';
    if (percentage >= 60) return 'score-circle-good';
    return 'score-circle-needs-improvement';
  };

  const getSectionScoreClass = (percentage: number): string => {
    if (percentage >= 80) return 'section-score-excellent';
    if (percentage >= 60) return 'section-score-good';
    return 'section-score-needs-improvement';
  };
  
  // Get variant for progress bar
  const getProgressVariant = (percentage: number): string => {
    if (percentage >= 80) return 'success';
    if (percentage >= 60) return 'warning';
    return 'danger';
  };
  
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(22);
    doc.text("Cybersecurity Assessment Results", 105, 20, { align: 'center' });
    doc.setFontSize(14);
    
    // Add overall score
    doc.text(`${t.overall}: ${overallPercentage}% (${correctAnswers}/${totalQuestions})`, 20, 40);
    
    // Add section scores
    doc.text(t.sections, 20, 55);
    let y = 65;
    sectionScores.forEach(section => {
      doc.text(`${section.sectionName}: ${section.correct}/${section.total} (${Math.round(section.percentage)}%)`, 30, y);
      y += 10;
    });
    
    // Add domain scores
    doc.text(t.domains, 20, y + 10);
    y += 20;
    domainScores.forEach(domain => {
      const domainKey = domain.domain as DomainType;
      const domainName = domainInfo[domainKey]?.name[language as LanguageKey] || domain.domain;
      doc.text(`${domainName}: ${domain.correct}/${domain.total} (${Math.round(domain.percentage)}%)`, 30, y);
      y += 10;
    });
    
    // Add date
    const date = new Date().toLocaleDateString();
    doc.text(`Date: ${date}`, 20, 270);
    
    // Save the PDF
    doc.save("cybersecurity-assessment-results.pdf");
  };
  
  return (
    <Container className="results-container p-4 my-5">
      <h1 className="text-center mb-5">{t.results}</h1>
      
      {/* Overall Score */}
      <Row className="justify-content-center mb-5">
        <Col md={8} className="text-center">
          <h2>{t.overall}</h2>
          <div className={`score-circle ${getScoreClass(overallPercentage)}`}>
            <h1>{overallPercentage}%</h1>
          </div>
          <p className="mt-3 lead">
            {correctAnswers} {t.correct} / {totalQuestions} {t.questions}
          </p>
          <p>{getScoreCategory(overallPercentage)}</p>
        </Col>
      </Row>
      
      {/* Section Scores */}
      <Row className="mb-5">
        <Col>
          <Card>
            <Card.Header>
              <h3>{t.sections}</h3>
            </Card.Header>
            <Card.Body>
              {sectionScores.map((section, index) => (
                <Card 
                  key={index} 
                  className={`mb-3 ${getSectionScoreClass(section.percentage)}`}
                >
                  <Card.Body>
                    <h5>{section.sectionName}</h5>
                    <p>
                      {section.correct} {t.correct} / {section.total} {t.questions} 
                      ({Math.round(section.percentage)}%)
                    </p>
                    <ProgressBar 
                      now={section.percentage} 
                      variant={getProgressVariant(section.percentage)} 
                    />
                  </Card.Body>
                </Card>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Domain Scores */}
      <Row className="mb-5">
        <Col>
          <Card>
            <Card.Header>
              <h3>{t.domains}</h3>
            </Card.Header>
            <Card.Body>
              {domainScores.map((domain, index) => {
                const domainKey = domain.domain as DomainType;
                const domainName = domainInfo[domainKey]?.name[language as LanguageKey] || domain.domain;
                
                return (
                  <div key={index} className="domain-score-item">
                    <h5>
                      {domainName}
                      <span className="ms-2">
                        {Math.round(domain.percentage)}%
                      </span>
                    </h5>
                    <ProgressBar 
                      now={domain.percentage} 
                      variant={getProgressVariant(domain.percentage)} 
                    />
                  </div>
                );
              })}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Career Recommendations */}
      {topDomains.length > 0 && (
        <Row className="mb-5">
          <Col>
            <Card>
              <Card.Header>
                <h3>{t.careerPaths}</h3>
              </Card.Header>
              <Card.Body>
                {topDomains.map((domain, index) => {
                  const domainKey = domain.domain as DomainType;
                  const info = domainInfo[domainKey];
                  
                  if (!info) return null;
                  
                  return (
                    <div key={index} className="mb-4">
                      <h4>{info.name[language as LanguageKey]}</h4>
                      <p>{info.description[language as LanguageKey]}</p>
                      
                      <div className="mb-3">
                        <h5>{t.career}</h5>
                        {info.careerPaths && info.careerPaths[language as LanguageKey]?.map((career: string, idx: number) => (
                          <div key={idx} className="career-path-item">
                            <div className="career-path-icon">
                              <i className="bi bi-briefcase"></i>
                            </div>
                            <div>
                              <strong>{career}</strong>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div>
                        <h5>{t.skills}</h5>
                        <div>
                          {info.skills[language as LanguageKey]?.map((skill: string, idx: number) => (
                            <span key={idx} className="skill-tag">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
      
      {/* Action Buttons */}
      <Row className="justify-content-center mt-5">
        <Col md={6} className="d-flex justify-content-center gap-3">
          <Button 
            variant="primary" 
            onClick={onRestart}
          >
            {t.restart}
          </Button>
          
          <Button 
            variant="outline-primary" 
            onClick={handleDownloadPDF}
          >
            <i className="bi bi-download me-2"></i>
            {t.download}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Results;