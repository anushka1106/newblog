import React, { useMemo } from 'react';

const ParticlesBackground = () => {
  const generateStars = (count, size, color) => {
    let shadows = '';
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * 100);
      const y = Math.floor(Math.random() * 100);
      shadows += `${x}vw ${y}vh ${size}px ${size}px ${color}${i === count - 1 ? '' : ', '}`;
    }
    return shadows;
  };

  const stars1 = useMemo(() => generateStars(300, 1, 'rgba(255, 255, 255, 0.8)'), []);
  const stars2 = useMemo(() => generateStars(150, 2, 'rgba(102, 252, 241, 0.6)'), []);
  const stars3 = useMemo(() => generateStars(50, 3, 'rgba(69, 162, 158, 0.4)'), []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none bg-neptune-dark">
      {/* Star layers */}
      <div className="absolute top-0 left-0 rounded-full animate-twinkle" style={{ boxShadow: stars1, width: '1px', height: '1px', animationDuration: '4s' }}></div>
      <div className="absolute top-0 left-0 rounded-full animate-twinkle" style={{ boxShadow: stars2, width: '1px', height: '1px', animationDuration: '6s', animationDelay: '1s' }}></div>
      <div className="absolute top-0 left-0 rounded-full animate-twinkle" style={{ boxShadow: stars3, width: '1px', height: '1px', animationDuration: '8s', animationDelay: '2s' }}></div>
      
      {/* Nebula glows (matching the universe image aesthetic) */}
      <div className="absolute top-[10%] left-[20%] w-[40vw] h-[20vw] rounded-[100%] bg-neptune-cyan/10 blur-[120px] transform rotate-45 animate-pulse" style={{animationDuration: '10s'}}></div>
      <div className="absolute bottom-[20%] right-[10%] w-[50vw] h-[30vw] rounded-[100%] bg-neptune-blue/40 blur-[150px] transform -rotate-12 animate-pulse" style={{animationDuration: '15s'}}></div>
    </div>
  );
};

export default ParticlesBackground;
