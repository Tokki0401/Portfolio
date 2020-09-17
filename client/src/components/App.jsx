import React from 'react';
import ReactDOM from 'react-dom';

import FrontPage from './FrontPage.jsx';
import AboutMe from './AboutMe.jsx';
import Contact from './Contact.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: '',
      email: '',
      message: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  onInputChange(e) {
    this.setState({
      [e.name]: e.value
    })
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