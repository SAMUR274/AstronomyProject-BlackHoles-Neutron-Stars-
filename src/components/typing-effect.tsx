"use client";
import { useState, useEffect } from 'react';

interface TypingEffectProps {
  texts: string[];  // Array of texts to display
  className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ texts, className = "" }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const speed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentText) {
        // Wait before starting to delete
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        setDisplayText(prev => {
          if (isDeleting) {
            return prev.slice(0, -1);
          } else {
            return currentText.slice(0, prev.length + 1);
          }
        });
      }
    }, speed);
    
    return () => clearTimeout(timer);
  }, [displayText, currentTextIndex, isDeleting, texts]);
  
  return <h1 className={className}>{displayText}</h1>;
}

export default TypingEffect;