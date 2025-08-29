import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, ChevronDown } from 'lucide-react';

function Developer() {
  const [text, setText] = useState("");
  const fullText = "Developer Full-Stack";
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 150);
    return () => clearInterval(intervalId);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen bg-[#1B262C] text-white relative overflow-hidden pt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-[#BBE1FA] rounded-full opacity-10"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-10 right-10 w-48 h-48 bg-[#BBE1FA] rounded-full opacity-5"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#BBE1FA] rounded-full opacity-10"
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-8">
        <motion.h1 
          className="text-6xl md:text-8xl font-light bg-gradient-to-r from-[#BBE1FA] via-white to-[#3282B8] bg-clip-text text-transparent mb-8"
          variants={itemVariants}
        >
          <span className="inline-block">{text}</span>
          <motion.span 
            className="text-[#BBE1FA]"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.h1>

        <motion.div variants={itemVariants}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#BBE1FA] bg-clip-text text-transparent">
            Hey 👋 Je Suis 
            <motion.span 
              className="text-[#BBE1FA] block md:inline"
              whileHover={{ 
                scale: 1.1,
                textShadow: "0 0 20px rgba(187, 225, 250, 0.8)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {" "}Rayan
            </motion.span>
          </h2>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          À la recherche d'une <span className="text-[#BBE1FA] font-semibold">alternance</span>, je mets mes compétences en développement web 
          au service de projets innovants pour créer des 
          <span className="text-[#BBE1FA] font-semibold"> expériences digitales impactantes</span>.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          variants={itemVariants}
        >
          <motion.a 
            href="/CV_Rayan_Habibeche.pdf" 
            download="CV_Rayan_Habibeche.pdf"
            className="group flex items-center bg-gradient-to-r from-[#BBE1FA] to-[#3282B8] text-[#1B262C] px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(187, 225, 250, 0.4)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            Télécharger CV
          </motion.a>
          
          <motion.a 
            href="/CV_Rayan_Habibeche.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20"
            whileHover={{ 
              scale: 1.05,
              borderColor: "rgba(187, 225, 250, 0.8)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye className="w-6 h-6 mr-3 group-hover:animate-pulse" />
            Voir CV
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          variants={floatingVariants}
          animate="animate"
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col items-center text-[#BBE1FA] group-hover:text-white transition-colors duration-300">
            <span className="text-sm mb-2 font-medium">Découvrir</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Developer;
