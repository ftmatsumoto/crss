import React, { Component } from 'react';

import NavbarComponent from '../component/navbar';
import Home from './home';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavbarComponent/>
        {this.props.children || <Home/>}
      </div>
    );
  }
}

export default App;
