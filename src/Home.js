import React from 'react';
import Header from './sections/Header';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const Home = () => {
  const handleScroll = (event) => {
        
        // get every single card class element
        const cards = document.getElementsByClassName('card');

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const cardYPosition = card.getBoundingClientRect().top + card.getBoundingClientRect().height / 2;
            const relativeYPosition = (cardYPosition - window.innerHeight / 2) / (window.innerHeight / 2);
            
            card.style.transition = 'transform 250ms';
            card.style.transitionTimingFunction = 'ease-in';

            if (relativeYPosition > 0.7) {
                card.style.transform = `rotateX(90deg) rotateY(-15deg) rotateZ(-15deg)`;
            } else {
                card.style.transform = `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
            }
        }
    };

  return (
    <div className='text-white' onWheel={handleScroll}>
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
