import React from 'react';
import profilePicture from './assets/profile-picture.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faLinkedin,
    faTwitter,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons';
import data from './data.json';

const Home = () => {
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
              <a href='https://linkedin.com/in/evansmith04/' target='_blank' className='btn-primary'>
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
              src={profilePicture}
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
              <h3 className='mb-3'>{data.education.school}</h3>
              <h4>{data.education.degree} in {data.education.major}</h4>
              <p className='mx-0'>GPA: {data.education.gpa}</p>
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

    {/* experience */}
     <section className='row dark-bg p-5'>
        <h1 className='mb-4'>Experience</h1>
          <div className='row'>
            {data.experience.map((exp, index) => (
              <div className='col-md-6 mb-4' key={index}>
                <div className='card p-3 h-100'>
                  <h6 className='gray'><i>{exp.start} - {exp.end}</i></h6>
                  <h3>{exp.company}</h3>
                  <h4 className='highlight'>{exp.position}</h4>
                  <ul>
                    {exp.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
      </section>

      {/* projects */}
      <section className='row darker-bg p-5'>
        <h1 className='mb-4'>Projects</h1>
        <div className='row'>
          {data.projects.map((project, index) => (
            <div className='col-md-6 mb-4' key={index}>
              <div className='card p-3 h-100'>
                <h3 className=''>{project.name}</h3>
                <h6 className='highlight'>{project.description}</h6>
                <ul>
                  {project.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* contact info */}
      <section className='dark-bg pt-5 pb-3 px-5'>
        <h2 className='mb-4'>Contact Me</h2>
        <h4 className='mb-3'>Email: <a className='text-decoration-none text-white' href={`mailto:${data.email}`}>{data.email}</a></h4>
        <h4 className='mb-3 text-white'>Phone: <a className='text-decoration-none text-white' href={`tel:${data.phone}`}>{data.phone}</a></h4>
        
        <div className='social-buttons pt-3 text-center'>
          <a href='https://linkedin.com/in/evansmith04/' target='_blank' className='btn-primary'>
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
          </a>
          <a href='https://github.com/EvanSmith93' target='_blank' className=''>
            <FontAwesomeIcon icon={faGithub} size='2x' />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
