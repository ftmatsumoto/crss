import React, { Component } from 'react';

import NavbarComponent from '../component/navbar';
import Home from './home';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container-nav">
          <NavbarComponent/>
        </div>
        <div className="container-body">
          {this.props.children || <Home/>}
        </div>
      </div>
    );
  }
}

export default App;
