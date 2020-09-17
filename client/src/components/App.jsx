import React from 'react';
import ReactDOM from 'react-dom';

import FrontPage from './FrontPage.jsx';
import AboutMe from './AboutMe.jsx';
import Contact from './Contact.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    console.log(e);
  }

  render() {
    return (
      <div>
        <FrontPage />
        <AboutMe />
        <Contact onInputChange={this.onInputChange} />
      </div>
    )
  }
}

export default App;