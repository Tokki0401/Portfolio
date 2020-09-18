import React from 'react';
import ReactDOM from 'react-dom';

import validator from 'email-validator';

import FrontPage from './FrontPage.jsx';
import AboutMe from './AboutMe.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: '',
      email: '',
      message: '',
      emailValidation: false
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.checkEmailValidation = this.checkEmailValidation.bind(this);
    this.enableSubmitButton = this.enableSubmitButton.bind(this);
  }

  componentDidMount() {
    this.enableSubmitButton();
  }

  onInputChange(e) {
    const isEmailValid = this.checkEmailValidation();

    this.setState({
      [e.name]: e.value,
      emailValidation: isEmailValid
    }, this.enableSubmitButton)

  }

  checkEmailValidation() {
    return validator.validate(this.state.email);
  }

  enableSubmitButton() {
    const { subject, email, message, emailValidation } = this.state;
    const submitButton = document.getElementById('submit-btn');

    if (subject && email && message && emailValidation) {
      submitButton.disabled = false;
      submitButton.style.cursor = "pointer";
    } else {
      submitButton.disabled = true;
      submitButton.style.cursor = "not-allowed";
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
        <Contact onInputChange={this.onInputChange} sendEmail={this.sendEmail}/>
        <Footer />
      </div>
    )
  }
}

export default App;