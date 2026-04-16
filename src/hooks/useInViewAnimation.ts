import { useEffect, useRef, useState } from 'react';

interface UseInViewAnimationOptions {
  threshold?: number | number[];
  margin?: string;
}

export function useInViewAnimation(options: UseInViewAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Parar de observar após animar uma vez
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.margin ?? '0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.margin]);

  return { ref, isInView };
}
