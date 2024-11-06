import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2024-12-06T19:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-2">
        <Clock className="w-6 h-6 text-red-400" />
        <h2 className="text-2xl font-semibold text-white">Time Until The Celebration</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg border border-white/20">
            <span className="text-3xl font-bold text-red-400">{value}</span>
            <span className="text-sm text-white/80 capitalize">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}