import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Mail, Phone, ArrowRight, Github, Linkedin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import selfImg from '../assets/self.jpg';
import ParticleBackground from './ParticleBackground';

interface HeroProps {
  id: string;
  onSectionInView: (section: string) => void;
  onDownloadResume: () => void;
}

const TypewriterText: React.FC = () => {
  const titles = [
    "Cloud Enthusiast",
    "DevOps Learner", 
    "Tech Explorer",
    "Linux Advocate",
    "Automation Builder"
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000); // Pause for 2 seconds
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 30 : 80); // Faster deletion, slower typing

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, isPaused, currentTitleIndex, titles]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-xl md:text-2xl lg:text-3xl font-medium min-h-[3rem] flex items-center"
    >
      <span style={{ color: '#00f8e1' }}>
        {displayedText}
        <span className="animate-pulse ml-1">|</span>
      </span>
    </motion.div>
  );
};

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
      className="min-h-screen flex items-center justify-center px-6 pt-20 pb-10 relative overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-10"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Ritesh Bhusare
                </span>
              </motion.h1>
              
              {/* Typewriter animation */}
              <TypewriterText />
              
              {/* Brief description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                Passionate about building scalable cloud solutions and automating DevOps workflows. 
                Currently exploring containerization, orchestration, and modern deployment strategies.
              </motion.p>
            </div>

            {/* Call-to-Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={onDownloadResume}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <a
                href="https://github.com/riteshbhusare"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-8 py-4 bg-gray-800/80 backdrop-blur-sm text-white font-semibold rounded-xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-[#00f8e1] hover:shadow-lg hover:shadow-[#00f8e1]/25 hover:scale-105 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700/50 to-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center">
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a
                href="https://linkedin.com/in/ritesh-bhusare-5a209330b"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-8 py-4 bg-gray-800/80 backdrop-blur-sm text-white font-semibold rounded-xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-[#00f8e1] hover:shadow-lg hover:shadow-[#00f8e1]/25 hover:scale-105 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700/50 to-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center">
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <div className="flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-700/50 hover:border-[#00f8e1]/50 transition-all duration-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-200">Maharashtra</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-700/50 hover:border-[#00f8e1]/50 transition-all duration-300">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-200">75075***</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-700/50 hover:border-[#00f8e1]/50 transition-all duration-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-200">ritesh495@gmail.com</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - User Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center items-center z-10"
          >
            {/* Floating orbs around the image */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 w-80 h-80 md:w-96 md:h-96"
            >
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#00f8e1] rounded-full blur-sm opacity-60" />
              <div className="absolute top-1/4 right-0 w-2 h-2 bg-blue-400 rounded-full blur-sm opacity-40" />
              <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-purple-400 rounded-full blur-sm opacity-40" />
              <div className="absolute bottom-0 right-1/3 w-3 h-3 bg-cyan-400 rounded-full blur-sm opacity-50" />
            </motion.div>
            
            <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f8e1]/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
              
              <img
                src={selfImg}
                alt="Ritesh Bhusare profile"
                className="relative object-cover w-72 h-72 md:w-80 md:h-80 rounded-3xl shadow-2xl border-4 border-[#00f8e1]/60 bg-gradient-to-br from-blue-100/20 to-purple-100/20 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;