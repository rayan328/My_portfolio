import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

function ProjectGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextProject = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToProject = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Get visible projects for continuous scroll
  const getVisibleProjects = () => {
    const visible = [];
    // Show 5 projects at once for smooth scrolling
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + projects.length) % projects.length;
      visible.push({ 
        ...projects[index], 
        position: i,
        displayIndex: index 
      });
    }
    return visible;
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

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
        <div className="absolute top-20 left-20 w-40 h-40 bg-[#BBE1FA] rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-[#BBE1FA] rounded-full opacity-5 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#BBE1FA] rounded-full opacity-5 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h1 
          className="text-6xl font-bold mb-16 text-center bg-gradient-to-r from-[#BBE1FA] via-white to-[#3282B8] bg-clip-text text-transparent"
          variants={containerVariants}
        >
          Mes Projets
        </motion.h1>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 group"
          >
            <ChevronLeft className="w-8 h-8 text-[#BBE1FA] group-hover:text-white transition-colors" />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 group"
          >
            <ChevronRight className="w-8 h-8 text-[#BBE1FA] group-hover:text-white transition-colors" />
          </button>

          {/* Carousel */}
          <div className="flex justify-center items-center min-h-[600px] overflow-hidden">
            <div className="flex items-center justify-center relative w-full">
              {getVisibleProjects().map((project) => (
                <motion.div
                  key={project.displayIndex}
                  className="absolute flex-shrink-0"
                  initial={false}
                  animate={{ 
                    x: project.position * 380, // Espacement entre les cartes
                    scale: project.position === 0 ? 1 : 0.8,
                    opacity: Math.abs(project.position) <= 1 ? 1 : 0.6,
                    zIndex: project.position === 0 ? 20 : 10 - Math.abs(project.position),
                    rotateY: project.position * 8, // Légère rotation 3D
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30,
                    duration: 0.6
                  }}
                  whileHover={project.position === 0 ? { 
                    scale: 1.05,
                    rotateY: 0,
                    transition: { duration: 0.3 }
                  } : {}}
                >
                  <div className={`${
                    project.isSpecial 
                      ? 'bg-gradient-to-br from-[#3282B8]/30 to-[#BBE1FA]/20 backdrop-blur-lg border-2 border-[#BBE1FA]/50' 
                      : 'bg-white/10 backdrop-blur-lg border border-white/20'
                  } rounded-3xl p-8 w-96 h-96 flex flex-col transition-all duration-300 ${
                    project.position === 0 
                      ? 'shadow-2xl shadow-[#BBE1FA]/20 border-[#BBE1FA]/40' 
                      : 'hover:border-[#BBE1FA]/30'
                  }`}>
                    {/* Project Image */}
                    <div className="relative overflow-hidden rounded-2xl mb-6 flex-1">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-4">
                      <h3 className={`text-2xl font-bold ${
                        project.isSpecial 
                          ? 'text-[#BBE1FA] animate-pulse' 
                          : 'text-[#BBE1FA]'
                      }`}>{project.title}</h3>
                      <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.isSpecial ? (
                          <span className="px-3 py-1 bg-gradient-to-r from-[#3282B8] to-[#BBE1FA] text-[#1B262C] rounded-full text-xs font-semibold animate-pulse">
                            {project.technologies[0]}
                          </span>
                        ) : (
                          <>
                            {project.technologies.slice(0, 3).map(tech => (
                              <span 
                                key={tech} 
                                className="px-3 py-1 bg-[#3282B8]/50 backdrop-blur-sm rounded-full text-xs text-white border border-[#BBE1FA]/30"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-3 py-1 bg-[#3282B8]/50 backdrop-blur-sm rounded-full text-xs text-white border border-[#BBE1FA]/30">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        {project.isSpecial ? (
                          <motion.button
                            onClick={() => {
                              const contactSection = document.getElementById('contact');
                              if (contactSection) {
                                const headerHeight = 80;
                                const elementPosition = contactSection.offsetTop - headerHeight;
                                window.scrollTo({
                                  top: elementPosition,
                                  behavior: 'smooth'
                                });
                              }
                            }}
                            className="flex items-center gap-2 bg-[#BBE1FA] text-[#1B262C] px-4 py-2 rounded-full hover:bg-white transition-all duration-300 hover:scale-105 text-sm font-semibold w-full justify-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={16} />
                            Me Contacter
                          </motion.button>
                        ) : (
                          <>
                            {project.link && (
                              <a 
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#BBE1FA] text-[#1B262C] px-4 py-2 rounded-full hover:bg-white transition-all duration-300 hover:scale-105 text-sm font-semibold"
                              >
                                <ExternalLink size={16} />
                                Voir le projet
                              </a>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#BBE1FA] scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-[#BBE1FA] text-[#1B262C] border-[#BBE1FA]'
                  : 'bg-white/10 text-white border-white/30 hover:bg-white/20'
              }`}
            >
              {isAutoPlaying ? 'Pause' : 'Play'} Défilement Auto
            </button>
          </div>

          {/* Message de contact pour plus de projets */}
          <motion.div
            className="text-center mt-12 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-4xl mx-auto">
              <p className="text-lg text-white font-medium mb-2">
                Envie d'en voir plus ?
              </p>
              <p className="text-base text-[#BBE1FA] opacity-90 mb-4">
                Contactez-moi pour découvrir d'autres projets, demander une démonstration ou discuter de vos besoins techniques.
              </p>
              <motion.button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    const headerHeight = 80;
                    const elementPosition = contactSection.offsetTop - headerHeight;
                    window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="px-6 py-3 bg-[#3282B8] hover:bg-[#BBE1FA] text-white hover:text-[#1B262C] rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Me Contacter
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectGallery;
