import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GOLDEN = 'rgba(255, 215, 0, 0.7)'; // #FFD700, soft golden
const GOLDEN_SOFT = 'rgba(255, 215, 0, 0.3)';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() + Math.random() }];
        return newTrail.slice(-14); // Smoother, longer trail
      });
    };
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {trail.map((point, index) => {
        const progress = (index + 1) / trail.length;
        const size = 18 + progress * 22;
        const opacity = 0.18 + progress * 0.32;
        const blur = 8 + progress * 18;
        return (
          <motion.div
            key={point.id}
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            initial={{
              x: point.x - size / 2,
              y: point.y - size / 2,
              scale: 0.7,
              opacity,
            }}
            animate={{
              scale: 1.1,
              opacity: 0,
            }}
            transition={{
              duration: 0.7 + progress * 0.3,
              ease: 'easeOut',
            }}
            style={{
              filter: `blur(${blur}px)`
            }}
          >
            <div
              style={{
                width: size,
                height: size,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${GOLDEN} 0%, ${GOLDEN_SOFT} 70%, transparent 100%)`,
                boxShadow: `0 0 ${18 + progress * 22}px ${GOLDEN}`,
                opacity,
              }}
            />
          </motion.div>
        );
      })}
    </>
  );
};

export default CustomCursor;