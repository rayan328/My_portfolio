import React, { useState } from 'react';
import { projects } from '../data/projects';

function ProjectGallery() {
  const [search, setSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#BBE1FA]">Mes Projets</h1>
      <input
        type="text"
        placeholder="Rechercher un projet..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-8 p-4 border rounded-lg w-full text-black text-xl bg-[#BBE1FA] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0F4C75] transition duration-300"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filtered.map(project => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            className={`
              bg-[#0F4C75] p-6 rounded-2xl shadow-lg 
              hover:shadow-2xl hover:scale-105 
              transform transition-all duration-300 ease-in-out
              cursor-pointer
              ${selectedProject === project.id ? 'scale-105 ring-4 ring-[#BBE1FA]' : ''}
            `}
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover transform hover:scale-110 transition duration-500"
              />
            </div>
            <h2 className="text-2xl font-semibold text-[#BBE1FA] mb-2">{project.title}</h2>
            <p className="text-lg text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map(tech => (
                <span key={tech} className="px-2 py-1 bg-[#3282B8] rounded-full text-sm text-white">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a 
                href={project.github}
                className="inline-block bg-[#BBE1FA] text-[#1B262C] px-6 py-2 rounded-full
                  hover:bg-[#3282B8] hover:text-white transform hover:-translate-y-1
                  transition duration-300"
              >
                GitHub
              </a>
              {project.link && (
                <a 
                  href={project.link}
                  className="inline-block bg-[#BBE1FA] text-[#1B262C] px-6 py-2 rounded-full
                    hover:bg-[#3282B8] hover:text-white transform hover:-translate-y-1
                    transition duration-300"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
