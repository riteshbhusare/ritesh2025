import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Mail, Phone, ArrowRight, Github, Linkedin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import selfImg from '../assets/self.jpg';
import ParticleBackground from './ParticleBackground';
import StarBackground from './StarBackground';

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

const GITHUB_COLOR = '#181717';
const LINKEDIN_COLOR = '#0077B5';

const FloatingContactBox: React.FC<{ href: string; icon: React.ReactNode; borderColor: string; bgColor: string; label: string; style?: React.CSSProperties }> = ({ href, icon, borderColor, bgColor, label, style }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="absolute flex items-center justify-center w-14 h-14 rounded-2xl shadow-lg backdrop-blur-md"
    style={{
      border: `2.5px solid ${borderColor}`,
      background: bgColor,
      zIndex: 10,
      ...style,
    }}
    aria-label={label}
  >
    {icon}
  </a>
);

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
      {/* Particle/Star Background */}
      <ParticleBackground />
      <div className="container mx-auto max-w-6xl z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              Hi, I'm <span className="text-purple-400">Ritesh Bhusare</span>
            </motion.h1>
            <TypewriterText />
            <div className="flex gap-4 mt-8">
              <button
                onClick={onDownloadResume}
                className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                aria-label="Download Resume"
              >
                <Download className="w-7 h-7" />
              </button>
              <a
                href="https://github.com/riteshbhusare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                style={{ background: GITHUB_COLOR }}
                aria-label="GitHub"
              >
                <Github className="w-7 h-7 text-white" />
              </a>
              <a
                href="https://linkedin.com/in/ritesh-bhusare-5a209330b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                style={{ background: LINKEDIN_COLOR }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-7 h-7 text-white" />
              </a>
            </div>
          </div>
          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center items-center z-10"
          >
            <AnimatedProfileBorder>
              <img
                src={selfImg}
                alt="Ritesh Bhusare profile"
                className="object-cover w-72 h-72 md:w-80 md:h-80 rounded-3xl shadow-2xl border-4 bg-gradient-to-br from-blue-100/20 to-purple-100/20 hover:scale-105 transition-transform duration-500"
              />
            </AnimatedProfileBorder>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Add AnimatedGradientText and AnimatedProfileBorder components at the top of the file:

// AnimatedGradientText: smoothly cycles through sky blue, royal purple, warm golden, back to sky blue
const gradientColors = [
  '#7ecbff', // Soft sky blue
  '#7b2ff2', // Royal purple
  '#ffd764', // Warm golden
  '#7ecbff', // Back to sky blue
];

const AnimatedGradientText: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [colorIdx, setColorIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIdx((i) => (i + 1) % gradientColors.length);
    }, 2200); // Slow, smooth
    return () => clearInterval(interval);
  }, []);
  return (
    <span
      style={{
        color: gradientColors[colorIdx],
        transition: 'color 2s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      {children}
    </span>
  );
};

// AnimatedProfileBorder: border color cycles in sync with AnimatedGradientText
const AnimatedProfileBorder: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [colorIdx, setColorIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIdx((i) => (i + 1) % gradientColors.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      style={{
        padding: 8,
        borderRadius: '2.5rem',
        background: `linear-gradient(135deg, ${gradientColors[colorIdx]}, ${gradientColors[(colorIdx+1)%gradientColors.length]})`,
        transition: 'background 2s cubic-bezier(0.4,0,0.2,1)',
        display: 'inline-block',
      }}
    >
      {children}
    </div>
  );
};