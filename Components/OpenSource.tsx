'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function OpenSource() {
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

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div
      className="min-h-fit flex justify-center items-center flex-col gap-12 py-16 mt-16"
      id="open-source"
    >
      <h2 className="text-5xl">Open Sourcerer</h2>
      <div className="m-6 text-left prose font-mono flex flex-col items-center">
        <p className="text-lg">
          Open Source Development has proven a great opportunity for me to learn
          more about coding, architecture and best practices.
        </p>
        <h4 className="text-xl">Some projects I contributed to</h4>
        <motion.ul
          variants={container}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          ref={elementRef}
        >
          <motion.li variants={item} className="-mb-4">
            <p> Bokeh</p>
          </motion.li>
          <motion.li variants={item}>Next.js</motion.li>
          <motion.li variants={item}>Abracadabra</motion.li>
          <motion.li variants={item}>Material UI</motion.li>
          <motion.li variants={item}>Definitely Typed</motion.li>
        </motion.ul>
      </div>
    </div>
  );
}
