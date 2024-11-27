import React from 'react';

const LightingEffects = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top light beam */}
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-gradient-to-b from-[#FFD70033] to-transparent rotate-15 transform-gpu" />
      
      {/* Bottom right glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#EDD95522] to-transparent rounded-full blur-3xl" />
      
      {/* Left side ambient light */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-gradient-radial from-[#FFD70022] to-transparent rounded-full blur-2xl" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LightingEffects;