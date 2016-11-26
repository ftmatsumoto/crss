import React, { Component } from 'react';
import { Authenticated } from 'react-stormpath';

import NavbarComponent from '../component/navbar';
import BottomNavigation from '../component/bottomnav';
import Home from './home';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      popoverOpen: false
    };
  }

  handleToggleDrawer(event) {
    event.preventDefault();
    this.setState({drawerOpen: !this.state.drawerOpen});
  }

  handleCloseDrawer() {
    this.setState({drawerOpen: false});
  }

  handleClosePopover() {
    this.setState({popoverOpen: false});
  }

  handleTouchPopover(event) {
    event.preventDefault();
    this.setState({
      popoverOpen: true,
      anchorEl: event.currentTarget,
    });
  }

  render() {
    return (
      <div>
        <div className="container-nav">
          <NavbarComponent
            drawerOpen={this.state.drawerOpen}
            popoverOpen={this.state.popoverOpen}
            handleToggleDrawer={this.handleToggleDrawer.bind(this)}
            handleCloseDrawer={this.handleCloseDrawer.bind(this)}
            handleClosePopover={this.handleClosePopover.bind(this)}
            handleTouchPopover={this.handleTouchPopover.bind(this)}
          />
        </div>
        <div className="container-body">
          {this.props.children || <Home />}
        </div>
        <div>
          <Authenticated>
            <BottomNavigation />
          </Authenticated>
        </div>
      </div>
    );
  }
}

export default App;
