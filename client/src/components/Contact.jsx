import React from 'react';

const Contact = (props) => {
  return (
    <section className='contact'>
      <div className='title'>Contact</div>
      <div className='contact-container'>

        <div>
          <div id='email'>Email</div>
          <div>
            <input className='input-field' type='text' name='email' required onChange={(e) => props.onInputChange(e.target)}></input>
          </div>
        </div>

        <div>
          <div id='subject'>Subject</div>
          <div>
            <input className='input-field' type='text' name='subject' required onChange={(e) => props.onInputChange(e.target)}></input>
          </div>
        </div>

        <div>
          <div id='message'>Message</div>
          <div>
            <textarea id='textarea' className='input-field' type='text' name='message' rows='10' cols='60' required onChange={(e) => props.onInputChange(e.target)}></textarea>
          </div>
        </div>

        <div>
          <button id='submit-btn' className='btn' type='button' onClick={() => props.sendEmail()} >Submit</button>
        </div>
      </div>
    </section>
  )
}

export default Contact;