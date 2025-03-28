import React from 'react';

function Skills() {
  const skills = [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/html5.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/css3.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nodedotjs.svg' },
    { name: 'PHP', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/php.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg' },
  ];

  return (
    <div className="p-8 bg-[#3282B8] text-white">
      <h2 className="text-4xl font-bold mb-4 text-center">Compétences</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <div key={skill.name} className="flex items-center space-x-2 bg-[#BBE1FA] text-[#1B262C] rounded-full px-4 py-2 text-xl hover:scale-105 transition duration-300">
            <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
