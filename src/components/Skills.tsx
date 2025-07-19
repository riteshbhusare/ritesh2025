import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Terminal, 
  Database, 
  Cloud, 
  Wrench,
  Zap
} from 'lucide-react';

interface SkillsProps {
  id: string;
  onSectionInView: (section: string) => void;
}

const Skills: React.FC<SkillsProps> = ({ id, onSectionInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      onSectionInView(id);
    }
  }, [inView, id, onSectionInView]);

  const skills = [
    { name: 'Docker', icon: <Database className="w-8 h-8" />, color: 'from-blue-400 to-blue-600' },
    { name: 'Linux', icon: <Terminal className="w-8 h-8" />, color: 'from-green-400 to-green-600' },
    { name: 'Jenkins', icon: <Wrench className="w-8 h-8" />, color: 'from-orange-400 to-orange-600' },
    { name: 'Python', icon: <Code className="w-8 h-8" />, color: 'from-yellow-400 to-yellow-600' },
    { name: 'C++', icon: <Code className="w-8 h-8" />, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Streamlit', icon: <Zap className="w-8 h-8" />, color: 'from-pink-400 to-pink-600' },
    { name: 'Cloud', icon: <Cloud className="w-8 h-8" />, color: 'from-purple-400 to-blue-600' }
  ];

  return (
    <section
      ref={ref}
      id={id}
      className="py-20 px-6 bg-gradient-to-br from-black to-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-8">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300`} />
              
              {/* Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="flex flex-col items-center space-y-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-gray-100 transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;