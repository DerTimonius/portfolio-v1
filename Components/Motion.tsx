import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface MotionProps extends React.PropsWithChildren {
  className?: string;
  delay?: number;
  duration?: number;
  initialScale?: number;
  translateX?: number;
  translateY?: number;
}

export default function Motion({
  children,
  delay = 0,
  duration = 0.6,
  initialScale = 0.7,
  className,
}: MotionProps) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Adjust the threshold value as needed
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      // Clean up the observer when the component unmounts
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      ref={elementRef}
      className={className}
      animate={isVisible && { opacity: 1, scale: 1 }}
      // whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: initialScale }}
      transition={{
        ease: 'easeInOut',
        duration,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
