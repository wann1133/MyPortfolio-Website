import { useState, useEffect } from 'react';

const TypingText = ({ texts, speed = 150, delay = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const currentString = texts[currentTextIndex];
    
    const timer = setTimeout(() => {
      if (isDeleting) {
        // Deleting text
        setCurrentText(currentString.substring(0, currentText.length - 1));
        setTypingSpeed(speed / 2); // Faster when deleting
      } else {
        // Typing text
        setCurrentText(currentString.substring(0, currentText.length + 1));
        setTypingSpeed(speed);
      }

      // Check if text is fully typed
      if (!isDeleting && currentText === currentString) {
        setTimeout(() => setIsDeleting(true), delay); // Pause before deleting
      } 
      // Check if text is fully deleted
      else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to next text
        setTypingSpeed(speed);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, delay]);

  return <span>{currentText}</span>;
};

export default TypingText;