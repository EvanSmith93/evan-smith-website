import React from 'react';
import data from './data.json';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import { useState } from 'react';
import { FaPython, FaReact, FaJava, FaHtml5, FaCss3 } from 'react-icons/fa';
import SocialButtons from './components/SocialButtons';
import Header from './sections/Header';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const Home = () => {
  // const [showPopup, setShowPopup] = useState(false);

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };

  return (
    <div className='text-white'>
      <Header />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
