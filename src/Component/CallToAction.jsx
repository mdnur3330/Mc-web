import React from 'react';
import Container from './Container';
import Button from './Button';

const CallToAction = () => {
  return (
    <section className="relative py-20">
      {/* Glass Overlay Background */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl  pointer-events-none z-0"></div>

      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end relative z-10 gap-6">
          <h3 className="section-title text-white/90">
            START YOUR <br /> JOURNEY TODAY
          </h3>
          <Button
            label="Explore program"
            className="btn-secondary bg-white/20 backdrop-blur-md border border-white/30 text-white/90 hover:bg-white/30 hover:text-white transition-all duration-300"
          />
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
