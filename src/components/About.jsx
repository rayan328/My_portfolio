import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Coffee, Lightbulb, Target } from 'lucide-react';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Code Passionné",
      description: "Développement avec précision et créativité"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Innovation Continue",
      description: "Toujours à la recherche de nouvelles solutions"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Apprentissage Constant",
      description: "Un bon développeur ne cesse jamais d'apprendre"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Objectifs Ambitieux",
      description: "Repousser les limites du développement"
    }
  ];

  return (
    <motion.div 
      ref={ref}
      className="p-12 bg-[#1B262C] text-white relative overflow-hidden"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1B262C] opacity-90"></div>
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-[#BBE1FA] rounded-full opacity-10"
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
          className="absolute bottom-20 right-20 w-48 h-48 bg-[#BBE1FA] rounded-full opacity-5"
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
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#BBE1FA] rounded-full opacity-10"
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

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2 
          className="text-6xl font-bold mb-16 text-center bg-gradient-to-r from-white via-[#BBE1FA] to-white bg-clip-text text-transparent"
          variants={itemVariants}
        >
          À Propos de Moi
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl hover:shadow-[0_20px_40px_rgba(187,225,250,0.3)] transition-all duration-500 group">
              <motion.p 
                className="text-xl leading-relaxed text-gray-100 group-hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-2xl text-[#BBE1FA] font-semibold">Codeur de jour, explorateur du web de nuit</span>, je transforme des idées en interfaces fluides et interactives.
                Passionné par l'optimisation et l'innovation, j'aime repousser les limites du développement.
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl hover:shadow-[0_20px_40px_rgba(187,225,250,0.3)] transition-all duration-500 group">
              <motion.p 
                className="text-xl leading-relaxed text-gray-100 group-hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                Pour moi, chaque projet est une <span className="text-[#BBE1FA] font-semibold">aventure</span> où précision et créativité se rencontrent.
                Mon mantra ? <span className="text-2xl text-[#BBE1FA] font-bold">"Un bon développeur ne cesse jamais d'apprendre."</span> 🚀
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center group hover:bg-white/10 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 15px 30px rgba(187, 225, 250, 0.2)"
              }}
            >
              <motion.div 
                className="flex justify-center mb-4 text-[#BBE1FA] group-hover:text-white transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 text-[#BBE1FA] group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-300 group-hover:text-gray-100 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
