import React from 'react';
import ReactDOM from 'react-dom';

import validator from 'email-validator';

import FrontPage from './FrontPage.jsx';
import AboutMe from './AboutMe.jsx';
import Contact from './Contact.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: '',
      email: '',
      message: '',
      emailValidation: false,
      submitAllowed: false
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.checkEmailValidation = this.checkEmailValidation.bind(this);
    this.checkSubmitValidation = this.checkSubmitValidation.bind(this);
    this.enableSubmitButton = this.enableSubmitButton.bind(this);
  }

  onInputChange(e) {
    const isEmailValid = this.checkEmailValidation();
    const isSubmitAllowed = this.checkSubmitValidation();

    this.setState({
      [e.name]: e.value
    })

  }

  checkEmailValidation() {
    return validator.validate(this.state.email);
  }

  checkSubmitValidation() {
    const { subject, email, message, emailValidation } = this.state;

    return subject && email && message && emailValidation ? true : false;
  }

  enableSubmitButton() {
    if (this.state.submitAllowed) {
      document.getElementById('submit-btn').disabled = false;
    } else {
      document.getElementById('submit-btn').disabled = true;
    }
  }

  sendEmail() {
    console.log('working')
  }

  render() {
    return (
      <div>
        <FrontPage />
        <AboutMe />
        <Contact onInputChange={this.onInputChange} sendEmail={this.sendEmail} submitAllowed={this.state.submitAllowed}/>
      </div>
    )
  }
}

export default App;