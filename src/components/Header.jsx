import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-[#1B262C] p-4 md:p-6 mb-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 md:mb-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 md:space-x-6">
            <h1 className="text-[#BBE1FA] font-semibold text-2xl md:text-3xl">&lt;C / &gt;</h1>
            <h1 className="text-[#3282B8] text-xl md:text-2xl">Rayan Habibeche</h1>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#3282B8]">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-[#3282B8] mt-4 md:mt-0`}>
          <h2 onClick={scrollToProjects} className="hover:text-[#0F4C75] text-lg md:text-xl transition duration-300 cursor-pointer">Mon Portfolio</h2>
          <h2 onClick={scrollToContact} className="hover:text-[#0F4C75] text-lg md:text-xl transition duration-300 cursor-pointer">Contact</h2>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <a 
              href="https://www.linkedin.com/in/rayan-hab/" 
              className="flex items-center hover:text-[#0F4C75] text-lg md:text-xl transition duration-300 space-x-2"
            >
              <img src="/images/linkedin.webp" alt="LinkedIn" className="w-8 md:w-10 h-8 md:h-10 rounded-full hover:scale-110 transition duration-300" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/rayan328" 
              className="flex items-center hover:text-[#0F4C75] text-lg md:text-xl transition duration-300 space-x-2 md:ml-4"
            >
              <img src="/images/logo github.png" alt="Github" className="w-7 md:w-8 h-7 md:h-8 rounded-full hover:scale-110 transition duration-300" />
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
      <hr />
    </header>
  );
}

export default Header;
