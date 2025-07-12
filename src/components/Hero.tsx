import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Mail, Phone } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface HeroProps {
  id: string;
  onSectionInView: (section: string) => void;
  onDownloadResume: () => void;
}

const Hero: React.FC<HeroProps> = ({ id, onSectionInView, onDownloadResume }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
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
      className="min-h-screen flex items-center justify-center px-6 pt-20 pb-10 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-white leading-tight"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Ritesh Bhusare
                </span>
              </motion.h1>
              {/* Typing animation under the name */}
              <TypingAnimation text="Aspiring Cloud Engineer | DevOps Enthusiast" />
            </div>

            {/* Download Resume Button */}
            <div>
              <button
                onClick={() => {}}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer"
              >
                <span className="relative z-10 flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </span>
              </button>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <div className="flex items-center gap-2 bg-gray-800/60 px-4 py-2 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-200">Chhatrapati Sambhajinagar</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/60 px-4 py-2 rounded-lg">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-200">750756249</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/60 px-4 py-2 rounded-lg">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-200">riteshbhusare495@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Neon Figure */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-80 h-96 md:w-96 md:h-[500px]">
              {/* Neon Outline Figure */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl" />
              <div className="relative w-full h-full border-2 border-blue-400/50 rounded-3xl bg-gradient-to-b from-blue-900/10 to-purple-900/10 backdrop-blur-sm overflow-hidden">
                
                {/* Animated Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Placeholder for actual figure */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 animate-pulse" />
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-10 left-10 w-3 h-3 bg-blue-400 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-16 right-12 w-2 h-2 bg-purple-400 rounded-full"
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TypingAnimation: React.FC<{ text: string }> = ({ text }) => {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    setDisplayed('');
    const interval = setInterval(() => {
      setDisplayed((prev) => (i < text.length ? prev + text[i] : prev));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [text]);
  return (
    <span className="text-xl md:text-2xl text-gray-300 font-medium block min-h-[2.5rem]">{displayed}</span>
  );
};

export default Hero;