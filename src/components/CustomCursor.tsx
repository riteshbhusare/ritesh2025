import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Add to trail
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        return newTrail.slice(-8); // Keep only last 8 positions
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add event listeners for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'button, a, [role="button"], input, textarea, select, .cursor-pointer, .group'
      );

      interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', () => setIsHovering(true));
        element.addEventListener('mouseleave', () => setIsHovering(false));
      });

      return () => {
        interactiveElements.forEach((element) => {
          element.removeEventListener('mouseenter', () => setIsHovering(true));
          element.removeEventListener('mouseleave', () => setIsHovering(false));
        });
      };
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    
    const cleanup = addHoverListeners();

    // Re-add listeners when DOM changes (for dynamic content)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      cleanup();
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div
          className="w-5 h-5 rounded-full border-2 border-[#00f8e1]"
          style={{
            background: isHovering 
              ? 'radial-gradient(circle, rgba(0,248,225,0.3) 0%, rgba(0,248,225,0.1) 70%, transparent 100%)'
              : 'radial-gradient(circle, rgba(0,248,225,0.2) 0%, rgba(0,248,225,0.05) 70%, transparent 100%)',
            boxShadow: isHovering 
              ? '0 0 20px rgba(0,248,225,0.6), 0 0 40px rgba(0,248,225,0.3)'
              : '0 0 10px rgba(0,248,225,0.4), 0 0 20px rgba(0,248,225,0.2)',
          }}
        />
      </motion.div>

      {/* Trail effect */}
      {trail.map((point, index) => (
          <motion.div
            key={point.id}
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            initial={{ 
              x: point.x - 3,
              y: point.y - 3,
              scale: 1,
              opacity: 0.6
            }}
            animate={{ 
              scale: 0,
              opacity: 0
            }}
            transition={{ 
              duration: 0.8,
              delay: index * 0.05,
              ease: "easeOut"
            }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full bg-[#00f8e1]"
              style={{
                boxShadow: '0 0 6px rgba(0,248,225,0.8)',
                opacity: (index + 1) / trail.length * 0.6,
              }}
            />
          </motion.div>
        ))}

      {/* Enhanced ripple effect on hover */}
      {isHovering && (
        <>
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9997]"
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ 
              scale: 3, 
              opacity: 0,
              x: mousePosition.x - 20,
              y: mousePosition.y - 20,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            key={`ripple1-${mousePosition.x}-${mousePosition.y}`}
          >
            <div
              className="w-10 h-10 rounded-full border border-[#00f8e1]"
              style={{
                background: 'radial-gradient(circle, rgba(0,248,225,0.1) 0%, transparent 70%)',
              }}
            />
          </motion.div>
          
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9996]"
            initial={{ scale: 0, opacity: 0.4 }}
            animate={{ 
              scale: 4, 
              opacity: 0,
              x: mousePosition.x - 25,
              y: mousePosition.y - 25,
            }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
            key={`ripple2-${mousePosition.x}-${mousePosition.y}`}
          >
            <div
              className="w-12 h-12 rounded-full border border-[#00f8e1]/50"
              style={{
                background: 'radial-gradient(circle, rgba(0,248,225,0.05) 0%, transparent 70%)',
              }}
            />
          </motion.div>
        </>
      )}
    </>
  );
};

export default CustomCursor;