import React from 'react';
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

const Footer = (props) => {
  return (
    <section className='footer'>
      <div className='footer-container'>
        <div className='back-to-top'>
          <a className='anchor' href='#'>Back To Top</a>
        </div>
        <div className='icons-container'>
          <span className='icons-list'>
            <a href='https://www.linkedin.com/in/gyuhunlee/' target='_blank'><FaLinkedin className='icons'/></a>
            <a href='https://github.com/gyuhunlee' target='_blank'><FaGithub className='icons'/></a>
            <a href='https://docs.google.com/document/d/1FgjX-gUxEFi9N65r08oES7w3H9PxuR97dlv8f9cuGOI/edit?usp=sharing' target='_blank'><FaFileDownload className='icons'/></a>
          </span>
        </div>
      </div>
      <p> &copy; 2020 Copyright - Gyuhun Lee</p>
    </section>
  )
}

export default Footer;