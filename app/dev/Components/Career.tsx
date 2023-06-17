'use client';
import Motion from '@/MotionComponent/Motion';
import { useState } from 'react';

export default function Career() {
  const [displayedSection, setDisplayedSection] = useState(0);

  return (
    <div className="min-h-[66vh] flex justify-center items-center" id="career">
      <div className="min-w-full flex flex-col items-center">
        <h1 className="text-5xl text-bold flex justify-center">Career</h1>
        <Motion delay={0.2} initialScale={0.8}>
          <div className="tabs my-12">
            <button
              className={`tab tab-lg tab-lifted ${
                displayedSection === 0 && 'tab-active'
              }`}
              onClick={() => setDisplayedSection(0)}
            >
              Developer
            </button>
            <button
              className={`tab tab-lg tab-lifted ${
                displayedSection === 1 && 'tab-active'
              }`}
              onClick={() => setDisplayedSection(1)}
            >
              Coding Journey
            </button>
            <button
              className={`tab tab-lg tab-lifted ${
                displayedSection === 2 && 'tab-active'
              }`}
              onClick={() => setDisplayedSection(2)}
            >
              Physician
            </button>
          </div>
          {displayedSection === 0 ? (
            <aside className="min-w-[560px] p-6 m-4 prose font-mono">
              <h2 className="text-2xl">
                Full Stack Developer at{' '}
                <a
                  className="link"
                  href="https://ava.services/"
                  referrerPolicy="no-referrer"
                >
                  ava
                </a>
              </h2>
              <p>
                Currently working at ava, creating a platform for people with
                disabilities to plan their assistances without needing to be
                associated with organisations.
              </p>
            </aside>
          ) : displayedSection === 1 ? (
            <aside className="min-w-[560px] p-6 m-4 prose font-mono">
              <h2 className="text-2xl">UpLeveled Bootcamp alumn</h2>
              <p>After taking the leap of faith to change careers</p>
            </aside>
          ) : displayedSection === 2 ? (
            <aside className="min-w-[560px] p-6 m-4 prose font-mono">
              <h2 className="text-2xl">Former Anesthesiologist</h2>
              <p>
                Before I switched to coding I was working as a physician and
                anesthesiologist. A job with a lot of responsibility where
                thoroughness is key.
              </p>
            </aside>
          ) : null}
        </Motion>
        {/* <div className="divider divider-vertical"></div> */}

        {/* <button
            className="step"

            onClick={() => setDisplayedSection(3)}
          >
            Student
          </button> */}
      </div>
      {/* </div> */}
    </div>
  );
}
