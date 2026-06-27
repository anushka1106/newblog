import React from 'react';

const DynamicBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 bg-warm-beige">
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: 'radial-gradient(#1A1918 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      {/* Moving gradient blobs */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#E5D5B5] blur-[100px] opacity-70 animate-blob" 
        style={{animationDuration: '20s'}}
      ></div>
      <div 
        className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#E8D1C4] blur-[120px] opacity-60 animate-blob" 
        style={{animationDuration: '25s', animationDelay: '2s'}}
      ></div>
      <div 
        className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[#C9D1C2] blur-[130px] opacity-50 animate-blob" 
        style={{animationDuration: '30s', animationDelay: '4s'}}
      ></div>
    </div>
  );
};

export default DynamicBackground;
