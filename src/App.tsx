import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Download, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Instagram,
  ChevronUp,
  Menu,
  X
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange(latest => {
      setShowScrollTop(latest > 300);
    });
    return unsubscribe;
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation 
        activeSection={activeSection}
        onSectionClick={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <ScrollProgress />
      
      <Hero 
        id="hero"
        onSectionInView={setActiveSection}
        onDownloadResume={() => {
          // Create a dummy resume download
          const link = document.createElement('a');
          link.href = '#';
          link.download = 'Ritesh_Bhusare_Resume.pdf';
          link.click();
        }}
      />
      
      <About 
        id="about"
        onSectionInView={setActiveSection}
      />
      
      <Skills 
        id="skills"
        onSectionInView={setActiveSection}
      />
      
      <Projects 
        id="projects"
        onSectionInView={setActiveSection}
      />
      
      <Contact 
        id="contact"
        onSectionInView={setActiveSection}
      />

      {/* Floating Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
      >
        <ChevronUp className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </motion.button>
    </div>
  );
}

export default App;