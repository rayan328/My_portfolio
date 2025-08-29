import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function SectionNavigator() {
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = [
    { id: 'home', name: 'Accueil' },
    { id: 'about', name: 'À Propos' },
    { id: 'skills', name: 'Compétences' },
    { id: 'projects', name: 'Projets' },
    { id: 'contact', name: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextIndex = (currentSection + 1) % sections.length;
    const nextSection = sections[nextIndex];
    const element = document.getElementById(nextSection.id);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      {/* Section Dots */}
      <div className="flex flex-col space-y-4 mb-8">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`group relative w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              currentSection === index
                ? 'bg-[#BBE1FA] border-[#BBE1FA] scale-125'
                : 'border-[#BBE1FA]/50 hover:border-[#BBE1FA] hover:scale-110'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Tooltip */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-[#1B262C] text-[#BBE1FA] px-3 py-1 rounded-lg text-sm whitespace-nowrap border border-[#BBE1FA]/20">
                {section.name}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Next Section Button */}
      <motion.button
        onClick={scrollToNextSection}
        className="group flex flex-col items-center bg-[#BBE1FA]/10 backdrop-blur-sm border border-[#BBE1FA]/30 rounded-full p-3 hover:bg-[#BBE1FA]/20 transition-all duration-300"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 10px 20px rgba(187, 225, 250, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[#BBE1FA] text-xs mb-1 group-hover:text-white transition-colors">
          Suivant
        </span>
        <ChevronDown className="w-4 h-4 text-[#BBE1FA] group-hover:text-white transition-colors" />
      </motion.button>
    </div>
  );
}

export default SectionNavigator;
