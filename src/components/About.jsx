import React from 'react';

function About() {
  return (
    <div className="p-12 bg-[#0F4C75] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C75] to-[#3282B8] opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center text-[#BBE1FA]">À Propos de Moi</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 transform hover:scale-105 transition duration-300">
            <p className="text-xl leading-relaxed bg-[#1B262C] bg-opacity-50 p-6 rounded-lg shadow-xl">
              Codeur de jour, explorateur du web de nuit, je transforme des idées en interfaces fluides et interactives.
              Passionné par l'optimisation et l'innovation, j'aime repousser les limites du développement.
            </p>
          </div>
          <div className="space-y-6 transform hover:scale-105 transition duration-300">
            <p className="text-xl leading-relaxed bg-[#1B262C] bg-opacity-50 p-6 rounded-lg shadow-xl">
              Pour moi, chaque projet est une aventure où précision et créativité se rencontrent.
              Mon mantra ? "Un bon développeur ne cesse jamais d'apprendre." 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
