import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { 
      name: 'HTML', 
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/html5.svg',
      color: '#E34F26'
    },
    { 
      name: 'CSS', 
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/css3.svg',
      color: '#1572B6'
    },
    { 
      name: 'JavaScript', 
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg',
      color: '#F7DF1E'
    },
    { 
      name: 'React', 
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg',
      color: '#61DAFB'
    },
    { 
      name: 'Node.js', 
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nodedotjs.svg',
      color: '#339933'
    },
    { 
      name: 'PHP', 
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/php.svg',
      color: '#777BB4'
    },
    { 
      name: 'MySQL', 
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg',
      color: '#4479A1'
    },
    { 
      name: 'Java', 
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg',
      color: '#007396'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      id="competences"
      className="min-h-screen relative overflow-hidden bg-[#1B262C] pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1B262C] opacity-95"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#BBE1FA] rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#BBE1FA] rounded-full opacity-5 animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#BBE1FA] rounded-full opacity-5 animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-4">
        <motion.h2 
          className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#BBE1FA] to-[#3282B8] bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Compétences Techniques
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                boxShadow: "0 20px 40px rgba(187, 225, 250, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center space-y-3">
                <motion.div 
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={skill.logo} 
                    alt={skill.name} 
                    className="w-8 h-8 filter brightness-0 invert group-hover:filter-none transition-all duration-300" 
                    style={{ filter: inView ? `brightness(0) invert(1)` : 'none' }}
                  />
                </motion.div>
                <span className="text-lg font-semibold text-[#BBE1FA] group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
              
              {/* Hover effect overlay */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${skill.color}40, ${skill.color}20)` }}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Message professionnel */}
        <motion.div
          className="text-center mt-4 mb-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-4 max-w-4xl mx-auto">
            <p className="text-lg text-white font-medium mb-1">
              Toujours en quête d'apprentissage
            </p>
            <p className="text-sm text-[#BBE1FA] opacity-90">
              Je reste constamment à l'affût des nouvelles technologies et méthodologies pour enrichir mon expertise et proposer des solutions innovantes.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Skills;
