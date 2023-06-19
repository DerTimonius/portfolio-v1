'use client';
import Motion from './Motion';

export default function HeroSection() {
  return (
    <div className="hero min-h-screen bg-info-content">
      <div className="hero-content flex-col lg:flex-row">
        <div className="prose">
          <Motion duration={0.8}>
            <h1 className="text-8xl text-info font-extrabold">DerTimonius</h1>
          </Motion>
          <Motion delay={0.6} duration={0.8}>
            <h4 className="text-3xl text-neutral-content font-semibold">
              Full Stack Developer. Open Sourcerer.
            </h4>
          </Motion>
        </div>
      </div>
    </div>
  );
}
