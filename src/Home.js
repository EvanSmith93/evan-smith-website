import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faLinkedin,
    faTwitter,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons';
import data from './data.json';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import { useState } from 'react';
import { FaPython, FaReact, FaJava, FaHtml5, FaCss3 } from 'react-icons/fa';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    console.log('button clicked');
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='text-white'>
      <section className='row dark-bg p-5 header'>
        <div className='col-md-6 d-flex align-items-center'>
          {/* Left Column - Text */}
          <div className='text-right'>
            <h2>Hi, I'm</h2>
            <h1 className='name highlight'>{data.name}</h1>
            <h3>{data.bio}</h3>
            <div className='social-buttons py-2'>
              <a href='https://linkedin.com/in/evansmith04/' target='_blank' className=''>
                <FontAwesomeIcon icon={faLinkedin} size='2x' />
              </a>
              <a href='https://github.com/EvanSmith93' target='_blank' className=''>
                <FontAwesomeIcon icon={faGithub} size='2x' />
              </a>
            </div>
          </div>
        </div>
        <div className='col-md-6 d-flex'>
          {/* Right Column - Image */}
          <div className='my-auto mx-auto'>
            <img
              src={'/assets/profile-picture.jpg'}
              alt='Evan Smith'
              className='img-fluid mb-3 rounded profile-picture'
            />
          </div>
        </div>
      </section>

      <section className='row darker-bg p-5'>
        <h1 className='mb-4'>Education</h1>
        <div className='col-sm-6 mb-3'>
            <div className='card p-3'>
              <h6 className='gray'><i>{data.education.start} - {data.education.graduation}</i></h6>
              <h3 className='mb-2'>{data.education.school}</h3>
              <h4 className='highlight'>{data.education.degree} in {data.education.major}</h4>
              <h4>Minor in {data.education.minor}</h4>
              <p className=''>BYU Developers Club | Competative Programming Club | Humor U Stand-up Comedy Club</p>
              <p className=''>Grade: {data.education.gpa} GPA</p>
            </div>
        </div>
        <div className='col-sm-6'>
            <div className='card p-3'>
            <h3>Relevant Coursework:</h3>
            <ul className='mb-3'>
                {data.education.courses.map((course, index) => {
                    return <li key={index}>{course}</li>
                })}
            </ul>
            </div>
        </div>
     </section>

    {/* skills */}
     <section className='dark-bg p-5'>
      <h1 className='mb-4'>Skills</h1>
      <div className='skills-container px-5'>
        {data.skills.map((skill, index) => (
          <div key={index} className="skill-item mx-4">
            <img className='mb-3' src={skill.image} alt={skill.name} height='40px' />
            <h4 className='my-1 gray'>{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>

    {/* experience */}
     <section className='row darker-bg p-5'>
        <h1 className='mb-4'>Experience</h1>
          <div className='row'>
            {data.experience.map((exp, index) => (
              <ExperienceCard exp={exp} key={index} />
            ))}
          </div>
      </section>

      {/* projects */}
      <section className='row dark-bg p-5'>
        <h1 className='mb-4'>Personal Projects</h1>
        <div className='row'>
          {data.projects.map((project, index) => (
            <ProjectCard onClick={handleButtonClick} project={project} />
          ))}
        </div>

        {showPopup && (
          <ProjectDetail onClose={handleClosePopup} />
        )}
      </section>

      {/* contact info */}
      <section className='darker-bg pt-5 px-5 pb-3'>
        <h2 className='mb-4'>Contact Me</h2>
        <h4 className='mb-3'>Email: <a className='text-decoration-none text-white' href={`mailto:${data.email}`}>{data.email}</a></h4>
        <h4 className='mb-3 text-white'>Phone: <a className='text-decoration-none text-white' href={`tel:${data.phone}`}>{data.phone}</a></h4>
        
        <div className='social-buttons pt-3 text-center'>
          <a href='https://linkedin.com/in/evansmith04/' target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
          </a>
          <a href='https://github.com/EvanSmith93' target='_blank' className='last-social-button'>
            <FontAwesomeIcon icon={faGithub} size='2x' />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
