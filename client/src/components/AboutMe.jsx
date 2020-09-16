import React from 'react';

import Profile from '../utils/profile.jpg';

const AboutMe = (props) => {

  return (
    <section className='about-me'>
      <div className='title'>About Me</div>
      <div className='about-me-container'>
        <div className='picture'>
          <img src={Profile} alt='Profile Picture' />
        </div>
        <div className='detail'>
          <p>I'm a software engineer currently living in Irvine, CA and looking for my next role.</p>
          <p>I have experience in cutting-edge frameworks and technologies such as React and Node. I'm always open to take on challenges and learn new technologies. </p>
          <p>When I'm not coding, I enjoy playing video games and watching K-drama!
          </p>
        </div>
      </div>
    </section>
  )
}


export default AboutMe;