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
import { inView, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Tech() {
  const ref = useRef(null);
  const isInView = useInView(ref);

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
      className="min-h-fit bg-accent flex justify-center items-center flex-col gap-12 p-12"
      id="tech"
    >
      <h1 className="text-5xl text-bold text-accent-content">My Tech Stack</h1>
      <h3 className="text-xl font-semibold text-accent-content">
        Some of the tools and technologies I have good experience with
      </h3>
      <motion.ul
        className="grid gap-10 grid-cols-3"
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        ref={ref}
      >
        <motion.li
          className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200 max-w-min"
          data-tip="Next.js"
          variants={item}
        >
          <SiNextdotjs title="" color="#1f262e" size={96} />
        </motion.li>
        <motion.li
          className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200 max-w-min"
          data-tip="GraphQL"
          variants={item}
        >
          <SiGraphql title="" color="#1f262e" size={96} />
        </motion.li>
        <motion.li
          className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200 max-w-min"
          data-tip="Python"
          variants={item}
        >
          <SiPython title="" color="#1f262e" size={96} />
        </motion.li>
        <motion.li
          className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200 max-w-min"
          data-tip="Typescript"
          variants={item}
        >
          <SiTypescript title="" color="#1f262e" size={96} />
        </motion.li>
        <motion.li
          className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200 max-w-min"
          data-tip="React"
          variants={item}
        >
          <SiReact title="" color="#1f262e" size={96} />
        </motion.li>
        <motion.li
          className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200 max-w-min"
          data-tip="MUI"
          variants={item}
        >
          <SiMui title="" color="#1f262e" size={96} />
        </motion.li>
        <motion.li
          className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200 max-w-min"
          data-tip="Tailwindcss"
          variants={item}
        >
          <SiTailwindcss title="" color="#1f262e" size={96} />
        </motion.li>
        <motion.li
          className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200 max-w-min"
          data-tip="Django"
          variants={item}
        >
          <SiDjango title="" color="#1f262e" size={96} />
        </motion.li>
        <motion.li
          className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200 max-w-min"
          data-tip="Prisma"
          variants={item}
        >
          <SiPrisma title="" color="#1f262e" size={96} />
        </motion.li>
      </motion.ul>
    </div>
  );
}
