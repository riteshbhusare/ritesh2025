import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Mail, Phone } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import profileImg from '../assets/profile.jpg.jpg';

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
                onClick={onDownloadResume}
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

          {/* Right Content - User Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-80 h-96 md:w-96 md:h-[500px] flex items-center justify-center">
              <img
                src={profileImg}
                alt="Ritesh Bhusare profile"
                className="object-cover w-64 h-64 md:w-80 md:h-80 rounded-3xl shadow-2xl border-4 border-blue-400/60 bg-gradient-to-br from-blue-100/20 to-purple-100/20"
                style={{ maxHeight: '100%', maxWidth: '100%' }}
              />
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