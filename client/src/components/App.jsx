import React from 'react';
import ReactDOM from 'react-dom';

import FrontPage from './FrontPage.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div>
        <FrontPage />
      </div>
    )
  }
}

export default App;