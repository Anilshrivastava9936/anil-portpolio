import { useEffect, useState } from "react";

export default function TypingText() {
  const words = ["Full Stack Developer", "MERN", "Freelancer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (letterIndex < currentWord.length) {
      // Typing each letter
      const typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentWord[letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, 100); // typing speed (100ms per letter)

      return () => clearTimeout(typingTimeout);
    } else {
      // After typing whole word, wait 2 seconds before switching
      const wordTimeout = setTimeout(() => {
        setDisplayText("");
        setLetterIndex(0);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 2000);

      return () => clearTimeout(wordTimeout);
    }
  }, [letterIndex, currentWordIndex]);

  return (
    <p className="mt-4  md:text-3xl text-gray-300 text-xl">
     I am a  {displayText}
      <span className="animate-pulse">|</span> {/* blinking cursor */}
    </p>
  );
}
