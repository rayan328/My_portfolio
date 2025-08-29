import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Developer from './Developer';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import ProjectGallery from './ProjectGallery';
import Contact from './Contact';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import SectionNavigator from './SectionNavigator';

function App() {
  // Smooth scrolling behavior
  useEffect(() => {
    // Add smooth scrolling to anchor links
    const handleClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      
      <motion.main>
        <section id="home">
          <Developer />
        </section>
        
        <motion.section 
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <About />
        </motion.section>
        
        <motion.section 
          id="parcours"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Education />
        </motion.section>
        
        <motion.section 
          id="skills"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Skills />
        </motion.section>
        
        <motion.section 
          id="projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ProjectGallery />
        </motion.section>
        
        <motion.section 
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Contact />
        </motion.section>
      </motion.main>
      
      <Footer />
      <ScrollToTop />
      <SectionNavigator />
    </motion.div>
  );
}

export default App;
