
import { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
  id: number;
}

export const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    let idCounter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
        id: idCounter++
      };

      setTrail(prev => {
        const filtered = prev.filter(point => Date.now() - point.timestamp < 800);
        return [...filtered, newPoint].slice(-15);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {trail.map((point, index) => {
        const age = Date.now() - point.timestamp;
        const opacity = Math.max(0, 1 - age / 800);
        const scale = Math.max(0.1, 1 - age / 800);
        const hue = (Date.now() / 20) % 360;
        
        return (
          <div
            key={point.id}
            className="cursor-trail-enhanced"
            style={{
              left: point.x - 4,
              top: point.y - 4,
              opacity,
              transform: `scale(${scale})`,
              background: `hsl(${hue}, 70%, 60%)`,
              boxShadow: `0 0 ${10 * scale}px hsl(${hue}, 70%, 60%)`,
              transition: 'opacity 50ms ease-out'
            }}
          />
        );
      })}
    </>
  );
};
