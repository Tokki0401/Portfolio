import React from 'react';
import ReactDOM from 'react-dom';

import FrontPage from './FrontPage.jsx';
import AboutMe from './AboutMe.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div>
        <FrontPage />
        <AboutMe />
      </div>
    )
  }
}

export default App;