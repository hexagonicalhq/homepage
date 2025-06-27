import { useRef, useEffect, useState } from 'react';

type TerminalLine = {
  prompt: string;
  text: string;
};

interface TerminalProps {
  lines: TerminalLine[];
}

export const Terminal = ({ lines }: TerminalProps) => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTyping();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const startTyping = () => {
    lines.forEach((_, index) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, index]);
      }, 700 * index);
    });
  };

  const getPromptClass = (prompt: string) => {
    switch (prompt) {
      case 'info':
        return 'text-blue-400';
      case 'success':
        return 'text-hexGreen-500';
      case 'error':
        return 'text-red-500';
      default:
        return 'text-hexGreen-500';
    }
  };

  return (
    <div ref={terminalRef} className="terminal">
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500"></div>
        <div className="terminal-dot bg-yellow-500"></div>
        <div className="terminal-dot bg-green-500"></div>
        <div className="flex-1 text-center text-xs text-hexGray-400">hexagonical ~ terminal</div>
      </div>
      <div className="terminal-body">
        {lines.map((line, index) => (
          <div 
            key={index} 
            className={`terminal-line ${visibleLines.includes(index) ? 'shown' : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <span className={`terminal-prompt ${getPromptClass(line.prompt)}`}>
              {line.prompt === 'info' || line.prompt === 'success' || line.prompt === 'error' 
                ? '' 
                : line.prompt}
            </span>
            <span className="text-hexGray-300">
              {line.text}
              {index === visibleLines.length - 1 && <span className="cursor"></span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
