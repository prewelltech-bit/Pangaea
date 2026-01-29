import React, { useState } from "react";
import "./consultationModel.css";
import questionsData from "../../../../../jsonFiles/consultationQuestions.json";

const ConsultationModal = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [isComplete, setIsComplete] = useState(false);

  const handleOpen = () => {
    setCurrentQuestion(questionsData[0]);
    setUserAnswers({});
    setIsComplete(false);
  };

  const handleAnswer = (answer) => {
    // Store user answer
    const newAnswers = {
      ...userAnswers,
      [currentQuestion.id]: answer.text
    };
    setUserAnswers(newAnswers);

    // Check if this is the final question
    if (currentQuestion.final) {
      setIsComplete(true);
      return;
    }

    // Go to next question
    if (answer.nextQuestion) {
      const nextQ = questionsData.find(q => q.id === answer.nextQuestion);
      setCurrentQuestion(nextQ);
    }
  };

  const handleClose = () => {
    setCurrentQuestion(null);
    setIsComplete(false);
    onClose();
  };

  if (!isOpen && !currentQuestion) return null;

  return (
    <div className="consultation-overlay">
      <div className="consultation-modal">
        <button className="close-btn" onClick={handleClose}>✕</button>

        {!currentQuestion && !isComplete && (
          <div className="modal-content">
            <h2>Free Expert Consultation</h2>
            <p>Answer a few quick questions to get matched with the right expert</p>
            <button className="start-btn" onClick={handleOpen}>
              Start Consultation
            </button>
          </div>
        )}

        {currentQuestion && !isComplete && (
          <div className="modal-content">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(currentQuestion.id / questionsData.length) * 100}%` }}
              ></div>
            </div>

            <h2>{currentQuestion.question}</h2>

            <div className="answers-list">
              {currentQuestion.answers.map((answer) => (
                <button
                  key={answer.id}
                  className="answer-btn"
                  onClick={() => handleAnswer(answer)}
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {isComplete && (
          <div className="modal-content success">
            <h2>Thank You! 🎉</h2>
            <p>We'll connect you with the right expert for:</p>
            <div className="answers-summary">
              {Object.values(userAnswers).map((answer, idx) => (
                <p key={idx}>✓ {answer}</p>
              ))}
            </div>
            <button className="contact-btn">
              Book Free Consultation Now
            </button>
            <button className="close-final-btn" onClick={handleClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultationModal;