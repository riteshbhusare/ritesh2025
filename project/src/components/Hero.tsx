import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [isBlinking, setIsBlinking] = useState(true);
  const skills = ['Docker', 'Linux', 'Jenkins', 'Python', 'C', 'C++'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 800);

    return () => clearInterval(blinkInterval);
  }, []);

  const handleDownloadResume = () => {
    alert('Resume download functionality would be implemented here');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-16 ml-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold title-font">
                <span className="text-white">Hi, I'm </span>
                <span className="text-cyan-400">Ritesh Bhusare</span>
              </h1>
              <p className="text-xl sm:text-2xl text-purple-400 font-medium">
                Aspiring Cloud Engineer | DevOps Enthusiast
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-gray-400 text-lg">Exploring technologies like</p>
              <div className="h-16 flex items-center">
                <span className="text-3xl sm:text-4xl font-bold text-yellow-400 title-font">
                  {skills[currentSkill]}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDownloadResume}
                className="group relative px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <span className="flex items-center gap-2">
                  <Download size={20} />
                  Download Resume
                </span>
              </button>
              
              <div className="flex gap-3">
                <a
                  href="https://github.com/riteshbhusare/github_2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Github size={24} className="text-gray-300 hover:text-white" />
                </a>
                <a
                  href="https://linkedin.com/in/ritesh-bhusare-5a209330b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/25"
                >
                  <Linkedin size={24} className="text-gray-300 hover:text-white" />
                </a>
                <a
                  href="mailto:riteshbhusare495@gmail.com"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
                >
                  <Mail size={24} className="text-gray-300 hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Hexagonal 404 Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="hexagon">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 rainbow-border animate-spin-slow"></div>
                
                {/* Inner rotating ring */}
                <div className="absolute inset-4 rainbow-border animate-spin-reverse opacity-70"></div>
                
                {/* Hexagonal 404 container */}
                <div className="hexagon-inner">
                  <div className="hexagon-content">
                    <div className={`text-5xl sm:text-6xl font-bold transition-opacity duration-200 title-font ${
                      isBlinking ? 'text-white opacity-100' : 'text-gray-300 opacity-50'
                    }`}>
                      404
                    </div>
                  </div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-float"></div>
                <div className="absolute top-20 right-10 w-3 h-3 bg-purple-400 rounded-full animate-float-delay"></div>
                <div className="absolute bottom-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-float-delay-2"></div>
                <div className="absolute bottom-10 right-20 w-3 h-3 bg-pink-400 rounded-full animate-float"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;