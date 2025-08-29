import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Hauteur de la barre de navigation
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Accueil', id: 'home' },
    { name: 'À Propos', id: 'about' },
    { name: 'Parcours', id: 'parcours' },
    { name: 'Compétences', id: 'competences' },
    { name: 'Projets', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rayan-hab/',
      icon: '/images/linkedin.webp',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/rayan328',
      icon: '/images/logo github.png',
    },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#1B262C]/95 backdrop-blur-lg border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <motion.h1 
              className="text-[#BBE1FA] font-bold text-2xl md:text-3xl"
              animate={{ 
                textShadow: scrolled ? "0 0 20px rgba(187, 225, 250, 0.5)" : "none"
              }}
            >
              &lt;C / &gt;
            </motion.h1>
            <motion.h1 
              className="text-[#3282B8] text-xl md:text-2xl font-semibold"
              whileHover={{ color: "#BBE1FA" }}
            >
              Rayan Habibeche
            </motion.h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#3282B8] hover:text-[#BBE1FA] transition-colors duration-300 text-lg font-medium relative group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#BBE1FA] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-[#3282B8] hover:text-[#BBE1FA] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src={link.icon} 
                  alt={link.name} 
                  className="w-8 h-8 rounded-full transition-transform duration-300 group-hover:scale-110" 
                />
                <span className="font-medium">{link.name}</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#3282B8] hover:text-[#BBE1FA] p-2"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 bg-[#1B262C]/95 backdrop-blur-lg"
            >
              <div className="py-4 space-y-4">
                {/* Navigation Items */}
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-[#3282B8] hover:text-[#BBE1FA] py-2 px-4 transition-colors duration-300 text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}

                {/* Social Links - Mobile */}
                <div className="pt-4 border-t border-white/10">
                  <div className="space-y-3">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-[#3282B8] hover:text-[#BBE1FA] py-2 px-4 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (navItems.length + index) * 0.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img 
                          src={link.icon} 
                          alt={link.name} 
                          className="w-6 h-6 rounded-full" 
                        />
                        <span>{link.name}</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export default Header;
