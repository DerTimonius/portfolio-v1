'use client';
import {
  SiDjango,
  SiGraphql,
  SiMui,
  SiNextdotjs,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from '@icons-pack/react-simple-icons';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Tech() {
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
      className="min-h-fit flex justify-center items-center flex-col gap-12 p-12"
      id="tech"
    >
      <h1 className="text-5xl text-bold">My Tech Stack</h1>
      <h3 className="text-xl font-mono prose">
        Some of the tools and technologies I have good experience with
      </h3>
      <motion.ul
        className="grid gap-10 grid-cols-3"
        variants={container}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        ref={elementRef}
      >
        <motion.li
          className="bg-gray-900 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200 max-w-min"
          data-tip="Next.js"
          variants={item}
        >
          <SiNextdotjs title="" color="#f3f3f3" size={96} />
        </motion.li>
        <motion.li
          className="bg-gray-900 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200 max-w-min"
          data-tip="GraphQL"
          variants={item}
        >
          <SiGraphql title="" color="#f3f3f3" size={96} />
        </motion.li>
        <motion.li
          className="bg-gray-900 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200 max-w-min"
          data-tip="Python"
          variants={item}
        >
          <SiPython title="" color="#f3f3f3" size={96} />
        </motion.li>
        <motion.li
          className="bg-gray-900 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200 max-w-min"
          data-tip="Typescript"
          variants={item}
        >
          <SiTypescript title="" color="#f3f3f3" size={96} />
        </motion.li>
        <motion.li
          className="bg-gray-900 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200 max-w-min"
          data-tip="React"
          variants={item}
        >
          <SiReact title="" color="#f3f3f3" size={96} />
        </motion.li>
        <motion.li
          className="bg-gray-900 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200 max-w-min"
          data-tip="MUI"
          variants={item}
        >
          <SiMui title="" color="#f3f3f3" size={96} />
        </motion.li>
        <motion.li
          className="bg-gray-900 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200 max-w-min"
          data-tip="Tailwindcss"
          variants={item}
        >
          <SiTailwindcss title="" color="#f3f3f3" size={96} />
        </motion.li>
        <motion.li
          className="bg-gray-900 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200 max-w-min"
          data-tip="Django"
          variants={item}
        >
          <SiDjango title="" color="#f3f3f3" size={96} />
        </motion.li>
        <motion.li
          className="bg-gray-900 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200 max-w-min"
          data-tip="Prisma"
          variants={item}
        >
          <SiPrisma title="" color="#f3f3f3" size={96} />
        </motion.li>
      </motion.ul>
    </div>
  );
}
