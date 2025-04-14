import React, { useState, useEffect } from 'react';
import './App.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const increment = () => {
    setCount(prev => prev + step);
    triggerAnimation();
  };

  const decrement = () => {
    setCount(prev => prev - step);
    triggerAnimation();
  };

  const reset = () => {
    setCount(0);
    setStep(1);
    triggerAnimation();
  };

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleStepChange = (e) => {
    setStep(Number(e.target.value));
  };

  return (
    <div className="counter-app">
      <div className="counter-container">
        <h1 className="counter-title">
          <span className="title-gradient">Modern Counter</span>
        </h1>
        
        <div className={`counter-display ${isAnimating ? 'pulse' : ''}`}>
          <span className="counter-value">{count}</span>
        </div>
        
        <div className="counter-controls">
          <button 
            className="counter-btn decrement"
            onClick={decrement}
            aria-label="Decrement"
          >
            <span className="icon">−</span>
          </button>
          
          <button 
            className="counter-btn increment"
            onClick={increment}
            aria-label="Increment"
          >
            <span className="icon">+</span>
          </button>
        </div>        
        <button 
          className="reset-btn"
          onClick={reset}
        >
          <span className="reset-icon"></span> Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;