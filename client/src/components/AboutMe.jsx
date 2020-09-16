import React from 'react';

import Profile from '../utils/profile.jpg';

const AboutMe = (props) => {

  return (
    <section className='about-me'>
      <div className='container'>
        <div>
          <img src={Profile} alt="Profile Picture" />
        </div>
        <div>
          <p>Hi</p>
        </div>
      </div>
    </section>
  )
}


export default AboutMe;