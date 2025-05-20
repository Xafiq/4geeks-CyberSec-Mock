import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import LanguageSelector from './components/LanguageSelector';
import WelcomeScreen from './components/WelcomeScreen';
import Question from './components/Question';
import Results from './components/Results';
import Break from './components/Break';
import SectionInstructions from './components/SectionInstructions';
import { sections } from './data/questions';
import { DOMAINS, domainInfo } from './data/domains';
import { LanguageProvider } from './context/LanguageContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

type Stage = 'language' | 'welcome' | 'section-instructions' | 'questions' | 'break' | 'results';

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

function App() {
  const [stage, setStage] = useState<Stage>('language');
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [scores, setScores] = useState<{
    sectionScores: SectionScore[];
    domainScores: DomainScore[];
  } | null>(null);
  
  // Break between sections
  const BREAK_DURATION = 30; // seconds

  // Total questions across all sections
  const totalQuestions = sections.reduce((total, section) => total + section.questions.length, 0);
  
  // Calculate the global question index (across all sections)
  const getGlobalQuestionIndex = () => {
    let index = currentQuestion;
    for (let i = 0; i < currentSection; i++) {
      index += sections[i].questions.length;
    }
    return index;
  };

  // Get current question progress (e.g., "Question 5 of 30")
  const getCurrentProgress = () => {
    const globalIndex = getGlobalQuestionIndex();
    return `${globalIndex + 1} / ${totalQuestions}`;
  };

  const handleLanguageSelect = () => {
    setStage('welcome');
  };

  const handleStart = () => {
    setStage('section-instructions');
  };

  const handleAnswerSelect = (index: number) => {
    const globalIndex = getGlobalQuestionIndex();
    const newAnswers = [...answers];
    newAnswers[globalIndex] = index;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < sections[currentSection].questions.length - 1) {
      // Move to next question in current section
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentSection < sections.length - 1) {
      // Move to break before next section
      setStage('break');
    } else {
      // Finished all sections
      finishTest();
    }
  };
  
  const handleSectionStart = () => {
    setStage('questions');
  };
  
  const handleBreakComplete = () => {
    // Move to next section
    setCurrentSection(currentSection + 1);
    setCurrentQuestion(0);
    setStage('section-instructions');
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      // Move to previous question in current section
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentSection > 0) {
      // Move to last question of previous section
      setCurrentSection(currentSection - 1);
      setCurrentQuestion(sections[currentSection - 1].questions.length - 1);
    }
  };

  const handleRestart = () => {
    setStage('language');
    setCurrentSection(0);
    setCurrentQuestion(0);
    setAnswers([]);
    setScores(null);
  };

  const finishTest = () => {
    const finalScores = calculateScores(answers);
    setScores(finalScores);
    setStage('results');
  };

  const calculateScores = (answers: number[]): { sectionScores: SectionScore[]; domainScores: DomainScore[] } => {
    const sectionScores: SectionScore[] = [];
    const domainScores = new Map<string, { correct: number; total: number }>();
    let currentQuestionIndex = 0;

    // Initialize domain scores
    Object.values(DOMAINS).forEach(domain => {
      domainScores.set(domain, { correct: 0, total: 0 });
    });

    sections.forEach(section => {
      let sectionCorrect = 0;
      
      section.questions.forEach(question => {
        // Skip if the question wasn't answered
        if (answers[currentQuestionIndex] === undefined) {
          currentQuestionIndex++;
          return;
        }
        
        const isCorrect = answers[currentQuestionIndex] === question.correct;
        
        // Update section score
        if (isCorrect) sectionCorrect++;
        
        // Update domain score
        const domainScore = domainScores.get(question.domain);
        if (domainScore) {
          if (isCorrect) {
            domainScore.correct++;
          }
          domainScore.total++;
          domainScores.set(question.domain, domainScore);
        }
        
        currentQuestionIndex++;
      });
      
      // Calculate section score
      sectionScores.push({
        sectionName: section.name.en,
        correct: sectionCorrect,
        total: section.questions.length,
        percentage: (sectionCorrect / section.questions.length) * 100
      });
    });

    // Convert domain scores to array format
    const domainScoresArray = Array.from(domainScores.entries())
      .filter(([_, scores]) => scores.total > 0) // Only include domains that had questions
      .map(([domain, scores]) => ({
        domain,
        correct: scores.correct,
        total: scores.total,
        percentage: scores.total > 0 ? (scores.correct / scores.total) * 100 : 0
      }));

    return {
      sectionScores,
      domainScores: domainScoresArray.sort((a, b) => b.percentage - a.percentage)
    };
  };

  return (
    <LanguageProvider>
      <Container fluid className="p-0 main-container">
        {stage === 'language' && (
          <LanguageSelector onLanguageSelect={handleLanguageSelect} />
        )}
        {stage === 'welcome' && (
          <WelcomeScreen onStart={handleStart} />
        )}
        {stage === 'section-instructions' && (
          <SectionInstructions 
            section={sections[currentSection]} 
            onContinue={handleSectionStart}
          />
        )}
        {stage === 'questions' && (
          <Question
            question={sections[currentSection].questions[currentQuestion]}
            currentQuestion={getGlobalQuestionIndex() + 1}
            totalQuestions={totalQuestions}
            sectionName={sections[currentSection].name}
            selectedAnswer={answers[getGlobalQuestionIndex()]}
            onSelectAnswer={handleAnswerSelect}
            onNext={handleNext}
            onPrevious={handlePrevious}
            isFirstQuestion={currentSection === 0 && currentQuestion === 0}
            isLastQuestion={currentSection === sections.length - 1 && currentQuestion === sections[currentSection].questions.length - 1}
            duration={sections[currentSection].duration}
            onTimeUp={finishTest}
          />
        )}
        {stage === 'break' && currentSection < sections.length - 1 && (
          <Break 
            breakDuration={BREAK_DURATION}
            nextSectionName={sections[currentSection + 1].name}
            onBreakComplete={handleBreakComplete}
            onSkipBreak={handleBreakComplete}
          />
        )}
        {stage === 'results' && scores && (
          <Results
            correctAnswers={scores.sectionScores.reduce((sum, section) => sum + section.correct, 0)}
            totalQuestions={scores.sectionScores.reduce((sum, section) => sum + section.total, 0)}
            sectionScores={scores.sectionScores}
            domainScores={scores.domainScores}
            onRestart={handleRestart}
          />
        )}
      </Container>
    </LanguageProvider>
  );
}

export default App;
