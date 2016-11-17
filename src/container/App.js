import React, { Component } from 'react';
import { Authenticated } from 'react-stormpath';

import NavbarComponent from '../component/navbar';
import SidebarComponent from '../component/sidebar';
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
          {/*<Authenticated><SidebarComponent/></Authenticated>*/}
          {this.props.children || <Home/>}
        </div>
      </div>
    );
  }
}

export default App;
