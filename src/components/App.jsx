import React from 'react';
import Header from './Header';
import Developer from './Developer';
import About from './About';
import Skills from './Skills';
import ProjectGallery from './ProjectGallery';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="h-full">
      <Header />
      <Developer />
      <About />
      <Skills />
      <div id="projects" className="mt-16">
        <ProjectGallery />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
