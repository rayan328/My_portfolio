import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

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

  return (
    <div id="contact" className="p-12 bg-[#0F4C75] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C75] to-[#3282B8] opacity-50"></div>
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center text-[#BBE1FA] p-4">Contactez Moi</h2>
        {status === 'success' && (
          <div className="mb-6 p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg text-green-200">
            Message envoyé avec succès!
          </div>
        )}
        {status === 'error' && (
          <div className="mb-6 p-4 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg text-red-200">
            Erreur lors de l'envoi du message. Veuillez réessayer.
          </div>
        )}
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div className="group">
            <input 
              type="text" 
              name="user_name" 
              placeholder="Nom" 
              required 
              className="w-full p-4 rounded-lg bg-[#1B262C] bg-opacity-50 border-2 border-[#BBE1FA] 
                text-white placeholder-gray-400 focus:outline-none focus:border-[#3282B8] 
                transform transition-all duration-300 focus:scale-105"
            />
          </div>
          <div className="group">
            <input 
              type="email" 
              name="user_email" 
              placeholder="Email" 
              required 
              className="w-full p-4 rounded-lg bg-[#1B262C] bg-opacity-50 border-2 border-[#BBE1FA] 
                text-white placeholder-gray-400 focus:outline-none focus:border-[#3282B8] 
                transform transition-all duration-300 focus:scale-105"
            />
          </div>
          <div className="group">
            <textarea 
              name="message" 
              placeholder="Message" 
              required 
              className="w-full p-4 rounded-lg bg-[#1B262C] bg-opacity-50 border-2 border-[#BBE1FA] 
                text-white placeholder-gray-400 focus:outline-none focus:border-[#3282B8] h-40 
                transform transition-all duration-300 focus:scale-105"
            ></textarea>
          </div>
          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full bg-[#BBE1FA] text-[#1B262C] py-4 px-8 rounded-lg font-bold text-xl
              hover:bg-[#3282B8] hover:text-white transform hover:scale-105 hover:-translate-y-1
              transition-all duration-300 shadow-lg hover:shadow-xl
              ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
