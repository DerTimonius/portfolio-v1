'use client';
import { useState } from 'react';

export default function Career() {
  const [displayedSection, setDisplayedSection] = useState(0);

  return (
    <div className="min-h-[66vh] flex justify-center items-center" id="career">
      <div className="min-w-full flex justify-evenly items-center">
        <h1 className="text-5xl text-bold">Career</h1>
        {displayedSection === 0 ? (
          <aside className="min-w-[480px] p-6 m-4">
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
            <p>Lorem ipsum and so on</p>
          </aside>
        ) : displayedSection === 1 ? (
          <aside className="min-w-[480px] p-6 m-4">
            <h2 className="text-2xl">UpLeveled Bootcamp alumn</h2>
            <p>Lorem ipsum and so on</p>
          </aside>
        ) : displayedSection === 2 ? (
          <aside className="min-w-[480px] p-6 m-4">
            <h2 className="text-2xl">Former Anesthesiologist</h2>
            <p>Lorem ipsum and so on</p>
          </aside>
        ) : null}
        {/* <div className="divider divider-vertical"></div> */}
        <div className="steps steps-vertical mr-24">
          <button
            className="step step-accent"
            data-content=""
            onClick={() => setDisplayedSection(0)}
          >
            Developer
          </button>
          <button
            className="step step-accent"
            data-content=""
            onClick={() => setDisplayedSection(1)}
          >
            Coding Journey
          </button>
          <button
            className="step step-accent"
            data-content=""
            onClick={() => setDisplayedSection(2)}
          >
            Physician
          </button>
          {/* <button
            className="step"
            data-content=""
            onClick={() => setDisplayedSection(3)}
          >
            Student
          </button> */}
        </div>
      </div>
    </div>
  );
}
