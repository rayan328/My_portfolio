import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');
    
    emailjs
      .sendForm(
        'service_chlkys6',
        'template_w2t0wk8',
        form.current,
        'x65hUSHpGoj9v0d-Q'
      )
      .then(
        () => {
          setStatus('success');
          e.target.reset();
        },
        (error) => {
          setStatus('error');
          console.error('Error:', error.text);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  return (
    <motion.div 
      ref={ref}
      id="contact" 
      className="p-12 bg-[#1B262C] text-white relative overflow-hidden"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B262C] to-[#1B262C] opacity-95"></div>
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
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2 
          className="text-6xl font-bold mb-16 text-center bg-gradient-to-r from-[#BBE1FA] via-white to-[#3282B8] bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Contactez Moi
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 text-[#BBE1FA]">Parlons de votre projet</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Vous avez un projet en tête ? Une opportunité d'alternance ? 
                N'hésitez pas à me contacter, je serais ravi d'échanger avec vous !
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <Mail className="w-6 h-6 text-[#BBE1FA]" />
                  <span className="text-gray-300">rayan.habpro@gmail.com</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-6 h-6 bg-[#BBE1FA] rounded-full flex items-center justify-center">
                    <span className="text-[#1B262C] text-xs font-bold">💼</span>
                  </div>
                  <span className="text-gray-300">Recherche d'alternance</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl">
              {/* Status Messages */}
              {status === 'success' && (
                <motion.div 
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-2xl text-green-200 flex items-center space-x-3"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Message envoyé avec succès!</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div 
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-2xl text-red-200 flex items-center space-x-3"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Erreur lors de l'envoi. Veuillez réessayer.</span>
                </motion.div>
              )}

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <motion.div 
                  className="relative group"
                  whileFocus={{ scale: 1.02 }}
                >
                  <User className="absolute left-4 top-4 w-5 h-5 text-[#BBE1FA] group-focus-within:text-white transition-colors" />
                  <input 
                    type="text" 
                    name="user_name" 
                    placeholder="Votre nom" 
                    required 
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/20 
                      text-white placeholder-gray-400 focus:outline-none focus:border-[#BBE1FA] 
                      focus:bg-white/10 transition-all duration-300"
                  />
                </motion.div>

                <motion.div 
                  className="relative group"
                  whileFocus={{ scale: 1.02 }}
                >
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-[#BBE1FA] group-focus-within:text-white transition-colors" />
                  <input 
                    type="email" 
                    name="user_email" 
                    placeholder="Votre email" 
                    required 
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/20 
                      text-white placeholder-gray-400 focus:outline-none focus:border-[#BBE1FA] 
                      focus:bg-white/10 transition-all duration-300"
                  />
                </motion.div>

                <motion.div 
                  className="relative group"
                  whileFocus={{ scale: 1.02 }}
                >
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#BBE1FA] group-focus-within:text-white transition-colors" />
                  <textarea 
                    name="message" 
                    placeholder="Votre message" 
                    required 
                    rows={5}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/20 
                      text-white placeholder-gray-400 focus:outline-none focus:border-[#BBE1FA] 
                      focus:bg-white/10 transition-all duration-300 resize-none"
                  ></textarea>
                </motion.div>

                <motion.button 
                  type="submit" 
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-[#BBE1FA] to-[#3282B8] text-[#1B262C] py-4 px-8 rounded-2xl font-bold text-lg
                    hover:from-[#3282B8] hover:to-[#BBE1FA] hover:text-white shadow-lg hover:shadow-xl
                    transition-all duration-300 flex items-center justify-center space-x-3
                    ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                  whileHover={!isLoading ? { 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(187, 225, 250, 0.4)"
                  } : {}}
                  whileTap={!isLoading ? { scale: 0.95 } : {}}
                >
                  {isLoading ? (
                    <>
                      <motion.div 
                        className="w-5 h-5 border-2 border-[#1B262C] border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
