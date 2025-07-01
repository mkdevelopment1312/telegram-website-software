
import { useEffect, useRef } from 'react';

export const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Floating orbs with different behaviors
    const orbs: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;
      pulseSpeed: number;
    }> = [];

    // Grid lines
    const gridLines: Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      opacity: number;
    }> = [];

    // Create floating orbs
    for (let i = 0; i < 30; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        hue: 142 + Math.random() * 40 - 20,
        pulseSpeed: Math.random() * 0.02 + 0.01
      });
    }

    // Create grid lines
    for (let i = 0; i < 20; i++) {
      gridLines.push({
        x1: Math.random() * canvas.width,
        y1: Math.random() * canvas.height,
        x2: Math.random() * canvas.width,
        y2: Math.random() * canvas.height,
        opacity: Math.random() * 0.1 + 0.02
      });
    }

    let animationFrame = 0;

    const draw = () => {
      animationFrame++;

      // Dark gradient background with subtle animation
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(animationFrame * 0.01) * 100, 
        canvas.height / 2 + Math.cos(animationFrame * 0.01) * 100, 
        0,
        canvas.width / 2, 
        canvas.height / 2, 
        Math.max(canvas.width, canvas.height)
      );
      gradient.addColorStop(0, `rgba(5, 5, 10, 0.98)`);
      gradient.addColorStop(0.5, `rgba(2, 2, 8, 0.99)`);
      gradient.addColorStop(1, `rgba(0, 0, 0, 1)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      gridLines.forEach((line, index) => {
        ctx.globalAlpha = line.opacity * (0.5 + 0.5 * Math.sin(animationFrame * 0.01 + index));
        ctx.strokeStyle = `hsl(142, 76%, 36%)`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
      });

      // Draw floating orbs
      orbs.forEach((orb, index) => {
        const pulse = Math.sin(animationFrame * orb.pulseSpeed) * 0.5 + 0.5;
        const currentOpacity = orb.opacity * (0.3 + pulse * 0.7);
        
        ctx.globalAlpha = currentOpacity;
        
        // Create gradient for each orb
        const orbGradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.size * (2 + pulse)
        );
        orbGradient.addColorStop(0, `hsla(${orb.hue}, 76%, 56%, 0.8)`);
        orbGradient.addColorStop(0.5, `hsla(${orb.hue}, 76%, 46%, 0.4)`);
        orbGradient.addColorStop(1, `hsla(${orb.hue}, 76%, 36%, 0)`);
        
        ctx.fillStyle = orbGradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.size * (1 + pulse * 0.5), 0, Math.PI * 2);
        ctx.fill();

        // Update position
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Wrap around edges
        if (orb.x < -orb.size) orb.x = canvas.width + orb.size;
        if (orb.x > canvas.width + orb.size) orb.x = -orb.size;
        if (orb.y < -orb.size) orb.y = canvas.height + orb.size;
        if (orb.y > canvas.height + orb.size) orb.y = -orb.size;
      });

      ctx.globalAlpha = 1;
    };

    const interval = setInterval(draw, 60);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-60 z-0"
      style={{ background: 'transparent' }}
    />
  );
};
