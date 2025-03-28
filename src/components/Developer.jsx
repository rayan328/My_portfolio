import React, { useState, useEffect } from 'react';

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

  return (
    <div className="flex flex-col items-center justify-center h-100 bg-[#1B262C] text-[#3282B8]">
      <div className="text-center">
        <h1 className="text-8xl font-light text-[#BBE1FA] mb-8">
          <span className="inline-block">{text}</span>
          <span className="animate-blink">|</span>
        </h1>
        <h3 className="text-5xl font-bold mb-4">Hey 👋 Je Suis Rayan,<br/>Développeur Full-Stack</h3>
        <p className="text-[#3282B8] mb-4 text-2xl">
          À la recherche d'une alternance, je mets mes compétences en développement web au service de projets innovants pour créer des expériences digitales impactantes.
        </p>
        <div className="flex items-center justify-center space-x-6 mb-12">
          <a 
            href="/CV_Rayan_Habibeche.pdf" 
            download="CV_Rayan_Habibeche.pdf"
            className="cv-button flex items-center bg-[#BBE1FA] text-[#1B262C] px-6 py-3 rounded-lg
              hover:bg-[#3282B8] hover:text-white transform hover:scale-105 hover:-translate-y-1
              transition-all duration-300 shadow-lg hover:shadow-xl mt-6"
          >
            <svg 
              className="w-6 h-6 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            Télécharger CV
          </a>
          <a 
            href="/CV_Rayan_Habibeche.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-button flex items-center bg-[#BBE1FA] text-[#1B262C] px-6 py-3 rounded-lg
              hover:bg-[#3282B8] hover:text-white transform hover:scale-105 hover:-translate-y-1
              transition-all duration-300 shadow-lg hover:shadow-xl mt-6"
          >
            <svg 
              className="w-6 h-6 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Voir CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Developer;
