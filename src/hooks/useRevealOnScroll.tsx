
import { useEffect } from 'react';

interface RevealProps {
  selector: string;
  threshold?: number;
}

export const useRevealOnScroll = ({ selector, threshold = 0.1 }: RevealProps) => {
  useEffect(() => {
    const handleReveal = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
            }
          });
        },
        { threshold }
      );

      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => observer.observe(element));

      return () => {
        elements.forEach((element) => observer.unobserve(element));
      };
    };

    handleReveal();
  }, [selector, threshold]);
};

export default useRevealOnScroll;
