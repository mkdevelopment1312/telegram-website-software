
import { useEffect, useState } from 'react';
import { Code2, Cpu, Database, Globe, Lock, Zap } from 'lucide-react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  icon: React.ComponentType<any>;
  rotation: number;
  rotationSpeed: number;
  scale: number;
  opacity: number;
}

export const FloatingElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  const icons = [Code2, Cpu, Database, Globe, Lock, Zap];

  useEffect(() => {
    const newElements: FloatingElement[] = [];
    
    for (let i = 0; i < 8; i++) {
      newElements.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        icon: icons[Math.floor(Math.random() * icons.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        scale: Math.random() * 0.5 + 0.3,
        opacity: Math.random() * 0.3 + 0.1
      });
    }
    
    setElements(newElements);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setElements(prev => prev.map(element => ({
        ...element,
        x: element.x + element.vx,
        y: element.y + element.vy,
        rotation: element.rotation + element.rotationSpeed,
        vx: element.x <= 0 || element.x >= window.innerWidth ? -element.vx : element.vx,
        vy: element.y <= 0 || element.y >= window.innerHeight ? -element.vy : element.vy
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setElements(prev => prev.map(element => ({
        ...element,
        x: Math.min(element.x, window.innerWidth),
        y: Math.min(element.y, window.innerHeight)
      })));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {elements.map((element) => {
        const Icon = element.icon;
        return (
          <div
            key={element.id}
            className="absolute transition-all duration-100 ease-linear"
            style={{
              left: element.x,
              top: element.y,
              transform: `rotate(${element.rotation}deg) scale(${element.scale})`,
              opacity: element.opacity
            }}
          >
            <Icon 
              className="w-8 h-8 text-neon-green"
              style={{
                filter: `drop-shadow(0 0 8px hsl(142 76% 36% / 0.4))`
              }}
            />
          </div>
        );
      })}
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(142 76% 36% / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(142 76% 36% / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}
        />
      </div>
    </div>
  );
};
