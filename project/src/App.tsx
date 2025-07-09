import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StarField from './components/StarField';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      <StarField />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;