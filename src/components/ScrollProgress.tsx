import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed left-4 top-20 bottom-4 w-1 bg-gray-800 rounded-full z-40"
      style={{ scaleY }}
    >
      <motion.div
        className="w-full bg-gradient-to-b from-blue-400 to-purple-600 rounded-full origin-top"
        style={{ scaleY }}
      />
    </motion.div>
  );
};

export default ScrollProgress;