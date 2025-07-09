import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AboutProps {
  id: string;
  onSectionInView: (section: string) => void;
}

const About: React.FC<AboutProps> = ({ id, onSectionInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      onSectionInView(id);
    }
  }, [inView, id, onSectionInView]);

  return (
    <section
      ref={ref}
      id={id}
      className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-8">
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl" />
          
          <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              I am <span className="text-blue-400 font-semibold">Ritesh Ishwar Bhusare</span>, born on April 1, 2005. 
              A passionate tech learner focused on <span className="text-purple-400 font-semibold">Cloud Computing</span> and{' '}
              <span className="text-purple-400 font-semibold">DevOps</span>, I'm currently pursuing{' '}
              <span className="text-blue-400 font-semibold">B.Sc. (Hons) in Computer Science</span> at{' '}
              <span className="text-blue-400 font-semibold">MGM University, Chhatrapati Sambhajinagar</span>. 
              I enjoy building projects using <span className="text-purple-400 font-semibold">Linux</span>,{' '}
              <span className="text-purple-400 font-semibold">automation tools</span>, and{' '}
              <span className="text-purple-400 font-semibold">containerized environments</span>.
            </motion.p>
          </div>

          {/* Floating decorative elements */}
          <motion.div
            className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/20 rounded-full blur-sm"
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-400/20 rounded-full blur-sm"
            animate={{
              y: [0, 10, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;