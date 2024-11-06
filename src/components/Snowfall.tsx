import React from 'react';

export default function Snowfall() {
  const snowflakes = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 15}s`,
    opacity: Math.random() * 0.7 + 0.3, // Increased opacity
    fontSize: `${Math.random() * 24 + 8}px`, // Varied sizes
    duration: `${Math.random() * 10 + 10}s` // Varied durations
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.left,
            animationDelay: flake.animationDelay,
            animationDuration: flake.duration,
            opacity: flake.opacity,
            fontSize: flake.fontSize,
            color: '#fff',
            textShadow: '0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.5)'
          }}
        >
          •
        </div>
      ))}
    </div>
  );
}