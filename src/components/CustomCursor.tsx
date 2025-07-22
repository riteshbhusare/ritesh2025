import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
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
        'button, a, [role="button"], input, textarea, select, .cursor-pointer'
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

      {/* Ripple effect on hover */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ 
            scale: 2, 
            opacity: 0,
            x: mousePosition.x - 15,
            y: mousePosition.y - 15,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          key={`${mousePosition.x}-${mousePosition.y}`}
        >
          <div
            className="w-8 h-8 rounded-full border border-[#00f8e1]"
            style={{
              background: 'radial-gradient(circle, rgba(0,248,225,0.1) 0%, transparent 70%)',
            }}
          />
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;