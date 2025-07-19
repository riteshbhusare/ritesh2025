import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface Asteroid {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const starsRef = useRef<Star[]>([]);
  const asteroidsRef = useRef<Asteroid[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      const stars: Star[] = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 8000); // Responsive star count
      
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinkleOffset: Math.random() * Math.PI * 2
        });
      }
      return stars;
    };

    const createAsteroids = () => {
      const asteroids: Asteroid[] = [];
      const numAsteroids = Math.floor((canvas.width * canvas.height) / 50000); // Fewer asteroids
      
      for (let i = 0; i < numAsteroids; i++) {
        asteroids.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 500 + 500,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 0.3 + 0.05,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          opacity: Math.random() * 0.4 + 0.1
        });
      }
      return asteroids;
    };

    const drawStar = (star: Star, time: number) => {
      const perspective = 1000 / (1000 - star.z);
      const x = star.x * perspective;
      const y = star.y * perspective;
      const size = star.size * perspective;
      
      // Twinkling effect
      const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
      const alpha = star.opacity * twinkle;
      
      // Create glow effect
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
      gradient.addColorStop(0, `rgba(147, 197, 253, ${alpha})`); // Blue-300
      gradient.addColorStop(0.3, `rgba(96, 165, 250, ${alpha * 0.6})`); // Blue-400
      gradient.addColorStop(1, `rgba(59, 130, 246, 0)`); // Blue-500 transparent
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size * 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Core star
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.beginPath();
      ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawAsteroid = (asteroid: Asteroid, time: number) => {
      const perspective = 1000 / (1000 - asteroid.z);
      const x = asteroid.x * perspective;
      const y = asteroid.y * perspective;
      const size = asteroid.size * perspective;
      
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(asteroid.rotation);
      
      // Subtle glow
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 2);
      gradient.addColorStop(0, `rgba(168, 85, 247, ${asteroid.opacity * 0.3})`); // Purple-500
      gradient.addColorStop(1, `rgba(168, 85, 247, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, size * 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Asteroid shape (irregular)
      ctx.fillStyle = `rgba(156, 163, 175, ${asteroid.opacity})`; // Gray-400
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const radius = size * (0.7 + Math.sin(angle * 3 + time * 0.001) * 0.3);
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
      
      ctx.restore();
    };

    const animate = () => {
      timeRef.current += 16; // Approximate 60fps
      const time = timeRef.current;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw stars
      starsRef.current.forEach(star => {
        star.z -= star.speed;
        if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }
        drawStar(star, time);
      });
      
      // Update and draw asteroids
      asteroidsRef.current.forEach(asteroid => {
        asteroid.z -= asteroid.speed;
        asteroid.rotation += asteroid.rotationSpeed;
        if (asteroid.z <= 0) {
          asteroid.z = 1000;
          asteroid.x = Math.random() * canvas.width;
          asteroid.y = Math.random() * canvas.height;
        }
        drawAsteroid(asteroid, time);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const init = () => {
      resizeCanvas();
      starsRef.current = createStars();
      asteroidsRef.current = createAsteroids();
      animate();
    };

    init();

    const handleResize = () => {
      resizeCanvas();
      starsRef.current = createStars();
      asteroidsRef.current = createAsteroids();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default StarBackground;