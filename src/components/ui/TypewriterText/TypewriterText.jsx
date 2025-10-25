import { useState, useEffect } from 'react';
import './TypewriterText.scss';

// Helper function to get the next character or emoji properly
function getNextChar(text, index) {
  if (index >= text.length) return { char: '', nextIndex: index };
  
  const currentChar = text[index];
  const nextChar = text[index + 1];
  
  // Check if we have a surrogate pair (emoji)
  if (nextChar && 
      currentChar.codePointAt(0) >= 0xD800 && currentChar.codePointAt(0) <= 0xDBFF &&
      nextChar.codePointAt(0) >= 0xDC00 && nextChar.codePointAt(0) <= 0xDFFF) {
    return { char: currentChar + nextChar, nextIndex: index + 2 };
  }
  
  return { char: currentChar, nextIndex: index + 1 };
}

function TypewriterText({ 
  text, 
  speed = 100, 
  delay = 1000, 
  className = '',
  cursor = true,
  onComplete = null,
  restart = false
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!text) return;

    // Reset state when restart is triggered or component remounts
    setDisplayedText('');
    setCurrentIndex(0);
    setIsTyping(false);

    // Start typing after delay
    const startTimer = setTimeout(() => {
      setIsTyping(true);
      setCurrentIndex(0);
      setDisplayedText('');
    }, delay);

    return () => clearTimeout(startTimer);
  }, [text, delay, restart]);

  useEffect(() => {
    if (!isTyping || currentIndex >= text.length) {
      if (currentIndex >= text.length && onComplete) {
        onComplete();
      }
      return;
    }

    const timer = setTimeout(() => {
      // Use the helper function to get the next character/emoji
      const { char, nextIndex } = getNextChar(text, currentIndex);
      
      setDisplayedText(prev => prev + char);
      setCurrentIndex(nextIndex);
    }, speed);

    return () => clearTimeout(timer);
  }, [isTyping, currentIndex, text, speed, onComplete]);

  // Cursor blinking effect
  useEffect(() => {
    if (!cursor) return;

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorTimer);
  }, [cursor]);

  return (
    <span className={`typewriter-text ${className}`}>
      {displayedText}
      {cursor && (
        <span className={`typewriter-cursor ${showCursor ? 'visible' : ''}`}>
          |
        </span>
      )}
    </span>
  );
}

export default TypewriterText;