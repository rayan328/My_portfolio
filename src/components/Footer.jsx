import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#BBE1FA] text-[#1B262C] p-6 text-center text-xl">
      &copy; {new Date().getFullYear()} - Portfolio
    </footer>
  );
}

export default Footer;
