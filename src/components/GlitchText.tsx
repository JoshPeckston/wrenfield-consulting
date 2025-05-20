"use client";

import { useState, useEffect, useCallback } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchChars?: string;
  intervalMinMs?: number;
  intervalMaxMs?: number;
  glitchDurationMs?: number;
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = '',
  glitchChars = '▓▒░█?#@&*%^!<>', // Characters to use for glitching
  intervalMinMs = 3000, // Minimum time between glitches
  intervalMaxMs = 7000, // Maximum time between glitches
  glitchDurationMs = 150, // How long each glitch animation lasts
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const triggerGlitch = useCallback(() => {
    if (isGlitching) return;
    setIsGlitching(true);

    let iteration = 0;
    const totalIterations = Math.max(5, Math.floor(glitchDurationMs / 30)); // At least 5 iterations, roughly 30ms per frame

    const glitchIntervalId = setInterval(() => {
      if (iteration >= totalIterations) {
        clearInterval(glitchIntervalId);
        setDisplayText(text);
        setIsGlitching(false);
        return;
      }

      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            // Only glitch a few characters at a time
            if (char !== ' ' && Math.random() < 0.15) {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
          })
          .join('')
      );
      iteration++;
    }, 30); // Update frame every 30ms

  }, [text, glitchChars, glitchDurationMs, isGlitching]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const scheduleNextGlitch = () => {
      const nextGlitchTime = Math.random() * (intervalMaxMs - intervalMinMs) + intervalMinMs;
      timeoutId = setTimeout(() => {
        triggerGlitch();
        scheduleNextGlitch(); 
      }, nextGlitchTime);
    };

    scheduleNextGlitch();

    return () => clearTimeout(timeoutId);
  }, [triggerGlitch, intervalMinMs, intervalMaxMs]);

  return <span className={className}>{displayText}</span>;
};

export default GlitchText;
