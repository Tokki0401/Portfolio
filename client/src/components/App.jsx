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

    if (subject && email && message && emailValidation) {
      document.getElementById('submit-btn').disabled = false;
      document.getElementById('submit-btn').style.cursor = "pointer";
    } else {
      document.getElementById('submit-btn').disabled = true;
      document.getElementById('submit-btn').style.cursor = "not-allowed";
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
      </div>
    )
  }
}

export default App;