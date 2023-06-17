'use client';
import Motion from '@/MotionComponent/Motion';
import {
  SiAdobephotoshop,
  SiCodecademy,
  SiDjango,
  SiDocker,
  SiFigma,
  SiGit,
  SiGraphql,
  SiI18next,
  SiJest,
  SiJupyter,
  SiLua,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPlaywright,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from '@icons-pack/react-simple-icons';

export default function Tech() {
  return (
    <div
      className="min-h-fit bg-accent flex justify-center items-center flex-col gap-12 p-12"
      id="tech"
    >
      <h1 className="text-5xl text-bold text-accent-content">My Tech Stack</h1>
      <h3 className="text-xl font-semibold text-accent-content">
        Some of the tools and technologies I have good experience with
      </h3>
      <Motion delay={0.4} duration={1} initialScale={0.8}>
        <div className="grid gap-10 grid-cols-5 grid-rows-5">
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="Next.js"
          >
            <SiNextdotjs title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="GraphQL"
          >
            <SiGraphql title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="Python"
          >
            <SiPython title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="Typescript"
          >
            <SiTypescript title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="React"
          >
            <SiReact title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="MUI"
          >
            <SiMui title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="Tailwindcss"
          >
            <SiTailwindcss title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="Django"
          >
            <SiDjango title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="Adobe Photoshop"
          >
            <SiAdobephotoshop title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="Docker"
          >
            <SiDocker title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="Figma"
          >
            <SiFigma title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="Prisma"
          >
            <SiPrisma title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="Playwright"
          >
            <SiPlaywright title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="Git"
          >
            <SiGit title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="Jest"
          >
            <SiJest title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="Postman"
          >
            <SiPostman title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="Lua"
          >
            <SiLua title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="Codecademy"
          >
            <SiCodecademy title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="i18nNext"
          >
            <SiI18next color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="Next.js"
          >
            <SiNextdotjs color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="node.js"
          >
            <SiNodedotjs title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="Visual Studio Code"
          >
            <SiVisualstudiocode title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="Jupyter Notebook"
          >
            <SiJupyter title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="Next.js"
          >
            <SiNextdotjs title="" color="#1f262e" size={72} />
          </div>
          <div
            className="bg-slate-100 rounded-md p-2 drop-shadow-lg hover:drop-shadow-xl hover:scale-110 tooltip transition ease-in duration-200"
            data-tip="Next.js"
          >
            <SiNextdotjs title="" color="#1f262e" size={72} />
          </div>
        </div>
      </Motion>
    </div>
  );
}
