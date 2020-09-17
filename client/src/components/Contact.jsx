import React from 'react';

const Contact = (props) => {
  return (
    <section className='contact'>
      <div className='title'>Contact</div>
      <div>
        <div>
          <label>Name</label>

          <input type='text' name='name' required onChange={(e) => this.props.onInputChange(e)}></input>

        </div>
        <div>
          <label>Email</label>
          <span>
            <input type='text' name='email' required onChange={(e) => this.props.onInputChange(e)}></input>
          </span>
        </div>
        <div>
          <label>Message</label>
          <span>
            <textarea type='text' name='message' required onChange={(e) => this.props.onInputChange(e)}></textarea>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Contact;