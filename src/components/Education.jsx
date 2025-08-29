import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      type: 'formation',
      title: 'Formation Développeur Web Full-Stack',
      institution: 'Web@cadémie by Epitech',
      period: '2024 - 2026',
      location: 'Paris',
      description: 'Formation intensive en développement web avec une pédagogie innovante basée sur la pratique et les projets concrets. Apprentissage des technologies modernes du web et méthodologies de développement.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'PHP', 'MySQL', 'Apprentissage par projet', 'Travail d\'équipe'],
      icon: GraduationCap
    },
    {
      type: 'objectif',
      title: 'Recherche d\'Alternance',
      institution: 'Développeur Full-Stack Junior',
      period: '2025 - 2026',
      location: 'Paris',
      description: 'À la recherche d\'une alternance pour mettre en pratique mes compétences acquises et contribuer au développement de projets innovants au sein d\'une équipe dynamique.',
      skills: ['Motivation', 'Apprentissage rapide', 'Adaptabilité', 'Esprit d\'équipe'],
      icon: Award
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.section
      id="parcours"
      className="min-h-screen relative overflow-hidden bg-[#1B262C] pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1B262C] opacity-95"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#BBE1FA] rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#BBE1FA] rounded-full opacity-5 animate-pulse delay-300"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-8">
        <motion.h2 
          ref={ref}
          className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-[#BBE1FA] to-[#3282B8] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Mon Parcours
        </motion.h2>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#3282B8]/20 rounded-full flex items-center justify-center">
                    <exp.icon className="w-8 h-8 text-[#BBE1FA]" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-[#BBE1FA] text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg font-medium text-[#3282B8] mb-3">
                    {exp.institution}
                  </p>
                  
                  <p className="text-white/80 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-[#3282B8]/30 text-[#BBE1FA] rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-xl text-white font-medium mb-2">
              Prêt à rejoindre votre équipe !
            </p>
            <p className="text-base text-[#BBE1FA] opacity-90">
              Passionné par le développement web et motivé par l'apprentissage, je recherche une alternance pour allier théorie et pratique dans un environnement professionnel stimulant.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Education;
