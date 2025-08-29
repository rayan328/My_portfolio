import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/rayan328',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rayan-hab/',
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: 'mailto:rayan.habpro@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <motion.footer 
      className="bg-[#1B262C] text-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background animation */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full opacity-10"
          animate={{ 
            x: [-20, 20, -20],
            y: [-10, 10, -10],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full opacity-10"
          animate={{ 
            x: [20, -20, 20],
            y: [10, -10, 10],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo & Description */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Code className="w-8 h-8 mr-2" />
              <span className="text-2xl font-bold">&lt;C / &gt;</span>
            </div>
            <p className="text-lg opacity-80">
              Développeur Full-Stack passionné
            </p>
          </motion.div>

          {/* Center - Social Links */}
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300 group"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon className="w-6 h-6 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Right - Copyright & Made with love */}
          <motion.div 
            className="text-center md:text-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-medium mb-2">
              &copy; {currentYear} Rayan Habibeche
            </p>
            <motion.div 
              className="flex items-center justify-center md:justify-end text-sm opacity-80"
              whileHover={{ scale: 1.05 }}
            >
              <span>Fait avec</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mx-2"
              >
                <Heart className="w-4 h-4 fill-current text-red-500" />
              </motion.div>
              <span>et React</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom divider */}
        <motion.div 
          className="mt-8 pt-8 border-t border-[#1B262C]/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm opacity-70">
            "Un bon développeur ne cesse jamais d'apprendre." 🚀
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
